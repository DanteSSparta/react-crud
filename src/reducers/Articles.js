export default (state = false, action) => {
	const { type, payload } = action;

	switch (type) {
		case ArticlesType.GET_RECENT_AND_MOSTREADED_ATTEMPT:
			return state;

		case ArticlesType.GET_RECENT_AND_MOSTREADED_SUCCESS:
			return { ...state,
				recentArticles : payload.recent,
				// isLoadingRecent : true,
			};

		case ArticlesType.GET_ALL_ARTICLES_ATTEMPT:
			return { ...state, filters : payload };

		case ArticlesType.GET_ALL_ARTICLES_SUCCESS:
			return { ...state,
				// isLoadingBlog : true,
				allArticles : payload.articles,
				filters : payload.filters,
				// isLoadingRecent : true
			};

		case ArticlesType.SF_GET_SINGLE_ARTICLE_ATTEMPT:
			return state;

		case ArticlesType.SF_GET_SINGLE_ARTICLE_SUCCESS:
			return state;

		case ArticlesType.INITIALIZE:
			return { ...state,
				// isLoadingRecent : Object.keys(payload.articles.recent).length ? true : false,
				// isLoadingArticle : Object.keys(payload.blog.single_article).length ? true : false,
				// isLoadingBlog : Object.keys(payload.articles.all).length ? true : false,
				recentArticles: payload.articles.recent,
				allArticles: payload.articles.all,
				article : payload.blog.single_article,
				filters : payload.articles.filters
			};

		default:
			return state;
	}
};
