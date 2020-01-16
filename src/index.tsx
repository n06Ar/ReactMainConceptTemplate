import * as React from 'react';
import * as ReactDOM from 'react-dom';

// page-1
// Hello World
ReactDOM.render(
    // クォートはなしで良き
    <h2>Hello world!</h2>,
    document.getElementById('page-1')
);

// Page 2 1 1
const name = 'Nana Chang';
// ↓ JSXです。 JSXに式を埋め込む。
// {}を使うと変数を埋め込める
const page21Element = <h2>Hello, {name}</h2>;
ReactDOM.render(
    page21Element,
    document.getElementById('page-2-1-1')
);

// Page 2 1 2
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName:'Nana',
    lastName: 'AR',
    avatarUrl: './img/cat.jpg',
};

// ()を使えば複数行の表現もできます
// {}には関数も入れられます
const page212Element = (
    <h2>
        Hello, {formatName(user)}!
    </h2>
);

ReactDOM.render(
    page212Element,
    document.getElementById('page-2-1-2')
);

// Page 2 2
// JSX もまた式である
// if文やforも使えるよ
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
    getGreeting(user),
    document.getElementById('page-2-2')
);

// page 2 3
// JSX で属性を指定する
// JSX では、属性をcamel caseで表現すること
let page231Element = <div tabIndex={0} />;

ReactDOM.render(
    page231Element,
    document.getElementById('page-2-3-1')
);

// 属性に JavaScript 式を埋め込むために中括弧も使える
let page232Element = <img width={100} src={user.avatarUrl}></img>;

ReactDOM.render(
    page232Element,
    document.getElementById('page-2-3-2')
);

// Page 2 4
// JSX で子要素を指定する

// タグが空の場合、XML のように />でタグを閉じられる
const page241Element = <img width={100} src={user.avatarUrl} />;

ReactDOM.render(
    page241Element,
    document.getElementById('page-2-4-1')
);

// JSX のタグは子要素を持てるよ
const page242Element = (
    <div>
        <h2>Hello {name}!</h2>
        <h3>Nice to see you here.</h3>
    </div>
);

ReactDOM.render(
    page242Element,
    document.getElementById('page-2-4-2')
);

// Page 2 5
// 擬似的にresponseを作成
const response = {
    titleText: 'JSX はインジェクション攻撃を防ぐ'
};

// JSX はインジェクション攻撃を防ぐ
// JSX にユーザの入力を埋め混むのは問題ないらしいですよ
// デフォルトだと、React DOM は JSX に埋め込まれた値をレンダリングされる前にエスケープするので問題ないっす
// xss 対策になるよ
const title = response.titleText;
const page25Element = <h2>{title}</h2>;
ReactDOM.render(
    page25Element,
    document.getElementById('page-2-5')
);

// Page 2 6
// JSX はオブジェクトの表現である

// したの二つは同じもの
const page261Element = (
    <h2 className="greeting">
        Hello, world!
    </h2>
);

ReactDOM.render(
    page261Element,
    document.getElementById('page-2-6-1')
);

const page262Element = React.createElement(
    'h2',
    {className: 'greeting'},
    'Hello, world!'
);

ReactDOM.render(
    page262Element,
    document.getElementById('page-2-6-2')
);

// React.createElement() はバグの混入を防止のためチェックをしてくれる
// ちなみに生成されるオブジェクトは下のが出てくるよ

// オブジェクトは “React 要素” って呼ぶよ
const page263ElementElement = {
    type: 'h2',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};

// Page 3
// 要素のレンダー
// 要素とは React アプリケーションの最小単位の構成ブロックのこと
// React 要素はプレーンなオブジェクト
// React DOM が React 要素に合致するように DOM を更新する作業をしているらしいよ

// Page 3-1
// レンダリングされた要素の更新

// React 要素はイミュータブルで、一度作成されると変更されないよ
function tick() {
    const element = (
        <div>
            <h2>Hello, world!</h2>
            <h3>It is {new Date().toLocaleTimeString()}.</h3>
        </div>
    );
    ReactDOM.render(element, document.getElementById('page-3-1'));
}
// 新しい要素を作成して ReactDOM.render() に渡せば更新される
// なので、setIntervalで設定する
setInterval(tick, 1000);
// developer toolを見るとわかるけど必要なところ以外作っていない

// Page 4
// コンポーネントと props

// Page 4-1
// コンポーネントを定義する最もシンプルな方法は関数で書くこと
function welcome(props) {
    return <h1>Hello, {props.firstName}</h1>;
}
ReactDOM.render(welcome(user), document.getElementById('page-4-1'));

// Page4-1-1
// クラスを使って解決することもできる
class WelcomeClass extends React.Component {
    props = {
        name: 'Nana'
    };

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// Page 4-2
// コンポーネントのレンダー
// React 要素はユーザ定義のコンポーネントも表せるよ
const page42Element = <WelcomeCat name="Happy" />;

function WelcomeCat(props) {
    return <h2>Hello, {props.name}</h2>;
}

ReactDOM.render(
    page42Element,
    document.getElementById('page-4-2')
);

//　起きていること
/*
    1.<WelcomeCat name="Happy"/> を引数にして ReactDOM.render() を呼ぶ
    2.React は WelcomeCat コンポーネントを呼んで、そのときに props として {name: 'Happy'} を渡す
    3.WelcomeCat コンポーネントは出力として <h2>Hello, Happy</h2> 要素を返す
    3.React DOM は <h2>Hello, Happy</h2> になるようにDomを更新するよ
 */

// Page 4-3
// コンポーネントを組み合わせる

// 下記のように、
function CatApp() {
    return (
        <div>
            <WelcomeCat name="Nana" />
            <WelcomeCat name="Happy" />
            <WelcomeCat name="ChiChi" />
        </div>
    );
}

ReactDOM.render(
    <CatApp />,
    document.getElementById('page-4-3')
);

