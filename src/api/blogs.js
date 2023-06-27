// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/blog-single/img-1.jpg";
import blogSingleImg2 from "../images/blog/blog-single/img-2.jpg";
import blogSingleImg3 from "../images/blog/blog-single/img-3.jpg";



const blogs = [
    {
        id: '1',
        title: 'We’re the people who don’t just support progressive change.',
        slug:'support-progressive-change',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Anne William',
        authorTitle:'Sineor Consultant',
        create_at: '25 Sep 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Politics is why we can’t have nice things. Like the internet.',
        slug:'Like-the-internet',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Robert Fox',
        authorTitle:'Creative Director',
        create_at: '26 Sep 2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Liberty Divided Over Criticism Justice League',
        slug:'Criticism-Justice',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Devon Lane',
        authorTitle:'Art Director',
        create_at: '28 Sep 2023',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;