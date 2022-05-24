from .models import Taste
from movies.models import Genre
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from django_pandas.io import read_frame


def recommend():
    genres = Genre.objects.all()  # 모델에서 모든 장르 가져오기
    df = read_frame(genres)  # pandas: Read SQL query or database table into a DataFrame
    t_list = []
    for genre in genres:
        g_t =[]
        tastes = genre.tastes.all()
        for taste in tastes:
            g_t.append(taste.taste_name)
        t_list+=[g_t]  
    t_list = [[" ".join(x)] for x in t_list]  # 장르 공백 기준으로 구별하기 [['a b'], ['b c'], ['a b']]

    gdf = pd.DataFrame({'t_list':t_list})   # 't_list' 행에 t_list(데이터) 열 들어가기
    genre_data = pd.concat([df, gdf], axis=1)  # axis: 0 위아래로 합치기 1: 왼쪽오른쪽 합치기
    genre_data['t_list'] = genre_data['t_list'].apply(lambda x: " ".join(x))  # 괄호 없애기
    count_vector = CountVectorizer(ngram_range=(1,3))  # 각 장르별 문자열 값을 숫자로 벡터화
    c_vector_taste = count_vector.fit_transform(genre_data['t_list'])
    taste_c_sim = cosine_similarity(c_vector_taste, c_vector_taste).argsort()[:,::-1]  # 2차원 배열 뒤집기
 

    def get_recommend_genre(df, genre_name, top=5):
        # df[df['name'] == genre_name] => 18  10770  TV 영화  fresh oily umami sweet
        target_genre_index = df[df['name'] == genre_name].index.values  # 18
        # cosine similarity 중 해당 값과 비슷한 cosine similarity 20개를 구함
        sim_index = taste_c_sim[target_genre_index, : top].reshape(-1) 
        # 이름이 같은 장르는 제외
        sim_index = sim_index[sim_index != target_genre_index]

        result = df.iloc[sim_index]
        print(result)
        result = result[['id', 'name']]
        return result


    for genre in genres:
        name = genre.name
        try:
            rc_mv = get_recommend_genre(genre_data, name)
            # print(f'genre: {genre} | {rc_mv}')
            # for movie_id in rc_mv['id']:
            #     m = Movie.objects.get(pk=movie_id)
            #     movie.recommend_movies.add(m)
        except ValueError:
            continue
