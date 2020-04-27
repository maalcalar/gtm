import Tag from "../../common/tag.class";

const tag = new Tag('custom html');

tag.html = '<style>body { background-color: #AF0; }</style>\
            <script>if(document.body) { alert("This a Custom HTML tag."); }</script>';

export default tag;