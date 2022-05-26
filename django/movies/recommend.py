from .models import Movie, Genre
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from django_pandas.io import read_frame


def recommend():
    movies = Movie.objects.all()  # 모델에서 모든 영화 가져오기
    df = read_frame(movies)  # pandas: Read SQL query or database table into a DataFrame
    g_list = []
    for movie in movies:
        m_g =[]
        genres = movie.genres.all()
        for genre in genres:
            m_g.append(genre.name)
        g_list+=[m_g]  
    g_list = [[" ".join(x)] for x in g_list]  # 장르 공백 기준으로 구별하기 [['a b'], ['b c'], ['a b']]

    gdf = pd.DataFrame({'g_list':g_list})   # 'genre_list' 행에 genre_list(데이터) 열 들어가기
    movie_data = pd.concat([df, gdf], axis=1)  # axis: 0 위아래로 합치기 1: 왼쪽오른쪽 합치기
    movie_data['g_list'] = movie_data['g_list'].apply(lambda x: " ".join(x))  # 괄호 없애기
    count_vector = CountVectorizer(ngram_range=(1,3))  # 각 장르별 문자열 값을 숫자로 벡터화
    c_vector_genre = count_vector.fit_transform(movie_data['g_list'])
    genre_c_sim = cosine_similarity(c_vector_genre, c_vector_genre).argsort()[:,::-1]  # 2차원 뒤집기

    def get_recommend_movie(df, movie_title, top=10):
        target_movie_index = df[df['title'] == movie_title].index.values
        # cosine similarity 중 해당 값과 비슷한 cosine similarity 20개를 구함
        sim_index = genre_c_sim[target_movie_index, : top].reshape(-1)
        # 이름이 같은 영화는 제외
        sim_index = sim_index[sim_index != target_movie_index]

        result = df.iloc[sim_index][:10]
        result = result[['id', 'title']]
        return result
    for movie in movies:
        title = movie.title
        try:
            rc_mv = get_recommend_movie(movie_data, title)
            for movie_id in rc_mv['id']:
                m = Movie.objects.get(pk=movie_id)
                movie.recommend_movies.add(m)
        except ValueError:
            continue
