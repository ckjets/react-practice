import { Component } from "react";
import MyArticle from "./MyArticle";

export default class LoopParent extends Component {
     articles = [
        {
            url:"https://www.atmarkit.co.jp/ait/series/9383/",
            title: "hoge",
            description: "testtesttsetsets",
        },
        {
            url:"https://www.atmarkit.co.jp/ait/series/9383/",
            title: "fuga",
            description: "fugafugafuga",
        },
        {
            url:"https://www.atmarkit.co.jp/ait/series/9383/",
            title: "hogehogehoge",
            description: "test3",
        }
    ]

    render() {
        // keyは必要(vueと一緒)
        // keyがないと、追跡ができない（追加・更新・削除ができない）
        return (
            <dl>
                {this.articles.map((article,index) => <MyArticle {...article} key={index}></MyArticle>)}
            </dl>
        ); 
    }

}