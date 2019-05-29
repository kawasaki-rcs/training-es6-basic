import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor (props) {
    super(props);
    this.state = {
      tmp: "",
      text: "",
    };
  }

  // ここに JavaScript の関数を追記していく

  /* // アロー関数を使わない
  handleChange (event) {
    console.log(this)
    this.setState({ tmp: event.target.value, });
  }
  */

  // スプレッドオペレータを使わない
  //handleChange = e => this.setState({ tmp: e.target.value, });
  //handleChange = ({ target: { value } }) => this.setState({ tmp: value, });

  //handleChange = e => this.setState({ tmp: e.target.value });


  // アロー関数と省略形
  /*
  echoText = function (text) {
    return text + text;
  }
  */
  //echoText = text => text + text

  // テンプレートリテラル（バッククォート記法）
  echoText = text => `「${text}」 「${text}」`

  // 分割代入（チャットのような台本形式にしてみる）
  commentText = ({ user, message }) => `${user}「${message}」`

  // イテレータ（配列の繰返し、はじめは <div>なしでどこに入れるか考えてもらう）
  mapList = comment => comment.map( c => <li>{this.commentText(c)}</li> );
  reduceList = comment => comment.reduce( (pre, cur) => pre + `「${cur.message}」` , "");
  findList = (comment, user) => comment.find( c => user === c.user );

  handleSubmit = e => {
    const { text, tmp } = this.state;
    this.setState({
      text: text + ' ' + tmp,
      tmp: "",
    });
  }

  render () {
    const { text, tmp } = this.state;

    // ここに JavaScript の手続きを追記していく
    let helloWorld = "Hello World!!";
    //let helloWorld = this.echoText("Hello World!!");

    /* // コメント１件
    let comment = {
      user: "kawasaki",
      message: "hogehoge",
    };
    */

    // コメント複数件
    let comment = [
      { user: "kawasaki", message: "こんにちは" },
      { user: "yamashita", message: "こんばんは" },
      { user: "nakayama", message: "おはようございます" },
    ];

    // find 用
    let target = "kawasaki";
    let targetComment = this.findList(comment, target);
    
    return (
      <div className="App">
        {helloWorld}
        <ul>{this.mapList(comment)}</ul>
        <h1>{`${target} のコメント：`} {targetComment ? targetComment.message : null}</h1>
        {`全員 のコメント： ${this.reduceList(comment)}`} 
        <div>
          <input type="text" value={tmp} onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit} >送信</button>
        </div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
