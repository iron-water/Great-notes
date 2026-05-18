#set page(margin: 2cm)
#set text(
  font: (
    (name: "Arial", covers: "latin-in-cjk"),
    "Maple Mono",
    "SimSun"
  ),

)
#set heading(numbering: "1.")
#set par(justify: true, leading: 0.8em)

#align(center)[
  = 第3章 刚体力学基础 练习题
]

#v(0.5em)

#align(center)[
  *覆盖范围：§3.1–§3.4*
]

#v(1em)

---

#v(0.5em)

== 飞轮运动学 (§3.1)

一飞轮半径为 $R = 0.4 (m)$，从静止开始以恒定角加速度 $alpha = 2 (r a d slash s^2)$ 绕固定轴转动。

(1) 求 $t = 5 (s)$ 时飞轮的角速度 $omega$ 和转过的圈数 $N$；
(2) 求 $t = 5 (s)$ 时飞轮边缘上一点的切向加速度 $a_t$ 和法向加速度 $a_n$；
(3) 飞轮边缘上一点的线速度大小 $v$ 与时间的关系 $v(t)$ 是什么？

#v(0.8em)

== 转动惯量积分和平行轴定理 (§3.1)

一均匀细杆质量为 $M = 2 (k g)$、长度 $L = 1 (m)$。

(1) 取杆的质心为原点，$x$ 轴沿杆方向，线密度 $lambda = M slash L$。通过直接积分
$I = integral x^2 dif m = integral_(-L/2)^(L/2) x^2 lambda dif x$
求绕过质心且垂直于杆的轴的转动惯量 $I_C$；
(2) 利用平行轴定理求绕过杆端点且垂直于杆的轴的转动惯量 $I_e n d$；
(3) 若将杆弯成圆环（周长 = $L$），绕过环心垂直于环面的轴的转动惯量 $I_环$ 是多少？

#v(0.8em)

== 滑轮系统：转动定律 (§3.2)

一轻绳跨过质量为 $M = 4 (k g)$、半径为 $R = 0.2 (m)$ 的匀质圆盘滑轮（$I = 1 slash 2 M R^2$），绳端悬挂一质量为 $m = 2 (k g)$ 的重物。滑轮轴光滑，绳与滑轮间无相对滑动。取 $g = 9.8 (m slash s^2)$。

(1) 画出重物和滑轮的受力分析图；
(2) 求重物的加速度 $a$；
(3) 求绳中张力 $T$。

#v(0.8em)

== 细杆由水平自由倒下 (§3.3 转动动能定理)

一均匀细杆质量为 $M$、长度 $L$，可绕光滑水平轴 $O$（过杆的一端）在竖直平面内自由转动。杆由水平位置从静止释放。取 $g = 9.8 (m slash s^2)$。

(1) 求杆转到竖直位置时的角速度 $omega$；
(2) 求杆在竖直位置时，杆端（自由端）的切向加速度 $a_t$ 和法向加速度 $a_n$；
(3) 比较自由端在该位置的速度与质量为 $M$ 的质点从同样高度自由下落的速度——说明为什么两者不同。

#v(0.8em)

== 角动量守恒：旋转台收臂 (§3.4)

一学生站在可绕竖直轴自由旋转的平台上，双臂水平伸直，两手各握一个 $m = 5 (k g)$ 的哑 铃。学生+平台（不包括哑 铃）的转动惯量为 $I_0 = 2 (k g dot m^2)$。臂长 $l = 0.7 (m)$，哑 铃视为质点。初始系统以 $omega_1 = 2 (r a d slash s)$ 旋转，忽略摩擦。

(1) 初始总转动惯量 $I_1$ 和总角动量 $L_1$ 各为多少？
(2) 学生将双臂收回至身体两侧（哑 铃距转轴 $r_2 = 0.1 (m)$ 并紧贴身体），求新的角速度 $omega_2$；
(3) 计算系统的初、末动能，说明为什么动能不守恒。

#v(0.8em)

== 综合：匀质圆柱沿斜面纯滚动 (§3.1–§3.4)

一匀质实心圆柱（质量 $M = 4 (k g)$，半径 $R = 0.1 (m)$，相对中心轴的 $I_C = 1 slash 2 M R^2$）从倾角 $theta = 30 degree$、高度 $h = 1.5 (m)$ 的斜面顶端由静止开始纯滚动（无滑移）。取 $g = 9.8 (m slash s^2)$。

(1) 圆柱为何能做纯滚动？斜面提供给圆柱的是什么力？该力做功吗？
(2) 利用能量守恒求圆柱滚到斜面底部时的质心速度 $v_C$；
(3) 求圆柱滚到底部时的角速度 $omega$；
(4) 若将圆柱换成质量相同、半径相同的匀质薄圆环（$I_C = M R^2$），在相同高度释放，谁先到达底部？为什么？
(5) *附加题*：求圆柱纯滚时所受的静摩擦力大小和方向。

#v(1.5em)

---

#v(0.5em)

#align(right)[
  *参考答案见下页*
]

#pagebreak

= 参考答案

== 题1

(1) $omega = alpha t = 2 times 5 = 10 (r a d slash s)$。
转过的角度 $theta = 1 slash 2 alpha t^2 = 1 slash 2 times 2 times 25 = 25 (r a d)$。
圈数 $N = theta slash (2 pi) = 25 slash (2 pi) approx 3.98$ 圈。

(2) $a_t = alpha R = 2 times 0.4 = 0.8 (m slash s^2)$。
$a_n = omega^2 R = 10^2 times 0.4 = 40 (m slash s^2)$。

(3) $v(t) = omega(t) R = alpha R t = 0.8 t (m slash s)$，匀加速圆周运动。

#v(0.5em)

== 题2

(1) $I_C = integral_(-L/2)^(L/2) x^2 dot (M slash L) dif x = M slash L [x^3 slash 3]_(-L/2)^(L/2)$ \
$= M slash L [L^3 slash 24 - (-L^3 slash 24)] = M slash L dot L^3 slash 12 = 1 slash 12 M L^2$。
数值：$I_C = 1 slash 12 times 2 times 1^2 = 1 slash 6 approx 0.167 (k g dot m^2)$。

(2) 平行轴定理：$I_e n d = I_C + M d^2$，$d = L slash 2$。
$I_e n d = 1 slash 12 M L^2 + M (L slash 2)^2 = (1 slash 12 + 1 slash 4) M L^2 = 1 slash 3 M L^2$。
数值：$I_e n d = 1 slash 3 times 2 times 1 = 2 slash 3 approx 0.667 (k g dot m^2)$。

(3) 周长 $= L = 2 pi R_环$，$R_环 = L slash (2 pi)$。
圆环绕中心轴：$I_环 = M R_环^2 = M L^2 slash (4 pi^2)$。
数值：$I_环 = 2 times 1 slash (4 pi^2) approx 0.0507 (k g dot m^2)$。
可见相同质量、相同长度的杆和环——它们的转动惯量截然不同。

#v(0.5em)

== 题3

(1) 重物受重力 $m g$（↓）和拉力 $T$（↑）。滑轮受绳张力 $T$ 在两侧产生力矩：左侧拉力 $T$（↓），右侧拉力 $T$（↑），对滑轮中心净力矩 $tau = T R$（顺时针）。

(2) 重物平动：$m g - T = m a$。
滑轮转动（逆时针对 $a$ 取正方向一致需小心，设 $a$ 向下为正）：
$T R = I alpha$，且 $a = alpha R$（无滑动）。
$I = 1 slash 2 M R^2$。
$T R = (1 slash 2 M R^2)(a slash R) arrow.r.double T = 1 slash 2 M a$。
代入平动方程：$m g - 1 slash 2 M a = m a$。
$a = m g slash (m + M slash 2) = 2 times 9.8 slash (2 + 2) = 19.6 slash 4 = 4.9 (m slash s^2)$。

(3) $T = 1 slash 2 M a = 1 slash 2 times 4 times 4.9 = 9.8 (N)$。
验证：$m g - T = 19.6 - 9.8 = 9.8 = 2 times 4.9 = m a$ ✓。

#v(0.5em)

== 题4

(1) 取水平位置为势能零点（质心高度为 $L slash 2$），竖直时质心高度降为 $0$。
机械能守恒（无摩擦）：
$M g (L slash 2) = 1 slash 2 I_O omega^2$。
$I_O = 1 slash 3 M L^2$。
$M g L slash 2 = 1 slash 2 dot 1 slash 3 M L^2 omega^2 arrow.r.double g L = 1 slash 3 L^2 omega^2$。
$omega = sqrt(3 g slash L)$。

(2) 竖直时，杆自由端（距 $O$ 为 $L$）的切向和法向加速度：
$a_t = alpha L$，需要通过转动定律求 $alpha$。
在竖直位置：重力的力矩 $tau = M g (L slash 2)$（质心水平方向已过轴正下方 → 力矩为 0 → $alpha = 0$）。

等等——在竖直位置，重力作用线通过转轴 $O$，力矩为零。所以 $alpha = 0$，从而 $a_t = 0$。
法向加速度 $a_n = omega^2 L = 3 g$。

(3) 质点从高度 $L$ 自由下落：$v_质 = sqrt(2 g L)$。
杆自由端速度：$v_e n d = omega L = sqrt(3 g L) dot L = sqrt(3 g L)$。
$v_质 = sqrt(2 g L) approx 1.414 sqrt(g L)$，$v_e n d = sqrt(3 g L) approx 1.732 sqrt(g L)$。
杆端速度更大，但质心速度小于质点速度（因部分重力势能变成了转动动能，而非全部平动）。

实际上比较质心速度更好：杆质心下降 $L slash 2$：杆质心速度 $v_C = omega d = omega (L slash 2) = 1 slash 2 sqrt(3 g L)$。
质点降 $L slash 2$：$v_质' = sqrt(g L)$。
$v_C approx 0.866 sqrt(g L) < sqrt(g L)$，所以质心运动比自由落体慢——转动"吃掉"了一部分能量。

#v(0.5em)

== 题5

(1) 初始：两个哑铃到转轴距离 $l = 0.7 (m)$。
$I_哑 铃 = 2 m l^2 = 2 times 5 times 0.7^2 = 2 times 5 times 0.49 = 4.9 (k g dot m^2)$。
$I_1 = I_0 + I_哑 铃 = 2 + 4.9 = 6.9 (k g dot m^2)$。
$L_1 = I_1 omega_1 = 6.9 times 2 = 13.8 (k g dot m^2 slash s)$。

(2) 角动量守恒：$L_1 = L_2$。
$I_2 = I_0 + 2 m r_2^2 = 2 + 2 times 5 times 0.1^2 = 2 + 0.1 = 2.1 (k g dot m^2)$。
$omega_2 = L_1 slash I_2 = 13.8 slash 2.1 approx 6.57 (r a d slash s)$。

(3) $E_k 1 = 1 slash 2 I_1 omega_1^2 = 1 slash 2 times 6.9 times 4 = 13.8 (J)$。
$E_k 2 = 1 slash 2 I_2 omega_2^2 = 1 slash 2 times 2.1 times 6.57^2 approx 0.5 times 2.1 times 43.2 approx 45.4 (J)$。
动能增加！这是因为收臂时肌肉做功将化学能转化为机械能——角动量守恒只约束 $I omega$ 乘积，不约束能量。$E_k = L^2 slash (2I)$，$I arrow.b$ 则 $E_k arrow.t$。

#v(0.5em)

== 题6

(1) 纯滚动的条件是接触点相对斜面瞬时静止。静摩擦力提供使其自转的力矩，但无相对滑移，故接触点不做功（静摩擦不做功）。
斜面提供的力：支持力 $N$（⊥斜面，通过质心，对质心力矩为零）和静摩擦力 $f_s$（沿斜面向上，对质心产生力矩，使圆柱转动）。
$f_s$ 的瞬时作用点在地面接触点——该点瞬时静止，故 $f_s$ 不做功。

(2) 机械能守恒（只有保守力做功）：
$M g h = 1 slash 2 M v_C^2 + 1 slash 2 I_C omega^2$。
纯滚动条件：$v_C = omega R$。
$I_C = 1 slash 2 M R^2$。
$M g h = 1 slash 2 M v_C^2 + 1 slash 2 dot 1 slash 2 M R^2 dot (v_C slash R)^2$ \
$M g h = 1 slash 2 M v_C^2 + 1 slash 4 M v_C^2 = 3 slash 4 M v_C^2$。
$v_C = sqrt(4 g h slash 3) = sqrt(4 times 9.8 times 1.5 slash 3) = sqrt(19.6) approx 4.43 (m slash s)$。

(3) $omega = v_C slash R = 4.43 slash 0.1 = 44.3 (r a d slash s)$。

(4) 圆环（$I_C = M R^2$）：
$M g h = 1 slash 2 M v_C^2 + 1 slash 2 M R^2 dot (v_C slash R)^2 = M v_C^2$。
$v_C = sqrt(g h) = sqrt(9.8 times 1.5) = sqrt(14.7) approx 3.83 (m slash s)$。
圆柱 $v_C approx 4.43 (m slash s) > 3.83 (m slash s)$ → 圆柱先到。
原因：圆柱转动惯量更小（质量集中在内部），转动"吃掉"的能量较少，更多转化为平动动能。

(5) 圆柱质心运动方程（沿斜面）：$M g sin theta - f_s = M a_C$。
转动方程（对质心）：$f_s R = I_C alpha = (1 slash 2 M R^2)(a_C slash R) arrow.r.double f_s = 1 slash 2 M a_C$。
联立：$M g sin theta - 1 slash 2 M a_C = M a_C$。
$a_C = 2 slash 3 g sin theta = 2 slash 3 times 9.8 times 0.5 approx 3.27 (m slash s^2)$。
$f_s = 1 slash 2 M a_C = 1 slash 2 times 4 times 3.27 approx 6.54 (N)$。
方向：沿斜面向上。
