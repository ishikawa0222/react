//いちいち更新しなくても自動で変わるのでストレスフリーな開発が出来る
//フロントエンド
//コンポーネント(クラス)の作成
//snippetでrccと入力すると簡単に入力できる

import React, { Component } from 'react'

//exportしないと外部から使えない(reactの機能を使えるようにする)
export default class Message extends Component {
    message = 'デフォルト';
    
    constructor(props){
        super(props);
        this.message = props.message;
        if(props.message) this.message = props.message;
    }
  render() {
    return (
      <div>{this.message}</div>
    )
  }
}
