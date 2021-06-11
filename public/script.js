//jshint esversion:6

const heading = [
    'Ek Bharat Shrestha Bharat Campaign',
    'Heal App'
];

const subHeading = [
    'First Report of EBSB Club of Guru Gobind Singh Indraprastha University',
    'An app developed to boost your immunity'
];

const author = [
    'GGSIPU',
    'Himesh Nayak'
];

const authorImage = [
    'images/ipuLogo.png',
    'images/healLogo.png'
];

const date = [
    'February 22, 2020',
    'October 04, 2020'
];

const image = [
    'images/cllgView.jpg',
    'images/healBanner.png'
];

const links = [
    'images/EBSB_REPORT.pdf',
    'single.html'
];

const content = [
    'The first EBSB day was observed on 14th February, 2020. The member students gathered near the central library area of the University and invoked Goddess of wisdom. Thereafter, they came to the Flag hosting area and paid homeage to the Pulwama Martyrs. The programme of the day started by taking pledge about the fundamental duties of citizens followed by recital of its \'Mission\'.',
    'Heal app is a personal guide to holistic health and happiness. It can help you to focus on your Physical health and mental health and also aid you to improve your immunity.'
];

const completeContent = [
    '',
    'Heal app is a personal guide to holistic health and happiness. It can help you to focus on your Physical health and mental health and also aid you to improve your immunity.\
    The app targets mainly five areas which are Physical fitness, Mental fitness, Nutrition, Sleep Cycle and Hygiene. The app provides you with a self check so that you can monitor yourself and know about your strengths and weaknesses to further improve your health. We also provide you with useful information that could really turn your life towards betterment.\
    Designed with user friendly and hassle-free user interface, the app helps you to HEAL yourself.\
    So what does the HEAL App do?\
    - Questionnaire that helps you get a self check\
    - You get to know about the different aspect of you\
    - There is ample Information about your Physical health, Mental health and guidance to improve it\
    - Calm your mind with the soothing meditation tracks in the app.\
    - An amazing feature of Yoga Nidra; one of the best tracks that will make you sleep like a baby if you follow it before going to bed\
    - Set alarms with your own motivation mantra and stay energetic\
    - A section is devoted to physical health, where you learn about different yoga asanas'
];

var posts = document.getElementById("posts");
for(var i=0; i < heading.length; i++){
let item = heading.length - i - 1;
posts.innerHTML += '<article class="post">\
<header>\
    <div class="title">\
        <h2><a href="'+ links[item] +'">'+ heading[item] + '</a></h2>\
        <p>'+ subHeading[item] +'</p>\
    </div>\
    <div class="meta">\
        <time class="published">'+ date[item] +'</time>\
        <a href="#" class="author"><span class="name">'+ author[item] +'</span><img src="'+ authorImage[item] +'" alt="" /></a>\
    </div>\
</header>\
<a href="'+ links[item] +'" class="image featured"><img src="'+ image[item] +'" alt="" /></a>\
<p>'+ content[item] +'</p>\
<footer>\
    <ul class="actions">\
        <li><a href="'+ links[item] +'" class="button large">Continue Reading</a></li>\
    </ul>\
    <!-- <ul class="stats">\
        <li><a href="#">General</a></li>\
        <li><a href="#" class="icon solid fa-heart">28</a></li>\
        <li><a href="#" class="icon solid fa-comment">128</a></li>\
    </ul> -->\
</footer>\
</article>';
}

var miniPosts = document.getElementById("miniPosts");
for(var i=0; i < heading.length; i++){
let item = heading.length - i - 1;
miniPosts.innerHTML += '<article class="mini-post">\
<header>\
    <h3><a href="'+links[item]+'">'+ heading[item] +'</a></h3>\
    <time class="published">'+ date[item] +'</time>\
    <a href="#" class="author"><img src="'+authorImage[item]+'" alt="" /></a>\
</header>\
<a href="'+links[item]+'" class="image"><img src="'+image[item]+'" alt="" /></a>\
</article>';
}

var postsNoImage = document.getElementById("postsNoImage");
for(var i=0; i < heading.length; i++){
let item = heading.length - i - 1;
postsNoImage.innerHTML += '<li>\
        <article>\
            <header>\
                <h3><a href="'+links[item]+'">'+ heading[item] +'</a></h3>\
                <time class="published">'+ date[item] +'</time>\
            </header>\
            <a href="'+links[item]+'" class="image"><img src="'+ authorImage[item] +'" alt="" /></a>\
        </article>\
    </li>';
}
