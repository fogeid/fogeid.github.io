// $('nav a').click(function(e){
// 	e.preventDefault();
// 	var id = $(this).attr('href'),
// 			menuHeight = $('nav').innerHeight(),
// 			targetOffset = $(id).offset().top;
// 	$('html, body').animate({
// 		scrollTop: targetOffset - 140
// 	}, 500);
// });

let profile = new Vue({
	el: '#profile',
	data: {
		name: 'Diego Batista',
		course: 'Computer Science',
		university: 'Universidade Federal do Mato Grosso',
		linkUniversity: 'https://www.ufmt.br/ufmt/site/',
		work: 'Estuda.com',
		linkWork: 'https://estuda.com/',		
		img: 'img/photo.jpg',
	}
});

let midia = new Vue({
	el: '#midia',
	data: {
		github: 'Github',
		linkGithub: 'https://github.com/fogeid',
		linkedin: 'Linkedin',
		linkLinkedin: 'https://www.linkedin.com/in/dbatista/',
	},
});