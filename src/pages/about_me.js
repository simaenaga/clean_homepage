import React from "react"
import { 
	graphql
} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import myImg from "../../content/assets/profile.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faPaw,
	faCat
} from "@fortawesome/free-solid-svg-icons"

function ActivityTag({ children, description }) {

	let flag = true

	// マウスオーバー時に活動タグの詳細を表示
	function handleMouseOver(e) {
		e.preventDefault()
		
		if (flag) {

			let target = e.currentTarget.lastChild
			let style = target.style
			if (!style) { return } else {

				style.display = "block"
				
				let top = (window.pageYOffset || document.documentElement.scrollTop) + e.clientY

				style.top = top + "px"
				style.left = e.clientX + "px"
				
				flag = !flag

			}
			
		}
	}
	function handleMouseOut(e) {
		e.preventDefault()
		let style = e.currentTarget.lastChild.style
		if (!style) { return } else {
			style.display = "none"
			flag = true
		}
	}

	return (
		<div
			style={{
				border: "solid 2px #3A5CD4",
				borderRadius: "20px",
				color: "#3A5CD4",
				padding: "4px 8px",
				fontSize: "14px",
				margin: "8px",
				display: "inline-block",
				cursor: "default"
			}}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onFocus={handleMouseOver}
			onBlur={handleMouseOut}
			role="button"
			tabIndex={0}
		>
			{children}
			<div className="action_description">{description}</div>
		</div>
	)

}

// トップページ表示用コンポーネント
export function EasyAboutMe({ data }) {

	return (
		<div>
			<header
				style={{position: `relative`}}
			>
				<h1
					style={{
						marginBottom: rhythm(1 / 2),
						textAlign: "center",
						backgroundColor: "#3a5ce4",
						borderRadius: "10px",
						padding: "8px",
						color: "#d6dbec",
						height: "80px"
					}}
					className="en"
				>
					<div
						style={{
							boxShadow: `none`,
							color: `inherit`,
							textDecoration: `none`,
							margin: "18px 0"
						}}
					>
						<FontAwesomeIcon
							style={{ marginRight: "5px" }}
							icon={faPaw} />
						About me
						<FontAwesomeIcon
							style={{ marginLeft: "5px" }}
							icon={faPaw} />
					</div>
					
				</h1>
				
			</header>

			<section className="flex_content">
				<div className="myImg">
					<span style={{ width: "100%", display: "inline-block", textAlign: "center" }}>
						<span style={{ fontSize: "14px" }}>
                      		大阪工業大学 情報科学部 情報システム学科<br />
                            3回生（4回生を休学中）<br />
						</span>
						<h2 style={{ fontSize: "18px", marginTop: "12px" }}>谷口 民恵</h2>
					</span>

					<img src={myImg} alt="自己イメージ画像　谷口民恵" className="my_image" />

					<div className="Q_and_A">
						<h3 className="Q_and_A_title">Q&amp;A</h3>

						<ul>

							<li>
								Q:趣味は？<br />
								<span
									style={{ fontSize: "16px", opacity: `.8` }}
								>
									A:大きく分けると４つある。<br />
									①メディア鑑賞：深い情緒やバリエーションに触れることが好き。物語なら、ヒューマンドラマが好き。
									②自己表現：個性のバリエーションを愛している。たとえばカラオケで、歌い方を真似したり感情を込めたりするのが楽しい。
									③自己分析：自分を知リ深めることにとても興味を覚える。例えば、人との会話で他者との認識の違いを把握することが好き。
			 						④自分磨き：有意義な人生にしたいという思いが強く、コミュニケーションのとり方や、人生の楽しみ方について
									計画を立てて、コツコツ技術を身に着けていくことが楽しい。
								</span>
							</li>
							<li>
								Q:働く軸は？<br />
								<span
									style={{ fontSize: "16px", opacity: `.8` }}
								>
									A:「前提を疑い、新しいメソッドを積極的に取り入れて、学習・成長をする」環境で働きたい。ベンチャー向きなのかもしれない。
								</span>
							</li>
							<li>
								Q:どんな性格か？<br />
								<span
									style={{ fontSize: "16px", opacity: `.8` }}
								>
									A:不思議ちゃん・変わっている・面白い・独特と言われることが多い。俗を嫌う少数派。
									考えていないように見えて、いろいろ考えている。自分の利益にならないと判断したものはしたくない頑固な性格。そのせいで世間知らず。
								</span>
								
							</li>
						</ul>

					</div>
				</div>

				<div className="hukidashis">
					<div
						className="hukidashi hukidashi_saying"

					>
						<p>
							小学生から大学入学時まで、私は場面緘黙（ばめんかんもく）という状態だった。症状は人それぞれだが、私の場合、家族以外の人前で声を発することができなかった。
							意思表示は縦横に首を振ることで対応していた。家や学校など、どこにいても常に不安で押しつぶされそうだった。<br /><br />

							友達がいない。楽しく生きれない。自信がない。<br/>
							そんな私は、大学入学時の環境の大きな変化をきっかけに、不安が軽減し、声を発することができるようになった。<br /><br />

							そこから、<br />

							「ストレスを軽減し、行動し、視野を広げる事によって、もっと楽に生きれるのではないか？」<br />

							と味を占め、部活への入部を始めに、部活、アルバイト、資格勉強などの様々な挑戦をする。

						</p><br />

						<p>
							挑戦する度に眼前に問題が立ちはだかった。<br />
							人と共に時間を過ごすことに慣れておらず、苦痛でたまらなかったり、声が小さくて相手に声が届かなかったり、自分ができないことがあれば責めて、自分で自分を苦しめたりしていた。<br />
							それでも、たくさん知識を蓄えて、分析して考えて努力をして準備をして突破した。
							その結果、永遠にできないと思っていた友人ができたり、不安の解消法を見つけ出したり、人の目が見れるようになったり、人生を楽しむ方法がわかってきた。<br /><br />
							これは、「楽に生きたい」という目標を自分の中で持ち、「きっと結果につながるはずだ」と信じ行動したおかげであろう。
						</p>
					</div>

					<div className="hukidashi hukidashi_saying">
						<p>
							挑戦のうちの一つの、長期エンジニアインターンは、
							合格率10%以下の難関だった。約3ヶ月間のプログラミングの学習
							を乗り切り、見事合格する。そこでは、Web営業支援アプリ
							の開発に携わった。主にReact、TypeScriptを用いたフロントエンドのタスクを担当。
							有給だったので、自分のタスクに責任を持って取り組む意識を培うことができた。
						</p>
					</div>

					<div className="hukidashi hukidashi_saying">
						<p>
							とあることから、「デザイン分野をやってみたい。
							私でもできるんじゃないだろうか」と考えるようになり、
							独学でHTML5/CSS3を勉強したり、デザインツールでサイトをデザインするところから、
							実際にサイトを実装してみたりした。
						</p><br />

							東京へ行けば、<br />
						<ul>
							<li>未経験でもデザイナーの経験が積めるかもしれない</li>
							<li>技術も進んでおり、交流も活発かもしれない</li>
						</ul>
						という安直な想いで承諾する。
						<br />
						<p>
							長期エンジニアインターンをやめ、一年間の休学の中、東京へデザイナーインターンを探しに行こうとする。
							しかし、デザイナーインターンは見つかりはしたものの、コロナなどの諸々の事情により撃沈。
						</p>
					</div>
					<div className="hukidashi hukidashi_saying">
						<p>
							家に帰省し、苦手な習慣化や自分を大事にすることなどの自分磨きに取り組み中。
						</p>
					</div>
				</div>
			</section>

		</div>
	)
}

function AboutMe({ data, location }) {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="About me" />

			<article className="contents">

				<EasyAboutMe data={data} />

				<section id={`my_dream`}>
					<h2
						style={{
							borderBottom: "solid 10px rgba(192, 152, 236, .5)",
							color: "#3A5CD4",
							fontFamily: "JK Gothic M",
							marginTop: "24px"
						}}
					>
						<FontAwesomeIcon
							style={{ marginRight: "5px" }}
							icon={faCat} />
						これからやりたいこと
					</h2>

					<div className="flex_content">
						<div className="hukidashis">
							<div className="hukidashi hukidashi_thinking">
								<p>
									自分も含めて、皆が生きやすくて幸せな社会にできればいいな
								</p>
							</div>
							<div className="hukidashi hukidashi_thinking">
								<p>
								なにか情報発信をして、誰かのためになったり、<br />
									誰かを笑顔にしてあげられたらいいな
								</p>
							</div>
							<div className="hukidashi hukidashi_thinking">
								<p>
									自分や自分の好きなことを追い求めたいな
								</p>
							</div>
							<div className="hukidashi hukidashi_thinking">
								<p>
									バラエティに富んだチャレンジングな人生にしたい
								</p>
							</div>
							<div className="hukidashi hukidashi_thinking">
								<p>
								快適な生き方を求めて、<br />
								その時その時を、今までの人生で一番楽しくて幸せであり、<br />
								正しい選択をしているものだと思いたい
								</p>
							</div>
						</div>
						<div style={{ marginTop: "24px", flexBasis: "488px", fontSize: "16px" }}>
							<p>
								これからやりたいことはたくさんある。<br /><br />
								自分に足りないのは、やりたいと思ったことに挫折せず、
								粘り強く計画を立てて、改善していってやり遂げる力だ。
							</p><br />
							<p>
								そのために今私は毎日の記録をつけ、自分の行動の分析を行っている。また不安や、行動できないと感じた時の思考プロセスも分析し、どのように考えるべきかを日々試行錯誤している。										改善のスピードは非常にスローモーションだが、確実に少しずつ変わっている。
								毎日なにかの記録をつける、ということさえままならず、苦しんだ記憶がある。それを思い返せば、成長したなとしみじみと思うのだ。
							</p><br />
							<p>
								計画し、やり遂げるプロセスさえ確立できれば、積極的に活動して失敗などから学び、同じように今足りないものを分析し、やりたいことを実践していくだけである。
							</p><br />
							<p>								
								今まで生きてきた中で今が一番幸せだと私は思う。高校生の時もそう思った。大学入りたての時もそう思った。それは、私が少しずつ私の生きやすい方向へ変わっていっているということを示している。
								未来の自分の幸せのためにこれからも改善を努めたい。
							</p>
						</div>
					</div>

				</section>
				<section>
					<h2
						style={{
							borderBottom: "solid 10px rgba(192, 152, 236, .5)",
							color: "#3A5CD4",
							fontFamily: "JK Gothic M",
							marginTop: "24px"
						}}
					>
						<FontAwesomeIcon
							style={{ marginRight: "5px" }}
							icon={faCat} />
						私の人生はこうして変わった
					</h2>
					<section>
						<h3
							style={{
								borderBottom: "solid 2px rgba(0, 0, 0, .25)",
								fontFamily: "JK Gothic M",
								marginTop: "24px"
							}}
						>
							大学入学以前 <span style={{ fontFamily: "YuGothic" }}>〜</span>ネガティブ引きこもり<span style={{ fontFamily: "YuGothic" }}>〜</span>
						</h3>
						<div className="flex_content">

							<div className="hukidashi frex_basis488">

								<span>状態・信念</span>
								<ul>
									<li>受験勉強するのに一日中勉強しようと出来るわけのない高い目標を建てる。できなかったら、自分を責めるの繰り返し。</li>
									<li>「大学に受かったら、一人暮らししたい」「自立がしたい」と強く願う</li>
								</ul>

							</div>
							<div className="hukidashi frex_basis488">
								<p>
									<span>自立を願った理由</span><br />

									私は、自分自身と将来について大きな不安を抱えていた。
									自分が、社会にとって必要がなく価値のない人間であるという事実は理解しており、
									それがどうしても我慢ならなかった。
									そんな誰かに頼らないと生きていけないような、無力で
									無価値な人間であることに恥を感じた。惨めだと思った。
									自立すれば、嫌でも変わるだろうと考えた。

								</p>
							</div>

						</div>
						<div
							style={{
								marginTop: "24px"
							}}
						>

						</div>
					</section>
					<section>
						<h3
							style={{
								borderBottom: "solid 2px rgba(0, 0, 0, .25)",
								fontFamily: "JK Gothic M",
								marginTop: "48px"
							}}
						>
							大学1年生 <span style={{ fontFamily: "YuGothic" }}>〜</span>挑戦と喜び<span style={{ fontFamily: "YuGothic" }}>〜</span>
						</h3>
						<div className="flex_content">

							<div className="hukidashi hukidashi_b_a frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>Before</span>
								<ul>
									<li>人前でたとえ話しかけられたとしても、声を出して返事できなかった。</li>

									<li>人と関わることが不安でたまらない。独りになりたい。</li>

									<li>質問された時になんと答えていいかわからないことがある。</li>

									<li>部活で一人浮いている心地がする。居場所がない。</li>

									<li>部活などで色々とやることが増えたために、宿題をぎりぎりになるまで忘れていた。自己管理ができるようにならなくてはだめだ。遊んではいけない。</li>

									<li>好きなことを少しでもやっていた。</li>
								</ul>

							</div>
							<div className="hukidashi frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>After</span>
								<ul>
									<li>環境の変化により、返事ができるように。</li>

									<li>人と関わることで、人と自分を比較して、気づきを得て、視野が広がって、少し生きるのが楽になった。もっと人と関わって視野を広げたい。</li>

									<li>答えられなかった質問に対して、独りの時になんと答えたら良かったのだろうと紙に書き出したり考えることを繰り返すことにより、少しずつ出来るようになってきた。</li>

									<li>少しだけ慣れてきて、楽しい時間も増えてきた。</li>

									<li>時間の把握が今までできていなかったのだ。もっと時間把握を出来るようになりたい。</li>

									<li>多忙なことや自己管理下手な事により、好きなことをやるのは無駄であると思うように。</li>
								</ul>

							</div>

						</div>
						<span style={{ fontSize: "12px" }}>※ カーソルを乗せるorタップして詳細を表示</span><br/>
						<ActivityTag
							description="入部し、役者を務めた。学習への専念のため、2年生夏に退部。"
						>
							映画研究部
						</ActivityTag>
						<ActivityTag
							description="声が小さいと叱られた。お客様の目を全く見れなかった。怖くて不安でいっぱいだったが、半年も続いた。"
						>
							コンビニのアルバイト
						</ActivityTag>
						<ActivityTag
							description="教授に自らアドバイスを貰いに行き、独学でJavaの学習をした。"
						>
							独学でのプログラミング
						</ActivityTag>
						<ActivityTag
							description="国際的に活躍する若者を育成するセミナー。部活のつながりで参加。コミュニケーションのできなかった小学校以来、久しぶりの泊まりだったが、想定しているより、全く問題は起こらなかった。ここまで、コミュニケーションができるようになったということで変わるものなのかと衝撃を受けた。皆の前で発表したり、外国人の方に説明するなど、成長の機会となった。英語はほとんど喋れなかったが、なんとなく伝えられた。夏休みに参加。"
						>
							GYL（お泊り）
						</ActivityTag>
						<ActivityTag
							description="最後にグループごとのプレゼンを伴う初めてのグループワーク。授業の単位が取れるか不安で仕方なく、積極的に発言しようとするも、空回りした。周りのやる気がなく、なぜかリーダになってしまった。まとめ方や指示の仕方に悩んだが、なんとか形にはすることができた。"
						>
							グループワーク
						</ActivityTag>
						<ActivityTag
							description="部活関連で参加。たくさん準備して、人前で話すという行為に、結果がどうであれ、達成感と喜びを覚えて、やる気に繋がった。"
						>
							ビブリオバトル
						</ActivityTag>
						<ActivityTag
							description="部活関連で参加。HYLとは大阪府枚方市の学生団体のこと。枚方まつりにて、子供向けの出し物の手伝いをした。子供に全く話しかけることができずにオロオロしたがよい刺激になった。"
						>
							HYL（手伝い）
						</ActivityTag>
						
						<ActivityTag
							description="部活で参加。たくさん興味を持って先輩たちが質問してくれて良いコミュニケーションの練習場になった。最初は答えられなかった質問も、復習していくうちにどんどん答えられるようになって感動した。"
						>
							食事会
						</ActivityTag>
						<ActivityTag
							description="部活関連で参加。ちょい役の教授役を演じた。演劇部の人たちの情熱や人柄に大きく奮い立った。春休みに参加。"
						>
							演劇部新入生公演
						</ActivityTag>
						<ActivityTag
							description="飛び飛びの学習ではあったが、春休み期間を使って、初めて何かをまともに学習した。目標を決めて、受けようと思っていると周りに相談する事によってモチベーションが上がり、取り組めたのだと思う。"
						>
							基本情報技術者試験の取得
						</ActivityTag>
						
					</section>
					<section>
						<h3
							style={{
								borderBottom: "solid 2px rgba(0, 0, 0, .25)",
								fontFamily: "JK Gothic M",
								marginTop: "48px"
							}}
						>
							大学2年生 <span style={{ fontFamily: "YuGothic" }}>〜</span>限界と休息 そして、友との出会い<span style={{ fontFamily: "YuGothic" }}>〜</span>
						</h3>
						<div className="flex_content">

							<div className="hukidashi hukidashi_b_a frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>Before</span>
								<ul>
									<li>誰かに教えたことがなかった</li>

									<li>助けたいと思えるような友達がいなかった</li>

									<li>人との距離感が掴めなかった</li>
								</ul>

							</div>
							<div className="hukidashi frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>After</span>
								<ul>
									<li>後輩ができる</li>

									<li>教えることが好きだと気づいた</li>

									<li>自分のこと二の次にして、必死にたすける</li>

									<li>コミュニケーションに積極的になった</li>

									<li>自分に適したグループでの立ち位置の戦略を練った</li>

									<li>インターンを探した</li>

									<li>資格をとった</li>
								</ul>

							</div>

						</div>
						<span style={{ fontSize: "12px" }}>※ カーソルを乗せるorタップして詳細を表示</span><br/>
						<ActivityTag
							description="手伝いに参加。新入生の牽引を担当。といっても、女子が4人と少なかったので、無理はしたが大きな負担ではなかった。積極的に話しかけることができた。"
						>
							新入生オリエンテーション
						</ActivityTag>
						<ActivityTag
							description="授業が一緒の友人伝いでグループに参加。積極的に仲良くなろうと頑張った。"
						>
							大学の同級生との交流
						</ActivityTag>
						<ActivityTag
							description="３回のテストがあり、それぞれ合格しないと、インターンにはのぞめない。それぞれ、Ruby, Ruby on Rails, React/Reduxのテストに約3ヶ月かけて合格した。春休みをつぎ込んだ。合格率10%以下の難関だった。"
						>
							エンジニアインターンのテスト対策
						</ActivityTag>
						<ActivityTag
							description="新部長に頼まれ、所属。新部長が低迷気味の部を新しく興すことに。2年生の間はゲームづくりをほんの少しだけ手伝った。"
						>
							文化表現部
						</ActivityTag>
					</section>
					<section>
						<h3
							style={{
								borderBottom: "solid 2px rgba(0, 0, 0, .25)",
								fontFamily: "JK Gothic M",
								marginTop: "48px"
							}}
						>
							大学3年生 <span style={{ fontFamily: "YuGothic" }}>〜</span>コミュニケーションの確立・自分らしさ・デザイン<span style={{ fontFamily: "YuGothic" }}>〜</span>
						</h3>
						<div className="flex_content">

							<div className="hukidashi hukidashi_b_a frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>Before</span>
								<ul>
									<li>自分を偽って無理をしていた</li>
									<li>インターンで誰かにわからないところを相談することが苦手で、話しかけるのに1時間以上要した</li>
									<li>インターンでの大人数飲み会にて一年生のときのようなひどい緊張で一言も喋れずにちぢこまっていた</li>
								</ul>

							</div>
							<div className="hukidashi frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>After</span>
								<ul>
									<li>正直なコミュニケーションはまだ難しいが、自分らしさを出すようになった</li>

									<li>業務が進まないと意味がないので、相談しなければ時間の無駄だという気持ちで取り組めるようになった</li>

									<li>グループでの話題には頷き、それ以外は隣の人と喋るという自分にあったやり方を見つけた</li>
								</ul>

							</div>

						</div>
						<span style={{ fontSize: "12px" }}>※ カーソルを乗せるorタップして詳細を表示</span><br/>
						<ActivityTag
							description="その当時私に一番足りないのは自信だと考えていたので、人間関係の構築に的を絞った。話しかけることが怖かったが、自分の心が安心できるタイミングや場所を分析し、仲良くなりたい子へ積極的に話しかけた。また、食事会へ参加した。最初は、大人数の状況に不安を感じ、声を出すこともできなかったが、「できることから」を胸に掲げ、「隣の人に話しかける」という目標を設定し、見事達成した。"
						>
							有給エンジニアインターン勤務
						</ActivityTag>
						<ActivityTag
							description="夏休み。時間が増えるので、なにか新しいことやりたいなと考え、週一で演技の学校に行くことにした。大学は男子の比率が高く、ほとんど女子との接点がなかった。その学校で初めて女子らしい女子に触れ合い、ハグやスキンシップを習得。怖いことが減っていくことって視野が広がっていいなと強く感じた。"
						>
							演技の学校
						</ActivityTag>
						<ActivityTag
							description="React, Git, TypeScriptについて学習する。"
						>
							エンジニア技術・ツールの学習
						</ActivityTag>
						<ActivityTag
							description="基本情報技術者試験とは異なり、午後が記述式で難しかったが、図書室にこもって対策し、見事合格した。"
						>
							応用情報技術者試験の取得
						</ActivityTag>
						<ActivityTag
							description="大学でプレゼンのスライドをつくる機会が多く、「見やすいスライドデザイン」に興味を持ち、「伝わるデザイン」という本に出会った。プレゼンの時に拘って意識して作るとすごく楽しかった。ほとんど見やすさとわかりやすさで一位の得点を獲得したように感じるので、「見やすく、かつ、わかりやすい」がいちばん大事な要素だと感じた。"
						>
							グループワークのプレゼンで一位獲得
						</ActivityTag>
						<ActivityTag
							description="Photoshop, Illustrator, figma, GatsbyJSを学んだ。プログラミングの学習より、遥かにわかりやすく、楽しい気分になった。"
						>
							デザインの独学
						</ActivityTag>
						<ActivityTag
							description="東京に一緒に行こうぜという知人の誘い対して考えもせず東京に行くことを決意する。
							せっかく、元いたインターンでフロントエンドの仕事もらったのに、チャンスを逃した。"
						>
							休学し、上京を決意
						</ActivityTag>
						<ActivityTag
							description="文化表現部で一番大事にしたことはコミュニケーションだった。その頃は大学に通いながら、演技の学校にも通って、インターンで週20時間くらい働いていて、比較的多忙だった。そのなかでせめてコミュニケーションは大事にしようと考えた。積極的に触れ合った結果、部員の一人としては認められた感覚を持てた。しかし、部長との価値観の相違があり、退部することになった。"
						>
							文化表現部での交流
						</ActivityTag>
					</section>
					<section>
						<h3
							style={{
								borderBottom: "solid 2px rgba(0, 0, 0, .25)",
								fontFamily: "JK Gothic M",
								marginTop: "48px"
							}}
						>
							現在（休学中）<span style={{ fontFamily: "YuGothic" }}>〜</span>相談大事<span style={{ fontFamily: "YuGothic" }}>〜</span>
						</h3>
						<div className="flex_content">

							<div className="hukidashi hukidashi_b_a frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>Before</span>
								<ul>
									<li>習慣をどうやって構築すればいいのかわからない</li>

									<li>好きなことを蔑ろにして、どうでもいいことやリラックスできないことに時間を費やしていた</li>

									<li>自分を大事にしていなかった</li>
								</ul>

							</div>
							<div className="hukidashi frex_basis488">

								<span style={{ fontFamily: "mini-wakuwaku-maru" }}>After</span>
								<ul>
									<li>根本の問題点を問うことで解決</li>

									<li>"好きなこと・自分に気を配りながらも、すべきことをやる。"</li>

									<li>頼る、相談することの必要性に気がつくことができた</li>
			
								</ul>

							</div>

						</div>
						<span style={{ fontSize: "12px" }}>※ カーソルを乗せるorタップして詳細を表示</span><br/>
						<ActivityTag
							description="軽い気持ちで知人とともに東京へ、デザインのアルバイトとかインターン探しても全然見つからず苦労。

							やっと決まったものの緊急事態宣言でなくなる。
							何のために東京来たんだろうと落ち込んだが、軽い気持ちで行くのはよくないと教訓になった。
							"
						>
							上京
						</ActivityTag>
						<ActivityTag
							description="仕方ないので、お金を稼ぐためマクドナルドでバイト。接客業なんてコンビニ以来だったが、コンビニ時代と比べるとお客さんの顔も見れるし笑顔も作れるし、声も出せるし、とても感動した。"
						>
							マクドナルドでバイト
						</ActivityTag>
						<ActivityTag
							description="色々グッズを作った。サイトも作った。初めて色々作ったことによって、自分はもしかすればやればできるのかもと自信が少しついた。"
						>
							つくる
						</ActivityTag>
						<ActivityTag
							description="トラブルに見舞われ、実家に帰る。メンタリストDaiGo著書の『超習慣術』に出会い、これまでの常識が一変する。習慣化できない自分を責めるのではなく、なぜ習慣化できないのかにフォーカスするという考えに衝撃を受けた。"
						>
							帰省
						</ActivityTag>
					</section>

				</section>
			</article>
		</Layout>
	)
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
