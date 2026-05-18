#set page(margin: 2cm)
#set text(
  font: (
    (name: "Arial", covers: "latin-in-cjk"),
    "Maple Mono",
    "SimSun"
  ),
  lang: "zh"
)
#set heading(numbering: "1.")
#set par(justify: true, leading: 0.8em)

#align(center)[
  = 第4章 狭义相对论 练习题
]

#v(0.5em)

#align(center)[
  *覆盖范围：§4.1–§4.5*
]

#v(1em)

---

#v(0.5em)

== 洛伦兹变换：事件坐标变换 (§4.3)

惯性系 $S$ 中测得两个事件：

- 事件 $A$：$(x_A = 0, t_A = 0)$
- 事件 $B$：$(x_B = 6.0 times 10^8 (m), t_B = 3.0 (s))$

另一惯性系 $S'$ 沿 $x$ 正方向以 $v = 0.6 c$ 相对于 $S$ 匀速运动。$c = 3.0 times 10^8 (m slash s)$。

(1) 写出洛伦兹变换式（从 $S arrow.double.r S'$）；
(2) 求 $A$、$B$ 在 $S'$ 中的坐标 $(x', t')$；
(3) 两事件在 $S$ 中的时间间隔是 $Delta t = t_B - t_A$。它们的时间顺序在 $S'$ 中是否改变？为什么？

#v(0.8em)

== 同时性的相对性 (§4.3–§4.4)

一列长为 $L_0 = 200 (m)$（固有长度）的高速列车以 $v = 0.8 c$ 沿直线轨道向东匀速行驶。地面观测者测到两道闪电同时击中列车两端。

(1) 在地面系中，两闪电是否同时发生？为什么？
(2) 在列车系中，两闪电是否同时发生？若不同时，时间差 $Delta t'$ 是多少？哪端先被击中？
(3) 解释为何经典的"光行差"直觉在这里失效——如果两个事件在一系同时，在另一系一定不同时，除非两点重合。

#v(0.8em)

== Muon 衰变：时间膨胀 + 长度收缩 (§4.4)

宇宙线在高层大气（高度约 $h = 10 (k m)$）中产生 $mu$ 子（渺子）。$mu$ 子以 $v = 0.998 c$ 垂直射向地面。$mu$ 子的固有半衰期为 $tau_0 = 2.2 times 10^(-6) (s)$。$c = 3.0 times 10^8 (m slash s)$。

(1) 按经典力学（无时间膨胀），$mu$ 子在半衰期内能飞多远？能否到达地面？
(2) 用**地面参考系**分析：考虑时间膨胀后，$mu$ 子从产生到衰变的寿命 $tau$ 是多少？在此时间内 $mu$ 子飞行距离为多少？能否到达地面？
(3) 用 **$mu$ 子参考系**分析：$mu$ 子静止，大气层以 $0.998 c$ 迎面而来。从 $mu$ 子视角看，大气层厚度是多少？这段距离以 $0.998 c$ 通过需要多长时间？与半衰期 $tau_0$ 相比如何？

#v(0.8em)

== 飞船过境：长度收缩 + 时间测量 (§4.4)

一艘宇宙飞船的固有长度为 $L_0 = 100 (m)$，以 $v = 0.8 c$ 飞过地球。

(1) 地球观测者测得的船长 $L$ 是多少？
(2) 地球上的观测者测到飞船从头到尾通过其正上方某固定点所需的时间 $Delta t$ 是多少？
(3) 飞船上的宇航员认为地球在向自己运动。从宇航员视角，固定点从船头走到船尾需要多长时间？这个结果是否矛盾？验证洛伦兹变换的一致性。

#v(0.8em)

== 相对论动量与动能 (§4.5)

一质子（静止质量 $m_p = 1.67 times 10^(-27) (k g)$）被加速到 $v = 0.9 c$。$c = 3.0 times 10^8 (m slash s)$。

(1) 求质子的洛伦兹因子 $gamma$；
(2) 求质子的相对论动量 $p$ 和经典动量 $p_class$，比较两者；
(3) 求质子的总能量 $E$、静能 $E_0$、动能 $K$；
(4) 动能 $K$ 是经典动能 $K_class = 1 slash 2 m_p v^2$ 的多少倍？

#v(0.8em)

== 综合：正负电子湮灭 (§4.5)

一个电子和一个正电子在实验室中静止相遇并湮灭，产生两个光子（能量相等，动量大小相等方向相反）。电子与正电子的静止质量均为 $m_e = 9.11 times 10^(-31) (k g)$。$c = 3.0 times 10^8 (m slash s)$，$1 (e V) = 1.602 times 10^(-19) (J)$。

(1) 证明湮灭过程满足电荷守恒、轻子数守恒。能量从何而来？
(2) 每个光子的能量 $E_gamma$ 和频率 $f$ 分别是多少？（用 J 和 eV 表示）
(3) 每个光子的波长 $lambda$ 是多少？属于电磁波谱的哪个波段？
(4) *附加题*：若电子和正电子在湮灭前各具有动能 $K_0 = 0.5 (M e V)$（对撞），求湮灭产生的光子总能量和每个光子的能量。

#v(1.5em)

---

#v(0.5em)

#align(right)[
  *参考答案见下页*
]

#pagebreak

= 参考答案

== 题1

(1) 洛伦兹变换（$S'$ 沿 $+x$ 方向以 $v$ 运动，$S$ 与 $S'$ 在 $t = t' = 0$ 时原点重合）：

$$begin{aligned}
x' &= gamma (x - v t) \
t' &= gamma (t - v x slash c^2)
end{aligned}$$

$gamma = 1 slash sqrt(1 - v^2 slash c^2) = 1 slash sqrt(1 - 0.6^2) = 1 slash sqrt(0.64) = 1 slash 0.8 = 1.25$。

(2) 事件 $A$：$x_A = 0, t_A = 0 arrow.double.r x_A' = 0, t_A' = 0$。

事件 $B$：
$x_B' = gamma (x_B - v t_B) = 1.25 [6.0 times 10^8 - 0.6 times 3.0 times 10^8 times 3.0]$ \
$= 1.25 [6.0 - 5.4] times 10^8 = 1.25 times 0.6 times 10^8 = 7.5 times 10^7 (m)$。

$t_B' = gamma (t_B - v x_B slash c^2) = 1.25 [3.0 - (0.6 c) times (6.0 times 10^8) slash c^2]$ \
$= 1.25 [3.0 - 0.6 times 6.0 times 10^8 slash (9.0 times 10^16)]$ \
$= 1.25 [3.0 - 3.6 times 10^8 slash 9.0 times 10^16]$ \
$= 1.25 [3.0 - 4.0 times 10^(-9)] approx 3.75 (s)$。

(3) $Delta t = 3.0 (s) > 0$，$Delta t' = 3.75 (s) > 0$。时间顺序未变。
洛伦兹变换下因果事件的时序不会颠倒——因为需要超光速信号才能改变时序。

#v(0.5em)

== 题2

(1) 地面系中，两闪电同时击中列车两端。本题假设这就是已知条件。

(2) 在地面系同时但不同地的事件，在列车系中不同时。

**定性分析**：列车向右运动，光从车尾向车头传播需要追及前移的车头，而光从车头向车尾传播与车尾运动相向。但由于闪电在地面系同时发生且地面系认为两事件光信号到达列车中点的时间差为零——这里我们需要用洛伦兹变换精确计算。

取地面为 $S$，列车为 $S'$（$+x$ 向右），$t=0$ 时两闪电同时发生。设车尾在 $x=0$（事件 1），车头在 $x=L$（事件 2）。$L$ 为地面测得的车长：$L = L_0 slash gamma$。

$v = 0.8 c arrow.double.r gamma = 1 slash sqrt(1 - 0.64) = 1 slash 0.6 approx 1.667$。
$L = 200 slash 1.667 approx 120 (m)$。

事件 1（车尾）：$x_1 = 0, t_1 = 0$。$x_1' = 0, t_1' = 0$。
事件 2（车头）：$x_2 = L = 120 (m), t_2 = 0$。

$t_2' = gamma (t_2 - v x_2 slash c^2) = 1.667 [0 - 0.8 c times 120 slash c^2]$ \
$= 1.667 [-96 slash c] = -1.667 times 96 slash (3.0 times 10^8) approx -5.33 times 10^(-7) (s)$。

$Delta t' = t_2' - t_1' = -5.33 times 10^(-7) (s)$。负号表示车头事件先发生（在列车系中），车尾事件后发生。

(3) 同时性相对性的根源：光速不变迫使每个惯性系用自己的钟同步约定。不同惯性的观测者在"同一时刻"的定义上天然不同。

#v(0.5em)

== 题3

(1) 经典：$d_class = v tau_0 = 0.998 c times 2.2 times 10^(-6)$ \
$approx 0.998 times 3.0 times 10^8 times 2.2 times 10^(-6) approx 659 (m)$。
仅约 0.66 (k m)，远小于 10 (k m)——经典理论预言 $mu$ 子无法到达地面。

(2) $gamma = 1 slash sqrt(1 - (0.998)^2) = 1 slash sqrt(1 - 0.996004) = 1 slash sqrt(0.003996) approx 1 slash 0.0632 approx 15.8$。

地面系中 $mu$ 子寿命：$tau = gamma tau_0 = 15.8 times 2.2 times 10^(-6) approx 3.48 times 10^(-5) (s)$。

飞行距离：$d = v tau = 0.998 c times 3.48 times 10^(-5) approx 0.998 times 3.0 times 10^8 times 3.48 times 10^(-5)$ \
$approx 1.04 times 10^4 (m) = 10.4 (k m) > 10 (k m)$。$mu$ 子可以到达地面。✓

(3) $mu$ 子静止系中，大气层迎面而来。大气层（地面系中的 10 (k m)）在 $mu$ 子系中发生长度收缩：
$L' = L_0 slash gamma = 10 slash 15.8 approx 0.633 (k m) = 633 (m)$。

大气层以 $0.998 c$ 通过 $mu$ 子所需时间：$Delta t' = L' slash v = 633 slash (0.998 c) approx 2.12 times 10^(-6) (s)$。

$mu$ 子半衰期 $tau_0 = 2.2 times 10^(-6) (s)$ 略大于 2.12 × 10⁻⁶ s——所以在衰变前大气层已经通过。✓

两种视角（地面系的时间膨胀 vs $mu$ 子系的长度收缩）给出同样的物理结论——这是相对论自洽的绝佳体现。

#v(0.5em)

== 题4

(1) $gamma = 1 slash sqrt(1 - 0.8^2) = 1 slash sqrt(1 - 0.64) = 1 slash 0.6 = 1.667$。
$L = L_0 slash gamma = 100 slash 1.667 approx 60 (m)$。

(2) 地球系中，船以 $v$ 通过固定点，长度为 $L$：
$Delta t = L slash v = 60 slash (0.8 c) = 60 slash (0.8 times 3.0 times 10^8)$ \
$= 60 slash (2.4 times 10^8) = 2.5 times 10^(-7) (s)$。

(3) 飞船系中，地球以 $v$ 向船尾方向运动。固定点从船头到船尾，飞船测得船长仍为 $L_0 = 100 (m)$，地球观测者运动的距离也是 $L_0$。
$Delta t' = L_0 slash v = 100 slash (2.4 times 10^8) = 4.17 times 10^(-7) (s)$。

验证洛伦兹变换的一致性：
$Delta t' = gamma (Delta t - v Delta x slash c^2)$。在地球系中 $Delta x = L = 60 (m)$ 是固定点的位移吗？注意 $Delta x = 0$ 因为地球系中"固定点"位置不变。所以：
$Delta t' = gamma (Delta t - 0) = 1.667 times 2.5 times 10^(-7) = 4.17 times 10^(-7) (s)$ ✓

#v(0.5em)

== 题5

(1) $gamma = 1 slash sqrt(1 - 0.9^2) = 1 slash sqrt(1 - 0.81) = 1 slash sqrt(0.19) approx 1 slash 0.4359 approx 2.294$。

(2) 相对论动量：$p = gamma m_p v = 2.294 times 1.67 times 10^(-27) times (0.9 times 3.0 times 10^8)$ \
$= 2.294 times 1.67 times 10^(-27) times 2.7 times 10^8$ \
$= 2.294 times 4.509 times 10^(-19) approx 1.034 times 10^(-18) (k g dot m slash s)$。

经典动量：$p_class = m_p v = 1.67 times 10^(-27) times 2.7 times 10^8 approx 4.51 times 10^(-19) (k g dot m slash s)$。

$p slash p_class = gamma approx 2.29$。相对论动量是经典的 2.29 倍。

(3) 静能：$E_0 = m_p c^2 = 1.67 times 10^(-27) times (3.0 times 10^8)^2$ \
$= 1.67 times 10^(-27) times 9.0 times 10^16 = 1.503 times 10^(-10) (J)$。

总能量：$E = gamma E_0 = 2.294 times 1.503 times 10^(-10) approx 3.448 times 10^(-10) (J)$。

动能：$K = E - E_0 = (gamma - 1) m_p c^2 = 1.294 times 1.503 times 10^(-10) approx 1.945 times 10^(-10) (J)$。

(4) 经典动能：$K_class = 1 slash 2 m_p v^2 = 1 slash 2 times 1.67 times 10^(-27) times (2.7 times 10^8)^2$ \
$= 0.5 times 1.67 times 10^(-27) times 7.29 times 10^16 approx 6.09 times 10^(-11) (J)$。

$K slash K_class = 1.945 times 10^(-10) slash 6.09 times 10^(-11) approx 3.19$。

注意当 $v arrow.double.r c$ 时，$K$ 发散（$gamma arrow.double.r infinity$），而 $K_class$ 趋于有限值——这是光速不可超越的根本原因。

#v(0.5em)

== 题6

(1) 电子与正电子静止，总静能 $E_0 = 2 m_e c^2$ 全部转化为两个光子的能量。
$E_0 = 2 times 9.11 times 10^(-31) times (3.0 times 10^8)^2$ \
$= 2 times 9.11 times 10^(-31) times 9.0 times 10^16$ \
$= 2 times 8.199 times 10^(-14) = 1.640 times 10^(-13) (J)$。

每个光子能量：$E_gamma = E_0 slash 2 = 8.20 times 10^(-14) (J)$。

用 eV 表示：$E_gamma = 8.20 times 10^(-14) slash 1.602 times 10^(-19) approx 5.12 times 10^5 (e V) = 0.512 (M e V)$。

(2) $E_gamma = h f arrow.double.r f = E_gamma slash h$。
$h = 6.626 times 10^(-34) (J dot s)$。
$f = 8.20 times 10^(-14) slash 6.626 times 10^(-34) approx 1.24 times 10^20 (H z)$。

(3) $lambda = c slash f = 3.0 times 10^8 slash 1.24 times 10^20 approx 2.42 times 10^(-12) (m) = 2.42 (p m)$。属于 $gamma$ 射线波段。

(4) 有初动能的情况：
总能量守恒：$2 m_e c^2 + 2 K_0 = 2 E_gamma$。
$K_0 = 0.5 (M e V) = 5.0 times 10^5 (e V) = 8.01 times 10^(-14) (J)$。
$m_e c^2 = 8.199 times 10^(-14) (J) approx 0.512 (M e V)$。

$E_gamma = m_e c^2 + K_0 = 0.512 + 0.5 = 1.012 (M e V)$。
总光子能量：$2 E_gamma = 2.024 (M e V)$。
