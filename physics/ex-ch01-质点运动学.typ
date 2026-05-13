#set page(margin: 2cm)
#set text(font: "Times New Roman", lang: "zh")
#set heading(numbering: "1.")
#set par(justify: true, leading: 0.8em)

#align(center)[
  = 第1章 质点运动学 练习题
]

#v(0.5em)

#align(center)[
  *覆盖范围：§1.1–§1.4*
]

#v(1em)

---

#v(0.5em)

== 1. 运动方程与轨迹方程 (§1.2)

已知质点的位置矢量为
$ bold(r)(t) = (3t^2 - 2t) bold(i) + (4t^3 + t) bold(j) $（SI）。

(1) 求 $t=2 (s)$ 时质点的速度矢量和加速度矢量；
(2) 求质点的轨迹方程 $y = f(x)$，并判断轨迹形状。

#v(0.8em)

== 2. 曲线运动：切向与法向加速度 (§1.3)

质点沿半径为 $R = 2 (m)$ 的圆周做匀加速运动，$t=0$ 时静止，切向加速度大小为 $a_t = 4 (m slash s^2)$。求：

(1) $t = 3 (s)$ 时质点的法向加速度 $a_n$；
(2) 何时 $a_n = a_t$？此时质点的总加速度大小为多少？

#v(0.8em)

== 3. 运动学两类问题：由加速度反求运动方程 (§1.3)

已知一质点沿 $x$ 轴运动，加速度为 $a(t) = 6t (m slash s^2)$。初始条件：
$v(0) = 0$，$x(0) = 2 (m)$。求：

(1) 速度函数 $v(t)$；
(2) 运动方程 $x(t)$；
(3) $t = 2 (s)$ 时质点所在位置距离原点多远？

#v(0.8em)

== 4. 抛体运动 (§1.2–§1.3)

在距地面高度 $h = 20 (m)$ 处以初速率 $v_0 = 30 (m slash s)$、仰角 $theta = 30 degree$ 斜向上抛出一小球，取 $g = 9.8 (m slash s^2)$。

(1) 写出小球运动的位置矢量 $bold(r)(t)$（取抛出点为坐标原点）；
(2) 求小球从抛出到落地的时间；
(3) 落地时小球的速度大小。

#v(0.8em)

== 5. 相对运动 (§1.4)

一船在静水中的航速为 $u = 5 (m slash s)$，欲渡一条宽度为 $w = 200 (m)$ 的河流，水流速度为 $v = 3 (m slash s)$。

(1) 为使得渡河时间最短，船头应指向何方向？最短时间是多少？
(2) 为使得渡河终点正对出发点，船头应指向何方向？此时渡河时间是多少？

#v(0.8em)

== 6. 综合：自然坐标下的加速度分解 (§1.3)

一质点沿曲线 $y = x^2 slash 2$（SI）运动，速率恒为 $v = 2 (m slash s)$。当 $x = 1 (m)$ 时：

(1) 求该点处轨迹的曲率半径 $rho$；
(2) 求此时质点的速度矢量和加速度矢量；
(3) 验证 $bold(a) dot bold(v) = 0$，并解释其物理含义。

#v(1.5em)

---

#v(0.5em)

#align(right)[
  *参考答案见下页*
]

#pagebreak

= 参考答案

== 题1

(1) $v_x = dif x slash dif t = 6t - 2$，$v_y = dif y slash dif t = 12t^2 + 1$。

$t = 2$ 时：$v_x = 10$，$v_y = 49$，$bold(v) = 10 bold(i) + 49 bold(j) (m slash s)$。

$a_x = dif v_x slash dif t = 6$，$a_y = dif v_y slash dif t = 24t$。

$t = 2$ 时：$a_y = 48$，$bold(a) = 6 bold(i) + 48 bold(j) (m slash s^2)$。

(2) $x = 3t^2 - 2t$，$y = 4t^3 + t$。消去 $t$ 较繁琐，轨迹为三次曲线，非抛物线。注：轨迹方程中 $t$ 不能简单用 $x$ 表达，说明运动在 $x$ 方向并非单调。

#v(0.5em)

== 题2

(1) $a_t = 4 (m slash s^2)$ 恒定。$t=3$ 时，$v = a_t t = 12 (m slash s)$。

$a_n = v^2 slash R = 12^2 slash 2 = 72 (m slash s^2)$。

(2) 令 $a_n = a_t$：$v^2 slash R = a_t$，即 $(a_t t)^2 slash R = a_t$，得 $t = sqrt(R slash a_t) = sqrt(2 slash 4) = sqrt(0.5) approx 0.707 (s)$。

此时 $a = sqrt(a_t^2 + a_n^2) = sqrt(2 a_t^2) = a_t sqrt(2) approx 5.66 (m slash s^2)$。

#v(0.5em)

== 题3

(1) $v(t) = integral_0^t a(s) dif s = integral_0^t 6s dif s = 3t^2 (m slash s)$。

(2) $x(t) = x(0) + integral_0^t v(s) dif s = 2 + integral_0^t 3s^2 dif s = 2 + t^3 (m)$。

(3) $t = 2$ 时，$x = 2 + 8 = 10$，距原点 $10 (m)$。

#v(0.5em)

== 题4

(1) 取抛出点为原点，$x$ 轴水平，$y$ 轴竖直向上。

$bold(r)(t) = v_0 cos theta dot t bold(i) + (v_0 sin theta dot t - 1 slash 2 g t^2) bold(j)$。

代入：$x(t) = 30 cos 30 degree dot t approx 25.98 t$，
$y(t) = 15t - 4.9 t^2$。

(2) 落地条件：$y = -20$（地面在抛出点下方 20 m）。

$-20 = 15t - 4.9 t^2$，即 $4.9 t^2 - 15t - 20 = 0$。

$t = (15 + sqrt(225 + 392)) slash 9.8 = (15 + sqrt(617)) slash 9.8 approx (15 + 24.84) slash 9.8 approx 4.07 (s)$。

(3) $v_x = 25.98 (m slash s)$，$v_y = 15 - 9.8 dot 4.07 approx -24.89 (m slash s)$。

$v = sqrt(25.98^2 + 24.89^2) approx 35.98 (m slash s)$。

#v(0.5em)

== 题5

(1) 最短时间：船头正对彼岸（垂直于河岸）。

$t_min = w slash u = 200 slash 5 = 40 (s)$。

此时船被冲向下游 $v dot t_min = 3 dot 40 = 120 (m)$。

(2) 正对彼岸：合速度方向垂直于河岸，船头需偏向上游。

$u sin alpha = v$，$sin alpha = v slash u = 3 slash 5 = 0.6$，$alpha approx 36.87 degree$。

合速度大小 $v_合 = u cos alpha = 5 dot 0.8 = 4 (m slash s)$。

$t = w slash v_合 = 200 slash 4 = 50 (s)$。

#v(0.5em)

== 题6

(1) 曲线 $y = x^2 slash 2$，$y' = x$，$y'' = 1$。

曲率半径 $rho = (1 + y'^2)^(3 slash 2) slash |y''|$。

$x = 1$ 时：$y' = 1$，$rho = (1 + 1)^(3 slash 2) slash 1 = 2 sqrt(2) approx 2.83 (m)$。

(2) 速度方向沿切线，$tan theta = y' = 1$，即 $theta = 45 degree$。

$bold(v) = v cos 45 degree bold(i) + v sin 45 degree bold(j) = sqrt(2) bold(i) + sqrt(2) bold(j) (m slash s)$。

速率恒定 $=>$ 切向加速度 $a_t = 0$，只有法向加速度：

$a_n = v^2 slash rho = 4 slash (2 sqrt(2)) = sqrt(2) (m slash s^2)$。

方向垂直于切线（指向曲率中心）：$bold(a) = a_n(-sin 45 degree bold(i) + cos 45 degree bold(j)) = -1 bold(i) + 1 bold(j) (m slash s^2)$。

(3) $bold(a) dot bold(v) = (-1)(sqrt(2)) + (1)(sqrt(2)) = 0$。

物理含义：速率恒定意味着加速度只有法向分量，无切向分量，故加速度与速度始终垂直，不做功。
