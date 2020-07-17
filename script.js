//jshint esversion:6

const heading = [
    'Ek Bharat Shrestha Bharat Campaign',
];

const subHeading = [
    'First Report of EBSB Club of Guru Gobind Singh Indraprastha Univeersity',
];

const author = [
    'GGSIPU',
];

const authorImage = [
    'images/ipuLogo.png',
];

const date = [
    'February 22, 2020',
];

const image = [
    'images/cllgView.jpg',
];

const content = [
    'The first EBSB day was observed on 14th February, 2020. The member students gathered near the central library area of the University and invoked Goddess of wisdom. Thereafter, they came to the Flag hosting area and paid homeage to the Pulwama Martyrs. The programme of the day started by taking pledge about the fundamental duties of citizens followed by recital of its \'Mission\'.',
];

const completeContent = [

];

var posts = document.getElementById("posts");
for(var i=0; i < heading.length; i++){

posts.innerHTML += '<article class="post">\
<header>\
    <div class="title">\
        <h2><a href="images/EBSB_REPORT.pdf">'+ heading[i] + '</a></h2>\
        <p>'+ subHeading[i] +'</p>\
    </div>\
    <div class="meta">\
        <time class="published">'+ date[i] +'</time>\
        <a href="#" class="author"><span class="name">'+ author[i] +'</span><img src="'+ authorImage[i] +'" alt="" /></a>\
    </div>\
</header>\
<a href="images/EBSB_REPORT.pdf" class="image featured"><img src="'+ image[i] +'" alt="" /></a>\
<p>'+ content[i] +'</p>\
<footer>\
    <ul class="actions">\
        <li><a href="images/EBSB_REPORT.pdf" class="button large">Continue Reading</a></li>\
    </ul>\
    <ul class="stats">\
        <li><a href="#">General</a></li>\
        <li><a href="#" class="icon solid fa-heart">28</a></li>\
        <li><a href="#" class="icon solid fa-comment">128</a></li>\
    </ul>\
</footer>\
</article>';
}

var miniPosts = document.getElementById("miniPosts");
for(var i=0; i < heading.length; i++){

miniPosts.innerHTML += '<article class="mini-post">\
<header>\
    <h3><a href="images/EBSB_REPORT.pdf">'+ heading[i] +'</a></h3>\
    <time class="published">'+ date[i] +'</time>\
    <a href="#" class="author"><img src="'+authorImage[i]+'" alt="" /></a>\
</header>\
<a href="images/EBSB_REPORT.pdf" class="image"><img src="'+image[i]+'" alt="" /></a>\
</article>';
}

var postsNoImage = document.getElementById("postsNoImage");
for(var i=0; i < heading.length; i++){

postsNoImage.innerHTML += '<li>\
        <article>\
            <header>\
                <h3><a href="images/EBSB_REPORT.pdf">'+ heading[i] +'</a></h3>\
                <time class="published">'+ date[i] +'</time>\
            </header>\
            <a href="images/EBSB_REPORT.pdf" class="image"><img src="'+ authorImage[i] +'" alt="" /></a>\
        </article>\
    </li>';
}
