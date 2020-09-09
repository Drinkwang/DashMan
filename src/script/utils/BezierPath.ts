
export default class BezierPath {
    public static CreateBezierPoints(anchorpoints, pointAmount): Array<any> {
        var points = [];
        for (var i = 0; i < pointAmount; i++) {
            var point = this.MultiPointBezier(anchorpoints, i / pointAmount)
            points.push(point);
        }
        return points;

    }
    private static MultiPointBezier(points, t): any {
        let len: number = points.length;
        let x: number = 0, y: number = 0;
        for (let i: number = 0; i < len; i++) {
            let point = points[i];
            x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
            y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
        }
        return { x: x, y: y };
    }

    private static erxiangshi(start: number, end: number): number {
        let cs: number = 1, bcs: number = 1;
        while (end > 0) {
            cs *= start;
            bcs *= end;
            start--;
            end--;
        }
        return (cs / bcs);
    };

   



}