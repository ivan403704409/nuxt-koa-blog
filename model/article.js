import axios from 'axios'


export function getArticleList(){
	return new Promise((resolve, reject) => {
		axios({
			url: '/api/article/list',
			method: 'GET',
		})
		.then(({data}) => {
			resolve(data)
		})
	})
}


export function addArticle(reqData){
	return new Promise((resolve, reject) => {
		axios({
			url: '/api/article/add',
			method: 'POST',
			headers: {
	          'Content-Type': 'application/json',
	        },
			data: reqData
		})
		.then(({data}) => {
			resolve(data)
		})
		.catch(() => {
			
		})
	})
}