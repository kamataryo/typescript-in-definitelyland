interface Point {
	x: number;
	y: number;
}
// Point の実装を強制する！！！
class PointImpl1 implements Point {
	constructor(public x: number, public y: number) {
	}
}
// Point の実装が強制されないけど互換性はある！
class PointImpl2 {
	constructor(public x: number, public y: number) {
	}
}

// 引数に Point をとる
function double(p: Point): Point {
	return {
		x: p.x * 2,
		y: p.y * 2,
	};
}
// 次のすべては正しいコードとなります
double(new PointImpl1(1, 2));
double(new PointImpl2(3, 4));
double({
	x: 5,
	y: 6,
});
let p = {
	x: 7,
	y: 8,
	z: 9,
};
double(p); // オブジェクトリテラルを直で渡す場合余計な要素があると怒られる
