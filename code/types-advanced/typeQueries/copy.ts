// このコードは（死ぬほど読みにくいけど）正しい
function move(p1: { x1: number; y1: number; x2: number; y2: number; },
	p2: typeof p1,
): typeof p1 {
	return {
		x1: p1.x1 + p2.x1,
		y1: p1.y1 + p2.y1,
		x2: p1.x2 + p2.x2,
		y2: p1.y2 + p2.y2,
	};
}

let rect = move({
	x1: 1, y1: 1, // 無駄に多い
	x2: 2, y2: 2, // プロパティ
}, {
		x1: 3, y1: 3,
		x2: 4, y2: 4,
	});
rect.x1;
rect.x2;

export { }
