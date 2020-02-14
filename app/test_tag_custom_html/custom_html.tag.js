import Tag from "../../core/tags/tag_classes";

const tag = new Tag('custom html');

tag.html = '<script>{ alert("This a Custom HTML tag."); }</script>';

export default tag;