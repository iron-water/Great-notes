证明 由定理2.41可知 $E$ 是一个闭集, 因此只需证明 $E$ 有界. 取一点 $x _ { 0 } \in E$

证法一 由定理2.35可知 $E$ 是一个列紧集. 用反证法, 假设 $E$ 无界, 则对于任意 $k \in \mathbb { N } ^ { * }$ 都存在 $x _ { k } \in E$ 满足$d ( x _ { k } , x _ { 0 } ) > k .$ . 于是就得到了一个序列 $\{ x _ { k } \} \subseteq E$ . 显然 $\{ x _ { k } \}$ 没有收敛子列, 出现矛盾. 于是可知 $E$ 有界.

证法一 令

$$
\mathcal {C} = \left\{N _ {i} \left(x _ {0}\right): i \in \mathbb {N} ^ {*} \right\}.
$$

显然 $c$ 是 $E$ 的一个开覆盖. 由于 $E$ 是紧致集, 因此可以选出一个有限子集族 $\{ N _ { k _ { 1 } } ( x _ { 0 } ) , \cdot \cdot \cdot , N _ { k _ { m } } ( x _ { 0 } ) \}$ 覆盖 $E$ . 令$r = \operatorname* { m a x } \{ k _ { 1 } , \cdots , k _ { m } \} .$ . 于是 $E \subseteq N _ { r } ( x _ { 0 } )$ . 这表明 $E$ 有界. ■

以上定理的逆命题是不成立的. 下面看 2 个例子.

例 2.73 在离散度量空间 $X$ 中, 若 $E$ 是一个无限集, 则 $E$ 是一个有界闭集, 但不是紧致集.

证明 (i) 显然离散空间中的任一集合都是有界的. 离散空间中间的任一集合都是开集, 因此任一集合都是闭集. 于是可知 $E$ 是一个有界闭集.  
(ii) 由于 $E$ 的每个单点集都是开集, 因此他的所有单点集组成的集合 $c$ 就是 $E$ 的一个开覆盖. 由于 $E$ 是一个无限集, 因此 $c$ 的任一子集族都无法覆盖 ??. 因此 $E$ 不是紧致的. ■

例 2.74 把有理数集 $\mathbb { Q }$ 看作度量空间, 上面的度量定义为

$$
d (a, b) = | a - b |, \quad \forall a, b \in \mathbb {Q}.
$$

令

$$
E = \left\{x \in \mathbb {Q}: 2 <   x ^ {2} <   3 \right\}.
$$

则 $E$ 是 $\mathbb { Q }$ 上的一个有界闭集, 但 $E$ 不是紧致集.

证明 显然 $E$ 是有界的且不是紧致的. 下面证明 $E$ 是一个闭集. 令

$$
D = \left\{x \in \mathbb {Q}: x ^ {2} \leq 2 \right\}, \quad F = \left\{x \in \mathbb {Q}: x ^ {2} \geq 3 \right\}.
$$

任取 $x _ { 0 } \in D$ , 显然存在 $x _ { 1 } \in D$ 满足 $x _ { 1 } > x _ { 0 }$ . 令 $r = x _ { 1 } - x _ { 0 }$ , 则 $N _ { r } ( x _ { 0 } ) \subseteq D$ , 因此 $D$ 是一个开集. 同理可知 $F$ 也是一个开集. 因此 $D \cup F$ 仍是一个开集. 于是可知 $E = \mathbb { Q } \backslash ( D \cup F )$ 是一个闭集. ■

不难证明, 在 $\mathbb { R } ^ { n }$ 中有界闭集和紧致集是等价的.

# 定理 2.37

在 $\mathbb { R } ^ { n }$ 中, 以下三个命题等价:

$1 ^ { \circ } ~ E$ 是一个有界闭集.  
$2 ^ { \circ } ~ E$ 是一个紧致集.  
$3 ^ { \circ } ~ E$ 是一个列紧集.

证明 由定理2.35可知 $2 ^ { \circ } \Leftrightarrow 3 ^ { \circ }$ . 由定理2.36可知 $2 ^ { \circ } \Rightarrow 1 ^ { \circ }$ , $3 ^ { \circ } \Rightarrow 1 ^ { \circ }$ . 由 $\mathbb { R } ^ { n }$ 上的 Weierstrass 定理可知有界闭集中的任一点列都存在收敛子列. 因此 $1 ^ { \circ } \Rightarrow 3 ^ { \circ }$ 也成立. ■

下面把 $\mathbb { R } ^ { n }$ 中的闭集套定理推广到一般的度量空间中.

# 引理 2.2

在度量空间 $X$ 中, 设一个子集族 $\{ K _ { \alpha } : \alpha \in I \}$ . 若 $\{ K _ { \alpha } : \alpha \in I \}$ 具有有限交性质, 且 $K _ { \alpha }$ 都是紧致集. 则

$$
\bigcap_ {\alpha \in I} K _ {\alpha} \neq \varnothing .
$$

证明 用反证法, 假设结论不成立. 则取定一个集合 $K _ { 1 } \in \{ K _ { \alpha } : \alpha \in I \} .$ , 则对于任一 $x \in K _ { 1 }$ , 都满足

$$
x \notin \bigcap_ {\alpha \in I} K _ {\alpha} \iff x \in \bigcup_ {\alpha \in I} K _ {\alpha} ^ {c}.
$$

因此 $C ~ = ~ \{ K _ { \alpha } ^ { c } ~ : ~ \alpha ~ \in ~ I \}$ 就是 $K _ { 1 }$ 的一个开覆盖. 由于 $K _ { 1 }$ 是紧致的, 因此可以从 C 中取出一个有限子集族$\{ K _ { \alpha _ { 1 } } ^ { c } , \cdot \cdot \cdot , K _ { \alpha _ { n } } ^ { c } \}$ 覆盖 $K _ { 1 }$ , 即

$$
K _ {1} \subseteq \bigcup_ {i = 1} ^ {n} K _ {\alpha_ {i}} ^ {c} \iff K _ {1} \cap \left(\bigcup_ {i = 1} ^ {n} K _ {\alpha_ {i}}\right) = \varnothing .
$$

这表明 $\{ K _ { \alpha } : \alpha \in I \}$ 不具备有限交性质, 出现矛盾. 于是可知命题成立.

# 定理 2.38 (紧集套定理)

在度量空间 $( X , d )$ 中, 设一列紧致集 $\{ K _ { n } \}$ . 若 $K _ { n + 1 } \supseteq K _ { n }$ $( n = 1 , 2 , \cdots )$ , 且

$$
\lim  _ {n \to \infty} \operatorname {d i a m} K _ {n} = 0.
$$

则存在唯一的 $\xi \in X$ 满足

$$
\{\xi \} = \bigcap_ {n = 1} ^ {\infty} K _ {n}.
$$

证明 令

$$
K = \bigcap_ {n = 1} ^ {\infty} K _ {n}.
$$

由于 $K _ { n + 1 } \supseteq K _ { n }$ $( n = 1 , 2 , \cdots )$ , 因此 $\{ K _ { n } \}$ 满足有限交性质. 由引理2.2可知 $K \neq \emptyset$ . 用反证法, 假设 $K$ 中存在不止一个元素, 则 diam $K > 0$ . 由于 $K _ { n } \supseteq K$ $\mathbf { \Phi } _ { n } = 1 , 2 , \cdots )$ . 因此

$$
\mathrm {d i a m} K _ {n} \geq \mathrm {d i a m} K > 0.
$$

这与 diam $K _ { n } \to 0$ 矛盾. 于是可知存在唯一的 $\xi \in X$ 满足 $\xi \in K$ .

在 $\mathbb { R }$ 上我们已经证明 Heine-Borel 定理和 Cauchy 收敛原理等价. 事实上在一般的度量空间中紧致性和完备性也有密切的关系.

# 定理 2.39 (紧致度量空间)

紧致的度量空间一定是完备的.

证明 设紧致的度量空间 $( X , d )$ , 任取一个 Cauchy 列 $\left\{ x _ { n } \right\}$ . 令 $E _ { n } = \{ x _ { k } : k \geq n \}$ , 则

$$
\lim  _ {n \to \infty} \operatorname {d i a m} E _ {n} = 0.
$$

由于命题2.19可知

$$
\lim  _ {n \to \infty} \operatorname {d i a m} \overline {{E}} _ {n} = 0.
$$

由于 $X$ 是紧致的, 由命题2.40可知 ${ \overline { { E } } } _ { n }$ 是紧致集. 由于 $E _ { n } \supseteq E _ { n + 1 } ,$ , 故 $\overline { { E } } _ { n } \supseteq \overline { { E } } _ { n + 1 }$ . 由紧集套定理可知

$$
\bigcap_ {i = n} ^ {\infty} \bar {E} _ {i} = \{\xi \}.
$$

由于

$$
d \left(x _ {n}, \xi\right) <   \operatorname {d i a m} \bar {E} _ {n} = \operatorname {d i a m} E _ {n} \rightarrow 0.
$$

于是可知 $x _ { n } \to \xi$ . 这表明 $X$ 是完备的.

在 $\mathbb { R }$ 中有 7 个刻画实数完备性的定理, 它们互相等价. 其中 Dedekind 定理、确界原理、单调收敛定理都需要序关系, 所以无法推广到一般的度量空间中. 其余的四个定理 ( Heine-Borel 定理、Bolzano-Weierstrass 定理、Cauchy收敛原理、闭区间套定理) 在一般的度量空间中有对应的内容, 其中:

(i) Heine-Borel 条件定义了紧致性.   
(ii) Bolzano-Weierstrass 条件定义了列紧性.   
(iii) Cauchy 列定义了度量空间的完备性.  
(iv) 闭区间套定理被推广为紧集套定理.

这样我们就从更高的视角看到了实数理论的本质.

# 2.5.3 紧致空间上的连续映射

紧致性的定义只涉及开集, 因此它显然是一个拓扑性质. 如果两个拓扑空间 $X$ 和 $Y$ 不同时为紧致空间, 则它们肯定不是同胚的. 因此例2.64和2.65中的映射显然不是同胚, 这是因为这两个例子中的 $X$ 不是紧致空间, 而?? 是紧致空间.

事实上, 紧致性不仅在同胚下保持, 在连续映射下也保持.

# 定理 2.40 (紧空间的连续像)

设连续映射 $f : X \to Y .$ , 其中 $X$ 和 $Y$ 都是拓扑空间. 若 $X$ 是紧致的, 则 $f ( X )$ 也是紧致的.

证明 任取一个 $f ( X )$ 的开覆盖 $c$ . 令

$$
\mathcal {C} ^ {\prime} = \left\{f ^ {- 1} (U): U \in \mathcal {C} \right\}
$$

则 $C ^ { \prime }$ 是 $X$ 的一个覆盖.有 $f$ 是连续的,因此 $C ^ { \prime }$ 是 $X$ 的一个开覆盖.由于 $X$ 是紧致的,因此可以从 $C ^ { \prime }$ 中取出有限个开集 $f ^ { - 1 } ( U _ { i } )$ $( i = 1 , 2 , \cdots , n )$ 覆盖 $X$ . 因此 $c$ 的子集族 $\{ U _ { 1 } , \cdots , U _ { n } \}$ 覆盖 $f ( X )$ . 这表明 $f ( X )$ 也是紧致的. ■

由以上结论可以得到一个同胚映射的判别法.

# 命题 2.42

设连续双射 $f : X \to Y$ , 其中 $X$ 和 $Y$ 都是拓扑空间. 若 $X$ 是一个紧致空间, 且 $Y$ 是一个 Hausdorff 空间, 则$f$ 是一个同胚.

证明 只需证明 $f ^ { - 1 }$ 是连续的, 也就是要证明 $X$ 中的任一闭集 $V$ 的在 $f$ 下的像 $f ( X )$ 是 $Y$ 上的一个闭集. 由命题2.40可知 $V$ 是紧致的. 由于 $f$ 是连续的, 因此 $f ( X )$ 仍是紧致的. 由于 $Y$ 是一个 Hausdorff 空间, 由命题2.41可知$f ( X )$ 是 $Y$ 上的一个闭集. ■

我们知道连续函数在有限闭区间上满足三个重要性质:一致连续性、有界性和极值性.前面已经证明 $D \subseteq \mathbb { R } ^ { n }$ 上的连续函数在有界闭集上继续满足这三个性质. 由于 $\mathbb { R } ^ { n }$ 上的有界闭集和紧致集等价, 因此这些性质本质上是紧致集上连续映射的性质. 下面来给出这三个定理的一般形式.

# 定理 2.41 (Heine-Cantor 一致连续性定理)

设连续映射 $f : X \to Y .$ , 其中 $X$ 和 ?? 都是度量空间. 若 $X$ 是紧致的, 则 $f$ 在 $X$ 上一致连续.

证明 由于 $X$ 是度量空间, 因此 $X$ 是列紧的. 下面只需要用定理2.16相同的方法即知命题成立.

# 定理 2.42

设连续映射 $f : X \to \mathbb { R } ^ { n }$ , 其中 $X$ 是一个度量空间. 若 $X$ 是紧致的, 则 $f$ 在 $X$ 上有界.

证明 由于 $X$ 是紧致的, 且 $f$ 在 $X$ 上连续, 故 $f ( X )$ 是 $\mathbb { R } ^ { n }$ 上的一个紧致集. 因此 $f ( X )$ 是 $\mathbb { R } ^ { n }$ 上的一个有界闭集.于是可知 $f$ 在 $X$ 上有界. ■

# 定理 2.43 (极值定理)

设连续函数 $f : D \to \mathbb { R } ,$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ . 若 $D$ 是紧致的, 则 $f$ 在 $D$ 上可以取到最大值和最小值.

上述三个定理成立的要求依次变高. 一致连续性定理中的连续映射可以是一般的映射, 有界定理需要向量值函数, 极值定理必须是多元函数.

# 2.5.4 连通性

在《数学分析 I》中介绍了连续函数的介值定理: 设连续函数 $f : [ a , b ] \to \mathbb { R } .$ 若 $r$ 是 $f ( a )$ , ?? (??) 之间的一个实数, 则存在 $\xi \in [ a , b ]$ 使得 $f ( c ) = r$ . 这个定理的成立依赖于区间 $[ a , b ]$ 是 “连成一片的”.

我们如果随意把一个区间 $I$ 从 $x _ { 0 }$ 处切开, 就得到一个 $I$ 的划分 $\{ J , K \}$ . 此时 $x _ { 0 }$ 同时是 $J$ 和 $K$ 的极限点, 它要么属于 $J$ , 要么属于 $K$ . 因此 $J$ 和 $K$ 不可能同时为开集. 于是我们得到了一个刻画连通性的方法.

# 定义 2.56 (连通集)

设拓扑空间 $X$ . 若 $X$ 的任一划分 $\{ U , V \}$ 都满足 $U , V$ 不同时是 $X$ 上的开集, 则称 $X$ 是一个连通空间 (connectedspace).

图 2.22: 连通集不能分成开集的无交并.  
![](images/e51202fc9ff14aeb8d3ca23b5f3c31d2245d6fa41903279324b2072f8e92136b.jpg)  
边界没有被囊括

注 证明一个拓扑空间的连通性通常用反证法.

注 若 $X$ 存在一个划分 $\{ U , V \}$ 满足 $U$ 和 $V$ 都是 $X$ 上的开集, 则称 $U$ 和 $V$ 是分离的 (separated).

刻画连通性的方法有很多,但上述方法有一个好处,就是只涉及到开集,因此立刻可以看出连通性是拓扑不变量. 换句话说, 所有与连通空间 $X$ 同胚的拓扑空间都是连通的. 下面来给出几个连通性的等价定义.

我们知道 $\mathbb { R } ^ { n }$ 中既是开集又是闭集的只有 $\mathbb { R } ^ { n }$ 和 $\mathcal { D }$ . 事实上这正是 $\mathbb { R } ^ { n }$ 连通性的体现.

# 命题 2.43

设拓扑空间 $X$ . 则 $X$ 是连通的当且仅当 $X$ 中既是开集又是闭集的子集只有 $X$ 和 $\mathcal { D }$ .

证明 只需证明 $X$ 不是连通的当且仅当 $X$ 中存在既是开集又是闭集的非空真子集 $U$ .

(i)证明充分性.设存在 $X$ 的非空真子集 $U$ 既是开集又是闭集.则 $U$ 和 $U ^ { c }$ 同时为 $X$ 上的开集.这就说明 $X$ 不是连通的.

(ii) 证明必要性. 设 $X$ 不是连通的, 则存在一个划分 $\{ U , U ^ { c } \}$ , $U$ 和 $U ^ { c }$ 都是 $X$ 上的开集, 于是可知 $U$ 既是开集又是闭集. ■

根据前面对区间连通性的研究, 不难得到连通性的另一种等价定义.

# 命题 2.44

设拓扑空间 $X$ . 则 $X$ 是连通的当且仅当 $X$ 的任一划分 $\{ U , V \}$ 都满足 $U \cap { \overline { { V } } } \neq \emptyset$ 或 $\overline { { U } } \cap V \neq \emptyset$ .

证明 只需证明 $X$ 不是连通的当且仅当 $X$ 中存在一个划分 $\{ U , V \}$ 满足 $U \cap { \overline { { V } } } = \emptyset$ 且 ${ \overline { { U } } } \cap V = \emptyset$ .

(i) 证明充分性. 设 $U \cap { \overline { { V } } } = \emptyset$ 且 ${ \overline { { U } } } \cap V = \emptyset$ . 则

$$
\overline {{U}} = \overline {{U}} \cap X = \overline {{U}} \cap (U \cup V) = (\overline {{U}} \cap U) \cup (\overline {{U}} \cap V) = U \cup \varnothing = U.
$$

这表明 $U$ 是一个闭集. 同理可知 $V$ 也是一个闭集. 于是 $U$ 和 $V$ 都是既开又闭的. 于是可知 $X$ 不是连通的.

(ii) 证明必要性. 设 $X$ 不是连通的. 则存在非空真子集 $U$ 既开又闭. 令 $V = U ^ { c }$ , 则 $V$ 也是既开又闭的. 因此${ \overline { { U } } } = U$ 且 ${ \overline { { V } } } = V .$ . 于是可知

$$
\varnothing = U \cap V = U \cap \bar {V}, \quad \varnothing = U \cap V = \bar {U} \cap V.
$$

注 上面的等价定义表明若 $X$ 是连通的, 则 $U$ 包含 $V$ 的极限点或 $V$ 包含 $U$ 的极限点.

下面看几个连通集的例子.

例 2.75 平凡拓扑空间都是连通的.

证明 设平凡拓扑空间 $X$ , 由于 $X$ 的开集只有 $\mathcal { D }$ 和 $X$ , 因此 $X$ 不存在划分 $\{ A , B \}$ 使得 $A$ 和 $B$ 都是开集, 于是可知$X$ 是连通的. ■

例 2.76 在 $\mathbb { R }$ 中, 集合 $I$ 是连通的当且仅当它是一个区间.

证明 (i) 证明必要性. 设 $I$ 是一个连通集. 任取两点 ??, ?? ∈ ?? $( a < b )$ . 只需证明 $[ a , b ] \subseteq I .$ 用反证法, 假设存在一点$c \in ( a , b )$ , 但 $c \notin { I . }$ 令

$$
A = \{x \in I: x <   c \}, \quad B = \{x \in I: x > c \}.
$$

这样就得到了 $I$ 的一个划分 $\{ A , B \}$ . 显然 $A$ 的闭包点小于等于 $c$ , 而 $B$ 的闭包点大于等于 $c$ , 因此

$$
A \cap \bar {B} = \varnothing , \quad \bar {A} \cap B = \varnothing .
$$

因此 $I$ 不是连通集, 出现矛盾. 于是可知必要性成立.

(ii) 证明充分性. 设 $I$ 是一个区间. 任意作一个 $I$ 的划分 $\{ A , B \}$ . 取 $a \in A$ , $b \in B$ . 不妨设 $a < b$ . 则 $[ a , b ] \subseteq I$ .取 $[ a , b ]$ 的中点,若中点属于 $A$ ,则把中点记作 $a _ { 1 }$ ,并记 $b _ { 1 } = b$ ,如果中点属于 $B$ ,则把中点记作 $b _ { 1 }$ ,并记 $a _ { 1 } = a$ . 然后继续取 $[ a _ { 1 } , b _ { 1 } ]$ 的中点, 照前述方法操作. 依次下去可以得到数列 $\{ a _ { n } \} \subseteq A$ , $\left\{ b _ { n } \right\} \subseteq B$ . 由闭区间套定理可知, 存在 $c \in [ a _ { n } , b _ { n } ]$ $( n = 1 , 2 , \cdots )$ , 且 $a _ { n } \to c$ , $b _ { n } \to c$ .因此 $c \in { \overline { { A } } }$ 且 $c \in { \overline { { B } } }$ .这表明 $A \cap { \overline { { B } } } \neq \emptyset$ 或 $\overline { { A } } \cap B \neq \emptyset$ .于是可知 $I$ 是连通的. ■

例 2.77 有理数集 $\mathbb { Q }$ 不是连通的.

证明 取一个无理数 $\alpha$ , 令

$$
U = \mathbb {Q} \cap (- \infty , \alpha), \quad V = \mathbb {Q} \cap (\alpha , + \infty).
$$

显然 $U$ 和 $V$ 都是 $\mathbb { Q }$ 上的开集且 $\{ U , V \}$ 是 $\mathbb { Q }$ 的一个划分. 于是可知 $\mathbb { Q }$ 不是连通的.

在《数学分析 I》中已经证明区间在连续函数下的像仍是区间. 这个结论可以推广.

# 定理 2.44 (连通空间的连续像)

设连续映射 $f : X \to Y .$ , 其中 $X$ 和 $Y$ 是拓扑空间. 若 $X$ 是连通的, 则 $f ( X )$ 也是连通的.

证明 用反证法. 假设 $f ( X )$ 存在一个划分 $\{ U , V \}$ , 其中 $U$ 和 $V$ 都是开集. 由于 $f$ 连续, 因此 $f ^ { - 1 } ( U )$ , $f ^ { - 1 } ( V )$ 也都是开集.由于 $U \cap V = \emptyset$ , 故 $f ^ { - 1 } ( U ) \cap f ^ { - 1 } ( V ) = \emptyset .$ .容易知道 $\left\{ f ^ { - 1 } ( U ) , f ^ { - 1 } ( V ) \right\}$ 是 $X$ 的一个划分.因此 $X$ 不是连通的, 出现矛盾. 于是可知 $f ( X )$ 也是连通的. ■

现在可以把介值定理推广到多元函数.

# 定理 2.45 (介值定理)

设连续函数 $f : D \to \mathbb { R } .$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ . 若 $D$ 是一个连通集, 则对于 $f ( { \pmb a } )$ 和 $f ( b )$ 之间任一实数 $\gamma$ 都存在$\pmb { c } \in D$ 使得 $f ( c ) = \gamma$ .

证明 由于 $D$ 是一个连通集, 且 $f$ 在 $D$ 上连续, 故 $f ( D )$ 也是一个连通集. 于是 $f ( D )$ 是一个区间. 不妨设 $f ( { \pmb a } ) <$ $f ( b )$ , 则

$$
\gamma \in (f (\boldsymbol {a}), f (\boldsymbol {b})) \subseteq f (D).
$$

于是可知存在 $\pmb { c } \in D$ 使得 $f ( c ) = \gamma$ .

# 命题 2.45

设拓扑空间 $X$ 有一个划分 $\{ U , V \}$ , 其中 $U$ 和 $V$ 都是开集. 若 ?? 是连通的, 则 $Y \subseteq U$ 或 $Y \subseteq V$ .

证明 由于 $\{ U , V \}$ 是 $X$ 的一个划分, 因此

$$
\left(U \cap Y\right) \cup \left(V \cap Y\right) = Y, \quad \left(U \cap Y\right) \cup \left(V \cap Y\right) = \varnothing .
$$

而 $U \cap Y$ 和 $V \cap Y$ 都是 $Y$ 上的开集,由于 $Y$ 是连通的,因此 $U \cap Y$ 和 $V \cap Y$ 必有一个是空集.这表明 $Y \subseteq U$ 或 $Y \subseteq V$ .

# 命题 2.46

在拓扑空间 $X$ 中, 设连通集 ??. 若集合 $B$ 满足 $A \subseteq B \subseteq { \overline { { A } } }$ . 则 $B$ 也是连通的.

证明 用反证法,假设 $B$ 不是连通的,则存在一个划分 $\{ V , U \}$ ,其中 $U$ 和 $V$ 都是开集.由于 $A$ 是连通的,由命题2.45可知 $A \subseteq U$ 或 $A \subseteq V$ . 不妨设 $A \subseteq U$ , 则 ${ \overline { { A } } } \subseteq { \overline { { U } } }$ . 由于 $V \cap { \overline { { U } } } = \emptyset$ . 因此 ${ \overline { { A } } } \cap V = \emptyset$ . 由于 $B \subseteq { \overline { { A } } }$ , 因此 $B \cap V = \emptyset$ . 这表明 $V = \emptyset$ . 这与 $\{ V , U \}$ 是一个划分矛盾. 于是可知 $B$ 也是连通的. ■

由以上命题立刻可知以下推论.

# 引理 2.3

在拓扑空间 $X$ 中, 若 $E$ 是连通的, 则 $\overline { E }$ 也是连通的.

# 2.5.5 道路连通

我们知道区间上的任意两点都可以用一条区间内的连续线段连接起来. 这就好像从一点可以找到一条 “道路” 通到另一个点.

# 定义 2.57 (道路连通)

设拓扑空间 ??. 设连续映射 $f : [ a , b ] \to X$ , 其中 $f ( a ) = x$ , $f ( b ) = y$ , $( x , y \in X )$ . 则称 $f$ 是 $x$ 到 $y$ 的一条道路(path). 若 $X$ 中的任意两点都存在一条道路, 则称 $X$ 是道路连通的 (path connected).

注 方便起见, $[ a , b ]$ 可以换成 [0, 1].

下面看一个常见例子.

例 2.78 单位球 在 $\mathbb { R } ^ { n }$ 中, 令

$$
B ^ {n} := \left\{\boldsymbol {x}: \| \boldsymbol {x} \| \leq 1 \right\}.
$$

则 $B ^ { n }$ 是道路连通的. 我们称 $B ^ { n }$ 为 $\mathbb { R } ^ { n }$ 中的单位球 (unit ball).

证明 任取 $\boldsymbol { x } , \boldsymbol { y } \in B ^ { n }$ . 令

$$
f (t) = (1 - t) \boldsymbol {x} + t \boldsymbol {y}, \quad t \in [ 0, 1 ].
$$

则 $f ( 0 ) = x$ , $f ( 1 ) = { \bf y }$ . 对于任一 $t \in [ 0 , 1 ]$ 都有

$$
\| f (t) \| = \| (1 - t) \boldsymbol {x} + t \boldsymbol {y} \| \leq (1 - t) \| \boldsymbol {x} \| + t \| \boldsymbol {y} \| \leq 1.
$$

因此 $f$ 是 $[ 0 , 1 ] \to B ^ { n }$ 的映射. 显然 $f$ 是连续的. 因此它是 $\boldsymbol { x }$ 到 $\textbf { y }$ 的一条道路. 于是可知 $B ^ { n }$ 是道路连通的.

注 上例中的 $f$ 称为 $\boldsymbol { x }$ 到 $\textbf {  { y } }$ 的直线道路 (straight path).

从上面的例子不难想到更一般的情况.

# 定义 2.58 (凸集)

在 $\mathbb { R } ^ { n }$ 中, 设非空集合 $E$ . 若对于任意 $\ b { x } , \ b { y } \in \mathbb { R } ^ { n }$ 和任一 $t \in [ 0 , 1 ]$ , 都有

$$
(1 - t) \boldsymbol {x} + t \boldsymbol {y} \in E.
$$

则称 $E$ 是一个凸集 (convex set).

显然凸集一定是连通集. 事实上, 还可以定义更一般的情况.

# 定义 2.59 (星形集)

在 $\mathbb { R } ^ { n }$ 中, 设非空集合 ??. 若存在 $\boldsymbol { x } \in \mathbb { R } ^ { n }$ , 使得任一 $\boldsymbol { \mathsf { y } } \in \mathbb { R } ^ { n }$ 和任一 $t \in [ 0 , 1 ]$ , 都有

$$
(1 - t) \boldsymbol {x} + t \boldsymbol {y} \in E.
$$

则称 $E$ 是一个星形集 (star set).

显然星形集一定是连通集. 需要注意凸集一定是星形集, 反之不然. 例如我们熟悉的五角星, 就是一个星形集,但它不是凸集.

![](images/b1ecf21228c97d6b8d5d628f71d0d96d6a4dbc2b904d61fcd2beb6f04fad6ac8.jpg)  
图 2.23: 凸集和星形集示意图.

例 2.79 穿孔空间 在 $\mathbb { R } ^ { n }$ 中, 令 $D = \mathbb { R } ^ { n } \backslash \{ \mathbf { 0 } \}$ , 则 $D$ 是道路连通的. 我们称 $D$ 为 $\mathbb { R } ^ { n }$ 中的穿孔空间 (punctured space).

证明 任取 $\pmb { x } , \pmb { y } \in D$ . 作 $\boldsymbol { x }$ 到 $\textbf { y }$ 的直线道路 $f : [ 0 , 1 ] \to D$ . 若 $\mathbf { 0 } \not \in f ( [ 0 , 1 ] )$ 则 $D$ 是道路连通的. 若 $\mathbf { 0 } \in f ( [ 0 , 1 ] )$ , 则

取一点 $z \not \in f ( [ 0 , 1 ] )$ . 然后作 $\boldsymbol { x }$ 到 ?? 的直线道路

$$
f _ {1} (t) = (1 - t) \boldsymbol {x} + t z, \quad t \in [ 0, 1 ].
$$

再作 $z$ 到 $\textbf { y }$ 的直线道路

$$
f _ {2} (t) = (2 - t) z + (t - 1) y, \quad t \in [ 1, 2 ]
$$

这样就找到了一条从 $x$ 到 ?? 的道路

$$
f (t) = \left\{ \begin{array}{l l} (1 - t) \boldsymbol {x} + t \boldsymbol {z}, & t \in [ 0, 1 ] \\ (2 - t) \boldsymbol {z} + (t - 1) \boldsymbol {y}, & t \in [ 1, 2 ] \end{array} \right..
$$

由粘接引理可知 $f$ 是 [0, 2] 上的一个连续映射, 且 $f ( 0 ) = x$ , $F ( 2 ) = \mathbf { y }$ . 不难知道 $f ( [ 0 , 2 ] ) \subseteq D$ . 因此 $f$ 就是 $x$ 到 $\textbf {  { y } }$ 的一条道路. 于是可知 $D$ 是道路连通的. ■

注 从上述证明过程可知, 若存在 $x$ 到 $y$ 和 $y$ 到 ?? 的道路, 则根据粘接引理一定存在一条 $x$ 到 ?? 的道路.

注 穿孔空间显然不是星形集.

# 定理 2.46 (道路连通空间的连续像)

设连续映射 $f : X \to Y .$ , 其中 $X$ 和 $Y$ 是拓扑空间. 若 $X$ 是道路连通的, 则 $f ( X )$ 也是道路连通的.

证明 任取 $f ( x )$ $f ( x ) , f ( y ) \in f ( X ) .$ . 由于 $X$ 是道路连通的, 因此存在 $x$ 到 $y$ 的道路 $p : [ 0 , 1 ] \to X$ , 其中 $p ( 0 ) = x$ ,$p ( 1 ) = y .$ . 令

$$
q = f \circ p: [ 0, 1 ] \to f (X).
$$

则

$$
q (0) = f [ p (0) ] = f (x), \quad q (1) = f [ p (1) ] = f (y).
$$

由于 $f$ 和 $p$ 都是连续映射, 因此 $q$ 也是连续映射. 于是在 $f ( X )$ 就找到了 $f ( x )$ 到 $f ( y )$ 的一条道路 $p : [ 0 , 1 ] $ $f ( X )$ . 于是可知 $f ( X )$ 也是道路连通的. ■

例 2.80 单位球面 在 $\mathbb { R } ^ { n }$ 中, 令

$$
S ^ {n - 1} := \left\{\boldsymbol {x}: \| \boldsymbol {x} \| = 1 \right\}.
$$

则 $S ^ { n - 1 }$ 是道路连通的. 我们称 $S ^ { n - 1 }$ 为 $\mathbb { R } ^ { n }$ 中的单位球面 (unit sphere).

证明 定义 $D = \mathbb { R } ^ { n } \backslash \{ \mathbf { 0 } \}$ 上的映射

$$
g (\boldsymbol {x}) = \frac {1}{\| \boldsymbol {x} \|} \boldsymbol {x}, \quad \forall \boldsymbol {x} \in D.
$$

显然 $g ( D ) = S ^ { n - 1 }$ . 由于穿孔空间 $D$ 是道路连通的, 而 $g$ 显然是连续映射, 于是可知 $S ^ { n - 1 }$ 也是道路连通的.

注 $S ^ { n - 1 }$ 的记号暗示了这个球面是 ?? − 1 维的.

从道路连通的角度可以得到一个判断连通性的方法.

# 定理 2.47

道路连通空间一定是连通空间.

证明 设 $X$ 是道路连通的.用反证法,假设 $X$ 不是连通的,则存在一个 $X$ 的划分 $\{ U , V \}$ ,其中 $U$ 和 $V$ 都是 $X$ 上的开集. 任取 $x \in U , y \in V$ . 由于 $X$ 是道路连通的, 因此存在 $x$ 到 $y$ 的一条道路 $f : [ 0 , 1 ] \to X$ . 显然 $\left\{ f ^ { - 1 } ( U ) , f ^ { - 1 } ( V ) \right\}$ 是 [0,1] 的一个划分. 由于 $f$ 是连续映射, 因此 $f ^ { - 1 } ( U ) , f ^ { - 1 } ( V )$ 都是开集. 这表明 [0,1] 不是连通的, 出现矛盾. 于是可知命题成立. ■

以上定理的逆命题不成立. 下面来看一个重要的反例.

例 2.81 拓扑学家的正弦曲线 设 $s$ 是函数 $\sin ( 1 / x )$ 在 (0,1] 上的图像. 则 $\overline { { S } }$ 是连通的, 但不是道路连通的.

证明 显然 $S$ 是道路连通的, 因此 $S$ 是连通的. 因此 $\overline { S }$ 也是连通的. 容易知道

$$
\bar {S} = (\{0 \} \times [ - 1, 1 ]) \cup S.
$$

这是因为对于任一 $y \in \left[ - 1 , 1 \right]$ , 点 $( 0 , y )$ 都是 $S$ 的极限点.

下面证明 $\overline { { S } }$ 不是道路连通的. 用反证法, 假设 $\overline { { S } }$ 是道路连通的, 则存在原点 $( 0 , 0 )$ 到 $\overline { { S } }$ 上某一点的道路 $f :$ $[ a , c ] \to { \overline { { S } } } .$ 由于 $f$ 连续, 因此 $f ^ { - 1 } ( \{ 0 \} \times [ - 1 , 1 ] )$ 是一个闭集, 于是存在最大值, 设这个最大值为 $b$ . 则 $f : [ b , c ] \to { \overline { { S } } }$ 把 $b$ 映到 $\{ 0 \} \times [ - 1 , 1 ]$ 中某一点 $( 0 , m )$ , 把 $( b , c ]$ 映到 $S$ 中. 不失一般性, 令 $[ b , c ] = [ 0 , 1 ]$ . 设 $f ( t ) = ( x ( t ) , y ( t ) )$ . 则$x ( 0 ) = 0$ , $y ( 0 ) = m$ , 且当 $t > 0$ 时

$$
x (t) > 0, \quad y (t) = \sin \frac {1}{x (t)}.
$$

如果能构造数列 $t _ { n } \to 0$ 使得 $y ( t _ { n } ) = ( - 1 ) ^ { n }$ , 则 $y ( t _ { n } )$ 不收敛, 因此 $y ( t )$ 不是连续函数, 这与 $f$ 是连续函数矛盾. 下面来构造 $\left\{ t _ { n } \right\}$ . 对于任一 $n \in \mathbb { N } ^ { * }$ , 取 $u$ 满足

$$
0 <   u <   x \left(\frac {1}{n}\right), \qquad \sin \frac {1}{u} = (- 1) ^ {n}.
$$

由于 $x ( t )$ 是连续的, 由介值定理可知存在 $t _ { n }$ 满足

$$
0 <   t _ {n} <   \frac {1}{n}, \qquad x (t _ {n}) = u.
$$

这表明 $t _ { n } \to 0$ 且

$$
y \left(t _ {n}\right) = \sin \frac {1}{x \left(t _ {n}\right)} = \frac {1}{u} = (- 1) ^ {n}.
$$

注 称为拓扑学家的正弦曲线 (topologist’s sine curve) 或称 Warsaw 正弦曲线 (Warsaw sine curve).

![](images/d4ae6bd61437ebca7c5bc6c8adcdd3d35f09ad42fbba2fb9f8e6ec9ab668793a.jpg)  
图 2.24: 连通但非道路连通.

# 定义 2.60 (区域)

在拓扑空间 $X$ 中, 若开集 $E$ 是连通的, 则称 $E$ 是一个区域 (Domain).

例 2.82 在 $\mathbb { R } ^ { n }$ 中, 任何邻域都是区域.

证明 同例2.78的方法可知球形邻域都是道路连通的,因此邻域都是连通集.由于邻域是开集,于是可知 $\mathbb { R } ^ { n }$ 中的任

何邻域都是区域.

例 2.83 区域一定是道路连通的.

证明 设区域 $E \subseteq \mathbb { R } ^ { n }$ . 任取 $x \in E$ , 令

$$
E _ {x} = \{\mathbf {y} \in E: E \text {中 存 在} x \text {到} y \text {道 路} \}.
$$

下面只需证明 $E _ { x } = E$ .

先证明 $E _ { x }$ 是一个开集. 任取 $z \in E _ { x }$ , 由于 $E$ 是一个开集, 故存在 $N _ { r } ( z ) \subseteq E$ . 由于邻域都是道路连通的, 因此对于任一 $w \in N _ { r } ( z )$ , 都存在 $w$ 到 $z$ 的道路, 而 ?? 到 $\boldsymbol { x }$ 的道路是存在的, 因此存在 $w$ 到 $\boldsymbol { x }$ 的道路. 这表明 $w \in E _ { x }$ .因此 $E _ { x }$ 是一个开集.

对于 $E$ 中两个不同的点 $\boldsymbol { x }$ 和 $\textbf {  { y } }$ ,容易知道 $E _ { x }$ 和 $E _ { \mathbf { y } }$ 要么相等,要么不交.事实上,当 $E _ { x } \cap E _ { y } \neq \emptyset$ 时,存在一点$\pmb { a }$ , 它和 $\boldsymbol { x }$ 有一条道路连通, 和 $\textbf {  { y } }$ 也有一条道路连通, 于是 $E _ { x }$ 中的任意一点总是可以按 $x , a , y$ 的顺序找到一条道路到达 $\textbf {  { y } }$ , 反之 $E _ { y }$ 中的任意一点也都可以找到一条道路达到 $\boldsymbol { x }$ . 这表明 $E _ { x } = E _ { y }$ .

于是 $E$ 可以拆成以下两个集合的不交并:

$$
E = E _ {x} \cup \left(\bigcup_ {y \in E \backslash E _ {x}} E _ {y}\right).
$$

由于 $E$ 是连通集, 且 $E _ { x }$ 和 $\textstyle \bigcup _ { y \in E \backslash E _ { x } } E _ { y }$ 都是开集, 因此 $E _ { x } = E$ 或 $E _ { x } = \mathcal { D }$ . 显然 $E _ { x }$ 非空. 于是就证明了 $E _ { x } = E$ . ■

注 上例表明, 对开集而言, 连通等价于道路连通.

# 2.5.6 Cantor 集

最后讲一个有趣且重要的例子作为本章的尾声.

# 定义 2.61 (Cantor 集)

把 R 上的闭区间 [0,1] 三等分后, 去掉中间的开区间, 把剩下的部分记作 $C _ { 1 }$ , 即

$$
C _ {1} = [ 0, 1 ] \backslash \left(\frac {1}{3}, \frac {2}{3}\right) = \left[ 0, \frac {1}{3} \right] \cup \left[ \frac {2}{3}, 1 \right].
$$

然后把 $C _ { 1 }$ 中的两个闭区间分别三等分, 然后分别去掉中间的开区间, 把剩下的部分记作 $C _ { 2 }$ , 即

$$
C _ {2} = C _ {1} \backslash \bigcup_ {k = 1} ^ {3} \left(\frac {3 k - 2}{3 ^ {2}}, \frac {3 k - 1}{3 ^ {2}}\right) = \left[ 0, \frac {1}{3 ^ {2}} \right] \cup \left[ \frac {2}{3 ^ {2}}, \frac {3}{3 ^ {2}} \right] \cup \left[ \frac {6}{3 ^ {2}}, \frac {7}{3 ^ {2}} \right] \cup \left[ \frac {8}{3 ^ {2}}, 1 \right].
$$

按此方法依次操作, 就可以得到一列闭集

$$
C _ {n} = C _ {n - 1} \backslash \bigcup_ {k = 1} ^ {3 ^ {n - 1}} \left(\frac {3 k - 2}{3 ^ {n}}, \frac {3 k - 1}{3 ^ {n}}\right), \quad n = 1, 2, \dots .
$$

令

$$
C = \bigcap_ {n = 0} ^ {\infty} C _ {n}.
$$

我们称集合 $C$ 为 Cantor 集 (Cantor set), 或三分集 (middle-thirds set).

![](images/6f2d4ca9b8291137e57222bf346e9677e8f7ca22878bd76e5bbb5367d8bbf72b.jpg)  
图 2.25: Cantor 集示意图.

Cantor 集是一个经典反例: 它深刻揭示了实数集 $\mathbb { R }$ 的拓扑结构. 它兼具我们已经学过的一连串重要概念: 有限闭集、紧致集、列紧集、完美集 (没有孤立点的闭集)、连通集、零测集、不可数集、分形集.

# 定理 2.48

Cantor 集是有限闭集、紧致集、列紧集.

证明 根据 Cantor 集的定义, $C _ { n }$ $( n = 1 , 2 , \cdots )$ 都是 $\mathbb { R }$ 上的闭集, 因此 $C$ 仍是 $\mathbb { R }$ 上的 l 一个闭集. 因此 $C$ 是一个有限闭集. 于是可知 $C$ 是紧致的, 也是列紧的. ■

# 定理 2.49

Cantor 集不包含任何开区间.

证明 由 Cantor 集的定义可知, 对于任意 $n , k \in \mathbb { N } ^ { * }$ , 集合

$$
\left(\frac {3 k - 2}{3 ^ {n}}, \frac {3 k - 1}{3 ^ {n}}\right)
$$

都与 $C$ 无交. 任取开区间 $( a , b ) \subseteq [ 0 , 1 ]$ . 总能找到一个足够大的 $N$ 满足

$$
\frac {1}{3 ^ {N}} <   \frac {b - a}{4}.
$$

此时一定存在 $K \in \mathbb { N } ^ { * }$ 使得

$$
\left(\frac {3 K - 2}{3 ^ {N}}, \frac {3 K - 1}{3 ^ {N}}\right) \subseteq (a, b).
$$

因此 $C$ 不可能包含 $( a , b )$ . 这表明 $C$ 不包含任何开区间.

注 这样的集合称为完全不连通集 (totally disconnected set).

# 定理 2.50

Cantor 集中没有孤立点.

证明 任取 $x \in C$ , 取 $x$ 的一个邻域 $U \subseteq [ 0 , 1 ] . \ : C _ { n }$ $C _ { n }$ 中包含 $x$ 的那个闭区间记作 $I _ { n } .$ .存在 $N \in \mathbb { N } ^ { * }$ , 当 $n > N$ 时 $I _ { n } \subseteq U$ .把 $I _ { n }$ 的那个不等于 $x$ 的端点记作 $x _ { n }$ . 则数列 $\{ x _ { n } \} _ { n > N } \subseteq U .$ . 这表明 $x$ 的任一去心邻域都含有 $C$ 中的无穷多项, 因此 $x$ 是 $C$ 的一个极限点. 于是可知 $C$ 中没有孤立点. ■

注 没有孤立点的闭集称为完美集 (perfect set).

# 定理 2.51

Cantor 集是一个不可数集.

证明 用反证法, 假设 $C$ 是一个可数集, 则可以把 $C$ 中的所有点排成一列, 记作 $x _ { 1 } , x _ { 2 } , \cdots , x _ { n } , \cdots .$ 下面构造一个开

区间列.

任取一个开区间 $I _ { 1 } \subseteq [ 0 , 1 ]$ 使得 $x _ { 1 } \in I _ { 1 }$ . 假设已经构造了开区间 $I _ { n }$ , 它满足 $I _ { n } \cap C \neq \emptyset$ . 由于 $C$ 中没有孤立点, 因此总是存在开区间 $I _ { n + 1 }$ 满足

$$
\bar {I} _ {n + 1} \subseteq I _ {n}, \quad x _ {n} \notin \bar {I} _ {n + 1}, \quad I _ {n + 1} \cap C \neq \varnothing .
$$

由于 $I _ { n + 1 } \cap C \neq \emptyset$ 满足归纳假设, 因此过程可以无限进行下去. 令

$$
K _ {n} = \bar {I} _ {n} \cap C, \quad n = 1, 2, \dots .
$$

由于 $C$ 是紧致的, 且 ${ \overline { { I } } } _ { n }$ 是 $\mathbb { R }$ 上的闭集, 由推论2.7可知 $K _ { n }$ ${ \bf \Phi } _ { n } = 1 , 2 , \cdots$ ) 都是紧致的. 由于 $x _ { n } \notin { \overline { { I } } } _ { n + 1 }$ , 故 $x _ { n } \notin K _ { n + 1 }$ $( n = 1 , 2 , \cdots )$ . 因此

$$
\bigcap_ {n = 1} ^ {\infty} K _ {n} = \varnothing .
$$

另一方面由于 $K _ { n }$ $\mathbf { \Phi } _ { n } = 1 , 2 , \cdots$ ) 非空, 且 $K _ { n } \supseteq K _ { n + 1 }$ $\mathbf { \Phi } _ { n } = 1 , 2 , \cdots$ ), 根据引理2.2可知

$$
\bigcap_ {n = 1} ^ {\infty} K _ {n} \neq \varnothing .
$$

出现矛盾. 于是可知 $C$ 是一个不可数集.

# 定理 2.52

Cantor 集 $C$ 是一个零测集.

证明 由 Cantor 集的定义可知 $C _ { n }$ 是 $2 ^ { n }$ 个闭区间的并, 其中每个区间长度都是 $1 / 3 ^ { n }$ . 因此 $C _ { n }$ 的长度为

$$
\left| C _ {n} \right| = 2 ^ {n} \cdot \frac {1}{3 ^ {n}} = \left(\frac {2}{3}\right) ^ {n} \rightarrow 0, \quad n \rightarrow \infty .
$$

由于 $C \subseteq C _ { n }$ $\mathbf { \Phi } _ { n } = 1 , 2 , \cdots ,$ ), 因此 $C$ 是一个零测集.

注 事实上 $C$ 和 $\mathbb { R }$ 的势是相等的.

1874 年, 爱尔兰数学家 Henry John Stephen Smith 首先发现了这种神奇的集合. 1883 年 Cantor 系统研究了三分集的一系列性质. Cantor 三分集奠定了现代点集拓扑学 (point-set topology) 的基础. 另一方面它和 Weierstrass 函数 (1872 年)、Peano 曲线 (1890) 共同成为 19 世纪末三大反例, 直接催生了实分析和分形几何理论.

# 第 3 章 线性代数与空间解析几何简介

# 内容提要

h 介绍行列式的基本性质.

h 介绍平面和直线的方程.

h 介绍矩阵的运算法则.

h 介绍空间中曲线和曲面的方程.

h 介绍向量的运算: 包括线性运算、数量级、向量积和混合积.

h 介绍二次曲线和二次曲面.

学习多元微分学和多元积分学时会涉及一些向量代数和解析几何的知识. 如果对这些知识不熟悉, 学习时会出现很多困难. 这些知识本身不属于《数学分析》, 因此在此仅仅给出相关知识的简要介绍, 详细内容会在《高等代数》和《解析几何》中详细讨论.

# 3.1 矩阵与行列式

# 3.1.1 二阶行列式

设 2 元线性方程组

$$
\left\{ \begin{array}{l} a _ {1 1} x + a _ {1 2} y = b _ {1} \\ a _ {2 1} x + a _ {2 2} y = b _ {2} \end{array} . \right. \tag {3.1}
$$

我们可以用中学学过的消元法来解这个方程组.[1] 方程乘以 $a _ { 2 1 }$ 减去 [2] 方程乘以 $a _ { 1 1 }$ 就可以消去 $x$ :

$$
\left(a _ {1 1} a _ {2 2} - a _ {1 2} a _ {2 1}\right) y = a _ {1 1} b _ {2} - a _ {2 1} b _ {1}.
$$

下面可以分为三种情况讨论:

(i) 当 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } a _ { 2 1 } = 0$ 且 $a _ { 1 1 } b _ { 2 } - a _ { 2 1 } b _ { 1 } = 0$ 时, 原方程组有无穷多个解;  
(ii) 当 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } a _ { 2 1 } = 0$ 且 $a _ { 1 1 } b _ { 2 } - a _ { 2 1 } b _ { 1 } \neq 0$ 时, 原方程组无解;  
(iii) 当 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } a _ { 2 1 } \neq 0$ 时, 原方程组有唯一解.

于是我们发现 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } a _ { 2 1 }$ 是否为零, 决定了方程组是否有唯一解. 且这个解为

$$
y = \frac {a _ {1 1} b _ {2} - a _ {2 1} b _ {1}}{a _ {1 1} a _ {2 2} - a _ {1 2} a _ {2 1}}.
$$

代入原方程组可以解出 $x$ :

$$
x = \frac {a _ {2 2} b _ {1} - a _ {1 2} b _ {2}}{a _ {1 1} a _ {2 2} - a _ {1 2} a _ {2 1}}.
$$

从以上讨论可以看到, 线性方程组是否有唯一解只与四个系数组成的多项式 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } a _ { 2 1 }$ 有关. 因此我们可以把它们按顺序排成一个数阵, 并把这个多项式作为判别方程组有唯一解的判别式(determinant).

# 定义 3.1 (矩阵)

由 $s \times m$ 个数排成的 $s$ 行 $m$ 列数阵

$$
\left[ \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 m} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 m} \\ \vdots & \vdots & & \vdots \\ a _ {s 1} & a _ {s 2} & \dots & a _ {s m} \end{array} \right]
$$

称为一个 $s \times m$ 矩阵 (matrix), 记作 $A _ { s \times m }$ , 或简记作 ??, 其中每一个数称为该矩阵的一个元素 (element), 第??行第 $j$ 列的元素称为矩阵的 $( i , j )$ 元, 记作 $A ( i ; j )$ , 其中 $i$ 称为行指标, $j$ 称为列指标. 若矩阵 $\pmb { A }$ 的 $( i , j )$ 元

是 $a _ { i j }$ , 那么矩阵可以记作 $A = \left( a _ { i j } \right)$ .

注 矩阵 $\pmb { A } = ( a _ { i j } ) _ { s \times n }$ , $\pmb { { \cal B } } = ( b _ { i j } ) _ { t \times m }$ 相等当且仅当 $s = t$ , $n = m$ 且

$$
\boldsymbol {A} (i; j) = \boldsymbol {B} (i; j), \quad i = 1, 2, \dots , s, j = 1, 2, \dots , n,
$$

记作 $\pmb { A } = \pmb { B }$ .

注 当矩阵 $A$ 的行数和列数都等于 $n$ 时, 称之为 $n$ 阶方阵 (square matrix), 或 $n$ 级矩阵.

# 定义 3.2 (2 阶行列式)

设 2 级矩阵

$$
\boldsymbol {A} = \left[ \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right].
$$

我们把多项式 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } a _ { 2 1 }$ 称为矩阵 ?? 的 2 阶行列式 (determinant of order 2), 记作

$$
\left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| := a _ {1 1} a _ {2 2} - a _ {1 2} a _ {2 1}.
$$

也可简记作 det ??, 或 $| A |$ .

定义了 2 阶行列式后, 我们就可以用行列式简洁地讨论二元线性方程组. 令

$$
\boldsymbol {A} = \left[ \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right], \qquad \boldsymbol {B} _ {1} = \left[ \begin{array}{c c} b _ {1} & a _ {1 2} \\ b _ {2} & a _ {2 2} \end{array} \right], \qquad \boldsymbol {B} _ {2} = \left[ \begin{array}{c c} a _ {1 1} & b _ {1} \\ a _ {2 1} & b _ {2} \end{array} \right].
$$

其中 $\pmb { A }$ 称为线性方程组的系数矩阵.

(i) 当 det $A = 0$ , det $\pmb { B } _ { 1 } = 0$ , det $\pmb { B } _ { 2 } = 0$ 时, 原方程组有无穷多个解;  
(ii) 当 det $A = 0$ 且 det $\pmb { B } _ { 1 }$ 和 det $\pmb { B } _ { 2 }$ 中有一个不为零时, 原方程组无解;  
(iii) 当 det $A \ne 0$ 时, 原方程组有唯一解:

$$
x = \frac {\det  B _ {1}}{\det  A}, \quad y = \frac {\det  B _ {2}}{\det  A}.
$$

上述结论称为 Cramer 法则 (Cramer’s rule), 在《高等代数》中将看到更一般的结论.

下面看几个例子.

例 3.1 解下列线性方程组:

(1) $\left\{ \begin{array} { l } { { 2 x + y = 5 } } \\ { { 5 x + 2 y = 1 2 } } \end{array} \right. .$

(2) ( 2?? + ?? = 54?? + 2?? = 3 . $\left\{ \begin{array} { l } { 2 x + y = 5 } \\ { 4 x + 2 y = 3 } \end{array} \right. .$

(3) ( 2?? + ?? = 5?? ?? $\left\{ \begin{array} { l } { 2 x + y = 5 } \\ { 4 x + 2 y = 1 0 } \end{array} \right. .$

解 (1) 计算

$$
\det  \boldsymbol {A} = \left| \begin{array}{l l} 2 & 1 \\ 5 & 2 \end{array} \right| = - 1, \qquad \det  \boldsymbol {B} _ {1} = \left| \begin{array}{l l} 5 & 1 \\ 1 2 & 2 \end{array} \right| = - 2, \qquad \det  \boldsymbol {B} _ {2} = \left| \begin{array}{l l} 2 & 5 \\ 5 & 1 2 \end{array} \right| = - 1.
$$

于是可知原方程组有唯一解:

$$
\left\{ \begin{array}{l} x = 2 \\ y = 1 \end{array} \right..
$$

(2) 计算

$$
\det  \boldsymbol {A} = \left| \begin{array}{c c} 2 & 1 \\ 4 & 2 \end{array} \right| = 0, \qquad \det  \boldsymbol {B} _ {1} = \left| \begin{array}{c c} 5 & 1 \\ 3 & 2 \end{array} \right| = 7.
$$

于是可知原方程组无解.

(3) 计算

$$
\det  \boldsymbol {A} = \left| \begin{array}{l l} 2 & 1 \\ 4 & 2 \end{array} \right| = 0, \qquad \det  \boldsymbol {B} _ {1} = \left| \begin{array}{l l} 5 & 1 \\ 1 0 & 2 \end{array} \right| = 0, \qquad \det  \boldsymbol {B} _ {2} = \left| \begin{array}{l l} 2 & 5 \\ 4 & 1 0 \end{array} \right| = 0.
$$

于是可知原方程组有无穷多个解.

# 3.1.2 三阶行列式

接下来我们继续看由 3 个方程组成的 3 元线性方程组的情况. 设 3 元线性方程组

$$
\left\{ \begin{array}{l} a _ {1 1} x + a _ {1 2} y + a _ {1 3} z = b _ {1} \\ a _ {2 1} x + a _ {2 2} y + a _ {2 3} z = b _ {2} \\ a _ {3 1} x + a _ {3 2} y + a _ {3 3} z = b _ {3} \end{array} \right..
$$

我们考虑用待定系数法消去 $y$ 和 ??. 设第一个方程乘以 $u$ 加第二个方程乘以 $\nu$ 加第三个方程乘以 $w$ 后可以消去 ??和 ??, 即

$$
\left\{ \begin{array}{l} \left(a _ {1 1} u + a _ {2 1} v + a _ {3 1} w\right) x = b _ {1} u + b _ {2} v + b _ {3} w \\ a _ {1 2} u + a _ {2 2} v + a _ {3 2} w = 0 \Longleftrightarrow a _ {1 2} \frac {u}{w} + a _ {2 2} \frac {v}{w} = - a _ {3 2} \\ a _ {1 3} u + a _ {2 3} v + a _ {3 3} w = 0 \Longleftrightarrow a _ {1 3} \frac {u}{w} + a _ {2 3} \frac {v}{w} = - a _ {3 3} \end{array} . \right. \tag {3.2}
$$

把以上方程组中的第二第三个方程看作关于 $u / w$ 和 $\nu / w$ 二元线性方程组. 用二元线性方程组的 Cramer 法则解得

$$
\frac {u}{w} = \frac {\left| \begin{array}{c c} - a _ {3 2} & a _ {2 2} \\ - a _ {3 3} & a _ {2 3} \end{array} \right|}{\left| \begin{array}{c c} a _ {1 2} & a _ {2 2} \\ a _ {1 3} & a _ {2 3} \end{array} \right|} = \frac {\left| \begin{array}{c c} a _ {2 2} & a _ {2 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right|}{\left| \begin{array}{c c} a _ {1 2} & a _ {2 2} \\ a _ {1 3} & a _ {2 3} \end{array} \right|}, \qquad \frac {v}{w} = \frac {\left| \begin{array}{c c} a _ {1 2} & - a _ {3 2} \\ a _ {1 3} & - a _ {3 3} \end{array} \right|}{\left| \begin{array}{c c} a _ {1 2} & a _ {2 2} \\ a _ {1 3} & a _ {2 3} \end{array} \right|} = \frac {- \left| \begin{array}{c c} a _ {1 2} & a _ {1 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right|}{\left| \begin{array}{c c} a _ {1 2} & a _ {2 2} \\ a _ {1 3} & a _ {2 3} \end{array} \right|}.
$$

于是找到了一组满足要求的系数:

$$
u = \left| \begin{array}{c c} a _ {2 2} & a _ {2 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right|, \qquad v = - \left| \begin{array}{c c} a _ {1 2} & a _ {1 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right|, \qquad w = \left| \begin{array}{c c} a _ {1 2} & a _ {2 2} \\ a _ {1 3} & a _ {2 3} \end{array} \right|.
$$

容易想到 $x$ 前面的系数 $a _ { 1 1 } u + a _ { 2 1 } \nu + a _ { 3 1 } w$ 可以决定这个方程组是否有唯一解. 设三元线性方程组的系数矩阵为??, 我们可以来定义 $\pmb { A }$ 三阶行列式:

$$
\begin{array}{l} \det  \boldsymbol {A} := a _ {1 1} u + a _ {2 1} v + a _ {3 1} w = a _ {1 1} \left| \begin{array}{c c} a _ {2 2} & a _ {2 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right| - a _ {2 1} \left| \begin{array}{c c} a _ {1 2} & a _ {1 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right| + a _ {3 1} \left| \begin{array}{c c} a _ {1 2} & a _ {2 2} \\ a _ {1 3} & a _ {2 3} \end{array} \right| \\ = a _ {1 1} a _ {2 2} a _ {3 3} + a _ {1 2} a _ {2 3} a _ {3 1} + a _ {1 3} a _ {2 1} a _ {3 2} - a _ {1 1} a _ {2 3} a _ {3 2} - a _ {1 2} a _ {2 1} a _ {3 3} - a _ {1 3} a _ {2 2} a _ {3 1}. \\ \end{array}
$$

# 定义 3.3 (3 阶行列式)

设 3 级矩阵

$$
\boldsymbol {A} = \left[ \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right],
$$

我们把多项式

$$
a _ {1 1} a _ {2 2} a _ {3 3} + a _ {1 2} a _ {2 3} a _ {3 1} + a _ {1 3} a _ {2 1} a _ {3 2} - a _ {1 1} a _ {2 3} a _ {3 2} - a _ {1 2} a _ {2 1} a _ {3 3} - a _ {1 3} a _ {2 2} a _ {3 1}
$$

称为矩阵 ?? 的 3 阶行列式 (determinant of order 3), 记作

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

也可简记作 det ??, 或 | ??|.

我们发现 2 阶行列式 2! 项的代数和, 其中每一项都是位于不同行、不同列的 2 个元素的乘积; 而 3 阶行列式是 3! 项的代数和, 其中每一项都是位于不同行, 不同列的 3 个元素的乘积. 我们只需要确定各项的符号即可. 以下给出两个计算 2 阶与 3 阶行列式的计算法则.

# 命题 3.1 (2,3 阶行列式的对角线法则)

在 $n$ 级矩阵中, 从左上角到右下角称为主对角线 (element of main diagonal), 从右上角到左下角称为次对角线(element of minor diagonal).

对于 2 阶行列式, 主对角元所成的项取正号, 次对角元的项取负号.

对于 3 阶行列式, 如图3.1所示, 凡是 “左上右下” 的都取正号;“左下右上” 的都取负号:

![](images/8e917aed14fb12973ff28427aea58e1e1cc39572b563e3d2931469e1523dd4b5.jpg)  
图 3.1: 3 阶行列式的对角线法则

我们看到我们实质上是用 2 阶行列式定义了 3 阶行列式, 于是很自然地引出了以下概念.

# 定义 3.4 (余子式和代数余子式)

设 3 级矩阵 $A = \left( a _ { i j } \right)$ , 划去 $\pmb { A }$ 的第 $i$ 行与第 $j$ 列后剩下的元素按原来顺序组成的 2 级矩阵的行列式称为矩阵 $\pmb { A }$ 的 $( i , j )$ 元的余子式 (complement minor), 记作 $M _ { i j }$ .根据划去的行和列,我们可以给余子式规定一个符号

$$
\boldsymbol {A} _ {i j} = (- 1) ^ {i + j} \boldsymbol {M} _ {i j},
$$

我们称 $A _ { i j }$ 为 $\pmb { A }$ 的 $( i , j )$ 元的代数余子式 (algebraic complementary minor).

$$
\boldsymbol {A} = \left[ \begin{array}{l l l} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right] \quad \boldsymbol {M} _ {2 3} = (- 1) ^ {2 + 3} \left[ \begin{array}{l l} a _ {1 1} & a _ {1 2} \\ a _ {3 1} & a _ {3 2} \end{array} \right]
$$

用代数余子式可以简洁地写出 3 阶行列式和 2 阶行列式的关系:

$$
\det  A = a _ {1 1} A _ {1 1} + a _ {2 1} A _ {2 1} + a _ {3 1} A _ {3 1}.
$$

我们可以把上式称为 3 阶行列式按第一列展开. 不难想到 3 阶行列式也可以按第二列第三列展开.

# 命题 3.2 (行列式的降阶)

设 3 级矩阵 $A = \left( a _ { i j } \right)$ . 则

$$
\begin{array}{l} \det  A \xlongequal {\text {按 第 一 列 展 开}} a _ {1 1} A _ {1 1} + a _ {2 1} A _ {2 1} + a _ {3 1} A _ {3 1}. \\ \xlongequal {\text {按 第 二 列 展 开}} a _ {1 2} \boldsymbol {A} _ {1 2} + a _ {2 2} \boldsymbol {A} _ {2 2} + a _ {3 2} \boldsymbol {A} _ {3 2}. \\ \xlongequal {\text {按 第 三 列 展 开}} a _ {1 3} \boldsymbol {A} _ {1 3} + a _ {2 3} \boldsymbol {A} _ {2 3} + a _ {3 3} \boldsymbol {A} _ {3 3}. \\ \end{array}
$$

现在回到前面的三元线性方程组, 我们希望三元线性方程组的解也可以用三阶行列式来表达. 根据三阶行列

式的定义, 由方程组3.2中的第一个方程立刻可知, 当方程组的系数行列式不为零时, 可以解得

$$
x = \frac {\left| \begin{array}{c c c} b _ {1} & a _ {1 2} & a _ {1 3} \\ b _ {2} & a _ {2 2} & a _ {2 3} \\ b _ {3} & a _ {3 2} & a _ {3 3} \end{array} \right|}{\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|}.
$$

用完全一样的方法可以得到 $y$ 和 ?? 的解. 这个结论可以总结为以下定理.

# 定理 3.1 (三元 Cramer 法则)

设 3 元线性方程组

$$
\left\{ \begin{array}{l} a _ {1 1} x _ {1 1} + a _ {1 2} x _ {1 1} + a _ {1 3} x _ {1 3} = b _ {1} \\ a _ {2 1} x _ {2 1} + a _ {2 2} x _ {2 2} + a _ {2 3} x _ {2 3} = b _ {2} \\ a _ {3 1} x _ {3 1} + a _ {3 2} x _ {3 2} + a _ {3 3} x _ {3 3} = b _ {3} \end{array} \right..
$$

令

$$
\boldsymbol {A} = \left[ \begin{array}{l l l} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right], \quad \boldsymbol {B} _ {1} = \left[ \begin{array}{l l l} b _ {1} & a _ {1 2} & a _ {1 3} \\ b _ {2} & a _ {2 2} & a _ {2 3} \\ b _ {3} & a _ {3 2} & a _ {3 3} \end{array} \right], \quad \boldsymbol {B} _ {2} = \left[ \begin{array}{l l l} a _ {1 1} & b _ {1} & a _ {1 3} \\ a _ {2 1} & b _ {2} & a _ {2 3} \\ a _ {3 1} & b _ {3} & a _ {3 3} \end{array} \right], \quad \boldsymbol {B} _ {3} = \left[ \begin{array}{l l l} a _ {1 1} & a _ {1 2} & b _ {1} \\ a _ {2 1} & a _ {2 2} & b _ {2} \\ a _ {3 1} & a _ {3 2} & b _ {3} \end{array} \right].
$$

当 det $A \ne 0$ 时方程组有唯一解, 且解为

$$
x = \frac {\det  B _ {1}}{A}, \qquad y = \frac {\det  B _ {2}}{A}, \qquad z = \frac {\det  B _ {3}}{A}.
$$

下面看一个例子.

例 3.2 解以下 3 元线性方程组

$$
\left\{ \begin{array}{l} 2 x - 3 y + z = - 1 \\ x + y + z = 6 \\ 3 x + y - 2 z = - 1 \end{array} \right..
$$

解 计算系数行列式:

$$
\det  A = \left| \begin{array}{c c c} 2 & - 3 & 1 \\ 1 & 1 & 1 \\ 3 & 1 & - 2 \end{array} \right| = - 4 - 9 + 1 - 2 - 6 - 3 = - 2 3.
$$

$$
\det  \boldsymbol {B} _ {1} = \left| \begin{array}{c c c} - 1 & - 3 & 1 \\ 6 & 1 & 1 \\ - 1 & 1 & - 2 \end{array} \right| = 2 + 3 + 6 + 1 - 3 6 + 1 = - 2 3.
$$

$$
\det  \boldsymbol {B} _ {2} = \left| \begin{array}{c c c} 2 & - 1 & 1 \\ 1 & 6 & 1 \\ 3 & - 1 & - 2 \end{array} \right| = - 2 4 - 3 - 1 + 2 - 2 - 1 8 = - 4 6.
$$

$$
\det  \boldsymbol {B} _ {3} = \left| \begin{array}{c c c} 2 & - 3 & - 1 \\ 1 & 1 & 6 \\ 3 & 1 & - 1 \end{array} \right| = - 2 - 5 4 - 1 - 1 2 - 3 + 3 = - 6 9.
$$

于是可知原方程组有唯一解, 且解为

$$
x = \frac {- 2 3}{- 2 3} = 1, \qquad y = \frac {- 4 6}{- 2 3} = 2, \qquad z = \frac {- 6 9}{- 2 3} = 3.
$$

# 3.1.3 行列式的性质

下面给出行列式的主要性质, 我们只给出 3 阶行列式的情况. 根据 3 阶行列式的定义, 可以很容易证明这些性质.《高等代数》中将证明一般的 $n$ 阶行列式的性质.

由 3 阶行列式的定义可以立即知道它有如下性质. 利用以下性质可以简化行列式的计算.

# 命题 3.3 (三角行列式)

3 阶三角行列式满足

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ 0 & a _ {2 2} & a _ {2 3} \\ 0 & 0 & a _ {3 3} \end{array} \right| = \left| \begin{array}{c c c} a _ {1 1} & 0 & 0 \\ a _ {2 1} & a _ {2 2} & 0 \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = a _ {1 1} a _ {2 2} a _ {3 3}.
$$

证明 按第一列或第一行展开得

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ 0 & a _ {2 2} & a _ {2 3} \\ 0 & 0 & a _ {3 3} \end{array} \right| = a _ {1 1} \left| \begin{array}{c c} a _ {2 2} & a _ {2 3} \\ 0 & a _ {3 3} \end{array} \right| = a _ {1 1} a _ {2 2} a _ {3 3}.
$$

$$
\left| \begin{array}{c c c} a _ {1 1} & 0 & 0 \\ a _ {2 1} & a _ {2 2} & 0 \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = a _ {1 1} \left| \begin{array}{c c} a _ {2 2} & 0 \\ a _ {3 2} & a _ {3 3} \end{array} \right| = a _ {1 1} a _ {2 2} a _ {3 3}.
$$

注 需要注意以下形式的行列式不是三角行列式:

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & 0 \\ a _ {3 1} & 0 & 0 \end{array} \right| = \left| \begin{array}{c c c} 0 & 0 & a _ {1 3} \\ 0 & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = - a _ {1 1} a _ {2 2} a _ {3 3}.
$$

行列式的第 $n$ 行变为第 $n$ 列称为转置 (transposition). 容易验证以下结论.

# 定理 3.2 (行列置换)

3 阶行列式满足

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = \left| \begin{array}{c c c} a _ {1 1} & a _ {2 1} & a _ {3 1} \\ a _ {1 2} & a _ {2 2} & a _ {3 2} \\ a _ {1 3} & a _ {2 3} & a _ {3 3} \end{array} \right|.
$$

注 由于行列置换后行列式的值不变, 因为关于行列式 “行” 的性质对于 “列” 都对应成立. 例如行列式既然可以按列展开, 根据这个定理就可以按行展开.

# 定理 3.3

3 阶行列式满足

(1) 任意一行为零行列式的值为零.   
(2) 任意一行乘以一个非零实数等于行列式的值乘以该非零实数. 例如

$$
\left| \begin{array}{c c c} k a _ {1 1} & k a _ {1 2} & k a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = k \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

(3) 任意一行是两组数的和, 则行列式可以拆分为两个行列式的和, 这两个行列式的这个行分别是这两组数, 而其余各行与原行列式的相应各行相同. 例如

$$
\left| \begin{array}{c c c} a _ {0 1} + a _ {1 1} & a _ {0 2} + a _ {1 2} & a _ {0 3} + a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = \left| \begin{array}{c c c} a _ {0 1} & a _ {0 2} & a _ {0 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| + \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

(4) 任意两行互换行列式的值变号. 例如

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = - \left| \begin{array}{c c c} a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

(5) 任意两行相同行列式的值为零. 例如

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = 0.
$$

(6) 任意两行成比例行列式的值为零. 例如

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ k a _ {1 1} & k a _ {1 2} & k a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = 0.
$$

(7) 任意一行乘以一个实数加到另一行行列式的值不变.

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} + k a _ {1 1} & a _ {2 2} + k a _ {1 2} & a _ {2 3} + k a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

证明 (1) 按零行展开即得.

(2) 按第一行展开得

$$
\left| \begin{array}{c c c} k a _ {1 1} & k a _ {1 2} & k a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = k a _ {1 1} A _ {1 1} + k a _ {1 2} A _ {1 2} + k a _ {1 3} A _ {1 3} = k (a _ {1 1} A _ {1 1} + a _ {1 2} A _ {1 2} + a _ {1 3} A _ {1 3}) = k A.
$$

(3) 按第一行展开得

$$
\begin{array}{l} \left| \begin{array}{c c c} a _ {0 1} + a _ {1 1} & a _ {0 2} + a _ {1 2} & a _ {0 3} + a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = (a _ {0 1} + a _ {1 1}) \boldsymbol {A} _ {1 1} + (a _ {0 2} + a _ {1 2}) \boldsymbol {A} _ {1 2} + (a _ {0 3} + a _ {1 3}) \boldsymbol {A} _ {1 3} \\ = \left(a _ {0 1} A _ {1 1} + a _ {0 2} A _ {1 2} + a _ {0 3} A _ {1 3}\right) + \left(a _ {1 1} A _ {1 1} + a _ {1 2} A _ {1 2} + a _ {1 3} A _ {1 3}\right) \\ = \left| \begin{array}{c c c} a _ {0 1} & a _ {0 2} & a _ {0 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| + \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|. \\ \end{array}
$$

(4) 按第一行展开得

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = a _ {1 1} \left| \begin{array}{c c c} a _ {2 2} & a _ {2 3} \\ a _ {3 2} & a _ {3 3} \end{array} \right| - a _ {1 2} \left| \begin{array}{c c c} a _ {2 1} & a _ {2 3} \\ a _ {3 1} & a _ {3 3} \end{array} \right| + a _ {1 3} \left| \begin{array}{c c c} a _ {2 1} & a _ {2 2} \\ a _ {3 1} & a _ {3 2} \end{array} \right|
$$

$$
= - \left( \begin{array}{c c c} - a _ {1 1} & a _ {2 2} & a _ {2 3} \\ & a _ {3 2} & a _ {3 3} \end{array} \right) + a _ {1 2} \left| \begin{array}{c c c} a _ {2 1} & a _ {2 3} \\ a _ {3 1} & a _ {3 3} \end{array} \right| - a _ {1 3} \left| \begin{array}{c c c} a _ {2 1} & a _ {2 2} \\ a _ {3 1} & a _ {3 2} \end{array} \right| = - \left| \begin{array}{c c c} a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

(5) 由 (4) 得

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = - \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

于是可知

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = 0.
$$

(6) 由 (2) 和 (5) 可知

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ k a _ {1 1} & k a _ {1 2} & k a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = k \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = 0.
$$

(7) 由 (3) 和 (6) 可知

$$
\left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} + k a _ {1 1} & a _ {2 2} + k a _ {1 2} & a _ {2 3} + k a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| + \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ k a _ {1 1} & k a _ {1 2} & k a _ {1 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| = \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3}\\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right|.
$$

注 容易验证 3 阶行列式的所有性质 2 阶行列式都满足.

求行列式的值通常有以下几种方法:

(1) 直接用定义展开求解.  
(2) 利用行列式的性质把行列式化为三角行列式求解.  
(3) 利用行列式的性质把行列式的某一行 (或某一列) 中的数尽量化为零后按该行 (或列) 展开.  
(4) 利用行列式的性质把行列式拆分为两个较为简单的行列式.

例 3.3 计算以下矩阵的行列式:

$$
\boldsymbol {A} = \left[ \begin{array}{r r r} 1 & - 4 & - 1 \\ - 1 & 8 & 3 \\ 2 & 0 & 1 \end{array} \right].
$$

解 解法一 由三阶行列式的定义得

$$
\det A = 8 - 2 4 + 0 - 0 - 4 + 1 6 = - 4.
$$

解法二 把行列式化为三角行列式后求解:

$$
\det  A = \left| \begin{array}{r r r} 1 & - 4 & - 1 \\ - 1 & 8 & 3 \\ 2 & 0 & 1 \end{array} \right| = \left| \begin{array}{r r r} 1 & - 4 & - 1 \\ 0 & 4 & 2 \\ 0 & 8 & 3 \end{array} \right| = \left| \begin{array}{r r r} 1 & - 4 & - 1 \\ 0 & 4 & 2 \\ 0 & 0 & - 1 \end{array} \right| = - 4.
$$

解法三 把行列式适当化简后按第一列展开:

$$
\det  A = \left| \begin{array}{c c c} 1 & - 4 & - 1 \\ - 1 & 8 & 3 \\ 2 & 0 & 1 \end{array} \right| = \left| \begin{array}{c c c} 1 & - 4 & - 1 \\ 0 & 4 & 2 \\ 0 & 8 & 3 \end{array} \right| = \left| \begin{array}{c c} 4 & 2 \\ 0 & - 1 \end{array} \right| = - 4.
$$

例 3.4 计算行列式:

$$
\left| \begin{array}{c c c} - 2 & 1 & - 3 \\ 9 8 & 1 0 1 & 9 7 \\ 1 & - 3 & 4 \end{array} \right|.
$$

解 先将行列式拆分后, 然后化简后展开:

原式 $= \left| { \begin{array} { r r r } { - 2 } & { 1 } & { - 3 } \\ { 1 0 0 } & { 1 0 0 } & { 1 0 0 } \\ { 1 } & { - 3 } & { 4 } \end{array} } \right| + \left| { \begin{array} { r r r } { - 2 } & { 1 } & { - 3 } \\ { - 2 } & { 1 } & { - 3 } \\ { 1 } & { - 3 } & { 4 } \end{array} } \right| = 1 0 0 \left| { \begin{array} { r r r } { - 2 } & { 1 } & { - 3 } \\ { 1 } & { 1 } & { 1 } \\ { 1 } & { - 3 } & { 4 } \end{array} } \right|$

$$
= 1 0 0 \left| \begin{array}{c c c} - 3 & 1 & - 4 \\ 0 & 1 & 0 \\ 4 & - 3 & 7 \end{array} \right| = 1 0 0 \left| \begin{array}{c c} - 3 & - 4 \\ 4 & 7 \end{array} \right| = - 5 0 0
$$

# 3.2 矩阵理论初步

# 矩阵及其线性运算

前面已经介绍了矩阵. 在数学分析中通常只需要用到 $3 \times 3$ 以内的实矩阵. 因此我们下面用 $3 \times 3$ 以内的矩阵为例来介绍矩阵的一些初步理论. 详细的理论会在高等代数中学到.

矩阵可以进行加法和数乘运算. 设 $3 \times 3$ 矩阵 $A = \left( a _ { i j } \right)$ , $\pmb { { \cal B } } = ( b _ { i j } )$ , 则它们可以如下作加法运算:

$$
\boldsymbol {A} + \boldsymbol {B} := \left[ \begin{array}{c c c} a _ {1 1} + b _ {1 1} & a _ {1 2} + b _ {1 2} & a _ {1 3} + b _ {1 3} \\ a _ {2 1} + b _ {2 1} & a _ {2 2} + b _ {2 2} & a _ {2 3} + b _ {2 3} \\ a _ {3 1} + b _ {3 1} & a _ {3 2} + b _ {3 2} & a _ {3 3} + b _ {3 3} \end{array} \right].
$$

设 $3 \times 3$ 矩阵 $A = \left( a _ { i j } \right)$ 和实数 $k$ , 则可以作数乘运算

$$
k \boldsymbol {A} := \left[ \begin{array}{c c c} k a _ {1 1} & k a _ {1 2} & k a _ {1 3} \\ k a _ {2 1} & k a _ {2 2} & k a _ {2 3} \\ k a _ {3 1} & k a _ {3 2} & k a _ {3 3} \end{array} \right].
$$

设 $3 \times 3$ 矩阵 $A = \left( a _ { i j } \right)$ , 我们称矩阵 $( - a _ { i j } )$ 为 $\pmb { A }$ 的负矩阵, 记作 −??. 这样我们就可以为矩阵定义减法

$$
\boldsymbol {A} - \boldsymbol {B} := \boldsymbol {A} + (- \boldsymbol {B}).
$$

容易验证矩阵加法和数乘运算的简单性质.

# 命题 3.4 (矩阵线性运算的性质)

对于任意 $s \times n$ 矩阵 $A , B , C$ 和任意实数 $k , l \in K$ , 则

1. 加法交换律: $\pmb { A } + \pmb { B } = \pmb { B } + \pmb { A }$ ;  
2. 加法结合律: $\left( A + B \right) + C = A + \left( B + C \right)$ ;  
3. 零元: $\pmb { A } + \pmb { 0 } = \pmb { 0 } + \pmb { A } = \pmb { A }$ ;   
4. 负元: $A + \left( - A \right) = \left( - A \right) + A = 0$ ;   
5. $1 A = A$   
6. $( k l ) A = k ( l A )$ ;   
7. $( k + l ) A = k A + l A$ ;  
8. $k ( A + B ) = k A + k B$ ;

# 定义 3.5 (转置矩阵)

设矩阵 $A _ { s \times n }$ , 把它的行列互换得到的矩阵称为矩阵 ?? 的转置 (transposition), 记作 $A ^ { T }$ .

容易验证矩阵的转置满足以下性质

# 命题 3.5 (矩阵转置的性质)

矩阵的转置满足

(1) $( A ^ { T } ) ^ { T } = A$   
(2) $( A + B ) ^ { T } = A ^ { T } + B ^ { T } .$   
(3) $( k A ) ^ { T } = k A ^ { T }$

# 定义 3.6 (对称矩阵)

设 $n$ 级矩阵 $\pmb { A }$ , 若 $A ^ { T } = A$ , 则称 $\pmb { A }$ 是对称矩阵 (symmetric matrix).

把所有 $m { \times } n$ 实矩阵组成的集合记作 $M _ { m \times n } ( \mathbb { R } )$ ,则容易知道定义了加法和数乘运算的 $M _ { m \times n } ( \mathbb { R } )$ 是实数域 $\mathbb { R }$ 上的一个线性空间, 我们称它为矩阵空间 (matrix space). 于是我们可以想研究向量一样研究矩阵. 为了研究 $M _ { m \times n } ( \mathbb { R } )$

中的度量结构, 我们希望定义 $M _ { m \times n } ( \mathbb { R } )$ 中的范数.

最自然的想法是把 $m \times n$ 矩阵 $A = \left( a _ { i j } \right)$ 看作一个 $m n$ 维向量, 令

$$
\left\| \boldsymbol {A} \right\| := \left(\sum_ {i = 1} ^ {m} \sum_ {j = 1} ^ {n} a _ {i j} ^ {2}\right) ^ {1 / 2}.
$$

显然这样定义的矩阵范数满足非负性、绝对一次齐次性和次可加性.

下面看一个例子.

例 3.5 设矩阵

$$
\boldsymbol {A} = \left[ \begin{array}{c c c} 3 & - 2 & 7 \\ 1 & 0 & 4 \end{array} \right], \quad \boldsymbol {B} = \left[ \begin{array}{c c c} - 2 & 0 & 1 \\ 5 & - 1 & 7 \end{array} \right].
$$

求 ?? + ??, ?? − ??, $5 A ^ { T } + 3 B ^ { T }$ .

解 直接计算得

$$
\boldsymbol {A} + \boldsymbol {B} = \left[ \begin{array}{r r r} 3 & - 2 & 7 \\ 1 & 0 & 4 \end{array} \right] + \left[ \begin{array}{r r r} - 2 & 0 & 1 \\ 5 & - 1 & 7 \end{array} \right] = \left[ \begin{array}{r r r} 1 & - 2 & 8 \\ 6 & - 1 & 1 1 \end{array} \right].
$$

$$
\boldsymbol {A} - \boldsymbol {B} = \left[ \begin{array}{r r r} 3 & - 2 & 7 \\ 1 & 0 & 4 \end{array} \right] - \left[ \begin{array}{r r r} - 2 & 0 & 1 \\ 5 & - 1 & 7 \end{array} \right] = \left[ \begin{array}{r r r} 5 & - 2 & 6 \\ - 4 & 1 & - 3 \end{array} \right].
$$

$$
5 \boldsymbol {A} ^ {T} + 3 \boldsymbol {B} ^ {T} = 5 \left[ \begin{array}{r r} 3 & 1 \\ - 2 & 0 \\ 7 & 4 \end{array} \right] + 3 \left[ \begin{array}{r r} - 2 & 5 \\ 0 & - 1 \\ 1 & 7 \end{array} \right] = \left[ \begin{array}{r r} 1 5 & 5 \\ - 1 0 & 0 \\ 3 5 & 2 0 \end{array} \right] + \left[ \begin{array}{r r} - 6 & 1 5 \\ 0 & - 3 \\ 3 & 2 1 \end{array} \right] = \left[ \begin{array}{r r} 9 & 2 0 \\ - 1 0 & - 3 \\ 3 8 & 4 1 \end{array} \right].
$$

# 线性映射与矩阵的乘法

我们先来研究平面上的旋转变换公式. 在直角坐标系中, 很容易对方程进行平移变换. 而在极坐标系中, 很容易对方程进行旋转变换. 所以当我们需要平移的时候, 尽量用直角坐标系, 当需要旋转时, 优先考虑极坐标系.

# 命题 3.6 (极坐标下的旋转公式)

在极坐标系中, 设点 $P ( r , \theta ) , P$ $P$ 绕极点逆时针旋转 $\varphi$ 角度后的坐标为 $P ^ { \prime } ( r ^ { \prime } , \theta ^ { \prime } )$ , 则

$$
\left\{ \begin{array}{l} r ^ {\prime} = r \\ \theta^ {\prime} = \theta + \varphi \end{array} \right..
$$

很显然, 一个点在直角坐标系中的坐标和在极坐标系中的坐标可以互相变换.

# 命题 3.7 (极坐标变换公式)

直角坐标系下的点 $( x , y )$ 和极坐标系下的点 $( r , \theta )$ 满足以下关系式

$$
\left\{ \begin{array}{l} x = r \cos \theta \\ y = r \sin \theta \end{array} \right..
$$

用以上公式可以立刻得到直角坐标系中的旋转公式.

# 定理 3.4 (直角坐标系中的旋转公式)

在直角坐标系中, 设点 $P ( x , y )$ 绕原点逆时针旋转 $\varphi$ 角度后到达点 $P ^ { \prime } ( x ^ { \prime } , y ^ { \prime } )$ , 则

$$
\left\{ \begin{array}{l} x ^ {\prime} = x \cos \varphi - y \sin \varphi \\ y ^ {\prime} = x \sin \varphi + y \cos \varphi \end{array} . \right. \tag {3.3}
$$

证明 设 $P$ 在极坐标系中的坐标分别为 $( r , \theta )$ , 则

$$
\left\{ \begin{array}{l} x = r \cos \theta \\ y = r \sin \theta \end{array} \right..
$$

设 $P ^ { \prime }$ 在极坐标系中的坐标为 $( r ^ { \prime } , \theta ^ { \prime } )$ . 根据极坐标的换元公式可知

$$
\begin{array}{l} x ^ {\prime} = r ^ {\prime} \cos \theta^ {\prime} = r \cos (\theta + \varphi) = r \cos \theta \cos \varphi - r \sin \theta \sin \varphi = x \cos \varphi - y \sin \varphi , \\ y ^ {\prime} = r ^ {\prime} \sin \theta^ {\prime} = r \sin (\theta + \varphi) = r \sin \theta \cos \varphi + r \cos \theta \sin \varphi = x \sin \varphi + y \cos \varphi . \\ \end{array}
$$

现在从映射的角度来看平面上的旋转变换. 我们把平面上一点逆时针旋转角度 $\varphi$ 这个几何变换记作 $\mathcal { T }$ , 则

$$
\begin{array}{l} \mathcal {T}: \mathbb {R} ^ {2} \to \mathbb {R} ^ {2} \\ \boldsymbol {x} \mapsto \mathcal {T} (\boldsymbol {x}). \\ \end{array}
$$

为了记号简洁, 下面把 $\mathcal T ( \pmb x )$ 简记作 $\mathcal { T } \boldsymbol { x }$ . 用平面几何的知识不难证明 $\mathcal { T }$ 对于平面上的任意两点 $\boldsymbol { x }$ 和 $\textbf {  { y } }$ 以及任一实数 $k$ 都满足

$$
\begin{array}{l} \mathcal {T} (x + y) = \mathcal {T} x + \mathcal {T} y, \\ \mathcal {T} (k \boldsymbol {x}) = k \mathcal {T} \boldsymbol {x}. \\ \end{array}
$$

这表明 $\mathcal { T }$ 保持向量的两种线性运算: 加法和数乘, 我们称这样的映射为 “线性映射”.

# 定义 3.7 (线性映射)

设实数域 $\mathbb { R }$ 上的线性空间 $V$ 与 $V ^ { \prime }$ , 以及 $V$ 到 $V ^ { \prime }$ 的一个映射 $\mathcal { A }$ . 若对于任意 $\alpha , \beta \in V$ , $k \in \mathbb { R }$ 都满足

$$
\begin{array}{l} \mathcal {A} (\alpha + \beta) = \mathcal {A} \alpha + \mathcal {A} \beta , \\ \mathcal {A} (k \alpha) = k \mathcal {A} \alpha . \\ \end{array}
$$

则称 A 是 $V$ 到 $V ^ { \prime }$ 的一个线性映射 (linear map).

线性映射 $\mathcal { T }$ 的对应法则实际上就是由公式3.3给出的.公式是一个关于 $x$ 和 $y$ 的二元线性方程组,我们把它系数矩阵记作 ${ \pmb T }$ , 通常我们称它为旋转矩阵 (rotation matrix). 如果记 $\boldsymbol { x } ^ { \prime } = ( x ^ { \prime } , y ^ { \prime } )$ , $\boldsymbol { x } = ( x , y )$ , 我们希望有以下等式:

$$
\boldsymbol {x} ^ {\prime} = \boldsymbol {T} \boldsymbol {x} \iff \left[ \begin{array}{c} x \cos \varphi - y \sin \varphi \\ x \sin \varphi + y \cos \varphi \end{array} \right] = \left[ \begin{array}{c c} \cos \varphi & - \sin \varphi \\ \sin \varphi & \cos \varphi \end{array} \right] \left[ \begin{array}{c} x \\ y \end{array} \right].
$$

把 $( x , y )$ 和 $( x ^ { \prime } , y ^ { \prime } )$ 分别看作 $2 \times 1$ 矩阵, 来总结一下上述的算法规则:

(1) 一个 $2 \times 2$ 矩阵 “乘以” 一个 $2 \times 1$ 矩阵得到了一个 $2 \times 1$ 矩阵.   
(1)“乘积矩阵” 的第一行第一列元素是左因子矩阵的第一行向量与右因子矩阵的第一列向量的内积.

参照上面总结的算法规则可以尝试定义矩阵的乘法.

# 定义 3.8 (矩阵的乘法)

设矩阵 $\pmb { A } = ( a _ { i j } ) _ { s \times n }$ , $\pmb { { \cal B } } = ( b _ { i j } ) _ { n \times m }$ , $C = ( c _ { i j } ) _ { s \times m }$ , 若 $c$ 的 $( i , j )$ 元满足

$$
c _ {i j} = \sum_ {k = 1} ^ {n} a _ {i k} b _ {k j}, \quad i = 1, \dots , s, j = 1, \dots , m,
$$

则矩阵 $c$ 称为 $\pmb { A }$ 与 $\pmb { B }$ 的乘积 (product), 记作 $C = A B$ .

定义了矩阵乘法以后, 平面上的旋转变换 $\mathcal { T }$ 就可以定义为”

$$
\begin{array}{l} \mathcal {T}: \mathbb {R} ^ {2} \to \mathbb {R} ^ {2} \\ x \mapsto T x. \\ \end{array}
$$

这表明点 $\boldsymbol { x }$ 作一次旋转变换 $\mathcal { T }$ 等价于左乘一个矩阵??.如此以来矩阵就和线性映射产生了一种奇妙的联系!我们把矩阵 ${ \pmb T }$ 称为线性映射 $\mathcal { T }$ 的矩阵.

我们希望进一步探索线性映射和矩阵的内在关系. 现在我们把平面上逆时针旋转 $\theta$ 角度的变换记作 ??:

$$
S: \mathbb {R} ^ {2} \to \mathbb {R} ^ {2}
$$

$$
\boldsymbol {x} \mapsto S \boldsymbol {x}.
$$

其中

$$
\boldsymbol {S} = \left[ \begin{array}{c c} \cos \theta & - \sin \theta \\ \sin \theta & \cos \theta \end{array} \right].
$$

现在让点 $\boldsymbol { x }$ 先逆时针旋转 $\varphi$ 角度,再旋转 $\theta$ 角度得到点 $\mathbf { { \boldsymbol { x } } } ^ { \prime \prime }$ ,从映射的角度看相当于对 $\boldsymbol { x }$ 作用了复合映射 $s \circ \mathcal { T }$ , 为了记号简便,我们把 $s \circ \mathcal { T }$ 简记作 $s \tau$ .现在我们想知道这个复合映射 $s \tau$ 的公式.通过简单的代数运算不难知道:

$$
\begin{array}{l} x ^ {\prime \prime} = x ^ {\prime} \cos \theta - y ^ {\prime} \sin \theta = (x \cos \varphi - y \sin \varphi) \cos \theta - (x \sin \varphi + y \cos \varphi) \sin \theta \\ = (\cos \theta \cos \varphi - \sin \theta \sin \varphi) x + (- \cos \theta \sin \varphi - \sin \theta \cos \varphi) y \\ \end{array}
$$

$$
\begin{array}{l} y ^ {\prime \prime} = x ^ {\prime} \sin \theta + y ^ {\prime} \cos \theta = (x \cos \varphi - y \sin \varphi) \sin \theta + (x \sin \varphi + y \cos \varphi) \cos \theta \\ = (\sin \theta \cos \varphi + \cos \theta \sin \varphi) x + (- \sin \theta \sin \varphi + \cos \theta \cos \varphi) y \\ \end{array}
$$

因此复合映射 $s \tau$ 的矩阵就是

$$
\left[ \begin{array}{c c} \cos \theta \cos \varphi - \sin \theta \sin \varphi & - \cos \theta \sin \varphi - \sin \theta \cos \varphi \\ \sin \theta \cos \varphi + \cos \theta \sin \varphi & - \sin \theta \sin \varphi + \cos \theta \cos \varphi \end{array} \right]
$$

我们惊喜地发现这个矩阵正式乘积矩阵 ????:

$$
\left[ \begin{array}{c c} \cos \theta \cos \varphi - \sin \theta \sin \varphi & - \cos \theta \sin \varphi - \sin \theta \cos \varphi \\ \sin \theta \cos \varphi + \cos \theta \sin \varphi & - \sin \theta \sin \varphi + \cos \theta \cos \varphi \end{array} \right] = \left[ \begin{array}{c c} \cos \theta & - \sin \theta \\ \sin \theta & \cos \theta \end{array} \right] \left[ \begin{array}{c c} \cos \varphi & - \sin \varphi \\ \sin \varphi & \cos \varphi \end{array} \right].
$$

这就进一步揭示了线性映射和矩阵的深刻联系! 线性映射乘积的矩阵恰好是线性映射矩阵的乘积! 这说明矩阵的乘法运算是有合理的.关于这个主题将在《高等代数》中深入讨论.基于这个认识,数学家喜欢把线性映射和矩阵同等看待 (但仅限有限维的情况).

下面看几个计算矩阵乘法的例子.

例 3.6 计算下列矩阵的乘积

$$
\begin{array}{l} \left[ \begin{array}{c c} 5 & 3 \\ 2 & 7 \end{array} \right] \left[ \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right]. \quad \left[ \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right] \left[ \begin{array}{c c} 5 & 3 \\ 2 & 7 \end{array} \right]. \\ \left[ \begin{array}{c c} 0 & 2 \\ 0 & 3 \end{array} \right] \left[ \begin{array}{c c} 1 & 1 \\ 0 & 0 \end{array} \right]. \quad \left[ \begin{array}{c c} 1 & 1 \\ 0 & 0 \end{array} \right] \left[ \begin{array}{c c} 0 & 2 \\ 0 & 3 \end{array} \right]. \\ [ - 1, 3, 2 ] \left[ \begin{array}{c} 4 \\ 0 \\ 7 \end{array} \right]. \quad \left[ \begin{array}{c} 4 \\ 0 \\ 7 \end{array} \right] [ - 1, 3, 2 ]. \\ \left[ \begin{array}{c c} 7 & - 1 \\ - 2 & 5 \\ 3 & - 4 \end{array} \right] \left[ \begin{array}{c c} 1 & 4 \\ - 5 & 2 \end{array} \right]. \quad [ x _ {1}, x _ {2}, x _ {3} ] \left[ \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 2} & a _ {2 2} & a _ {2 3} \\ a _ {1 3} & a _ {2 3} & a _ {3 3} \end{array} \right] \left[ \begin{array}{c} x _ {1} \\ x _ {2} \\ x _ {3} \end{array} \right]. \\ \end{array}
$$

解 直接计算得

$$
\left[ \begin{array}{c c} 5 & 3 \\ 2 & 7 \end{array} \right] \left[ \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right] = \left[ \begin{array}{c c} 3 & 5 \\ 7 & 2 \end{array} \right]. \quad \left[ \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right] \left[ \begin{array}{c c} 5 & 3 \\ 2 & 7 \end{array} \right] = \left[ \begin{array}{c c} 2 & 7 \\ 5 & 3 \end{array} \right].
$$

$$
\left[ \begin{array}{l l} 0 & 2 \\ 0 & 3 \end{array} \right] \left[ \begin{array}{l l} 1 & 1 \\ 0 & 0 \end{array} \right] = \left[ \begin{array}{l l} 0 & 0 \\ 0 & 0 \end{array} \right]. \quad \left[ \begin{array}{l l} 1 & 1 \\ 0 & 0 \end{array} \right] \left[ \begin{array}{l l} 0 & 2 \\ 0 & 3 \end{array} \right] = \left[ \begin{array}{l l} 0 & 5 \\ 0 & 0 \end{array} \right].
$$

$$
\begin{array}{l} [ - 1, 3, 2 ] \left[ \begin{array}{l} 4 \\ 0 \\ 7 \end{array} \right] = 1 0. \quad \left[ \begin{array}{l} 4 \\ 0 \\ 7 \end{array} \right] [ - 1, 3, 2 ] = \left[ \begin{array}{r r r} - 4 & 1 2 & 8 \\ 0 & 0 & 0 \\ - 7 & 2 1 & 1 4 \end{array} \right]. \\ \left[ \begin{array}{r r} 7 & - 1 \\ - 2 & 5 \\ 3 & - 4 \end{array} \right] \left[ \begin{array}{c c} 1 & 4 \\ - 5 & 2 \end{array} \right] = \left[ \begin{array}{c c} 1 2 & 2 6 \\ - 2 7 & 2 \\ 2 3 & 4 \end{array} \right]. \\ \left[ x _ {1}, x _ {2}, x _ {3} \right] \left[ \begin{array}{l l l} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {1 2} & a _ {2 2} & a _ {2 3} \\ a _ {1 3} & a _ {2 3} & a _ {3 3} \end{array} \right] \left[ \begin{array}{l} x _ {1} \\ x _ {2} \\ x _ {3} \end{array} \right] = \left[ x _ {1}, x _ {2}, x _ {3} \right] \left[ \begin{array}{l} a _ {1 1} x _ {1} + a _ {1 2} x _ {2} + a _ {1 3} x _ {3} \\ a _ {1 2} x _ {1} + a _ {2 2} x _ {2} + a _ {2 3} x _ {3} \\ a _ {1 3} x _ {1} + a _ {2 3} x _ {2} + a _ {3 3} x _ {3} \end{array} \right] \\ = a _ {1 1} x _ {1} ^ {2} + a _ {1 2} x _ {2} x _ {1} + a _ {1 3} x _ {3} x _ {1} + a _ {1 2} x _ {1} x _ {2} + a _ {2 2} x _ {2} ^ {2} + a _ {2 3} x _ {3} x _ {2} + a _ {1 3} x _ {1} x _ {3} + a _ {2 3} x _ {2} x _ {3} + a _ {3 3} x _ {3} ^ {2}. \\ = a _ {1 1} x _ {1} ^ {2} + a _ {2 2} x _ {2} ^ {2} + a _ {3 3} x _ {3} ^ {2} + 2 a _ {1 2} x _ {1} x _ {2} + 2 a _ {2 3} x _ {2} x _ {3} + 2 a _ {1 3} x _ {3} x _ {1}. \\ \end{array}
$$

# 矩阵乘法的性质

下面来研究矩阵乘法的运算法则. 大部分的运算性质只需用矩阵乘法的定义直接证明.

# 命题 3.8 (矩阵乘积的转置)

设 $A _ { s \times n } = ( a _ { i j } )$ , $B _ { n \times m } = ( b _ { i j } )$ . 则

$$
\left(\boldsymbol {A} \boldsymbol {B}\right) ^ {T} = \boldsymbol {B} ^ {T} \boldsymbol {A} ^ {T}.
$$

证明 由矩阵乘法的定义和转置的定义计算得:

$$
\left(\boldsymbol {A} \boldsymbol {B}\right) ^ {T} (i; j) = (\boldsymbol {A} \boldsymbol {B}) (j; i) = \sum_ {k = 1} ^ {n} a _ {j k} b _ {k i}.
$$

$$
\left(\boldsymbol {B} ^ {T} \boldsymbol {A} ^ {T}\right) (i; j) = \sum_ {k = 1} ^ {n} b _ {k i} a _ {j k}. = \sum_ {k = 1} ^ {n} a _ {j k} b _ {k i}.
$$

于是可知 $( A B ) ^ { T } = B ^ { T } A ^ { T }$

由于矩阵乘法具有结合律,因此可以定义 $n$ 级矩阵的方幂.所实数域上的有 $n$ 级矩阵组成的集合记作 $M _ { n } ( \mathbb { R } )$ .

# 定义 3.9 (方阵的幂)

在 $M _ { n } ( \mathbb { R } )$ 中, 定义

$$
\boldsymbol {A} ^ {m} := \underbrace {\boldsymbol {A} \cdot \boldsymbol {A} \cdots \boldsymbol {A}} _ {m \text {个} \boldsymbol {A}}, \quad m \in \mathbb {N} ^ {*}.
$$

显然有以下运算性质.

# 命题 3.9

在 $M _ { n } ( \mathbb { R } )$ 中, 对于任意 $k , l \in \mathbb { N } ^ { * }$ 都有

$$
\boldsymbol {A} ^ {k} \boldsymbol {A} ^ {l} = \boldsymbol {A} ^ {k + l}, \qquad \left(\boldsymbol {A} ^ {k}\right) ^ {l} = \boldsymbol {A} ^ {k l}.
$$

矩阵乘法具有以下运算律.

# 命题 3.10 (矩阵乘法的运算性质)

矩阵乘法满足以下运算律

(1) 结合律: $( A B ) C = A ( B C )$ .   
(2) 左右分配律: $A ( B + C ) = A B + A C$ , $( B + C ) A = B A + C A$   
(3) 乘法和数乘的关系: $k ( A B ) = ( k A ) B = A ( k B )$ .

我们看到 $M _ { n } ( \mathbb { R } )$ 中定义了三种运算, 其中加法运算和乘法运算满足 6 条环公理, 因此它是一个环, 我们称它为 $n$ 级矩阵环 (matrix ring). 同时 $M _ { n } ( \mathbb { R } )$ 也是一个实数域上的线性空间, 且数乘和乘法运算满足相容性:

$$
k (\boldsymbol {A} \boldsymbol {B}) = (k \boldsymbol {A}) \boldsymbol {B} = \boldsymbol {A} (k \boldsymbol {B}).
$$

这样的代数结构我们称之为结合代数 (associative algebra), 简称代数 . 我们把 $M _ { n } ( \mathbb { R } )$ 称为矩阵代数 (matrix algebra).

矩阵的乘法运算和我们熟悉的实数乘法有两个地方不一样.第一是不满足交换律,第二是不满足消去律,即存在零因子.

不满足交换律是显然的, 因为矩阵乘法要有意义首先需要左因子的列数等于右因子的行数, 交换后这个条件未必满足. 但是即便满足这个条件, 一般情况下矩阵乘法也满足交换律. 请看一个例子.

例 3.7 设矩阵

$$
\boldsymbol {A} = \left[ \begin{array}{c c} 0 & 0 \\ 1 & 1 \end{array} \right], \qquad \boldsymbol {A} = \left[ \begin{array}{c c} 0 & 1 \\ 0 & 1 \end{array} \right].
$$

分别计算 ???? 和 $\pmb { B A }$ .

解 计算可知

$$
\boldsymbol {A} \boldsymbol {B} = \left[ \begin{array}{c c} 0 & 0 \\ 0 & 2 \end{array} \right], \qquad \boldsymbol {B} \boldsymbol {A} = \left[ \begin{array}{c c} 1 & 1 \\ 1 & 1 \end{array} \right].
$$

事实上, 在 $M _ { n } ( \mathbb { R } )$ 中, 若 $\pmb { A }$ 与任一矩阵都可交换, 则 ?? 只能形如

$$
\left[ \begin{array}{c c c c} k & 0 & \dots & 0 \\ 0 & k & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & k \end{array} \right].
$$

这种矩阵称为数量矩阵 (quantitative matrix). 在《高等代数》中将给出证明.

下面看消去律和零因子. 我们知道实数乘法满足消去律:

$$
a \neq 0, a b = a c \iff b = c.
$$

消去律等价于以下命题

$$
a b \neq 0 \iff a \neq 0, b \neq 0.
$$

这表明实数乘法中没有零因子 (如果非零元满足 $a b = 0$ 则称它们是零因子). 但矩阵乘法中存在零因子, 因此矩阵乘法不满足消去律! 请看一个例子.

例 3.8 设矩阵

$$
\boldsymbol {A} = \left[ \begin{array}{c c} 0 & 1 \\ 0 & 1 \end{array} \right], \qquad \boldsymbol {A} = \left[ \begin{array}{c c} 1 & 1 \\ 0 & 0 \end{array} \right].
$$

计算 ????.

解 计算可知

$$
\boldsymbol {A} \boldsymbol {B} = \left[ \begin{array}{c c} 0 & 0 \\ 0 & 0 \end{array} \right].
$$

2 级或 3 级矩阵的乘积的行列式满足以下性质.

# 定理 3.5 (Binet-Cauchy 公式)

设 2 级或 3 级矩阵 ??, ??, 则

$$
\det  A B = \det  A \det  B.
$$

证明 只证明 2 级矩阵的情况. 设 $A = \left( a _ { i j } \right)$ , $\pmb { { \cal B } } = ( b _ { i j } )$

$$
\begin{array}{l} \det  \boldsymbol {A} \boldsymbol {B} = \left| \left[ \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right] \left[ \begin{array}{c c} b _ {1 1} & b _ {1 2} \\ b _ {2 1} & b _ {2 2} \end{array} \right] \right| = \left| \begin{array}{c c} a _ {1 1} b _ {1 1} + a _ {1 2} b _ {2 1} & a _ {1 1} b _ {1 2} + a _ {1 2} b _ {2 2} \\ a _ {2 1} b _ {1 1} + a _ {2 2} b _ {2 1} & a _ {2 1} b _ {1 2} + a _ {2 2} b _ {2 2} \end{array} \right| \\ = \left| \begin{array}{c c} a _ {1 1} b _ {1 1} & a _ {1 1} b _ {1 2} \\ a _ {2 1} b _ {1 1} & a _ {2 1} b _ {1 2} \end{array} \right| + \left| \begin{array}{c c} a _ {1 1} b _ {1 1} & a _ {1 2} b _ {2 2} \\ a _ {2 1} b _ {1 1} & a _ {2 2} b _ {2 2} \end{array} \right| + \left| \begin{array}{c c} a _ {1 2} b _ {2 1} & a _ {1 1} b _ {1 2} \\ a _ {2 2} b _ {2 1} & a _ {2 1} b _ {1 2} \end{array} \right| + \left| \begin{array}{c c} a _ {1 2} b _ {2 1} & a _ {1 2} b _ {2 2} \\ a _ {2 2} b _ {2 1} & a _ {2 2} b _ {2 2} \end{array} \right| \\ = 0 + b _ {1 1} b _ {2 2} \left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| + b _ {2 1} b _ {1 2} \left| \begin{array}{c c} a _ {1 2} & a _ {1 1} \\ a _ {2 2} & a _ {2 1} \end{array} \right| + 0 \\ = b _ {1 1} b _ {2 2} \left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| - b _ {2 1} b _ {1 2} \left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| \\ = \left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| \left| \begin{array}{c c} b _ {1 1} & b _ {1 2} \\ b _ {2 1} & b _ {2 2} \end{array} \right| = \det  A \det  B. \\ \end{array}
$$

注 在高等代数中我们将进一步证明任意 $n$ 级矩阵 ??, ?? 也满足以上结论.

矩阵乘法在研究复杂问题时可以起到四两拨千斤的作用.在很多情况下,可以使繁杂的算式变得极度简洁,使我们更容易看清一些问题的数学本质. 例如一个由 $m$ 个方程组成的 $n$ 元线性方程组, 如果它的系数矩阵为 $A _ { m \times n }$ ,则这个线性方程组可以用矩阵乘法改写成:

$$
A x = \beta ,
$$

其中

$$
\boldsymbol {x} = \left[ x _ {1}, x _ {2}, \dots , x _ {n} \right] ^ {T}, \quad \boldsymbol {\beta} = \left[ b _ {1}, b _ {2}, \dots , b _ {n} \right] ^ {T}.
$$

也就是说线性方程组的问题可以转化为矩阵方程的问题.

在处理问题时, 我们经常用到复合矩阵. 下面看两个例子.

例 3.9 二元二次多项式的矩阵形式 设二元二次多项式

$$
F (x, y) = a _ {1 1} x ^ {2} + 2 a _ {1 2} x y + a _ {2 2} y ^ {2} + 2 a _ {1} x + 2 a _ {2} y + a _ {0}.
$$

我们可以用矩阵改写以上方程. 令

$$
\boldsymbol {P} = \left[ \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1} \\ a _ {1 2} & a _ {2 2} & a _ {2} \\ a _ {1} & a _ {2} & a _ {0} \end{array} \right], \qquad \boldsymbol {A} = \left[ \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {1 2} & a _ {2 2} \end{array} \right], \qquad \boldsymbol {\delta} = \left[ \begin{array}{c} a _ {1} \\ a _ {2} \end{array} \right], \qquad \boldsymbol {\alpha} = \left[ \begin{array}{c} x \\ y \end{array} \right].
$$

于是原方程表示为三个矩阵的乘积

$$
F (x, y) = [ x, y, 1 ] \left[ \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1} \\ a _ {1 2} & a _ {2 2} & a _ {2} \\ a _ {1} & a _ {2} & a _ {0} \end{array} \right] \left[ \begin{array}{c} x \\ y \\ 1 \end{array} \right] = \left[ \boldsymbol {\alpha} ^ {T}, 1 \right] \boldsymbol {P} \left[ \begin{array}{c} \boldsymbol {\alpha} \\ 1 \end{array} \right] = \left[ \boldsymbol {\alpha} ^ {T}, 1 \right] \left[ \begin{array}{c c} \boldsymbol {A} & \boldsymbol {\delta} \\ \boldsymbol {\delta} ^ {T} & a _ {0} \end{array} \right] \left[ \begin{array}{c} \boldsymbol {\alpha} \\ 1 \end{array} \right].
$$

矩阵中的每一行可以看作一个向量, 每一列也可以看作一个向量, 在当时候把矩阵的行列看作向量较为方便.

例 3.10 设矩阵 $A _ { s \times n }$ , $\pmb { { \cal B } } _ { n \times m }$ , 其中 $\pmb { B }$ 的每一列为 $\beta _ { 1 } , \beta _ { 2 } , \cdots , \beta _ { m }$ , 则 $\pmb { B }$ 可以写成复合矩阵

$$
\boldsymbol {B} = \left[ \beta_ {1}, \beta_ {2}, \dots , \beta_ {m} \right].
$$

于是 $A , B$ 的乘法运算满足

$$
\boldsymbol {A} \boldsymbol {B} = \boldsymbol {A} \left[ \beta_ {1}, \beta_ {2}, \dots , \beta_ {m} \right] = \left[ A \beta_ {1}, A \beta_ {2}, \dots , A \beta_ {m} \right].
$$

例 3.11 设矩阵 $A _ { s \times n }$ , $\pmb { { \cal B } } _ { n \times m }$ , 其中 $\pmb { A }$ 的每一行为 $\alpha _ { 1 } , \alpha _ { 2 } , \cdots , \alpha _ { s }$ , 则 $\pmb { A }$ 可以写成复合矩阵

$$
\boldsymbol {A} = \left[ \alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {s} \right] ^ {T}.
$$

于是 $A , B$ 的乘法运算满足

$$
\boldsymbol {A} \boldsymbol {B} = \left[ \begin{array}{c} \alpha_ {1} \\ \alpha_ {2} \\ \vdots \\ \alpha_ {s} \end{array} \right] \boldsymbol {B} = \left[ \begin{array}{c} \alpha_ {1} \boldsymbol {B} \\ \alpha_ {2} \boldsymbol {B} \\ \vdots \\ \alpha_ {s} \boldsymbol {B} \end{array} \right].
$$

矩阵乘积的范数满足以下不等式.

# 定理 3.6

设 $m \times n$ 矩阵 $\pmb { A }$ 和 $n \times l$ 矩阵 $\pmb { B }$ . 则 $\| A B \| \leq \| A \| \| B \|$ .

证明 设 $\pmb { A } = ( a _ { i k } ) , \pmb { B } _ { b _ { k j } }$ ${ \pmb { B } } _ { b _ { k j } }$ . 由 Cauchy-Schwarz 不等式可知

$$
[ \boldsymbol {A} \boldsymbol {B} (i; j) ] ^ {2} = \left(\sum_ {k = 1} ^ {n} a _ {i k} b _ {k j}\right) ^ {2} \leq \sum_ {k = 1} ^ {n} a _ {i k} ^ {2} \sum_ {i = 1} ^ {n} b _ {k j} ^ {2}
$$

于是

$$
\| \boldsymbol {A} \boldsymbol {B} \| ^ {2} = \sum_ {i = 1} ^ {m} \sum_ {j = 1} ^ {l} \left(\sum_ {k = 1} ^ {n} a _ {i k} b _ {k j}\right) ^ {2} \leq \left(\sum_ {i = 1} ^ {m} \sum_ {k = 1} ^ {n} a _ {i k} ^ {2}\right) \left(\sum_ {j = 1} ^ {l} \sum_ {i = 1} ^ {n} b _ {k j} ^ {2}\right) = \| \boldsymbol {A} \| ^ {2} \| \boldsymbol {B} \| ^ {2}.
$$

于是可知 $\| A B \| \leq \| A \| \| B \|$ .

# 矩阵乘法的单位元和逆元

矩阵乘法存在单位元.

# 定义 3.10 (单位矩阵)

设 $n$ 级矩阵

$$
\boldsymbol {I} _ {n} = \left[ \begin{array}{c c c c} 1 & 0 & \dots & 0 \\ 0 & 1 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 \end{array} \right].
$$

我们称它为 $n$ 级单位矩阵 (identity matrix).

单位矩阵就是矩阵乘法的单位元.

# 命题 3.11

单位矩阵满足

$$
A _ {s \times n} I _ {n} = A _ {s \times n}. \quad I _ {s} A _ {s \times n} = A _ {s \times n}.
$$

特别地, 对于任意 $n$ 级矩阵 ?? 都有

$$
\boldsymbol {A} \boldsymbol {I} = \boldsymbol {I} \boldsymbol {A} = \boldsymbol {A}.
$$

因此 $I _ { n }$ 就是 $M _ { n } ( \mathbb { R } )$ 中乘法运算的单位元.

注 单位元总是唯一的. 证明见《数学分析 I》预备知识.

有了乘法单位元, 很自然的想法就是定义乘法运算的逆运算.

# 定义 3.11 (可逆矩阵)

在 $M _ { n } ( \mathbb { R } )$ 中, 设矩阵 ??. 若存在矩阵 $\pmb { B }$ 满足

$$
\boldsymbol {A} \boldsymbol {B} = \boldsymbol {B} \boldsymbol {A} = \boldsymbol {I}.
$$

则 $\pmb { A }$ 是可逆的 (invertible), 此时称 ?? 是一个可逆矩阵 (invertible matrix), $\pmb { B }$ 是 $\pmb { A }$ 的一个逆矩阵 (inverse matrix).

注由于矩阵乘法满足结合律,因此逆元是唯一的.证明见《数学分析I》预备知识.因此可逆矩阵 ??的逆矩阵可以记作 $A ^ { - 1 }$ . 由可逆矩阵的定义可知

$$
\left(\boldsymbol {A} ^ {- 1}\right) ^ {- 1} = \boldsymbol {A}.
$$

先来看一下可逆矩阵的一些简单性质.

# 命题 3.12 (可逆矩阵的乘积)

在 $M _ { n } ( \mathbb { R } )$ 中, 若矩阵 ??, ?? 都可逆, 则 ???? 也可逆, 且

$$
\left(\boldsymbol {A} \boldsymbol {B}\right) ^ {- 1} = \boldsymbol {B} ^ {- 1} \boldsymbol {A} ^ {- 1}.
$$

证明 计算可知

$$
\left(\boldsymbol {A} \boldsymbol {B}\right) \left(\boldsymbol {B} ^ {- 1} \boldsymbol {A} ^ {- 1}\right) = \boldsymbol {I}. \quad \left(\boldsymbol {B} ^ {- 1} \boldsymbol {A} ^ {- 1}\right) \left(\boldsymbol {A} \boldsymbol {B}\right) = \boldsymbol {I}.
$$

于是可知 $( A B ) ^ { - 1 } = B ^ { - 1 } A ^ { - 1 }$ .

# 命题 3.13 (可逆矩阵的转置)

设 $n$ 级可逆矩阵 $\pmb { A }$ , 则 $A ^ { T }$ 也可逆, 且

$$
\left(\boldsymbol {A} ^ {T}\right) ^ {- 1} = \left(\boldsymbol {A} ^ {- 1}\right) ^ {T}.
$$

证明 计算可知

$$
\boldsymbol {A} ^ {T} \left(\boldsymbol {A} ^ {- 1}\right) ^ {T} = \left(\boldsymbol {A} ^ {- 1} \boldsymbol {A}\right) ^ {T} = \boldsymbol {I}. \quad \left(\boldsymbol {A} ^ {- 1}\right) ^ {T} \boldsymbol {A} ^ {T} = \left(\boldsymbol {A} \boldsymbol {A} ^ {- 1}\right) ^ {T} = \boldsymbol {I}.
$$

于是可知 $\left( A ^ { T } \right) ^ { - 1 } = \left( A ^ { - 1 } \right) ^ { T }$

# 命题 3.14 (可逆矩阵的行列式)

设 $n$ 级可逆矩阵 $\pmb { A }$ , 则

$$
\det  A ^ {- 1} = (\det  A) ^ {- 1}.
$$

证明 由 Binet-Cauchy 公式可知

$$
\det  A \det  A ^ {- 1} = \det  \left(A A ^ {- 1}\right) = \det  I = 1
$$

于是可知

$$
\det  A ^ {- 1} = (\det  A) ^ {- 1}.
$$

下面来研究可逆线性映射和可逆矩阵的关系. 我们已经知道 $\mathbb { R } ^ { 2 }$ 上逆时针旋转 $\varphi$ 角度的变换 $\mathcal { T }$ 的矩阵是

$$
\boldsymbol {T} = \left[ \begin{array}{c c} \cos \varphi & - \sin \varphi \\ \sin \varphi & \cos \varphi \end{array} \right].
$$

容易知道 $\mathcal { T }$ 是一个可逆线性映射, 它的逆映射 $\mathcal T ^ { - 1 }$ 就是顺时针旋转 $\varphi$ 角度, 因此立刻可知 $\mathcal T ^ { - 1 }$ 的矩阵为

$$
\boldsymbol {S} = \left[ \begin{array}{c c} \cos (- \varphi) & - \sin (- \varphi) \\ \sin (- \varphi) & \cos (- \varphi) \end{array} \right] = \left[ \begin{array}{c c} \cos \varphi & \sin \varphi \\ - \sin \varphi & \cos \varphi \end{array} \right].
$$

计算可知

$$
\boldsymbol {S T} = \left[ \begin{array}{c c} \cos \varphi & \sin \varphi \\ - \sin \varphi & \cos \varphi \end{array} \right] \left[ \begin{array}{c c} \cos \varphi & - \sin \varphi \\ \sin \varphi & \cos \varphi \end{array} \right] = \boldsymbol {I},
$$

$$
\boldsymbol {T} \boldsymbol {S} = \left[ \begin{array}{c c} \cos \varphi & - \sin \varphi \\ \sin \varphi & \cos \varphi \end{array} \right] \left[ \begin{array}{c c} \cos \varphi & \sin \varphi \\ - \sin \varphi & \cos \varphi \end{array} \right] = \boldsymbol {I}.
$$

因此 $S = T ^ { - 1 }$ .这表明可逆线性映射矩阵的逆矩阵恰好是它的逆映射的矩阵.在《高等代数》中将严格证明这个结论.

下面来研究矩阵可逆的条件. 先来看必要条件. 考虑 $n$ 个方程组成的 $n$ 元线性方程组

$$
A x = \beta .
$$

若 ?? 可逆, 则可以在上式两边同时左乘 $A ^ { - 1 }$ 得

$$
A ^ {- 1} A x = A ^ {- 1} \beta \Longleftrightarrow I x = A ^ {- 1} \beta \Longleftrightarrow x = A ^ {- 1} \beta .
$$

这表明此时方程组有唯一解.由Cramer 法则可知 det $A \ne 0$ .由此得到了 $\pmb { A }$ 可逆的必要条件.我们称行列式不为零的矩阵为非奇异矩阵 (nonsingular matrix), 反之称为奇异矩阵 (singular matrix). 下面来看 det $A \ne 0$ 是不是 $\pmb { A }$ 可逆的充分条件.

# 定理 3.7 (矩阵可逆的充要条件)

在 $M _ { n } ( \mathbb { R } )$ 中, 矩阵 $\pmb { A }$ 可逆当且仅当 det $A \ne 0$ .

证明 只证明充分性. 设 $A = \left( a _ { i j } \right)$ . 我们有等式:

$$
\left[ \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right] \left[ \begin{array}{c c c c} A _ {1 1} & A _ {2 1} & \dots & A _ {n 1} \\ A _ {1 2} & A _ {2 2} & \dots & A _ {n 2} \\ \vdots & \vdots & & \vdots \\ A _ {1 n} & A _ {2 n} & \dots & A _ {n n} \end{array} \right] = \left[ \begin{array}{c c c c} \det  A & & & \\ & \det  A & & \\ & & \ddots & \\ & & & \det  A \end{array} \right] = (\det  A) I,
$$

其中 $A _ { i j }$ $( i , j = 1 , 2 , \cdots , n )$ 都是代数余子式. 令

$$
\boldsymbol {A} ^ {*} := \left[ \begin{array}{c c c c} \boldsymbol {A} _ {1 1} & \boldsymbol {A} _ {2 1} & \dots & \boldsymbol {A} _ {n 1} \\ \boldsymbol {A} _ {1 2} & \boldsymbol {A} _ {2 2} & \dots & \boldsymbol {A} _ {n 2} \\ \vdots & \vdots & & \vdots \\ \boldsymbol {A} _ {1 n} & \boldsymbol {A} _ {2 n} & \dots & \boldsymbol {A} _ {n n} \end{array} \right].
$$

由于 det $A \ne 0$ , 因此

$$
A A ^ {*} = (\det  A) I \iff A \left(\frac {1}{\det  A} A ^ {*}\right) = I.
$$

同理可得

$$
\left(\frac {1}{\det  A} A ^ {*}\right) A = I.
$$

于是可知 ?? 可逆, 且

$$
\boldsymbol {A} ^ {- 1} = \frac {1}{\det  \boldsymbol {A}} \boldsymbol {A} ^ {*}.
$$

注 以上证明中构造的 $A ^ { * }$ 称为矩阵 $\pmb { A }$ 的伴随矩阵 (adjoint matrix).

# 命题 3.15

设 $n$ 级矩阵 $A , B$ , 若 $A B = I$ , 则 $\pmb { A }$ 可逆, 且 $\pmb { A } ^ { - 1 } = \pmb { B }$

证明 由于 $A B = I$ , 故

$$
\det  A B = \det  I \Longrightarrow \det  A \det  B = 1 \Longrightarrow \det  A \neq 0, \det  B \neq 0,
$$

于是可知 $A$ 与 $\pmb { B }$ 都可逆. 且 $\boldsymbol { A } ^ { - 1 } = \boldsymbol { B }$ .

定理3.7不仅给出了矩阵可逆的充要条件, 还给出了一个计算逆矩阵的方法. 我们只需求出矩阵的伴随矩阵就可以得到逆矩阵. 这个方法在 2 级和 3 级矩阵中很便捷. 设 2 级矩阵 $A = \left( a _ { i j } \right)$ , 则立刻可以写出它的伴随矩阵:

$$
\boldsymbol {A} ^ {*} = \left[ \begin{array}{c c} \boldsymbol {A} _ {1 1} & \boldsymbol {A} _ {2 1} \\ \boldsymbol {A} _ {1 2} & \boldsymbol {A} _ {2 2} \end{array} \right] = \left[ \begin{array}{c c} \boldsymbol {M} _ {1 1} & - \boldsymbol {M} _ {2 1} \\ - \boldsymbol {M} _ {1 2} & \boldsymbol {M} _ {2 2} \end{array} \right] = \left[ \begin{array}{c c} a _ {2 2} & - a _ {1 2} \\ - a _ {2 1} & a _ {1 1} \end{array} \right].
$$

下面看一个例子.

例 3.12 判断以下矩阵是否可逆. 若可逆, 求它的逆矩阵.

$\begin{array} { r } { A = \left[ { \begin{array} { r r } { 3 } & { 2 } \\ { - 4 } & { 6 } \end{array} } \right] , } \end{array}$

$\begin{array} { r } { \mathbf { A } = \left[ \begin{array} { l l } { 2 } & { 3 } \\ { 4 } & { 6 } \end{array} \right] . } \end{array}$

解 (1) 由于 det $A = 2 6 \neq 0$ , 因此 $\pmb { A }$ 可逆. 计算可知

$$
\boldsymbol {A} ^ {- 1} = \frac {1}{\det  \boldsymbol {A}} \boldsymbol {A} ^ {*} = \frac {1}{2 6} \left[ \begin{array}{c c} 6 & - 2 \\ 4 & 3 \end{array} \right] = \left[ \begin{array}{c c} \frac {3}{1 3} & - \frac {1}{1 3} \\ \frac {2}{1 3} & \frac {3}{2 6} \end{array} \right].
$$

(2) 由于 det $A = 0$ , 故知矩阵不可逆.

当矩阵的级数很大时上述办法就会非常繁琐. 我们需要想其他的方法. 现在观察线性方程组

$$
\boldsymbol {A} \boldsymbol {x} = \boldsymbol {e} _ {1}.
$$

其中 $\pmb { A }$ 是 $n$ 级矩阵.若 $\pmb { A }$ 可逆,则这个线性方程组的解就是 $e _ { 1 } A ^ { - 1 }$ .这恰好是 $A ^ { - 1 }$ 的第一列.于是我们只需要解 $n$ 个线性方程组:

$$
\boldsymbol {A} \boldsymbol {x} _ {i} = \boldsymbol {e} _ {i}, \quad i = 1, 2, \dots , n.
$$

所谓解线性方程组, 就是通过初等行变换把增广矩阵 $\left[ A , e _ { 1 } \right]$ 变成 $\left[ I , A ^ { - 1 } e _ { 1 } \right]$ . 这 $n$ 个线性方程组的系数矩阵是相同的, 因此可以合在一起同时操作.

$$
[ A, I ] = [ A, e _ {1}, e _ {2}, \dots , e _ {n} ] \xrightarrow {\text {初 等 行 变 换}} \left[ I, A ^ {- 1} e _ {1}, A ^ {- 1} e _ {2}, \dots , A ^ {- 1} e _ {n} \right] = \left[ I, A ^ {- 1} \right]
$$

于是我们就得到一种求逆矩阵的有效方法. 下面看一个例子.

例 3.13 求以下矩阵的逆矩阵

$$
\boldsymbol {A} = \left[ \begin{array}{c c c} 2 & 1 & - 2 \\ 1 & 2 & 2 \\ 2 & - 2 & 1 \end{array} \right].
$$

解 解法一 先求 ?? 的行列式

$$
\det  A = \left| \begin{array}{c c c} 2 & 1 & - 2 \\ 1 & 2 & 2 \\ 2 & - 2 & 1 \end{array} \right| = (4 + 4 + 4) - (- 8 + 1 - 8) = 1 2 + 1 5 = 2 7.
$$

再求 ?? 的伴随矩阵

$$
\boldsymbol {A} ^ {*} = \left[ \begin{array}{l l l} \boldsymbol {A} _ {1 1} & \boldsymbol {A} _ {2 1} & \boldsymbol {A} _ {3 1} \\ \boldsymbol {A} _ {1 2} & \boldsymbol {A} _ {2 2} & \boldsymbol {A} _ {3 2} \\ \boldsymbol {A} _ {1 3} & \boldsymbol {A} _ {2 3} & \boldsymbol {A} _ {3 3} \end{array} \right] = \left[ \begin{array}{c c c c c c c c c} \left| \begin{array}{r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r r} 2 & 2 & - & 1 & - 2 & 1 & 1 & - 2 \\ - 2 & 1 & - 2 & - 2 & 1 & 2 & - 2 & - 2 & 1 & 2 & - 2 \\ - 1 & 2 & 1 & 2 & 1 & 2 & - 2 & - 2 & 1 & 2 & - 2 \\ 2 & - 2 & - 2 & - 2 & - 2 & - 2 & - 2 & - 2 & 1 & 2 & - 2 \\ \end{array} \right| \end{array} \right] = \left[ \begin{array}{r r r r r r r r r r r r r r r r} 6 & 3 & 6 \\ 3 & 6 & - 6 \\ - 6 & 6 & 3 \end{array} \right].
$$

由定理 (3.7) 可知

$$
\boldsymbol {A} ^ {- 1} = \frac {1}{\det  \boldsymbol {A}} \boldsymbol {A} ^ {*} = \frac {1}{2 7} \left[ \begin{array}{c c c} 6 & 3 & 6 \\ 3 & 6 & - 6 \\ - 6 & 6 & 3 \end{array} \right] = \left[ \begin{array}{c c c} \frac {2}{9} & \frac {1}{9} & \frac {2}{9} \\ \frac {1}{9} & \frac {2}{9} & - \frac {2}{9} \\ - \frac {2}{9} & \frac {2}{9} & \frac {1}{9} \end{array} \right].
$$

解法二 用初等行变换把复合矩阵 $[ A , I ]$ 化为 $\left[ I , A ^ { - 1 } \right]$

$$
\begin{array}{l} [ \boldsymbol {A}, \boldsymbol {I} ] = \left[ \begin{array}{c c c c c c} 2 & 1 & - 2 & 1 & 0 & 0 \\ 1 & 2 & 2 & 0 & 1 & 0 \\ 2 & - 2 & 1 & 0 & 0 & 1 \end{array} \right] \xrightarrow {[ 1 ], [ 2 ]} \left[ \begin{array}{c c c c c c} 1 & 2 & 2 & 0 & 1 & 0 \\ 2 & 1 & - 2 & 1 & 0 & 0 \\ 2 & - 2 & 1 & 0 & 0 & 1 \end{array} \right] \xrightarrow {[ 2 ] - 2 [ 1 ]} \left[ \begin{array}{c c c c c c} 1 & 2 & 2 & 0 & 1 & 0 \\ 0 & - 3 & - 6 & 1 & - 2 & 0 \\ 0 & - 6 & - 3 & 0 & - 2 & 1 \end{array} \right] \\ \xrightarrow {(- 1 / 3) [ 2 ]} \left[\begin{array}{c c c c c c}1&2&2&0&1&0\\0&1&2&- \frac {1}{3}&\frac {2}{3}&0\\0&- 6&- 3&0&- 2&1\end{array}\right] \xrightarrow {[ 1 ] - 2 [ 2 ]} \left[\begin{array}{c c c c c c}1&0&- 2&\frac {2}{3}&- \frac {1}{3}&0\\0&1&2&- \frac {1}{3}&\frac {2}{3}&0\\0&0&9&- 2&2&1\end{array}\right]\rightarrow \left[\begin{array}{c c c c c c}1&0&- 2&\frac {2}{3}&- \frac {1}{3}&0\\0&1&2&- \frac {1}{3}&\frac {2}{3}&0\\0&0&1&- \frac {2}{9}&\frac {2}{9}&\frac {1}{9}\end{array}\right] \\ \xrightarrow {\stackrel {[ 1 ] + 2 [ 3 ]} {[ 2 ] - 2 [ 3 ]}} \left[ \begin{array}{c c c c c c} 1 & 0 & 0 & \frac {2}{9} & \frac {1}{9} & \frac {2}{9} \\ 0 & 1 & 0 & \frac {1}{9} & \frac {2}{9} & - \frac {2}{9} \\ 0 & 0 & 1 & - \frac {2}{9} & \frac {2}{9} & \frac {1}{9} \end{array} \right] = [ I, A ^ {- 1} ] \iff A ^ {- 1} = \left[ \begin{array}{c c c} \frac {2}{9} & \frac {1}{9} & \frac {2}{9} \\ \frac {1}{9} & \frac {2}{9} & - \frac {2}{9} \\ - \frac {2}{9} & \frac {2}{9} & \frac {1}{9} \end{array} \right]. \\ \end{array}
$$

# 3.3 向量的线性运算和线性关系

在物理学中既有大小, 又有方向的量称为矢量 . 物理中常见的矢量包括位移, 速度, 加速度, 力, 动量, 冲量, 力矩, 场强等. 利用 “位移” 的概念可以直接定义几何空间中的向量概念.

# 向量的线性运算

# 定义 3.12 (几何空间中的向量)

在几何空间中, 我们称有向线段 (directed line segment)???? 为向量 (vector), 记作 $\overrightarrow { A B }$ . 其中 $A B$ 的长度 (length)称为向量 $\overrightarrow { A B }$ 的大小,记作 $\vert \overrightarrow { A B } \vert$ 或 $\vert A B \vert$ .起点 $A$ 到终点 $B$ 的方向表示 $\overrightarrow { A B }$ 的方向.两个向量相等当且仅当它们的大小相等且方向相同. 在不强调起点终点的情况下, 向量通常用加粗的字母 $\mathbf { \Delta } _ { a , b }$ 表示. 特别地, 若向量的起点和终点重合, 即它的长度为零, 则称该向量称为零向量 , 记作 0, 零向量的方向不确定. 长度为 1 的向量称为单位向量 (unit vector), 与 $\pmb { a }$ 同向的单位向量记作 $\pmb { a } ^ { 0 }$ . 与 $\pmb { a }$ 长度相等且方向相反的向量称为 $\pmb { a }$ 的负向量 (negative vector), 记作 −??.

注 由定义可知, 向量 $\overrightarrow { A B }$ 经过平移后, 大小和方向都没变, 所以表示的还是同一个向量.

注 向量 $\pmb { a }$ 表示的方向我们经常简称为 “方向 $\pmb { a } ^ { \prime \prime }$ .

由位移的加法可以直接得到向量加法的定义. 连续做两次位移 $\overrightarrow { A B }$ 和 $\overrightarrow { B C }$ , 总效果就是做了位移 $\overrightarrow { A C }$ . 由此我们可以定义向量的加法运算.

# 定义 3.13 (向量的加法)

设向量 $\pmb { a }$ 和 ??, 用有向线段 $\overrightarrow { A B } \ne \infty \overrightarrow { B C }$ 分别表示 $\pmb { a }$ 和 $\pmb { b }$ , 则有向线段 $\overrightarrow { A C }$ 表示的向量 $\pmb { c }$ 称为 $\overrightarrow { A B }$ 与 $\overrightarrow { B C }$ 的和(sum), 记作 $\pmb { c } = \pmb { a } + \pmb { b }$ .

注 以上向量的加法运算规则称为三角形法则 (triangle principle).

注 容易看出向量的加法运算的结果与向量起点的选择无关.

注 用负向量可以定义向量的减法: $\pmb { a } - \pmb { b } : = \pmb { a } + ( - \pmb { b } )$ .

由物理中力的合称也可以定义向量的加法. 设向量 $\pmb { a }$ 和 $\pmb { b }$ , 用有向线段 $\overrightarrow { A B }$ 和 $\overrightarrow { A C }$ 分别表示 $\pmb { a }$ 和 $\pmb { b }$ , 以 $\overrightarrow { A B }$ 和$\overrightarrow { A C }$ 为邻边作平行四边形 ????????(可以是一个面积为零的平行四边形), 则向量 $A D$ 表示的向量 $\pmb { c }$ 称为 $\overrightarrow { A B }$ 与 $\overrightarrow { A C }$ 的和. 这种向量加法的定义称为平行四边形法则 (parallelogram principle). 由于 ${ \overrightarrow { A C } } = { \overrightarrow { B D } }$ , 因此

$$
\overrightarrow {A B} + \overrightarrow {A C} = \overrightarrow {A B} + \overrightarrow {B D} = \overrightarrow {A D}.
$$

这就证明了向量的三角形法则和平行四边形法则是等价的.

容易证明以下关于向量加法的运算性质.

# 命题 3.16 (向量加法的简单性质)

几何空间中的任意向量 ${ \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { \mathbf { } } \mathbf { } _ { } \mathbf { } _ { \mathbf { } } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { } \mathbf { } _ { }  _ \mathbf { } _ { } _ { } \mathbf { } _ { } _ { } \mathbf { } _ { } _ { } \mathbf _ { } _ { } \mathbf { } _ { } _ { } _ { } _ { } \mathbf _ { } _ { } _ { } _ { } _ { } _ { } _ { }  _ \mathbf  _ { } _ { } _ { } _ { } _ { } _ { } _ { } _ { } _ { } _ _ { } _ { } _ { } _ { } _ { } _ { } _ _ { } _ { } _ { } _ { } _ { } _ _ { } _ { } _ { } _ { } _ _ { } _ { } _ { } _ _ { }$ 都满足

(1) 结合律: $( \pmb { a } + \pmb { b } ) + \pmb { c } = \pmb { a } + ( \pmb { a } + \pmb { c } )$ .   
(2) 交换律: $\pmb { a } + \pmb { b } = \pmb { b } + \pmb { a }$ .  
(3) 零元: $\pmb { a } + \pmb { 0 } = \pmb { 0 } + \pmb { a } = \pmb { a }$ .   
(4) 负元: $\pmb { a } + \left( - \pmb { a } \right) = \left( - \pmb { a } \right) + \pmb { a } = \pmb { 0 }$

由于向量加法满足三角形法则. 因此由三角形的性质可以得到向量加法的 “三角形不不等式”.

# 命题 3.17 (三角形不等式)

对于任意向量 $\pmb { a }$ 和 $\pmb { b }$ , 都有以下三角形不等式 (triangle inequality):

$$
\left| \boldsymbol {a} + \boldsymbol {b} \right| \leq \left| \boldsymbol {a} \right| + \left| \boldsymbol {b} \right|.
$$

当且仅当 $\pmb { a }$ 和 $\pmb { b }$ 同向时等号成立.

下面我们来定义一个实数和一个向量的乘法运算.

# 定义 3.14 (向量的数乘运算)

在几何空间中设向量 $\pmb { a }$ , 设 $\lambda \in \mathbb { R }$ . 规定 $\lambda$ 和 $\pmb { a }$ 的乘积还是一个向量, 记作 ????. 它的长度规定为

$$
| \lambda \boldsymbol {a} | := | \lambda | | \boldsymbol {a} |,
$$

它的方向规定为

(1) 当 $\lambda > 0$ 时, $\lambda \pmb { a }$ 与 $\pmb { a }$ 同向.   
(2) 当 $\lambda < 0$ 时, $\lambda \pmb { a }$ 与 $\pmb { a }$ 反向.

特别地, 当 $\lambda = 0$ 时, 规定 $\lambda { \pmb a } = { \pmb 0 }$ . 以上规定的一个实数和一个向量的乘法运算称为向量的数量乘法 (scalarmultiplication) 运算, 简称数乘运算.

注 通过向量的数乘运算, 我们可以把一个向量 $\pmb { a }$ 化为与 $\pmb { a }$ 同向的单位向量, 即

$$
\boldsymbol {a} ^ {0} = \frac {1}{| \boldsymbol {a} |} \boldsymbol {a} = | \boldsymbol {a} | ^ {- 1} \boldsymbol {a}.
$$

这个过程称为向量的单位化 (unitization).

注 容易知道任一实数乘以零向量都是零向量, 即 $\lambda \mathbf { 0 } = \mathbf { 0 }$ .

注 在几何空间中设向量 $\pmb { a }$ , 设 $\lambda \in \mathbb { R }$ , 若 $\lambda { \pmb a } = { \pmb 0 }$ , 则 $\lambda = 0$ 或 $\pmb { a } = \pmb { 0 }$

注 在几何空间中设向量 $\pmb { a }$ , 设 $\lambda \in \mathbb { R } .$ , 若 $\lambda { \pmb a } = { \pmb 0 }$ , 则 $\lambda = 0$ 或 $\pmb { a } = \pmb { 0 }$ . 理由如下: 由于 $\lambda { \pmb a } = { \pmb 0 }$ , 故

$$
| \lambda | | \pmb {a} | = | \mathbf {0} | = 0 \Longrightarrow | \lambda | = 0   \text {或}   | \pmb {a} | = 0 \Longrightarrow \lambda = 0   \text {或}   \pmb {a} = \mathbf {0}.
$$

容易得到向量的数乘运算性质.

# 命题 3.18 (向量数乘的简单性质)

对于任意向量 $\mathbf { \Pi } _ { a , b }$ 以及实数 $\lambda , \mu$ , 它们的数乘运算都满足

(1) 1?? = ??, $( - 1 ) \pmb { a } = - \pmb { a }$ .   
(2) $( \lambda \mu ) \pmb { a } = \lambda ( \mu \pmb { a } )$   
(3) $( \lambda + \mu ) \pmb { a } = \lambda \pmb { a } + \mu \pmb { a } .$ .   
(4) $\lambda ( { \pmb a } + { \pmb b } ) = \lambda { \pmb a } + \lambda { \pmb b }$

# 向量的线性关系

为了研究几何空间的结构. 我们需要先研究几个向量的关系. 我们从它们的共线和共面问题入手.

# 定义 3.15 (向量的共线和共面)

若一个向量组用同一起点的有向线段表示后, 在一条直线上, 则称该向量组是共线的 (collinear). 若用同一起点的有向线段表示后, 在一个平面上, 则称该向量组是共面的 (coplaner).

注 显然零向量与任一向量共线.

注 共线的向量一定共面.

注 同向或反向的向量共线.

由向量加法和数乘运算的定义可知若 $\mathbf { \pmb { a } } = \lambda \mathbf { b }$ , 则 $\mathbf { \Delta } _ { a , b }$ 同向或反向,因此它们共线.另一方面若 $\pmb { a } + \pmb { b } = \pmb { c }$ , 则 $\pmb { a }$ ,$\mathbf { \delta } _ { b , c }$ 满足三角形法则, 显然共面. 同理若 $\lambda a + \mu b = d$ , 则 $\lambda a , \mu b , d$ 共面, 而 $\pmb { a }$ 和 $\lambda \pmb { a }$ 共线, $\pmb { b }$ 和 $\mu b$ 也共线, 因此 $\pmb { a }$ ,$\mathbf { \Sigma } _ { b , d }$ 共面. 由此受到启发, 几何空间中向量的共线共面问题可以转化为向量加法和数量乘法的问题.

向量的加法和数乘运算通常称为线性运算 (linear operation). 以上我们讨论时用到了一个或几个向量通过线性运算运算 “组合” 得到另一个向量的方法.

# 定义 3.16 (向量的线性组合)

在几何空间中设向量 $\mathbf { \Delta } a _ { 1 } , \mathbf { \Delta } a _ { 2 } , \cdots , \mathbf { \Delta } a _ { n }$ 和实数 $k _ { 1 } , k _ { 2 } , \cdots , k _ { n }$ , 则称向量

$$
\boldsymbol {b} = k _ {1} \boldsymbol {a} _ {1} + k _ {2} \boldsymbol {a} _ {2} + \dots + k _ {n} \boldsymbol {a} _ {n}
$$

为 ${ \pmb a } _ { 1 } , { \pmb a } _ { 2 } , \cdots , { \pmb a } _ { s }$ 的一个线性组合 (linear combination), 其中 $k _ { 1 } , k _ { 2 } , \cdots , k _ { n }$ 称为系数 (coefficient). 此时称向量$\pmb { b }$ 可以由向量 $\mathbf { \Delta } a _ { 1 } , \mathbf { \Delta } a _ { 2 } , \cdots , \mathbf { \Delta } a _ { n }$ 线性表出 (linear expression).

下面我们将利用向量的线性组合来研究几何空间中向量的共线和共面问题.

# 定理 3.8 (向量共线的充要条件)

在几何空间中设向量 $\mathbf { \Delta } _ { a , b }$ , 则它们共线当且仅当存在不全为零的实数 $\lambda , \mu$ 使得

$$
\lambda \boldsymbol {a} + \mu \boldsymbol {b} = \mathbf {0}.
$$

证明 (i) 证明必要性. 若 $\pmb { a } = \pmb { b } = \pmb { 0 }$ , 则对于任意 $\lambda , \mu \in \mathbb { R }$ 都有 $\lambda \pmb { a } + \mu \pmb { b } = \pmb { 0 } .$ . 下设 $\pmb { a }$ 和 $\pmb { b }$ 不全为零. 不妨设 ${ \pmb a } \ne { \bf 0 } .$ . 由命题 (??) 可知存在 $\lambda$ 使得 $\pmb { b } = \lambda \pmb { a }$ , 即 $\lambda \pmb { a } + ( - 1 ) \pmb { b } = \pmb { 0 } .$ . 因此必要性成立.  
(ii) 证明充分性. 由于 $\lambda , \mu$ 不全为零, 不妨设 $\lambda \neq 0$ , 若 $\lambda \pmb { a } + \mu \pmb { b } = \pmb { 0 }$ , 则 $\pmb { a } = - \frac { \mu } { \lambda } b$ , 因此 $\pmb { a }$ 和 $\pmb { b }$ 共线.

注 以上命题的逆否命题是: $\pmb { a }$ 和 $\pmb { b }$ 不共线当且仅当

$$
\lambda \boldsymbol {a} + \mu \boldsymbol {b} = \mathbf {0} \Longleftrightarrow \lambda = \mu = 0
$$

根据前面的讨论我们已经知道若 $\pmb { c }$ 是 $\pmb { a }$ 和 $\pmb { b }$ 的一个线性组合, 即存在 $\lambda , \mu$ 使得 $\pmb { c } = \lambda \pmb { a } + \mu \pmb { b }$ , 则 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 共面.下面可以用类似研究向量共线的方法可以研究向量的共面的充要条件.

# 定理 3.9 (向量共面的充要条件)

在几何空间中设向量 ${ \mathbf { } } a , b , c$ , 则它们共面当且仅当存在不全为零的实数 $\lambda , \mu , \nu \in \mathbb { R }$ 使得

$$
\lambda \boldsymbol {a} + \mu \boldsymbol {b} + \nu \boldsymbol {c} = \mathbf {0}.
$$

注 以上命题的逆否命题是: ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 不共面当且仅当

$$
\lambda \boldsymbol {a} + \mu \boldsymbol {b} + \nu \boldsymbol {c} = \mathbf {0} \iff \lambda = \mu = \nu = 0.
$$

从以上讨论发现. 向量的共线和共面有着相同的本质. 我们把定理 (3.8) 和定理 (3.9) 的共同点抽象出来可以得到以下概念.

# 定义 3.17 (向量的线性相关和线性无关)

设几何空间中的向量 $\pmb { a } _ { 1 }$ $\mathbf { \Delta } a _ { 1 } , \mathbf { \Delta } a _ { 2 } , \cdots , \mathbf { \Delta } a _ { n }$ $\left( n \geq 1 \right) ,$ ) .

(1) 若存在不全为零的 $k _ { 1 } , k _ { 2 } , \cdot \cdot \cdot , k _ { n } \in K .$ , 使得

$$
k _ {1} \boldsymbol {a} _ {1} + k _ {2} \boldsymbol {a} _ {2} + \dots + k _ {n} \boldsymbol {a} _ {n} = \mathbf {0},
$$

则称 $\mathbf { \omega } _ { a _ { 1 } , a _ { 2 } , \cdots , a _ { n } }$ 线性相关 (linearly dependent).

(2) 若

$$
k _ {1} \boldsymbol {a} _ {1} + k _ {2} \boldsymbol {a} _ {2} + \dots + k _ {n} \boldsymbol {a} _ {n} = \mathbf {0} \Longleftrightarrow k _ {1} = k _ {2} = \dots = k _ {n} = 0.
$$

则称 $\mathbf { \omega } _ { a _ { 1 } , a _ { 2 } , \cdots , a _ { n } }$ 线性无关 (linearly independent).

注 由以上定义可知, 包含零向量的向量组一定线性相关.

注 由以上定义可知单个非零向量我们也是线性无关的.

例 3.14 设几何空间中的点 $A , B , C , D$ , 则它们共面的充要条件是: 对于任意一点 $o$ , 存在不全为零的实数 $\lambda , \mu , \nu$

$\omega$ 使得

$$
\lambda \overrightarrow {O A} + \mu \overrightarrow {O B} + \nu \overrightarrow {O C} + \omega \overrightarrow {O D} = \mathbf {0}, \quad \lambda + \mu + \nu + \omega = 0.
$$

证明 (i) 证明必要性. 若 $A , B , C , D$ 共面, 则向量 $\overrightarrow { A B }$ , $\overrightarrow { A C }$ , $\overrightarrow { A D }$ 共面, 由定理 (3.9) 可知存在实数 $k , l$ 使得 ${ \overrightarrow { A B } } = $ $k \overrightarrow { A C } + l \overrightarrow { A D }$ , 于是

$$
\overrightarrow {O B} - \overrightarrow {O A} = k (\overrightarrow {O C} - \overrightarrow {O A}) + l (\overrightarrow {O D} - \overrightarrow {O A}) \Longrightarrow (k + l - 1) \overrightarrow {O A} + \overrightarrow {O B} - k \overrightarrow {O C} - l \overrightarrow {O D} = \mathbf {0}.
$$

令 $\lambda = k + l - 1$ , $\mu = 1$ , $\nu = - k$ , $\omega = - l$ , 则说明必要性成立.

(ii) 证明充分性. 若 $\lambda + \mu + \nu + \omega = 0$ , 则 $\lambda = - \mu - \nu - \omega .$ , 于是有

$$
\begin{array}{l} (- \mu - \nu - \omega) \overrightarrow {O A} + \mu \overrightarrow {O B} + \nu \overrightarrow {O C} + \omega \overrightarrow {O D} = \mathbf {0} \\ \Rightarrow \mu (\overrightarrow {O B} - \overrightarrow {O A}) + \nu (\overrightarrow {O C} - \overrightarrow {O A}) + \omega (\overrightarrow {O D} - \overrightarrow {O A}) = \mathbf {0} \Longrightarrow \mu \overrightarrow {A B} + \nu \overrightarrow {A C} + \omega \overrightarrow {A D} = \mathbf {0}. \\ \end{array}
$$

由于 $\lambda , \mu , \nu , \omega$ 不全为零, 且 $\lambda + \mu + \nu + \omega = 0$ , 故 $\mu , \nu , \omega$ 不全为零, 由定理 (3.9) 可知 $\overrightarrow { A B }$ , ????, $\overrightarrow { A D }$ 共面, 即 $A , B , C$ ,$D$ 四点共面.

# 几何空间的维数和基

空间中所有点组成的集合称为几何空间 (geometric space), 记作??. 取一个点 $o$ , 以 $o$ 为起点的向量称为位置向量 (position vector). 显然所有位置向量组成的集合与几何空间 $V$ 有一个一一对应关系, 因此所有位置向量组成的集合也可以看作几何空间 ??. 由于所有由位置向量平移得到的向量与原向量相等, 故空间中所有向量组成的集合也可以看作几何空间??.本节主要研究几何空间的结构.如果能找到几个向量,使得几何空间中所有向量都可以由它们线性表出, 那么 ?? 的线性结构就清楚了. 这就是我们的研究目标.

前面我们已经讨论了向量的线性运算. 根据定义可知向量的线性运算是几何空间 $V$ 上的运算 (运算后还是几何空间中的向量). 我们利用向量的线性组合讨论了向量的共性和共面问题. 并抽象出了向量的线性相关和线性无关. 这样向量之间的线性关系就清楚了. 我们知道在同一平面上, 任一向量 $\pmb { c }$ 都可以由两个线性无关 (不共线) 的向量 $\pmb { a }$ 和 $\pmb { b }$ 线性表出, 且表法唯一. 我们很自然地猜测在几何空间 $V$ 中也有类似结论.

# 定理 3.10

在几何空间中, 任一向量 $\pmb { a }$ 都可以由三个线性无关 (不共面) 的向量 $d _ { 1 } , d _ { 2 } , d _ { 3 }$ 线性表出, 且表法唯一.

于是我们发现, 只需给定三个线性无关 (不共面) 的向量, 几何空间 $V$ 的线性结构就清楚了!

# 定义 3.18 (几何空间的基和维数)

几何空间 $V$ 中的任一向量都可以由三个线性无关 (不共面) 的向量线性表出, 且表法唯一, 因此我们称几何空间是三维的 (3-dimensional). 在 $V$ 中取三个线性无关的有序向量 $d _ { 1 } , d _ { 2 } , d _ { 3 }$ $\pmb { d } _ { 3 }$ 我们称它们为 $V$ 的一个有序基(ordered basis), 简称基.

注 特别地, 在平面 $\pi$ 中任一向量都可以由两个线性无关 (不共线) 的向量线性表出, 且表法唯一, 因此我们称平面是二维的 (2-dimensional); 在 $\pi$ 中取两个线性无关的有序向量 $\mathbf { \delta } \mathbf { d } _ { 1 } , \mathbf { \delta } \mathbf { \mathbf { \delta } } \mathbf { d } _ { 2 }$ , 我们称它们为 $\pi$ 的一个基.

在直线 ?? 中任一向量都可以由一个线性无关 (非零) 的向量线性表出, 且表法唯一, 因此我们称平面是一维的(1-dimensional). 任何一点我们通常看作是零维的 (0-dimensional).

在几何空间中只需找到一个基, 就可以唯一地表出所有向量. 所谓 “唯一” 是指表出系数是唯一确定的. 也就是说一旦选定了一个有序基, 所有的向量就可以和一个三元有序数组建议一一对应关系. 由此很自然地引出了坐标的概念.

# 定义 3.19 (向量的坐标)

几何空间 $V$ 中取一个基 $\pmb { d } _ { 1 }$ , ??2, ??3, 若向量

$$
\boldsymbol {a} = x \boldsymbol {d} _ {1} + y \boldsymbol {d} _ {2} + z \boldsymbol {d} _ {3},
$$

则称表出系数组成的三元有序实数组为 $\pmb { a }$ 在基 ??1, ??2, $\pmb { d } _ { 3 }$ 下的坐标 (coordinate), 记作

$$
\pmb {a} = \left[ \begin{array}{l} {{x}} \\ {{y}} \\ {{z}} \end{array} \right]   \text {或}   [ x, y, z ] ^ {T}.
$$

注为了后面讨论时的便利,坐标一般写成列的形式,为了节约空间,通常用 $[ x , y , z ] ^ { T }$ 表示它是一列数组.右上角的$T$ 表示 “转置”.

注 类似地在平面上也可以取一个基 $\mathbf { { \em d } } _ { 1 } , \mathbf { { \em d } } _ { 2 }$ , 若向量

$$
\boldsymbol {a} = x \boldsymbol {d} _ {1} + y \boldsymbol {d} _ {2},
$$

则称表出系数组成的二元有序实数组为 $\pmb { a }$ 在基 $\pmb { d } _ { 1 }$ , ??2 下的坐标, 记作 $[ x , y ] ^ { T }$

进一步我们可以为几何空间建立坐标系, 并定义空间中点的坐标.

# 定义 3.20 (仿射坐标系)

在几何空间 ?? 中取一点 $o$ 和一个基 ??1, ??2, ??3, 把它们合在一起称为 $V$ 的一个仿射坐标系 (affine coordinatesystem), 也称仿射标架 (affine frame), 记作 $[ O , d _ { 1 } , d _ { 2 } , d _ { 3 } ]$ .

其中 $o$ 称为坐标系的原点 (origin point). $d _ { 1 } , d _ { 2 } , d _ { 3 }$ 称为基向量 (base vector). 方向为 ?? , ?? , ?? 的直线分别称为 $x$ 轴, $y$ 轴, ?? 轴, 统称坐标轴 (coordinate axis). 每两根坐标轴确定的平面称为坐标平面 (coordinate plane),分别记作 $O x y , O y z , O z x$ . 三个坐标平面把 $V$ 分成了八个区域, 称之为八个卦限 (octant). 每个卦限内点的坐标的符号是固定的, 我们根据它们的符号给八个卦限编号如下

<table><tr><td></td><td>I</td><td>II</td><td>III</td><td>IV</td><td>V</td><td>VI</td><td>VII</td><td>VIII</td></tr><tr><td>x</td><td>+</td><td>-</td><td>-</td><td>+</td><td>+</td><td>-</td><td>-</td><td>+</td></tr><tr><td>y</td><td>+</td><td>+</td><td>-</td><td>-</td><td>+</td><td>+</td><td>-</td><td>-</td></tr><tr><td>z</td><td>+</td><td>+</td><td>+</td><td>+</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></table>

对于 $V$ 中任意一点 ??, 我们把位置向量 $\overrightarrow { O M }$ 在基 $\pmb { d } _ { 1 }$ , ??2, $\pmb { d } _ { 3 }$ 下的坐标称为点 ?? 在该仿射坐标系下的坐标(coordinate).

将右手四指从 $x$ 轴方向弯向 $y$ 轴 (转角小于 $\pi$ ), 若拇指指向的方向与 $z$ 轴方向在 $O x y$ 平面同侧, 则称该坐标系为右手坐标系 (right-handed coordinate system), 简称右手系 (right-handed system); 反之则称该坐标系为左手坐标系 (left-handed coordinate system), 简称左手系 (left-handed system).

注类似地平面 $\pi$ 中可以取一点 $o$ 和一个基 $\mathbf { { \em d } } _ { 1 } , \mathbf { { \em d } } _ { 2 }$ ,把它们合在一起称为 $\pi$ 的一个仿射坐标系,记作 $[ O , d _ { 1 } , d _ { 2 } ]$ . 其中 $o$ 称为坐标系的原点. $\pmb { d } _ { 1 }$ , $\pmb { d } _ { 2 }$ 称为基向量. 方向为 $\pmb { d } _ { 1 }$ , $\pmb { d } _ { 2 }$ 的直线分别称为 $x$ 轴, $y$ 轴. $x$ 轴, $y$ 轴把 $\pi$ 分成四个区域, 称为四个象限(quadrant). 每个象限内点的坐标的符号是固定的, 我们根据它们的符号给四个象限编号如下

$$
\begin{array}{c c c c c} & \text {I} & \text {I I} & \text {I I I} & \text {I V} \\ \hline x & + & - & - & + \\ y & + & + & - & - \end{array}
$$

“四个象限” 和 “八个卦限” 的名称, 来自于 “两仪生四象, 四象生八卦”.

注 若给定的一个基是两两垂直的单位向量 $\mathbf { { e } } _ { 1 } , \mathbf { { e } } _ { 2 } , \mathbf { { e } } _ { 3 }$ , 则称 $[ O , e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 为一个直角坐标系 (rectangular coordinatesystem), 或称为直角标架 (rectangular frame). 在研究几何空间的线性性质时, 通常不需要使用直角坐标系.

注 对于平面仿射坐标系 $[ O ; d _ { 1 } , d _ { 2 } ]$ , 我们规定若 $\pmb { d } _ { 1 }$ 逆时针旋转小于 $\pi$ 的角就可以与 $\pmb { d } _ { 2 }$ 重合, 则称该坐标系为右手坐标系; 反之称为左手坐标系.

向量有了坐标就可以用向量的坐标研究几何空间的线性性质. 我们先来看一下向量坐标如何进行线性运算.

# 命题 3.19 (向量的坐标运算)

在给定的仿射坐标系 $[ O , e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中设向量

$$
\boldsymbol {a} = \left[ a _ {1}, a _ {2}, a _ {3} \right] ^ {T}, \quad \boldsymbol {b} = \left[ b _ {1}, b _ {2}, b _ {3} \right] ^ {T},
$$

和实数 ??, 则

$$
\boldsymbol {a} + \boldsymbol {b} = \left[ a _ {1} + b _ {1}, a _ {2} + b _ {2}, a _ {3} + b _ {3} \right] ^ {T}. \quad \lambda \boldsymbol {a} = \left[ \lambda a _ {1}, \lambda a _ {2}, \lambda a _ {3} \right] ^ {T}.
$$

注 由向量减法的定义和以上命题可知 $\mathbf { \delta } \mathbf { { \mathbf { 4 } } } - \mathbf { \delta } b = [ a _ { 1 } - b _ { 1 } , a _ { 2 } - b _ { 2 } , a _ { 3 } - b _ { 3 } ] ^ { T } .$ .

几何空间中向量的坐标和该向量起点和终点的坐标的关系是显然的.

# 命题 3.20

在给定的仿射坐标系中设点 $A = [ x _ { 1 } , y _ { 1 } , z _ { 1 } ] ^ { T }$ , $\boldsymbol { B } = [ x _ { 2 } , y _ { 2 } , z _ { 2 } ] ^ { T }$ , 则

$$
\overrightarrow {A B} = \left[ x _ {2} - x _ {1}, y _ {2} - y _ {1}, z _ {2} - z _ {1} \right] ^ {T}.
$$

# 用坐标法研究向量的线性关系

有了坐标系, 我们就可以利用坐标法研究向量的线性关系.

# 命题 3.21

在给定的平面仿射坐标系中设两个向量

$$
\boldsymbol {a} = \left[ a _ {1}, a _ {2} \right] ^ {T}, \quad \boldsymbol {b} = \left[ b _ {1}, b _ {2} \right] ^ {T}.
$$

则 $\mathbf { \Delta } _ { a , b }$ 共线当且仅当

$$
\left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| = 0.
$$

证明 (i) 证明必要性. 若 $\mathbf { \Pi } _ { a , b }$ 中存在零向量, 不妨设 $\pmb { a } = \mathbf { 0 }$ , 则 $a _ { 1 } = a _ { 2 } = 0$ , 故 $a _ { 1 } b _ { 2 } - b _ { 1 } a _ { 2 } = 0 .$ . 若 $\mathbf { \Delta } _ { a , b }$ 都是非零向量. 由于 $\pmb { a }$ 和 $\pmb { b }$ 共线, 故存在实数 $\lambda$ 使得 $\mathbf { \pmb { a } } = \lambda \mathbf { b }$ , 于是有 $a _ { 1 } = \lambda b _ { 1 }$ , $a _ { 2 } = \lambda b _ { 2 }$ , 因此

$$
a _ {1} b _ {2} - b _ {1} a _ {2} = (\lambda b _ {1}) b _ {2} - b _ {1} (\lambda b _ {2}) = 0.
$$

(ii) 证明充分性. 若 $\mathbf { \Pi } _ { a , b }$ 中存在零向量, 则 $\mathbf { \Delta } _ { a , b }$ 共线. 若 $\mathbf { \Delta } _ { a , b }$ 都是非零向量, 不妨设 $a _ { 1 } \neq 0 ,$ . 由于

$$
a _ {1} b _ {2} - b _ {1} a _ {2} = 0 \Longleftrightarrow b _ {2} = \frac {b _ {1}}{a _ {1}} a _ {2}, \quad b _ {1} = \frac {b _ {1}}{a _ {1}} a _ {1}.
$$

因此

$$
\boldsymbol {b} = \frac {b _ {1}}{a _ {1}} \boldsymbol {a}.
$$

于是可知 $\mathbf { \Delta } _ { a , b }$ 共线.

由以上命题我们可以立即得到平面上三点共线的充要条件.

# 推论 3.1

在给定的平面仿射坐标系中设三点

$$
A = \left[ x _ {1}, y _ {1} \right] ^ {T}, \quad B = \left[ x _ {2}, y _ {2} \right] ^ {T}, \quad C = \left[ x _ {3}, y _ {3} \right] ^ {T}.
$$

则 $A , B , C$ 三点共线当且仅当

$$
\left| \begin{array}{c c c} x _ {1} & x _ {2} & x _ {3} \\ y _ {1} & y _ {2} & y _ {3} \\ 1 & 1 & 1 \end{array} \right| = 0
$$

证明 $A , B , C$ 三点共线当且仅当 $\overrightarrow { C A }$ , $\overrightarrow { C B }$ 共线. 由条件可知

$$
\overrightarrow {C A} = \left[ x _ {1} - x _ {3}, y _ {1} - y _ {3} \right] ^ {T}, \quad \overrightarrow {C B} = \left[ x _ {2} - x _ {3}, y _ {2} - y _ {3} \right] ^ {T}.
$$

因此 $A , B , C$ 三点共线当且仅当

$$
\left| \begin{array}{c c} x _ {1} - x _ {3} & x _ {2} - x _ {3} \\ y _ {1} - y _ {3} & y _ {2} - y _ {3} \end{array} \right| = \left| \begin{array}{c c c} x _ {1} - x _ {3} & x _ {2} - x _ {3} & x _ {3} \\ y _ {1} - y _ {3} & y _ {2} - y _ {3} & y _ {3} \\ 0 & 0 & 1 \end{array} \right| \overline {{\overline {{[ 1 ] + [ 3 ]}}}} \left| \begin{array}{c c c} x _ {1} & x _ {2} & x _ {3} \\ y _ {1} & y _ {2} & y _ {3} \\ 1 & 1 & 1 \end{array} \right| = 0.
$$

几何空间中两个向量的共性也可以用行列式讨论.

# 命题 3.22 (三维向量共线的行列式条件)

在给定的仿射坐标系中设两个向量

$$
\boldsymbol {a} = \left[ a _ {1}, a _ {2}, a _ {3} \right] ^ {T}, \quad \boldsymbol {b} = \left[ b _ {1}, b _ {2}, b _ {3} \right] ^ {T}.
$$

则 $\mathbf { \Delta } _ { a , b }$ 共线当且仅当

$$
\left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| = \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| = \left| \begin{array}{l l} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| = 0. \tag {3.4}
$$

证明 (i)证明必要性.若 ${ \mathbf { } } _ { \pmb { a } , \pmb { b } }$ 中存在零向量,则 $\mathbf { \Pi } _ { a , b }$ 共线时式(3.4)显然成立.若 $\mathbf { \Delta } _ { a , b }$ 都是非零向量且 $\mathbf { \Delta } _ { a , b }$ 共线,则存在非零实数 $\lambda$ 使得 $\mathbf { \pmb { a } } = \lambda \mathbf { b }$ , 则

$$
a _ {1} = \lambda b _ {1}, \quad a _ {2} = \lambda b _ {2}, \quad a _ {3} = \lambda b _ {3}.
$$

于是

$$
\left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| = \left| \begin{array}{c c} \lambda b _ {1} & b _ {1} \\ \lambda b _ {2} & b _ {2} \end{array} \right| = \lambda b _ {1} b _ {2} - \lambda b _ {1} b _ {2} = 0.
$$

$$
\left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| = \left| \begin{array}{c c} \lambda b _ {1} & b _ {1} \\ \lambda b _ {3} & b _ {3} \end{array} \right| = \lambda b _ {1} b _ {3} - \lambda b _ {1} b _ {3} = 0.
$$

$$
\left| \begin{array}{c c} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| = \left| \begin{array}{c c} \lambda b _ {2} & b _ {2} \\ \lambda b _ {3} & b _ {3} \end{array} \right| = \lambda b _ {2} b _ {3} - \lambda b _ {2} b _ {3} = 0.
$$

(ii) 证明充分性. 当式 (3.4) 成立时. 若 $\mathbf { \Pi } _ { a , b }$ 中存在零向量, 则 $\mathbf { \Delta } _ { a , b }$ 共线. 若 $\mathbf { \Delta } _ { a , b }$ 都是非零向量. 不妨设 $a _ { 1 } \neq 0$ .则

$$
\left. \begin{array}{l} b _ {1} = \frac {b _ {1}}{a _ {1}} a _ {1} \\ 0 = \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| = a _ {1} b _ {2} - b _ {1} a _ {2} \Longleftrightarrow b _ {2} = \frac {b _ {1}}{a _ {1}} a _ {2} \\ 0 = \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| = a _ {1} b _ {3} - b _ {1} a _ {3} \Longleftrightarrow b _ {3} = \frac {b _ {1}}{a _ {1}} a _ {3} \end{array} \right\} \Longrightarrow \boldsymbol {b} = \frac {b _ {1}}{a _ {1}} \boldsymbol {a}.
$$

因此 $\mathbf { \Delta } _ { a , b }$ 共线.

注 事实上式 (3.4) 中三个行列式的任意两个为零, 第三个一定为零.

# 3.4 向量的内积和外积

前面我们运用向量的加法和数乘运算研究了几何空间的线性结构. 如果要研究几何空间中的距离, 角度等概念, 光有向量的线性运算是不够的. 这些概念通常称为度量概念. 为了研究几何空间的度量概念. 我们引入其他概念.

# 向量的内积

物理学中我们知道质点 $A$ 在力 $\boldsymbol { F }$ 的作用下发生位移 ??, 若 $\boldsymbol { F }$ 在 $s$ 方向的分力为 $F _ { 1 }$ 则 $\boldsymbol { F }$ 对 ?? 做的功 ?? 为$\boldsymbol { W } = | \boldsymbol { F } _ { 1 } | | \boldsymbol { S } |$ . 若 $\pmb { F }$ 与 $s$ 的夹角为 $\alpha$ , 则有以下公式

$$
W = \left| \boldsymbol {F} _ {1} \right| | \boldsymbol {S} | = \left| \boldsymbol {F} \right| | \boldsymbol {S} | \cos \alpha .
$$

由此引出了向量的 “分量”,“夹角” 以及 “内积” 的概念. 我们可以类比物理中功的公式定义向量的内积.

# 定义 3.21 (向量的内积)

设几何空间??. 我们定义一个二元实值函数

$$
V \times V \to \mathbb {R}
$$

$$
(a, b) \mapsto a \cdot b := | a | | b | \cos \langle a, b \rangle ,
$$

其中 $\langle a , b \rangle$ 为两个向量的夹角. 我们称以上函数的函数值 ${ \pmb a } \cdot { \pmb b }$ 为向量 $\pmb { a }$ 和 $\pmb { b }$ 的内积 (inner product).

注 由于内积是一个实值函数 (不是几何空间上向量的运算), 所以也可以称为数量积 (scalar product); 由于数量积的运算符是 ·, 所以也可以称为点积 (dot product).

注由内积的定义可知,若向量 $\pmb { a }$ 与 $\pmb { b }$ 有一个为零向量,则 $\pmb { a } \cdot \pmb { b } = 0$ .若非零向量 $\pmb { a }$ 与 $\pmb { b }$ 互相垂直,则cos $\langle \pmb { a } , \pmb { b } \rangle = 0$ ,故 $\pmb { a } \cdot \pmb { b } = 0$ , 由此可见 $\pmb { a } \cdot \pmb { b } = 0$ 不能推得 $\pmb { a } = \pmb { 0 }$ 或 $\pmb { b = 0 }$ .

注 需要注意, 对于非零向量 ${ \mathbf { } } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf  \mathbf { } \mathbf { } \mathbf { } \mathbf { } \mathbf \mathbf { } \mathbf { } \mathbf { } \mathbf \mathbf { } \mathbf { } \mathbf \mathbf { } \mathbf { } \mathbf \mathbf { } \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf \mathbf { } \mathbf \mathbf { } \mathbf \mathbf \mathbf { } \mathbf \mathbf \mathbf { } \mathbf \mathbf $ , 若 $\textbf { \em a } \perp \textbf { \em c }$ 且 $\textit { \textbf { b } } \bot \boldsymbol { c }$ 则 $\pmb { a } \cdot \pmb { c } = \pmb { b } \cdot \pmb { c } = 0$ , 因此由 $\mathbf { a } \cdot \mathbf { c } = \mathbf { b } \cdot \mathbf { c }$ , 且 $\begin{array} { r } { \mathbf { c } \neq \mathbf { 0 } . } \end{array}$ , 无法推出${ \pmb a } = { \pmb b }$ , 即向量的内积不满足消去律.

由向量内积的定义可以看出, 向量内积是依赖于两个向量的长度和角度定义的. 所以有了向量的内积的概念才能研究几何空间的长度和角度等 “度量概念”. 由向量内积的定义可以直接得到向量长度和两个向量夹角的公式.

# 命题 3.23 (向量的长度和角度)

在几何空间中设向量 $\pmb { a }$ 和 ??, 则

$$
| a | = \sqrt {\boldsymbol {a} \cdot \boldsymbol {a}}, \qquad \cos \langle \boldsymbol {a}, \boldsymbol {b} \rangle = \frac {\boldsymbol {a} \cdot \boldsymbol {b}}{| \boldsymbol {a} | | \boldsymbol {b} |}, \quad \boldsymbol {a} \neq \mathbf {0}, \boldsymbol {b} \neq \mathbf {0}.
$$

由以上公式, 可以把向量垂直的问题转化为内积的问题.

# 命题 3.24 (向量垂直的充要条件)

设几何空间中的非零向量 ?? 和 ??, 则

$$
\boldsymbol {a} \perp \boldsymbol {b} \iff \boldsymbol {a} \cdot \boldsymbol {b} = 0.
$$

下面是内积的一些简单性质.

# 命题 3.25 (向量内积的简单性质)

对于几何空间中的任意向量 $a , b , c ,$ , 任意实数 $\lambda$ 都有

(1) 对称性: ${ \pmb { a } } \cdot { \pmb { b } } = { \pmb { b } } \cdot { \pmb { a } }$ .   
(2) 正定性: ${ \pmb a } \cdot { \pmb a } \geq 0$ , 等号成立当且仅当 $\pmb { a } = \pmb { 0 }$ .

(3) 线性: $( { \pmb a } + { \pmb c } ) \cdot { \pmb b } = { \pmb a } \cdot { \pmb b } + { \pmb c } \cdot { \pmb b }$ , $( \lambda \pmb { a } ) \cdot \pmb { b } = \lambda ( \pmb { a } \cdot \pmb { b } ) .$ .

下面讨论用坐标表示的向量的内积.

# 定理 3.11 (内积的坐标公式)

在直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中设向量

$$
\boldsymbol {a} = \left[ a _ {1}, a _ {2}, a _ {3} \right] ^ {T}, \quad \boldsymbol {b} = \left[ b _ {1}, b _ {2}, b _ {3} \right] ^ {T}.
$$

则它们内积为

$$
\boldsymbol {a} \cdot \boldsymbol {b} = a _ {1} b _ {1} + a _ {2} b _ {2} + a _ {3} b _ {3}.
$$

证明 由内积的运算性质可知

$$
\begin{array}{l} \boldsymbol {a} \cdot \boldsymbol {b} = \left(a _ {1} \boldsymbol {e} _ {1} + a _ {2} \boldsymbol {e} _ {2} + a _ {3} \boldsymbol {e} _ {3}\right) \cdot \left(b _ {1} \boldsymbol {e} _ {1} + b _ {2} \boldsymbol {e} _ {2} + b _ {3} \boldsymbol {e} _ {3}\right) = a _ {1} b _ {1} (\boldsymbol {e} _ {1} \cdot \boldsymbol {e} _ {1}) + a _ {2} b _ {2} (\boldsymbol {e} _ {2} \cdot \boldsymbol {e} _ {2}) + a _ {3} b _ {3} (\boldsymbol {e} _ {3} \cdot \boldsymbol {e} _ {3}) \\ = a _ {1} b _ {1} + a _ {2} b _ {2} + a _ {3} b _ {3}. \\ \end{array}
$$

有了以上公式, 就可以得到直角坐标系中向量的长度和两点的距离公式.

# 推论 3.2 (向量的长度和两点的距离公式)

在直角坐标系 $\left[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } \right]$ 中, 设向量 $\mathbf { \Psi } _ { \pmb { a } } = [ a _ { 1 } , a _ { 2 } , a _ { 3 } ] ^ { T }$ , 则

$$
| \boldsymbol {a} | = \sqrt {a _ {1} ^ {2} + a _ {2} ^ {2} + a _ {3} ^ {2}}.
$$

设两点 $A = [ x _ { 1 } , x _ { 2 } , x _ { 3 } ] ^ { T }$ , $B = [ y _ { 1 } , y _ { 2 } , y _ { 3 } ] ^ { T }$ , 则

$$
| \overrightarrow {A B} | = \sqrt {(x _ {2} - x _ {1}) ^ {2} + (y _ {2} - y _ {1}) ^ {2} + (z _ {2} - z _ {1}) ^ {2}}.
$$

在直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中, 设向量 $\mathbf { \delta } \mathbf { \mathbf { \em a } } = [ a _ { 1 } , a _ { 2 } , a _ { 3 } ] ^ { T }$ , 容易知道它的三个坐标可以用它与三个基向量的内积表示:

$$
a _ {1} = \boldsymbol {a} \cdot \boldsymbol {e} _ {1}, \quad a _ {2} = \boldsymbol {a} \cdot \boldsymbol {e} _ {2}, \quad a _ {3} = \boldsymbol {a} \cdot \boldsymbol {e} _ {3}.
$$

令

$$
\boldsymbol {a} ^ {0} = \frac {\boldsymbol {a}}{| \boldsymbol {a} |}.
$$

设 $\pmb { a } ^ { 0 } = [ x , y , z ] ^ { T }$ , 它与 $\mathbf { { e } } _ { 1 } , \mathbf { { e } } _ { 2 } , \mathbf { { e } } _ { 3 }$ 的夹角分别为 $\alpha , \beta , \gamma$ , 则

$$
x = \boldsymbol {a} ^ {0} \cdot \boldsymbol {e} _ {1} = | \boldsymbol {a} ^ {0} | | \boldsymbol {e} _ {1} | \cos \alpha = \cos \alpha ,
$$

$$
y = \boldsymbol {a} ^ {0} \cdot \boldsymbol {e} _ {2} = | \boldsymbol {a} ^ {0} | | \boldsymbol {e} _ {2} | \cos \beta = \cos \beta ,
$$

$$
z = \boldsymbol {a} ^ {0} \cdot \boldsymbol {e} _ {3} = | \boldsymbol {a} ^ {0} | | \boldsymbol {e} _ {3} | \cos \gamma = \cos \gamma .
$$

这表明把向量 $\pmb { a }$ 单位化后, 单位向量 $\pmb { a } ^ { 0 }$ 的坐标恰好是 $\pmb { a }$ 与三个坐标轴 (或三个基向量) 夹角的余弦值. 这就引出了方向角和方向余弦的概念.

# 定义 3.22 (方向角和方向余弦)

在直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中, 设向量 $\pmb { a }$ , 我们称 $\pmb { a }$ 与基向量 $\mathbf { { e } } _ { 1 } , \mathbf { { e } } _ { 2 } , \mathbf { { e } } _ { 3 }$ 的夹角 $\alpha , \beta , \gamma$ 为方向 $\pmb { a }$ 的方向角(direction angle), 它们的余弦值 cos ??, cos $\beta$ , cos ?? 称为方向余弦 (direction cosine).

容易验证方向余弦满足以下公式.

# 命题 3.26 (方向余弦公式)

在直角坐标系 $\left[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } \right]$ 中, 设向量 $\pmb { a }$ , 则它的方向角满足

$$
\cos^ {2} \alpha + \cos^ {2} \beta + \cos^ {2} \gamma = 1
$$

证明 设 $\pmb { a } ^ { 0 } = [ x , y , z ] ^ { T }$ , 则

$$
\cos^ {2} \alpha + \cos^ {2} \beta + \cos^ {2} \gamma = x ^ {2} + y ^ {2} + z ^ {2} = 1.
$$

# 向量外积的意义

在物理中我们知道, 关于支点 $o$ 力 $\pmb { F }$ 在点 $A$ 上有一个力矩 $M$ , 若向量 $\overrightarrow { O A }$ 与 $\boldsymbol { F }$ 垂直的分量为 $\vert \overrightarrow { O A ^ { \prime } } \vert$ , 则力矩?? 的大小为 $\vert { \cal M } \vert = \vert { \cal F } \vert \vert \overrightarrow { O A ^ { \prime } } \vert$ . 若 $\pmb { F }$ 与 $\overrightarrow { O A }$ 的夹角为 $\alpha$ , 则有以下公式

$$
\left| \boldsymbol {M} \right| = \left| \boldsymbol {F} \right| \left| \overrightarrow {O A ^ {\prime}} \right| = \left| \boldsymbol {F} \right| \left| \overrightarrow {O A} \right| \sin \alpha .
$$

力矩 $M$ 的方向则由右手定则 (right-hand rule) 确定: 用右手四指从 $\overrightarrow { O A }$ 弯向 $\boldsymbol { F }$ (转角小于 $\pi$ ) 时拇指的方向就是 ??的方向. 由此引出了向量的 “外积” 的概念.

# 定义 3.23 (外积)

设几何空间??. 我们定义一个 $V$ 上的二元运算

$$
V \times V \to V
$$

$$
(a, b) \mapsto a \times b.
$$

其中 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b }$ 的大小规定为

$$
\left| \boldsymbol {a} \times \boldsymbol {b} \right| := \left| \boldsymbol {a} \right| \left| \boldsymbol {b} \right| \sin \langle \boldsymbol {a}, \boldsymbol {b} \rangle ,
$$

$\pmb { a } \times \pmb { b }$ 的方向规定为用右手四指从 $\pmb { a }$ 弯向 $\pmb { b }$ (转角小于 $\pi$ ) 时拇指的方向 (即同时与 $\pmb { a }$ 和 $\pmb { b }$ 垂直且使 $( { \pmb a } , { \pmb b } , { \pmb a } { \times } { \pmb b } )$ 成右手系). 我们称以上定义的 $\mathbf { \nabla } \mathbf { \mathbf { \mathbf { a } } } \times \mathbf { \mathbf { b } }$ 为向量 $\pmb { a }$ 和 $\pmb { b }$ 的外积 (exterior product).

注 由于外积的结果还是一个向量, 所以也可以称为向量积 (vector product); 由于外积的运算符是 $\times ,$ , 所以也可以称为叉积 (cross product).

注由外积的定义可知,若向量 $\pmb { a }$ 与 $\pmb { b }$ 有一个为零向量,则 $\pmb { a } \times \pmb { b } = \pmb { 0 }$ .若非零向量 $\pmb { a }$ 与 $\pmb { b }$ 共线(平行),则 $\sin \left. \mathbf { 0 } , \mathbf { \delta } \right. = 0$ ,故 $\pmb { a } \times \pmb { b } = \pmb { 0 }$ , 由此可见 $\pmb { a } \times \pmb { b } = \pmb { 0 }$ 不能推得 $\pmb { a } = \pmb { 0 }$ 或 $\pmb { b = 0 }$ .

注 需要注意, 对于非零向量 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ , 若 $\textbf { \em a } \perp \textbf { \em c }$ 且 $\textit { \textbf { b } } \bot \boldsymbol { c }$ 则 $\pmb { a } \cdot \pmb { c } = \pmb { b } \cdot \pmb { c } = 0$ , 因此由 $\mathbf { a } \cdot \mathbf { c } = \mathbf { b } \cdot \mathbf { c }$ , 且 $\begin{array} { r } { \mathbf { c } \neq \mathbf { 0 } . } \end{array}$ , 无法推出${ \pmb a } = { \pmb b }$ , 即向量的内积不满足消去律.

由以上公式, 可以把向量共线 (平行) 的问题转化为外积的问题.

# 命题 3.27 (向量垂直的充要条件)

设几何空间中的非零向量 $\pmb { a }$ 和 $\pmb { b }$ , 则 $\pmb { a }$ 和 $\pmb { b }$ 共线 (平行) 当且仅当 $\pmb { a } \times \pmb { b } = \pmb { 0 }$ .

容易发现不共线的非零向量 $\pmb { a }$ 和 $\pmb { b }$ 的外积 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b }$ 的大小表示以 $\pmb { a }$ 和 $\pmb { b }$ 为邻边的平行四边形的面积 (或者是以$\pmb { a }$ 和 $\pmb { b }$ 为邻边的三角形面积的两倍), 那么 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b }$ 的方向表示什么几何意义呢?

在平面中, 绕定点的旋转变换只有两个方向, 我们通常用 “顺时针方向” 和 “逆时针方向” 来描述. 但对于几何空间中的平面 $\pi$ ,我们无法用这种方法描述 $\pi$ 上的旋转方向.因为在 $\pi$ 的一侧看来是顺时针旋转的方向,在 $\pi$ 的另一侧看来却是逆时针旋转. 为此我们可以先想办法定义平面的方向.

我们可以利用右手坐标系来确定平面的定向. 在平面 $\pi$ 上给定两个不共线的有序向量 $\mathbf { \Delta } _ { a , b }$ . 取右手直角坐标系, 令 $\pi$ 为 $O x y .$ . 若 $\pmb { a }$ 到 $\pmb { b }$ 转角小于 $\pi$ 的旋转方向与 $x$ 轴到 $y$ 轴的旋转方向一致, 则用 ?? 轴方向表示 $\pmb { a }$ 到 $\pmb { b }$ 的旋转方向.若不一致,则用 $z$ 轴的负方向表示 $\pmb { a }$ 到 $\pmb { b }$ 的旋转方向.这样我们就为几何空间中的任意平面定义了两个方

向. 这个方法的本质是向量 $\pmb { a }$ 旋转到 $\pmb { b }$ 一定会产生一个平面, 我们其实是用垂直于平面的两个方向来定义这个旋转的方向.

现在我们就可以来看向量外积方向的几何意义了. 当 $\mathbf { \Delta } _ { a , b }$ 不共线时, 它们的外积 $\mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \textbf { \Pi } \mathbf { \Pi } \textbf { \Pi } \textbf { \Pi } \mathbf { \Pi } \textbf { \Pi } \textbf { \Pi } \textbf { \Pi } \mathbf { \Pi } \textbf { \Pi } \textbf { \Pi } \mathbf { \Pi } \textbf { \Pi } \textbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf { \Pi \Pi } \mathbf \mathbf { \Pi } \mathbf \textbf { \Pi \Pi } \mathbf \mathbf { \Pi \Pi } \mathbf \mathbf { \Pi \Pi } \mathbf \textbf \mathbf { \Pi \Pi } \mathbf \textbf \textbf \mathbf { \Pi \Pi } \textbf \textbf \textbf \mathbf { \Pi \Pi \Pi \Pi } \mathbf \mathbf \mathbf \mathbf  \Pi \Pi \Pi \Pi \mathbf \Pi \mathbf \Pi \mathbf \mathbf \Pi \mathbf \mathbf \Pi \mathbf \Pi \mathbf \mathbf \Pi \mathbf \mathbf \Pi \mathbf \mathbf \Pi \mathbf \mathbf \Pi \mathbf \mathbf \mathbf \Pi \mathbf \mathbf \Pi \mathbf \mathbf \mathbf \mathbf \ m \ m \mathbf \mathbf \mathbf \ m \mathbf \mathbf \ m \mathbf \ m \mathbf \mathbf \mathbf \ m \mathbf \mathbf \mathbf \ m \mathbf \mathbf \ m \mathbf \mathbf \ m \mathbf \ m \mathbf \mathbf \ m \ m \mathbf \mathbf \mathbf \mathbf \ m \mathbf \mathbf \ m \mathbf \ m \ m \mathbf \mathbf \ m \mathbf \ m \mathbf \mathbf \mathbf \mathbf \ m \mathbf \ m \ m \mathbf \mathbf \ m \mathbf \mathbf \mathbf \ m \mathbf \mathbf \ m \ m \ m \mathbf \mathbf \ m \mathbf \ m \mathbf \mathbf \ m \ m \mathbf \mathbf \ m \mathbf \ m \ m \mathbf \mathbf \ m \ m \ m \ m \ m \mathbf \ m \mathbf \ m \mathbf \mathbf \mathbf \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \mathbf \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m$ 表示的方向就是 $\pmb { a }$ 到$\pmb { b }$ 的旋转方向, 即向量 ${ \pmb a } , { \pmb b } , { \pmb a } \times { \pmb b }$ 成右手系. 我们也可以说外积 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b }$ 表示的方向是以 $\mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf { \delta } \mathbf \delta \mathbf { \delta } \delta \mathbf { \delta } \delta \mathbf { \delta \delta } \delta \mathbf \delta \delta \mathbf { \delta } \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta \delta $ 为邻边的平行四边形 (或三角形) 的方向, 此时我们称该平行四边形 (或三角形) 为有向平行四边形 (directed parallelogram)(有向三角形(directed triangle)).

由于外积 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b }$ 的大小表示以 $\pmb { a }$ 和 $\pmb { b }$ 为邻边的平行四边形的面积(或者是以 $\pmb { a }$ 和 $\pmb { b }$ 为邻边的三角形面积的两倍), 而 $\mathbf { \nabla } \mathbf { \mathbf { \mathbf { a } } } \times \mathbf { \mathbf { b } }$ 的方向表示平行四边形 (或三角形) 所在平面的一个方向, 所以很自然地我们可以定义 “有向面积”.

# 定义 3.24 (平行四边形的有向面积)

设平面 $\pi$ 上的两个不共线向量 ??, ??. 规定 $\pi$ 的方向为 $\pmb { e }$ . 则平面 $\pi$ 上的有向平行四边形的面积可以规定一个正负号:

(1) 若该平行四边形的方向与平面 $\pi$ 的方向一致, 则规定它的面积为正;  
(2) 若该平行四边形的方向与平面 $\pi$ 的方向不一致, 则规定它的面积为负;

这样规定的面积称为平行四边形的有向面积 (directed area), 记作 $( { \pmb a } , { \pmb b } )$ .

注 类似地, 也可以定义三角形的有向面积.

注 按以上定义容易知道以下等式: $\pmb { a } \times \pmb { b } = ( \pmb { a } , \pmb { b } ) \pmb { e }$ .

容易发现右手直角坐标系的三个基向量满足以下关系.

# 命题 3.28 (单位正交基的外积)

设右手直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ , 则

$$
\boldsymbol {e} _ {1} \times \boldsymbol {e} _ {2} = \boldsymbol {e} _ {3}, \quad \boldsymbol {e} _ {2} \times \boldsymbol {e} _ {3} = \boldsymbol {e} _ {1}, \quad \boldsymbol {e} _ {3} \times \boldsymbol {e} _ {1} = \boldsymbol {e} _ {2}.
$$

注由于外积规定的方向也是右手系的,即 ${ \pmb a } , { \pmb b } , { \pmb a } \times { \pmb b }$ 成右手系.因此使用右手直角坐标系会带来很多便利.更重要的是在右手直角坐标系中得出的和外积有关的结论,在左手坐标系中是不成立的.所以我们在讨论问题时,一般默认使用右手坐标系.

# 命题 3.29 (外积的简单性质)

在几何空间中, 任意向量 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 和任意实数 $\lambda$ 都满足

(1) 反交换律: $\pmb { a } \times \pmb { b } = - \pmb { b } \times \pmb { a }$ .   
(2) $( \lambda \pmb { a } ) \times \pmb { b } = \lambda ( \pmb { a } \times \pmb { b } ) = \pmb { a } \times ( \lambda \pmb { b } ) .$ .   
(3) 左分配律: $\pmb { a } \times ( \pmb { b } + \pmb { c } ) = \pmb { a } \times \pmb { b } + \pmb { a } \times \pmb { c }$   
(4) 右分配律: $( b + c ) \times a = b \times a + c \times a$

下面研究用坐标计算外积的方法.

# 定理 3.12 (外积的坐标公式)

在右手直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中, 设向量 $\mathbf { \delta } \mathbf { \mathbf { \em a } } = [ a _ { 1 } , a _ { 2 } , a _ { 3 } ] ^ { T }$ , $\pmb { b } = [ b _ { 1 } , b _ { 2 } , b _ { 3 } ] ^ { T }$ , 则

$$
\boldsymbol {a} \times \boldsymbol {b} = \left| \begin{array}{c c} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {1} - \left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {2} + \left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| \boldsymbol {e} _ {3}.
$$

证明 由外积的左右分配律和反交换律可知

$$
\begin{array}{l} \boldsymbol {a} \times \boldsymbol {b} = \left(a _ {1} \boldsymbol {e} _ {1} + a _ {2} \boldsymbol {e} _ {2} + a _ {3} \boldsymbol {e} _ {3}\right) \times \left(b _ {1} \boldsymbol {e} _ {1} + b _ {2} \boldsymbol {e} _ {2} + b _ {3} \boldsymbol {e} _ {3}\right) \\ = a _ {2} b _ {3} \left(\boldsymbol {e} _ {2} \times \boldsymbol {e} _ {3}\right) + a _ {3} b _ {2} \left(\boldsymbol {e} _ {3} \times \boldsymbol {e} _ {2}\right) + a _ {1} b _ {3} \left(\boldsymbol {e} _ {1} \times \boldsymbol {e} _ {3}\right) + a _ {3} b _ {1} \left(\boldsymbol {e} _ {3} \times \boldsymbol {e} _ {1}\right) + a _ {1} b _ {2} \left(\boldsymbol {e} _ {1} \times \boldsymbol {e} _ {2}\right) + a _ {2} b _ {1} \left(\boldsymbol {e} _ {2} \times \boldsymbol {e} _ {1}\right) \\ = \left(a _ {2} b _ {3} - a _ {3} b _ {2}\right) \boldsymbol {e} _ {1} - \left(a _ {1} b _ {3} - a _ {3} b _ {1}\right) \boldsymbol {e} _ {2} + \left(a _ {1} b _ {2} - a _ {2} b _ {1}\right) \boldsymbol {e} _ {3} \\ \end{array}
$$

$$
= \left| \begin{array}{c c} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {1} - \left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {2} + \left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| \boldsymbol {e} _ {3}.
$$

注 由以上定理可知, 在右手直角坐标系中

$$
| \boldsymbol {a} \times \boldsymbol {b} | = \sqrt {\left| \begin{array}{l l} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| ^ {2} + \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| ^ {2} + \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| ^ {2}}
$$

这个公式同时也是以 $\mathbf { \Pi } _ { a , b }$ 为邻边的平行四边形的面积公式.

注 为了记忆方便我们可以把以上公式写成以下形式:

$$
\boldsymbol {a} \times \boldsymbol {b} = \left| \begin{array}{l l} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {1} - \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {2} + \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| \boldsymbol {e} _ {3} = \left| \begin{array}{l l l} \boldsymbol {e} _ {1} & a _ {1} & b _ {1} \\ \boldsymbol {e} _ {2} & a _ {2} & b _ {2} \\ \boldsymbol {e} _ {3} & a _ {3} & b _ {3} \end{array} \right|.
$$

注意以上两式右侧不是真正意义上的三阶行列式, 因为它们的第一列是向量.

# 向量混合积的意义和性质

我们已经看到用向量的外积可以计算平行四边形 (或三角形) 的面积. 很自然地, 我们希望用向量计算平行六面体 (或斜三棱柱) 的体积. 设平行六面体 $A B C D / / B ^ { \prime } C ^ { \prime } D ^ { \prime }$ . 过 $A$ 作平面 $A ^ { \prime } B ^ { \prime } C ^ { \prime } D ^ { \prime }$ 的垂线, 垂足为 $H$ . 令 $\overrightarrow { A B } = { \pmb a }$ ,$\overrightarrow { A D } = \pmb { b }$ , $\overrightarrow { A A ^ { \prime } } = \pmb { c }$ , ${ \overrightarrow { A H } } = h$ . 则该平行六面体的底面积为 $| { \pmb a } \times { \pmb b } |$ . 它的高为 $| h |$ . 由于 $\pmb { h }$ 是 $\pmb { c }$ 在方向 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b }$ 上的投影.于是平行六面体的体积为

$$
V = | \boldsymbol {a} \times \boldsymbol {b} | | \boldsymbol {h} | = | (\boldsymbol {a} \times \boldsymbol {b}) \cdot \boldsymbol {c} |.
$$

这就引出了向量混合积的概念.

![](images/382481da301300adfcee8b0874468a23e46aeb7a75c03878813db2fc3b82eb60.jpg)  
图 3.2: 混合积的几何意义.

# 定义 3.25 (向量的混合积)

在几何空间中设向量 ${ \mathbf { } } a , b , c$ , 我们称 $\mathbf { \nabla } \mathbf { a } \times \mathbf { b } \cdot \mathbf { c }$ 为 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 的混合积 (mixed product).

注容易知道 $\pmb { c } \cdot \pmb { a } \times \pmb { b }$ 和 ${ \pmb a } \times { \pmb b } \cdot { \pmb c }$ 表示的意义不会有歧义, 所以它们都可以表示向量 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 的混合积. ${ \mathbf { } } a , b , c$ 的混合积还可以记作

$$
(a, b, c) := a \times b \cdot c = c \cdot a \times b.
$$

我们已经看到混合积 $\mathbf { \Pi } _  \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } ( \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \times \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } ) \mathbf { \Pi } ( \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf { \Pi } \mathbf \Pi \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf \Pi \mathbf { \Pi } \mathbf \Pi \mathbf { \Pi } \mathbf \mathbf { \Pi \Pi } \mathbf \mathbf { \Pi \Pi \Pi } \mathbf \mathbf  \Pi \Pi \Pi \Pi \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf { } \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m $ 的大小表示以 ${ \mathbf { } } a , b , c$ 为棱的平行六面体的体积. 同样地, 我们还希望知道 $\mathbf { \Pi } _  \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \left( \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \times \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \right) \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf { \Pi } \mathbf \mathbf { \Pi } \mathbf { \Pi \Pi } \mathbf \mathbf { \Pi } \mathbf \mathbf { \Pi \Pi } \mathbf \mathbf { \Pi } \mathbf \mathbf { \Pi \Pi } \mathbf \mathbf { \Pi \Pi } \mathbf \mathbf \mathbf { \Pi \Pi \Pi } \mathbf \mathbf \mathbf  \Pi \Pi \Pi \Pi \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf { } \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \mathbf \Pi \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m \ m $ 表示的方向的几何意义.

由混合积的定义容易知道, 当 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 成右手系时, $\pmb { a } \times \pmb { b } \cdot \pmb { c } > 0$ . 反之当 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 成左手系时, $\pmb { a } \times \pmb { b } \cdot \pmb { c } < 0$ . 因此$\pmb { a } \times \pmb { b } \cdot \pmb { c } < 0$ 可以判断 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 是否成右手系. 于是我们规定平行六面体同一顶点上的三条棱之间的一个序列 $\mathbf { \Delta } _ { a , b }$ ,$\pmb { c }$ 为该平行六面体的一个方向. 此时我们称该平行六面体为有向平行六面体 (directed parallelepiped). 类似地我们可以定义平行六面体的 “有向体积”.

# 定义 3.26 (平行四边形的有向面积)

设几何空间上的三个不共面向量 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c .$ . 以 ${ \mathbf { } } a , b , c$ 为棱的有向平行六面体的体积可以规定一个正负号:

(1) 若该平行六面体的方向成右手系, 则规定它的体积为正;  
(2) 若该平行六面体的方向成左手系, 则规定它的体积为负.

这样规定的体积称为平行六面体的有向体积 (directed volume).

注 类似地, 也可以定义平行三棱柱的有向体积.

由混合积的几何意义立刻知道以下结论.

# 命题 3.30

在几何空间中, 向量 ${ \mathbf { } } a , b , c$ 共面当且仅当 $\pmb { a } \times \pmb { b } \cdot \pmb { c } = 0$

由混合积的几何意义还可以得到混合积的常用性质.

# 命题 3.31 (混合积的性质)

在几何空间中, 任意向量 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 都满足

$$
\boldsymbol {a} \times \boldsymbol {b} \cdot \boldsymbol {c} = \boldsymbol {b} \times \boldsymbol {c} \cdot \boldsymbol {a} = \boldsymbol {c} \times \boldsymbol {a} \cdot \boldsymbol {b}.
$$

证明 若 ${ \mathbf { } } a , b , c$ 共面, 则

$$
\boldsymbol {a} \times \boldsymbol {b} \cdot \boldsymbol {c} = \boldsymbol {b} \times \boldsymbol {c} \cdot \boldsymbol {a} = \boldsymbol {c} \times \boldsymbol {a} \cdot \boldsymbol {b} = 0.
$$

命题成立. 下设 ${ \mathbf { } } a , b , c$ 不共面.

由于 $| a \times b \cdot c |$ , $| b \times c \cdot a |$ , $| c \times \pmb { a } \cdot \pmb { b } |$ 表示的是同一个平行六面体的体积, 因此

$$
\left| \boldsymbol {a} \times \boldsymbol {b} \cdot \boldsymbol {c} \right| = \left| \boldsymbol {b} \times \boldsymbol {c} \cdot \boldsymbol {a} \right| = \left| \boldsymbol {c} \times \boldsymbol {a} \cdot \boldsymbol {b} \right|.
$$

不妨设 ${ \mathbf { } } a , b , c$ 成右手系, 则 ${ \mathbf { } } a , b , c$ 和 ${ \mathbf { } } a , b , c$ 也都成右手系, 因此

$$
\boldsymbol {a} \times \boldsymbol {b} \cdot \boldsymbol {c} = \boldsymbol {b} \times \boldsymbol {c} \cdot \boldsymbol {a} = \boldsymbol {c} \times \boldsymbol {a} \cdot \boldsymbol {b}.
$$

下面讨论用坐标计算混合积的方法.

# 定理 3.13 (混合积的坐标公式)

在右手直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中有

$$
\boldsymbol {a} = \left[ a _ {1}, a _ {2}, a _ {3} \right] ^ {T}, \qquad \boldsymbol {b} = \left[ b _ {1}, b _ {2}, b _ {3} \right] ^ {T}, \qquad \boldsymbol {c} = \left[ c _ {1}, c _ {2}, c _ {3} \right] ^ {T}.
$$

则

$$
\boldsymbol {a} \times \boldsymbol {b} \cdot \boldsymbol {c} = \left| \begin{array}{l l l} a _ {1} & b _ {1} & c _ {1} \\ a _ {2} & b _ {2} & c _ {2} \\ a _ {3} & b _ {3} & c _ {3} \end{array} \right|. \tag {3.5}
$$

证明 (i) 由向量内积和外积的坐标公式可知

$$
\begin{array}{l} \boldsymbol {a} \times \boldsymbol {b} \cdot \boldsymbol {c} = \left(\left| \begin{array}{l l} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {1} - \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| \boldsymbol {e} _ {2} + \left| \begin{array}{l l} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| \boldsymbol {e} _ {3}\right) \cdot (c _ {1} \boldsymbol {e} _ {1} + c _ {2} \boldsymbol {e} _ {2} + c _ {3} \boldsymbol {e} _ {3}) \\ = c _ {1} \left| \begin{array}{c c} a _ {2} & b _ {2} \\ a _ {3} & b _ {3} \end{array} \right| - c _ {2} \left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {3} & b _ {3} \end{array} \right| + c _ {3} \left| \begin{array}{c c} a _ {1} & b _ {1} \\ a _ {2} & b _ {2} \end{array} \right| = \left| \begin{array}{c c c} a _ {1} & b _ {1} & c _ {1} \\ a _ {2} & b _ {2} & c _ {2} \\ a _ {3} & b _ {3} & c _ {3} \end{array} \right|. \\ \end{array}
$$

注 公式 (3.5) 给出了 3 阶行列式的几何意义.

下面看两个例子.

例 3.15 在右手直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } ]$ 中, 设

$$
A = \left[ x _ {1}, y _ {1} \right] ^ {T}, \quad B = \left[ x _ {2}, y _ {2} \right] ^ {T}, \quad C = \left[ x _ {3}, y _ {3} \right] ^ {T},
$$

则 4?????? 的面积为

$$
S _ {\triangle A B C} = \pm \frac {1}{2} \left| \begin{array}{c c c} x _ {1} & x _ {2} & x _ {3} \\ y _ {1} & y _ {2} & y _ {3} \\ 1 & 1 & 1 \end{array} \right|.
$$

并说明上式中正负号的意义.

证明 右手直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中容易计算得

$$
\overrightarrow {A B} = \left[ x _ {2} - x _ {1}, y _ {2} - y _ {1}, 0 \right] ^ {T}, \quad \overrightarrow {A C} = \left[ x _ {3} - x _ {1}, y _ {3} - y _ {1}, 0 \right] ^ {T}.
$$

于是

$$
S _ {\triangle A B C} = \pm \frac {1}{2} \left| \begin{array}{c c c} x _ {2} - x _ {1} & x _ {3} - x _ {1} & 0 \\ y _ {2} - y _ {1} & y _ {3} - y _ {1} & 0 \\ 0 & 0 & 1 \end{array} \right| = \pm \frac {1}{2} \left| \begin{array}{c c c} x _ {2} - x _ {1} & x _ {3} - x _ {1} & x _ {1} \\ y _ {2} - y _ {1} & y _ {3} - y _ {1} & y _ {1} \\ 0 & 0 & 1 \end{array} \right| = \pm \frac {1}{2} \left| \begin{array}{c c c} x _ {1} & x _ {2} & x _ {3} \\ y _ {1} & y _ {2} & y _ {3} \\ 1 & 1 & 1 \end{array} \right|.
$$

当 $\overrightarrow { A B }$ 到 $\overrightarrow { A C }$ 的旋转方向 (转角小于 $\pi$ ) 为逆时针时, 取正号; 反之取负号.

例 3.16 在右手直角坐标系中, 设四面体 ???????? 的顶点坐标为

$$
A = [ 1, 2, 0 ] ^ {T}, \qquad B = [ - 1, 3, 4 ] ^ {T}, \qquad C = [ - 1, - 2, - 3 ] ^ {T}, \qquad D = [ 0, - 1, 3 ] ^ {T}.
$$

求四面体 ???????? 的体积 ??.

证明 容易知道

$$
\overrightarrow {A B} = [ - 2, 1, 4 ] ^ {T}, \qquad \overrightarrow {A C} = [ - 2, - 4, - 3 ] ^ {T}, \qquad \overrightarrow {A D} = [ - 1, - 3, 3 ] ^ {T}.
$$

由于以 $\overrightarrow { A B }$ , ????, $\overrightarrow { A D }$ 为棱的四面体体积是以它们为棱的平行六面体的 1/6, 故

$$
\frac {1}{6} (\overrightarrow {A B} \times \overrightarrow {A C} \cdot \overrightarrow {A D}) = \frac {1}{6} \left| \begin{array}{c c c} - 2 & 1 & 4 \\ - 2 & - 4 & - 3 \\ - 1 & - 3 & 3 \end{array} \right| \xlongequal {\left[ \begin{array}{l} [ 1 ] - 2 [ 3 ] \\ [ 2 ] - 2 [ 3 ] \end{array} \right]} \frac {1}{6} \left| \begin{array}{c c c} 0 & 7 & - 2 \\ 0 & 2 & - 9 \\ - 1 & - 3 & 3 \end{array} \right| = - \frac {1}{6} \left| \begin{array}{c c} 7 & - 2 \\ 2 & - 9 \end{array} \right| = \frac {5 9}{6}.
$$

于是可知体积为 59/6.

我们已经知道了两个向量共线的行列式条件. 由以上推论和向量混合积的几何意义可以立刻得到三个向量共面的行列式条件.

# 定理 3.14 (三维向量共面的行列式条件)

设几何空间设向量

$$
\boldsymbol {a} = \left[ a _ {1}, a _ {2}, a _ {3} \right] ^ {T}, \quad \boldsymbol {b} = \left[ b _ {1}, b _ {2}, b _ {3} \right] ^ {T}, \quad \boldsymbol {c} = \left[ c _ {1}, c _ {2}, c _ {3} \right] ^ {T}.
$$

则 ${ \mathbf { } } { \mathbf { } } { \mathbf { } } a , b , c$ 共面当且仅当

$$
\left| \begin{array}{c c c} a _ {1} & b _ {1} & c _ {1} \\ a _ {2} & b _ {2} & c _ {2} \\ a _ {3} & b _ {3} & c _ {3} \end{array} \right| = 0.
$$

我们已经知道了平面上三点共线的行列式条件. 我们可以由以上推论得到几何空间中四点共面的行列式条件.

# 推论 3.3

设几何空间中的 4 点

$$
A = \left[ x _ {1}, y _ {1}, z _ {1} \right] ^ {T}, \quad B = \left[ x _ {2}, y _ {2}, z _ {2} \right] ^ {T}, \quad C = \left[ x _ {3}, y _ {3}, z _ {3} \right] ^ {T}, \quad D = \left[ x _ {4}, y _ {4}, z _ {4} \right] ^ {T}.
$$

则 $A , B , C , D$ 共面当且仅当

$$
\left| \begin{array}{c c c c} x _ {1} & x _ {2} & x _ {3} & x _ {4} \\ y _ {1} & y _ {2} & y _ {3} & y _ {4} \\ z _ {1} & z _ {2} & z _ {3} & z _ {4} \\ 1 & 1 & 1 & 1 \end{array} \right| = 0.
$$

证明 $A , B , C , D$ 共面当且仅当 $\overrightarrow { D A }$ , ?? ??, ???? 共面. 由定理 (3.14) 可知 ?? ??, ?? ??, ???? 共面当且仅当

$$
0 = \left| \begin{array}{c c c} x _ {1} - x _ {4} & x _ {2} - x _ {4} & x _ {3} - x _ {4} \\ y _ {1} - y _ {4} & y _ {2} - y _ {4} & y _ {3} - y _ {4} \\ z _ {1} - z _ {4} & z _ {2} - z _ {4} & z _ {3} - z _ {4} \end{array} \right| = \left| \begin{array}{c c c c} x _ {1} - x _ {4} & x _ {2} - x _ {4} & x _ {3} - x _ {4} & x _ {4} \\ y _ {1} - y _ {4} & y _ {2} - y _ {4} & y _ {3} - y _ {4} & y _ {4} \\ z _ {1} - z _ {4} & z _ {2} - z _ {4} & z _ {3} - z _ {4} & z _ {4} \\ 0 & 0 & 0 & 1 \end{array} \right| \overline {{\overline {{[ 1 ] + 1 [ 4 ]}}}} \left| \begin{array}{c c c c} x _ {1} & x _ {2} & x _ {3} & x _ {4} \\ y _ {1} & y _ {2} & y _ {3} & y _ {4} \\ z _ {1} & z _ {2} & z _ {3} & z _ {4} \\ [ 2 ] + 1 [ 4 ] & 1 & 1 & 1 \end{array} \right|.
$$

# 3.5 平面与直线

下面我们将利用这两种方法, 研究几何空间中的图形性质. 最基本的思路是, 在几何空间建立适当的坐标系建立图形的方程, 这样就可以利用代数方法研究图形的性质. 用线性方程组表示的图形是最简单的, 我们称它们为线性流形(linear manifold). 由于几何空间本身是三维的, 所以几何空间中的线性流形只有三种:

1. 零维线性流形, 即点.   
2. 一维线性流形, 即直线.  
3. 二维线性流形, 即平面.

在高等代数中我们将看到 $n$ 维的线性流形. 超过二维的线性流形也称为超平面 (hyperplane).

在几何空间中取定一个坐标系, 空间中所有的点就有了唯一确定的坐标. 它们都是 $\mathbb { R } ^ { 3 }$ 中的三元有序实数组.空间中的一个图形Γ,我们可以把它看作一个点集.所以图形Γ可以看作一个三元有序实数组的集合.而一个三元方程 (组) 在实数范围内的解集也可以看作 $\mathbb { R } ^ { 3 }$ 中的三元有序实数组的集合. 于是可以建立几何空间中图形方程的概念.

# 定义 3.27 (图形的方程)

在几何空间中设图形 Γ. 若组成 $\Gamma$ 的点集恰为一个三元方程 (组) 在实数范围内的解集, 则称该方程为图形Γ 的一个方程 (equation).

注 由于几何空间是实的, 所以若无特殊说明, 我们所讨论方程的方程的解集都是指实数范围内的.

注 类似地, 任意一个二元方程 (组) 唯一确定一个平面上的图形.

任意一个三元方程 (组) 在实数范围内都有唯一确定的解集, 所以在几何空间中给定坐标系后, 任一三元方程(组) 都对应唯一确定的图形. 若该方程 (组) 无解, 则说它在几何空间中无轨迹. 若它有唯一解, 则它的图形就是一个点.

反过来几何空间中的图形可以对应不止一个方程 (组). 因为不同的方程 (组) 可以有相同的解集. 同一个图形可以根据不同需要建立不同的方程 (组).

# 3.5.1 平面的方程

下面来尝试求出平面的方程. 确定一个平面的方法通常有

(1) 过不共面的三点确定一个平面.  
(2) 过一条直线和直线外一点确定一个平面.   
(3) 过两条相交的直线确定一个平面.  
(4) 过两条平行 (不重合) 的直线确定一个平面.

为了综合使用坐标法和向量法, 我们可以把以上四种方法归结为 “点向式”: 过一点平行于两个不共线的向量确定一个平面. 下面我们就利用这个思路求出平面的方程.

在给定的坐标系中设一点和两个不共线的向量

$$
M _ {0} = \left[ x _ {0}, y _ {0}, z _ {0} \right] ^ {T}, \quad \boldsymbol {v} _ {1} = \left[ X _ {1}, Y _ {1}, Z _ {1} \right] ^ {T}, \quad \boldsymbol {v} _ {2} = \left[ X _ {2}, Y _ {2}, Z _ {2} \right] ^ {T}.
$$

设过点 $M _ { 0 }$ 且平行于 $\nu _ { 1 } , \nu _ { 2 }$ 的平面为 $\pi$ . 则点 $M = [ x , y , z ] ^ { T }$ 在平面 $\pi$ 上当且仅当 $\overrightarrow { M _ { 0 } M }$ , $\nu _ { 1 } , \nu _ { 2 }$ 共面. 由于 $\nu _ { 1 } , \nu _ { 2 }$ 不共线, 故存在唯一实数 $\lambda , \mu$ 使得

$$
\overrightarrow {M _ {0} M} = \lambda v _ {1} + \mu v _ {2}. \tag {3.6}
$$

以上方程就是平面 $\pi$ 的一个参数方程, 其中 $\lambda$ 和 $\mu$ 是参数. 如果把方程中的三个向量的坐标分别写出, 则有

$$
\overrightarrow {M _ {0} M} = \lambda \boldsymbol {v} _ {1} + \mu \boldsymbol {v} _ {2} \iff \left\{ \begin{array}{l} x - x _ {0} = \lambda X _ {1} + \mu X _ {2} \\ y - y _ {0} = \lambda Y _ {1} + \mu Y _ {2} \\ z - z _ {0} = \lambda Z _ {1} + \mu Z _ {2} \end{array} \right. \iff \left\{ \begin{array}{l} x = x _ {0} + \lambda X _ {1} + \mu X _ {2} \\ y = y _ {0} + \lambda Y _ {1} + \mu Y _ {2} \\ z = z _ {0} + \lambda Z _ {1} + \mu Z _ {2} \end{array} \right..
$$

其中 $\lambda$ 和 $\mu$ 可以取任意实数. 若 $M _ { 0 }$ 和 $M$ 的位置向量分别为 $\pmb { m } _ { 0 }$ 和 $\mathbf { \nabla } m$ , 则平面 $\pi$ 的参数方程就是

$$
\boldsymbol {m} = \boldsymbol {m} _ {0} + \lambda \boldsymbol {v} _ {1} + \mu \boldsymbol {v} _ {2}.
$$

我们也可以求出不带参数的平面方程. 我们已经知道 $\overrightarrow { M _ { 0 } M }$ , ??1, ??2 共面当且仅当

$$
\left| \begin{array}{l l l} x - x _ {0} & X _ {1} & X _ {2} \\ y - y _ {0} & Y _ {1} & Y _ {2} \\ z - z _ {0} & Z _ {1} & Z _ {2} \end{array} \right| = 0. \tag {3.7}
$$

这样我们就得到不含参数的平面方程. 由于它是由两个方位向量和平面上的一个点得到的, 所以称为平面的点位式方程 (point direction form equation).

将以上行列式按第一列展开得

$$
(x - x _ {0}) \left| \begin{array}{l l} Y _ {1} & Y _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right| - (y - y _ {0}) \left| \begin{array}{l l} X _ {1} & X _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right| + (z - z _ {0}) \left| \begin{array}{l l} X _ {1} & X _ {2} \\ Y _ {1} & Y _ {2} \end{array} \right| = 0,
$$

令

$$
A = \left| \begin{array}{c c} Y _ {1} & Y _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right|, \qquad B = - \left| \begin{array}{c c} X _ {1} & X _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right|, \qquad C = \left| \begin{array}{c c} X _ {1} & X _ {2} \\ Y _ {1} & Y _ {2} \end{array} \right|, \qquad D = - A x _ {0} - B y _ {0} - C z _ {0},
$$

则得到方程

$$
A x + B y + C z + D = 0.
$$

由于 $\nu _ { 1 } , \nu _ { 2 }$ 不共线,故 $A , B , C$ 不全为零,于是可知任意一个平面的方程都是三元线性方程.反之,任意一个三元线性方程都表示一个平面吗?

# 定理 3.15

在几何空间中取定一个仿射坐标系, 则任意一个三元线性方程都表示一个平面, 任意一个平面的方程都是三元线性方程.

证明 只需证明任意一个三元线性方程表示一个平面. 设三元一次方程

$$
A x + B y + C z + D = 0,
$$

其中 $A , B , C$ 不全为零, 不妨设 $A \ne 0$ . 取一个点和两个不共线性的向量

$$
M _ {0} = \left[ - \frac {D}{A}, 0, 0 \right] ^ {T}, \quad \boldsymbol {v} _ {1} = \left[ - \frac {B}{A}, 1, 0 \right] ^ {T}, \quad \boldsymbol {v} _ {2} = \left[ - \frac {C}{A}, 0, 1 \right] ^ {T}.
$$

它们决定的平面方程为

$$
\left| \begin{array}{c c c} x + \frac {D}{A} & - \frac {B}{A} & - \frac {C}{A} \\ y - 0 & 1 & 0 \\ z - 0 & 0 & 1 \end{array} \right| = 0 \iff A x + B y + C z + D = 0.
$$

这说明所设三元一次方程是过 $M _ { 0 }$ 且平行于 $\nu _ { 1 } , \nu _ { 2 }$ 的平面的方程.

注 以上定理表明了平面被称为一次曲面或二维线性流形的原因.

注 以上定理的证明过程给出了把平面的普通方程化为参数方程的方法.

下面我们再讨论几种平面方程的求法.如果给定三个不共线的点,则可以立即得到两个方位向量,于是可以求出这三点决定的平面方程.

# 命题 3.32 (平面的三点式方程)

在给定的仿射坐标系中设不共线的三点 $[ x _ { i } , y _ { i } , z _ { i } ] ^ { T } ~ ( i = 1 , 2 , 3 ) .$ $( i = 1 , 2 , 3 )$ , 则过这三点的平面方程为

$$
\left| \begin{array}{c c c c} x & x _ {1} & x _ {2} & x _ {3} \\ y & y _ {1} & y _ {2} & y _ {3} \\ z & z _ {1} & z _ {2} & z _ {3} \\ 1 & 1 & 1 & 1 \end{array} \right| = 0.
$$

证明 由给定的条件可以得到两个方位向量

$$
\boldsymbol {v} _ {1} = \left[ x _ {2} - x _ {1}, y _ {2} - y _ {1}, z _ {2} - z _ {1} \right] ^ {T}, \quad \boldsymbol {v} _ {2} = \left[ x _ {3} - x _ {1}, y _ {3} - y _ {1}, z _ {3} - z _ {1} \right] ^ {T}.
$$

于是可得方程

$$
0 = \left| \begin{array}{c c c} x - x _ {1} & x _ {2} - x _ {1} & x _ {3} - x _ {1} \\ y - y _ {1} & y _ {2} - y _ {1} & y _ {3} - y _ {1} \\ z - z _ {1} & z _ {2} - z _ {1} & z _ {3} - z _ {1} \end{array} \right| = \left| \begin{array}{c c c c} x _ {1} & x - x _ {1} & x _ {2} - x _ {1} & x _ {3} - x _ {1} \\ y _ {1} & y - y _ {1} & y _ {2} - y _ {1} & y _ {3} - y _ {1} \\ z _ {1} & z - z _ {1} & z _ {2} - z _ {1} & z _ {3} - z _ {1} \\ 1 & 0 & 0 & 0 \end{array} \right| \overline {{\begin{array}{l l l l} [ 2 ] + 1 [ 1 ] \\ [ 3 ] + 1 [ 1 ] \\ [ 4 ] + 1 [ 1 ] \end{array} }} \left| \begin{array}{l l l l} x & x _ {1} & x _ {2} & x _ {3} \\ y & y _ {1} & y _ {2} & y _ {3} \\ z & z _ {1} & z _ {2} & z _ {3} \\ 1 & 1 & 1 & 1 \end{array} \right|.
$$

在给定的仿射坐标系中如果一个平面与 $x$ 轴, $y$ 轴, $z$ 轴分别交于不重合的三点,通过这三个特殊点,我们可以求出这三点决定的平面方程.

# 命题 3.33 (平面的截距式方程)

在给定的仿射坐标系中如果一个平面与 $x$ 轴, $y$ 轴, $z$ 轴分别交于点 $\begin{array} { r } { [ a , 0 , 0 ] ^ { T } , [ 0 , b , 0 ] ^ { T } , [ 0 , 0 , c ] ^ { T } , } \end{array}$ $[ a , 0 , 0 ] ^ { T }$ $[ 0 , 0 , c ] ^ { T }$ , 且 $a b c \neq 0$ ,则该平面的方程为

$$
\frac {x}{a} + \frac {y}{b} + \frac {z}{c} = 1.
$$

证明 与 $x$ 轴, $y$ 轴, ?? 轴分别交于点 $[ a , 0 , 0 ] ^ { T }$ , $[ 0 , b , 0 ] ^ { T }$ , $[ 0 , 0 , c ] ^ { T }$ 的平面方程为

$$
0 = \left| \begin{array}{c c c c} x & a & 0 & 0 \\ y & 0 & b & 0 \\ z & 0 & 0 & c \\ 1 & 1 & 1 & 1 \end{array} \right| \xlongequal {\text {按 第} 1 \text {列 展 开}} x \left| \begin{array}{c c c} 0 & b & 0 \\ 0 & 0 & c \\ 1 & 1 & 1 \end{array} \right| - y \left| \begin{array}{c c c} a & 0 & 0 \\ 0 & 0 & c \\ 1 & 1 & 1 \end{array} \right| + z \left| \begin{array}{c c c} a & 0 & 0 \\ 0 & b & 0 \\ 1 & 1 & 1 \end{array} \right| - \left| \begin{array}{c c c} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{array} \right| = b c x + a c y + a b z - a b c.
$$

由于 $a b c \neq 0$ , 故以上方程可以写成

$$
b c x + a c y + a b z = a b c \iff \frac {x}{a} + \frac {y}{b} + \frac {z}{c} = 1.
$$

注 以上命题中的 $a , b , c$ 分别称为平面在 $x$ 轴, $y$ 轴, ?? 轴的截距 (intercept).

在前面的讨论中我们已经看到, 平面普通方程的一次项系数只和它的两个方位向量有关. 因此凭直觉可以想到平面方程的一次项系数决定了平面的方向. 下面我们来讨论一下这个问题.

在给定的右手直角坐标系 $[ O ; e _ { 1 } , e _ { 2 } , e _ { 3 } ]$ 中设两个不共线的向量

$$
\boldsymbol {v} _ {1} = \left[ X _ {1}, Y _ {1}, Z _ {1} \right] ^ {T}, \quad \boldsymbol {v} _ {2} = \left[ X _ {2}, Y _ {2}, Z _ {2} \right] ^ {T}.
$$

则平行于它们的平面方程 $A x + B y + C z + D = 0$ 的一次项系数和这两个方位向量有如下关系

$$
A = \left| \begin{array}{c c} Y _ {1} & Y _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right|, \quad B = - \left| \begin{array}{c c} X _ {1} & X _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right|, \quad C = \left| \begin{array}{c c} X _ {1} & X _ {2} \\ Y _ {1} & Y _ {2} \end{array} \right|.
$$

这让我们联想到了向量外积的坐标公式.

$$
\boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2} = \left| \begin{array}{c c} Y _ {1} & Y _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right| \boldsymbol {e} _ {1} - \left| \begin{array}{c c} X _ {1} & X _ {2} \\ Z _ {1} & Z _ {2} \end{array} \right| \boldsymbol {e} _ {2} + \left| \begin{array}{c c} X _ {1} & X _ {2} \\ Y _ {1} & Y _ {2} \end{array} \right| \boldsymbol {e} _ {3} = [ A, B, C ] ^ {T}.
$$

我们知道 $\pmb { \nu } _ { 1 } \times \pmb { \nu } _ { 2 }$ 的方向可以表示平面的一个方向. 而基向量 $\boldsymbol { e } _ { 1 } , \boldsymbol { e } _ { 2 } , \boldsymbol { e } _ { 3 }$ 是取定的, 因此平面普通方程的一次项系

数确实决定了平面的方向. 上式还表明, 平面普通方程的一次项系数组成的向量恰好是垂直于平面, 它可以表示平面的方向. 于是引出了以下概念.

# 定义 3.28 (平面的法向量)

在几何空间中设平面 $\pi$ , 则称垂直于 $\pi$ 的向量为平面 $\pi$ 的一个法向量 (normal vector).

根据以上讨论, 若在给定的直角坐标系中设一点和一个向量, 可以直接写出过该点且垂直于该向量的平面方程.

# 命题 3.34 (平面的点法式方程)

在给定的右手直角坐标系中, 设一点和一个向量:

$$
M _ {0} = \left[ x _ {0}, y _ {0}, z _ {0} \right] ^ {T}, \qquad \boldsymbol {n} = \left[ A, B, C \right] ^ {T}.
$$

则过 $M _ { 0 }$ 且垂直于 $\pmb { n }$ 的平面方程为

$$
A (x - x _ {0}) + B (y - y _ {0}) + C (z - z _ {0}) = 0.
$$

$\pmb { n }$ 就是该平面的一个法向量.

在几何空间中两个平面的位置关系只有三种: 重合, 平行, 相交 (于一条直线). 根据前面的讨论我们已经知道两个平面的平行与否由平面普通方程的一次项系数决定, 由此我们可以根据两个平面普通方程的系数关系来判断它们的位置关系. 容易得到以下结论.

# 命题 3.35 (两个平面的位置关系)

在给定的仿射坐标系中设平面 $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 的方程

$$
\pi_ {1}: A _ {1} x + B _ {1} y + C _ {1} z + D _ {1} = 0,
$$

$$
\pi_ {2}: A _ {2} x + B _ {2} y + C _ {2} z + D _ {2} = 0.
$$

则

(1) $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 相交当且仅当它们的一次项系数不成比例:

$$
A _ {1}: B _ {1}: C _ {1} \neq A _ {2}: B _ {2}: C _ {2}.
$$

(2) $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 平行当且仅当它们的一次项系数成比例, 但常数项不与这些系数成比例, 即

$$
\frac {A _ {1}}{A _ {2}} = \frac {B _ {1}}{B _ {2}} = \frac {C _ {1}}{C _ {2}} \neq \frac {D _ {1}}{D _ {2}}.
$$

(3) $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 重合当且仅当它们的所有系数都成比例, 即

$$
\frac {A _ {1}}{A _ {2}} = \frac {B _ {1}}{B _ {2}} = \frac {C _ {1}}{C _ {2}} = \frac {D _ {1}}{D _ {2}}.
$$

下面我们尝试在几何空间中所有平面组成的集合中建立等价类. 下面分别介绍三种平面束.

平面的平行关系是最容易想到的一种等价关系, 由平行关系确定的等价类称为平行平面束.

# 定义 3.29 (平行平面束)

在几何空间中设平面 $\pi$ , 则所有平行于 $\pi$ 的平面组成的集合称为由 $\pi$ 决定的平行平面束 (pencil of parallelplanes).

由前面对平面普通方程一次项系数的讨论可知, 判断一个平面是否属于一个平行平面束, 只需要看它的普通方程的一次项系数.

# 命题 3.36

在给定的仿射坐标系中设平面 $\pi : A x + B y + C z + D = 0$ , 则一个平面属于由 $\pi$ 决定的平行平面束当且仅当它的方程形如

$$
A x + B y + C z + k = 0.
$$

其中 $k$ 是任一实数.

容易验证, 几何空间中所有共线的平面也可以成为一个等价类.

# 定义 3.30 (有轴平面束)

在几何空间中设直线 ??, 则所有过 ?? 的平面组成的集合称为以 $l$ 为轴的 (或由 $l$ 确定的) 有轴平面束 (pencil ofparallel planes), 或有轴平面束 .

# 命题 3.37

在给定的仿射坐标系中设交于直线 $l$ 的两个平面 $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 的方程为

$$
\pi_ {1}: A _ {1} x + B _ {1} y + C _ {1} z + D _ {1} = 0,
$$

$$
\pi_ {2}: A _ {2} x + B _ {2} y + C _ {2} z + D _ {2} = 0.
$$

则一个平面属于以 ?? 为轴的有轴平面束当且仅当它的方程形如

$$
\lambda \left(A _ {1} x + B _ {1} y + C _ {1} z + D _ {1}\right) + \mu \left(A _ {2} x + B _ {2} y + C _ {2} z + D _ {2}\right) = 0, \tag {3.8}
$$

其中 $\lambda , \mu$ 是不全为零的实数.

证明 (i) 证明充分性. 设平面 $\pi$ 的方程形如 (3.8). 由于直线 $l$ 是 $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 的交线, 因此 $l$ 上的点的坐标同时满足 $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 的方程, 从而也满足方程 (3.8), 因此 $\pi$ 也过 ??.  
(ii) 证明必要性. 设平面 $\pi$ 经过 $l .$ 在 $\pi$ 上取不在 $l$ 上的一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T }$ , 则 $M _ { 0 }$ 不可能同时在 $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 上, 于是

$$
A _ {1} x _ {0} + B _ {1} y _ {0} + C _ {1} z _ {0} + D _ {1} \neq 0 \text {或} A _ {2} x _ {0} + B _ {2} y _ {0} + C _ {2} z _ {0} + D _ {2} \neq 0.
$$

令

$$
k _ {1} = A _ {2} x _ {0} + B _ {2} y _ {0} + C _ {2} z _ {0} + D _ {2}, \quad k _ {2} = - (A _ {1} x _ {0} + B _ {1} y _ {0} + C _ {1} z _ {0} + D _ {1}),
$$

则 $k _ { 1 } , k _ { 2 }$ 不全为零, 因此方程

$$
k _ {1} \left(A _ {1} x + B _ {1} y + C _ {1} z + D _ {1}\right) + k _ {2} \left(A _ {2} x + B _ {2} y + C _ {2} z + D _ {2}\right) = 0. \tag {3.9}
$$

是一个三元线性方程, 它表示一个平面. 容易看出 $M _ { 0 }$ 在该平面上. 由于 $l$ 上的点的坐标同时满足 $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 的方程,从而也满足方程 (3.9). 因此方程 (3.9) 表示的平面过 ??. 由于直线和直线外一点确定一个平面, 因此平面 $\pi$ 的方程就是 (3.9).

容易验证, 几何空间中所有共点的平面也可以成为一个等价类.

# 定义 3.31 (中心平面束)

在几何空间中设点 $M _ { 0 }$ , 则所有过 $M _ { 0 }$ 的平面组成的集合称为以 $M _ { 0 }$ 为中心的 (或由 $M _ { 0 }$ 确定的) 中心平面束(central pencil planes), 或称平面把 (bundle of planes), 或平面丛 .

# 命题 3.38

在给定的仿射坐标系中设一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T }$ , 则一个平面属于以 $M _ { 0 }$ 为中心的平面把当且仅当它的方

程形如

$$
\lambda \left(x - x _ {0}\right) + \mu \left(y - y _ {0}\right) + \nu \left(z - z _ {0}\right) = 0, \tag {3.10}
$$

其中 $\lambda , \mu , \nu$ 是不全为零的实数.

# 命题 3.39

在给定的仿射坐标系中设交于一点 $M _ { 0 }$ 的 3 个平面 $\pi _ { 1 } , \pi _ { 2 } , \pi _ { 3 }$ 的方程为

$$
\pi_ {1}: A _ {1} x + B _ {1} y + C _ {1} z + D _ {1} = 0,
$$

$$
\pi_ {2}: A _ {2} x + B _ {2} y + C _ {2} z + D _ {2} = 0,
$$

$$
\pi_ {3}: A _ {3} x + B _ {3} y + C _ {3} z + D _ {3} = 0.
$$

则一个平面属于以 $M _ { 0 }$ 为中心的平面把当且仅当它的方程形如

$$
\lambda \left(A _ {1} x + B _ {1} y + C _ {1} z + D _ {1}\right) + \mu \left(A _ {2} x + B _ {2} y + C _ {2} z + D _ {2}\right) + \nu \left(A _ {3} x + B _ {3} y + C _ {3} z + D _ {3}\right) = 0, \tag {3.11}
$$

其中 $\lambda , \mu , \nu$ 是不全为零的实数.

# 3.5.2 $\mathbb { R } ^ { 2 }$ 上的直线方程

$\mathbb { R } ^ { 2 }$ 上的直线和 $\mathbb { R } ^ { 3 }$ 中的平面的方程和性质完全类似, 我们把它们简要罗列出来.

在给定的平面仿射坐标系中设点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } ] ^ { T }$ 和向量 $\pmb { \nu } = [ X , Y ] ^ { T }$ . 则直线 $l$ 的参数方程为

$$
\overrightarrow {M _ {0} M} = \lambda v \iff \left\{ \begin{array}{l} x - x _ {0} = \lambda X \\ y - y _ {0} = \lambda Y \end{array} \right. \iff \left\{ \begin{array}{l} x = x _ {0} + \lambda X \\ y = y _ {0} + \lambda Y \end{array} \right..
$$

其中 $\lambda$ 可以取任意实数. 向量 $\nu$ 称为 $l$ 的方向向量 (direction vector).

不带参数的直线的方程为:

$$
\left| \begin{array}{c c} x - x _ {0} & X \\ y - y _ {0} & Y \end{array} \right| = 0 \iff (x - x _ {0}) Y - (y - y _ {0}) X = 0 \iff Y x - X y - x _ {0} Y + y _ {0} X = 0.
$$

令

$$
A = Y, \quad B = X, \quad C = - x _ {0} Y + y _ {0} X,
$$

则得到

$$
A x + B y + C = 0.
$$

于是可知平面上的直线方程是一个二元线性方程. 反之, 容易证明平面上任何一个二元线性方程都表示一条直线.

# 命题 3.40 (直线的两点式方程)

在给定的平面仿射坐标系中设不共线的两点 $[ x _ { i } , y _ { i } , z _ { i } ] ^ { T } \left( i = 1 , 2 \right)$ $( i = 1 , 2 )$ , 则过这两点的直线方程为

$$
\left| \begin{array}{c c c} x & x _ {1} & x _ {2} \\ y & y _ {1} & y _ {2} \\ 1 & 1 & 1 \end{array} \right| = 0.
$$

# 命题 3.41 (直线的截距式方程)

在给定的平面仿射坐标系中如果一条直线与 $x$ 轴, $y$ 轴分别交于点 [??, 0]?? , $[ 0 , b ] ^ { T }$ , 且 $a b \neq 0$ , 则该平面的方程为

$$
\frac {x}{a} + \frac {y}{b} = 1.
$$

类似地, 可以讨论直线普通方程的一次项系数的几何意义和两条直线的位置关系.

# 定义 3.32 (平面上直线的法向量)

设平面上的一条直线 ??, 则称垂直于 $l$ 的向量为直线 ?? 的一个法向量 (normal vector).

类似地, 平面上的直线也有点法式方程.

# 命题 3.42 (直线的点法式方程)

在给定的右手直角坐标系中, 设一点和一个向量:

$$
M _ {0} = \left[ x _ {0}, y _ {0} \right] ^ {T}, \quad \boldsymbol {n} = \left[ A, B \right] ^ {T}.
$$

则过 $M _ { 0 }$ 且垂直于 $\pmb { n }$ 的平面方程为

$$
A (x - x _ {0}) + B (y - y _ {0}) = 0.
$$

$\pmb { n }$ 就是该直线的一个法向量.

类似地, 我们可以根据平面上直线普通方程的系数讨论两直线的位置关系.

# 命题 3.43 (平面上两直线的位置关系)

在给定的平面仿射坐标系中设直线 $l _ { 1 }$ 和 $l _ { 2 }$ 的方程

$$
l _ {1}: A _ {1} x + B _ {1} y + C _ {1} = 0,
$$

$$
l _ {2}: A _ {2} x + B _ {2} y + C _ {2} = 0.
$$

则

(1) $l _ { 1 }$ 和 $l _ { 2 }$ 相交当且仅当它们的一次项系数不成比例:

$$
\frac {A _ {1}}{A _ {2}} \neq \frac {B _ {1}}{B _ {2}}.
$$

(2) $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 平行当且仅当它们的一次项系数成比例, 但常数项不与这些系数成比例, 即

$$
\frac {A _ {1}}{A _ {2}} = \frac {B _ {1}}{B _ {2}} \neq \frac {C _ {1}}{C _ {2}}.
$$

(3) $\pi _ { 1 }$ 和 $\pi _ { 2 }$ 重合当且仅当它们的所有系数都成比例, 即

$$
\frac {A _ {1}}{A _ {2}} = \frac {B _ {1}}{B _ {2}} = \frac {C _ {1}}{C _ {2}}.
$$

类似地, 平面上的直线有两种等价类.

# 定义 3.33 (平行直线束)

在平面上设直线 ??, 则所有平行于 $l$ 的直线组成的集合称为由 $l$ 决定的平行直线束 (pencil of parallel straightlines).

# 命题 3.44

在给定的平面仿射坐标系中设直线 $l : A x + B y + C = 0 .$ ,则一条直线属于由 $l$ 决定的平行直线束当且仅当它的方程形如

$$
A x + B y + k = 0.
$$

其中 $k$ 是任一实数.

# 定义 3.34 (中心直线束)

在平面上设点 $M _ { 0 }$ , 则所有过 $M _ { 0 }$ 的直线组成的集合称为以 $M _ { 0 }$ 为中心的 (或由 $M _ { 0 }$ 确定的) 中心直线束 (pencilof parallel straight lines).

# 命题 3.45

在给定的仿射坐标系中设一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } ] ^ { T }$ , 则一条直线属于以 $M _ { 0 }$ 为中心的中心直线束当且仅当它的方程形如

$$
\lambda (x - x _ {0}) + \mu (y - y _ {0}) = 0,
$$

其中 $\lambda , \mu$ 是不全为零的实数.

# 命题 3.46

在给定的平面仿射坐标系中设交于一点 $M _ { 0 }$ 的 2 条平面 $l _ { 1 } , l _ { 2 }$ 的方程为

$$
l _ {i}: A _ {i} x + B _ {i} y + C _ {i} = 0, \quad i = 1, 2.
$$

则一条直线属于以 $M _ { 0 }$ 为中心的中心直线束当且仅当它的方程形如

$$
\lambda \left(A _ {1} x + B _ {1} y + C _ {1}\right) + \mu \left(A _ {2} x + B _ {2} y + C _ {2}\right) = 0,
$$

其中 $\lambda , \mu$ 是不全为零的实数.

# 3.5.3 空间中的直线方程

在几何空间中, 我们用两个方位向量和一个点可以求出平面的参数方程. 我们可以用类似的方法求出直线的参数方程. 在给定的仿射坐标系中设一个点和一个非零向量

$$
M _ {0} = \left[ x _ {0}, y _ {0}, z _ {0} \right] ^ {T}, \qquad \boldsymbol {v} = \left[ X, Y, Z \right] ^ {T}.
$$

直线 $l$ 过 $M _ { 0 }$ 且平行于 ??, 则 ?? 在 ?? 上当且仅当 $\overrightarrow { M _ { 0 } M }$ , $\nu$ 共线. 于是可得直线 ?? 的参数方程

$$
\overrightarrow {M _ {0} M} = \lambda v \iff \left\{ \begin{array}{l} x - x _ {0} = \lambda X \\ y - y _ {0} = \lambda Y \\ z - z _ {0} = \lambda Z \end{array} \right. \iff \left\{ \begin{array}{l} x = x _ {0} + \lambda X \\ y = y _ {0} + \lambda Y \\ z = z _ {0} + \lambda Z \end{array} \right..
$$

其中参数 $\lambda$ 可以取任意实数. ?? 的几何意义是 $M$ 在直线 ?? 上的仿射坐标系 $\left[ M _ { 0 } ; \pmb { \nu } \right]$ 的坐标. 以上方程中的向量 ??称为直线 $l$ 的方向向量 (direction vector). 若设 $M _ { 0 }$ 和 $M$ 的位置向量为 $r _ { 0 }$ 和 $r .$ , 则直线 $l$ 的参数方程就是

$$
\boldsymbol {r} = \boldsymbol {r} _ {0} + \lambda \boldsymbol {v}.
$$

若 $X Y Z \neq 0$ , 则消去参数后可以得到以下方程.

$$
\frac {x - x _ {0}}{X} = \frac {y - y _ {0}}{Y} = \frac {z - z _ {0}}{Z}. \tag {3.12}
$$

由于 $\nu$ 是非零向量, 因此 $X , Y , Z$ 不全为零, 不妨设 $X \neq 0$ , 则

$$
\lambda = \frac {x - x _ {0}}{X}.
$$

此时如果 $Y = 0$ , 则 $y - y _ { 0 } = 0$ . 由于 $0 x = 0$ 对于任一 $x \in \mathbb { R }$ 都成立, 故我们约定 $0 / 0$ 表示任一实数. 而 $0 x = b$ $\boldsymbol { b } \neq 0 ,$ )对于任一 $x \in \mathbb { R }$ 都不成立, 因此我们约定当 $b / 0$ 表示 $b$ 必须等于零. 在这个约定下即使 $Y = 0$ 或 $Z = 0$ , 我们仍然可以写出等式

$$
\frac {x - x _ {0}}{X} = \frac {y - y _ {0}}{Y} = \frac {z - z _ {0}}{Z}.
$$

由于以上方程是由一个点和一个方向向量得到的, 所以称为直线的点向式方程 (point direction form equation), 也称为直线的标准方程 (canonical equation).

我们还知道两点可以确定一条直线.

# 命题 3.47 (直线的两点式方程)

在给定的仿射坐标系中过两点

$$
M _ {1} = \left[ x _ {1}, y _ {1}, z _ {1} \right] ^ {T}, \qquad M _ {2} = \left[ x _ {2}, y _ {2}, z _ {2} \right] ^ {T}.
$$

证明 则可以立即写出过 $M _ { 1 }$ , $M _ { 2 }$ 的直线方程

$$
\frac {x - x _ {1}}{x _ {2} - x _ {1}} = \frac {y - y _ {1}}{y _ {2} - y _ {1}} = \frac {z - z _ {1}}{z _ {2} - z _ {1}}.
$$

我们已经知道两个一次项系数不成比例的平面相交于一条直线, 因此我们可以用两个联立的三元一次方程表示一条直线. 设平面

$$
\pi_ {i}: A _ {i} x + B _ {i} y + C _ {i} z + D _ {i} = 0, \quad i = 1, 2.
$$

且 $A _ { 1 } : B _ { 1 } : C _ { 1 } \neq A _ { 2 } : B _ { 2 } : C _ { 2 }$ . 则 $\pi _ { 1 } , \pi _ { 2 }$ 相交. 它们交线 ?? 的方程就是

$$
\left\{ \begin{array}{l} A _ {1} x + B _ {1} y + C _ {1} z + D _ {1} = 0 \\ A _ {2} x + B _ {2} y + C _ {2} z + D _ {2} = 0 \end{array} \right..
$$

以上形式的方程称为几何空间中直线的普通方程.

由直线的标准方程可以立即得到它的普通方程. 在给定的仿射坐标系中设直线 ?? 的标准方程

$$
\frac {x - x _ {0}}{X} = \frac {y - y _ {0}}{Y} = \frac {z - z _ {0}}{Z}.
$$

不妨设 $X \neq 0$ , 则以上方程可以写成

$$
\left\{ \begin{array}{l} \frac {x - x _ {0}}{X} = \frac {y - y _ {0}}{Y} \\ \frac {x - x _ {0}}{X} = \frac {z - z _ {0}}{Z} \end{array} \right..
$$

它就是 ?? 的普通方程. 其中第一个方程表示的平面平行于 ?? 轴或过 ?? 轴, 第二个方程表示的平面平行于 ?? 轴或过 ??轴.

下面来看一下如何把直线的普通方程化为标准方程. 在给定的右手直角坐标系中设直线 ?? 的普通方程

$$
\left\{ \begin{array}{l} A _ {1} x + B _ {1} y + C _ {1} z + D _ {1} = 0 \\ A _ {2} x + B _ {2} y + C _ {2} z + D _ {2} = 0 \end{array} \right..
$$

不妨设 $A _ { 1 } \neq 0$ . 第一步是在 $l$ 上找一个点 $M _ { 0 }$ . 方法如下: 若

$$
\left| \begin{array}{c c} A _ {1} & B _ {1} \\ A _ {2} & B _ {2} \end{array} \right| \neq 0,
$$

可令 $z = 0$ , 此时方程组

$$
\left\{ \begin{array}{l} A _ {1} x + B _ {1} y + D _ {1} = 0 \\ A _ {2} x + B _ {2} y + D _ {2} = 0 \end{array} \right..
$$

有唯一解 $[ x _ { 0 } , y _ { 0 } ] ^ { T }$ , 则 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , 0 ] ^ { T }$ 是 $l$ 上的一点.

第二步是求出直线的方向向量. 将普通方程看作两个平面 $\pi _ { 1 } , \pi _ { 2 }$ , 可以分别得到它们的一个法向量

$$
\boldsymbol {n} _ {1} = \left[ A _ {1}, B _ {1}, C _ {1} \right] ^ {T}, \quad \boldsymbol {n} _ {2} = \left[ A _ {2}, B _ {2}, C _ {2} \right] ^ {T},
$$

容易知道 $\pmb { n } _ { 1 } \times \pmb { n } _ { 2 }$ 就是直线 $l$ 的一个方向向量 $\nu$ .

有了 $M _ { 0 }$ 和 $\nu$ ,我们就可以立即得到直线 $l$ 的标准方程.这样我们得到了把直线的普通方程化为标准方程的通用方法.

# 3.5.4 点、直线和平面的度量关系

前面已经讨论了几何空间中三种线性流形的仿射性质和线性关系. 现在来讨论它们之间的度量关系. 最重要的度量概念就是距离和角度. 其中 “距离” 主要包括:

(1) 点到点的距离.   
(2) 点到平面的距离.  
(3) 直线到平面的距离 (要求该直线平行于该平面).  
(4) 平面到平面的距离 (要求这两个平面平行).

(5) 点到直线的距离.   
(6) 直线到直线的距离 (分相交, 平行, 异面三种情况讨论).

其中点到点的距离公式使我们熟知的.

“角度” 主要包括:

(1) 两条直线所成的角.   
(2) 直线和平面所成的角.  
(3) 平面和平面所成的角.

下面我们先讨论点到平面的距离.

# 命题 3.48 (点到平面的距离公式)

在几何空间中设点 $P _ { 1 }$ 和平面 $\pi$ , 若 $\pi$ 的法向量为 ${ \pmb n } , P _ { 0 }$ 是平面 $\pi$ 上一点, 则 $P _ { 1 }$ 到 $\pi$ 的距离为

$$
d = \frac {\left| \overrightarrow {P _ {1} P _ {0}} \cdot \boldsymbol {n} \right|}{\left| \boldsymbol {n} \right|} = \left| \overrightarrow {P _ {1} P _ {0}} \cdot \boldsymbol {n} ^ {0} \right|.
$$

证明 容易知道 $P _ { 1 }$ 到 $\pi$ 的距离就是 $\overrightarrow { P _ { 1 } P _ { 0 } }$ 在法向量 $\pmb { n }$ 上的投影的长度. 因此命题成立.

注 若在给定的直角坐标系中设

$$
P _ {1} = \left[ x _ {1}, y _ {1}, z _ {1} \right] ^ {T}, \qquad P _ {0} = \left[ x _ {0}, y _ {0}, z _ {0} \right] ^ {T}, \qquad \pi : A x + B y + C z + D = 0.
$$

则 $P _ { 1 }$ 到 $\pi$ 的距离 $d$ 为

$$
\begin{array}{l} d = \frac {\left| \overrightarrow {P _ {1} P _ {0}} \cdot \boldsymbol {n} \right|}{\left| \boldsymbol {n} \right|} = \frac {\left| A \left(x _ {1} - x _ {0}\right) + B \left(y _ {1} - y _ {0}\right) + C \left(z _ {1} - z _ {0}\right) \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}} \\ = \frac {\left| A x _ {1} + B y _ {1} + C z _ {1} - \left(A x _ {0} + B y _ {0} + C z _ {0}\right) \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}} = \frac {\left| A x _ {1} + B y _ {1} + C z _ {1} + D \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}}. \\ \end{array}
$$

注 以上命题中的 $\overrightarrow { P _ { 1 } P _ { 0 } } \cdot \pmb { n } ^ { 0 }$ 称为 $P _ { 1 }$ 到 $\pi$ 的离差 (deviation), 记作 $\delta$

# 定义 3.35 (直线到平面的距离)

在几何空间中, 若直线 $l$ 平行于平面 $\pi$ , 则称 $l$ 上任意一点到平面的距离为 $l$ 到 $\pi$ 的距离.

由以上定义, 若一条直线平行于一个平面, 我们只需找到该直线上一点, 就可以求出该直线到该平面的距离.

# 定义 3.36 (平面到平面的距离)

在几何空间中, 若平面 $\pi _ { 1 } , \pi _ { 2 }$ 互相平行, 则称 $\pi _ { 1 }$ 上任意一点到 $\pi _ { 2 }$ 的距离为 $\pi _ { 1 }$ 到 $\pi _ { 2 }$ 的距离.

# 命题 3.49 (两个平面的距离公式)

在给定的直角坐标系中设两个相互平行的平面

$$
\pi_ {i}: A x + B y + C z + D _ {i} = 0, \quad i = 1, 2.
$$

则它们之间的距离为

$$
d = \frac {\left| D _ {2} - D _ {1} \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}}.
$$

证明 设 $M = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T } \in \pi _ { 1 }$ , 故 $A x _ { 0 } + B y _ { 0 } + C z _ { 0 } + D _ { 1 } = 0 . \ M$ 到 $\pi _ { 2 }$ 的距离就是 $\pi _ { 1 }$ 之间 $\pi _ { 2 }$ 的距离. 因此

$$
d = \frac {\left| A x _ {0} + B y _ {0} + C z _ {0} + D _ {2} \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}} = \frac {\left| D _ {2} - D _ {1} \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}}.
$$

由向量的外积公式可以容易地得到点到直线的距离公式.

# 命题 3.50 (点到直线的距离公式)

在几何空间中设直线 ??. 若 $l$ 过 $M _ { 0 }$ 且方向为 $\nu$ , 则点 $M$ 到直线的距离为

$$
d = \frac {\left| \overrightarrow {M _ {0} M} \times v \right|}{\left| v \right|}. \tag {3.13}
$$

证明 容易知道 $\lvert \overrightarrow { M _ { 0 } M } \times \pmb { \nu } \rvert$ 表示以 $\overrightarrow { M _ { 0 } M }$ , $\nu$ 为邻边的平行四边形的面积. 而点 $M$ 到直线的距离 $d$ 就是底边 $\nu$ 上的高, 因此可知点 $M$ 到直线的距离公式就是 (3.13). ■

下面开始讨论直线和直线的距离. 两条直线有 3 种位置关系: 相交, 平行 (或重合), 异面. 我们先要给出直线到直线的距离的合理定义. 若两直线相交, 它们的距离可以看作零. 若两直线平行 (或重合) 则可以作一条与它们同时垂直且相交 (称为正交) 的直线. 连接两交点的线段长度可以看作这两条直线的距离. 以上两种规定的共性是把两条直线上的点之间的最短距离看作它们之间的距离. 对于异面的直线我们也找到这样的 “最短距离”. 模仿两平行直线的情况, 很自然的想法是作一条同时垂直与两异面直线的垂线. 于是引出了以下概念.

# 定义 3.37 (异面直线的公垂线)

在几何空间中设异面直线 $l _ { 1 } , l _ { 2 }$ . 与 $l _ { 1 } , l _ { 2 }$ 垂直相交(正交)的直线称为 $l _ { 1 } , l _ { 2 }$ 的公垂线 (common perpendicular).连接两垂足的线段称为公垂线段 (common perpendicular segment).

可以验证异面直线的公垂线存在且唯一.

# 命题 3.51

在几何空间中设异面直线 $l _ { 1 } , l _ { 2 }$ . 则它们的公垂线存在且唯一.

可以验证公垂线段是两条异面直线上的点之间的最短距离.

# 命题 3.52

在几何空间中设异面直线 $l _ { 1 } , l _ { 2 }$ . 则它们的公垂线段长度就是 $l _ { 1 } , l _ { 2 }$ 上的点之间的最短距离.

于是可以给出直线到直线的距离的合理定义.

# 定义 3.38 (直线到直线的距离)

在几何空间中, 两条直线上的点之间的最短距离称为这两条直线的距离.

最后来看一下直线到直线的距离公式.若两条直线平行或重合,只需在其中任意一条直线上取一点,然后求该点到另一条直线的距离即可. 下面给出不平行的两条直线的距离公式.

# 命题 3.53 (直线到直线的距离公式)

在几何空间中设两条不平行的直线 $l _ { 1 } , l _ { 2 } .$ . 若 $l _ { i }$ 过 $M _ { i }$ 且方向为 $\nu _ { i }$ $( i = 1 , 2 )$ ). 则 $l _ { 1 }$ 到 $l _ { 2 }$ 的距离为

$$
d = \frac {\left| \overrightarrow {M _ {1} M _ {2}} \cdot v _ {1} \times v _ {2} \right|}{\left| v _ {1} \times v _ {2} \right|}.
$$

证明 (i) 当 $l _ { 1 } , l _ { 2 }$ 异面时.设 $l _ { 1 } , l _ { 2 }$ 的公垂线段为 $P _ { 1 } P _ { 2 }$ .其中 $P _ { i }$ 在 $l _ { i }$ 上 $( i = 1 , 2 )$ .由于 $\pmb { \nu } _ { 1 } \times \pmb { \nu } _ { 2 }$ 与 $P _ { 1 } P _ { 2 }$ 共线,故 $l _ { 1 }$ 到$l _ { 2 }$ 的距离为

$$
\begin{array}{l} d = \left| P _ {1} P _ {2} \right| = \left| \overrightarrow {P _ {1} P _ {2}} \cdot \left(\boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2}\right) ^ {0} \right| = \left| \left(\overrightarrow {P _ {1} M _ {1}} + \overrightarrow {M _ {1} M _ {2}} + \overrightarrow {M _ {2} P _ {2}}\right) \cdot \left(\boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2}\right) ^ {0} \right| \\ = | \overrightarrow {M _ {1} M _ {2}} \cdot (\boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2}) ^ {0} | = \left| \overrightarrow {M _ {1} M _ {2}} \cdot \frac {\boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2}}{| \boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2} |} \right| = \frac {| \overrightarrow {M _ {1} M _ {2}} \cdot \boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2} |}{| \boldsymbol {v} _ {1} \times \boldsymbol {v} _ {2} |}. \\ \end{array}
$$

(ii) 当 $l _ { 1 } , l _ { 2 }$ 相交时, $d = 0$ , 也符合以上公式.

注 当 $l _ { 1 } , l _ { 2 }$ 异面时, 以上公式的几何意义是: 以 $\overrightarrow { M _ { 1 } M _ { 2 } }$ , $\nu _ { 1 } , \nu _ { 2 }$ 为棱的平行六面体的高 (以 $\nu _ { 1 } , \nu _ { 2 }$ 为邻边的平行四边

形看作底面) 就是 $l _ { 1 } , l _ { 2 }$ 的距离.

下面来讨论 “角度” 的计算.

# 定义 3.39 (两条直线所成的角)

在几何空间中设两条直线, 我们规定它们所成的角是它们的方向向量夹角中不大于 $\pi / 2$ 的那个角.

# 定义 3.40 (直线和平面所成的角)

在几何空间中设直线 ?? 和平面 $\pi$

(1) 当 $l \perp \pi$ 时, 我们规定它们所成的角为 $\pi / 2$   
(2) 当 $l$ 不垂直于 $\pi$ 时, 我们规定它们所成的角为 $l$ 与它在 $\pi$ 上的正投影的夹角.

# 定义 3.41 (两个平面的夹角)

在几何空间中设两个平面, 则它们的夹角规定为它们形成的四个二面角的任意一个.

# 定理 3.16 (两个平面的夹角公式)

在几何空间中设两个平面 $\pi _ { 1 } , \pi _ { 2 }$ . 若它们的法向量分别为 $\mathbf { \delta } n _ { 1 } , \mathbf { \delta } n _ { 2 }$ , 则它们的夹角 ?? 满足

$$
\cos \theta = \pm \frac {\boldsymbol {n} _ {1} \cdot \boldsymbol {n} _ {2}}{| \boldsymbol {n} _ {1} | | \boldsymbol {n} _ {2} |}.
$$

由以上公式可以立刻知道两个平面垂直的充要条件.

# 推论 3.4 (两个平面垂直的充要条件)

在几何空间中设两个平面 $\pi _ { 1 } , \pi _ { 2 }$ . 若它们的法向量分别为 $\mathbf { \delta } n _ { 1 } , \mathbf { \delta } n _ { 2 }$ , 则 $\pi _ { 1 } \perp \pi _ { 2 }$ 当且仅当 $\pmb { n } _ { 1 } \cdot \pmb { n } _ { 2 } = 0$ .

# 3.6 曲面的方程

本节将介绍一些常见的曲面, 并尝试利用他们的几何特征建立它们的方程. 在讨论过程中, 将接触到研究曲面的常用方法. 由于研究时基本都要涉及度量, 所以本章所有问题都在右手直角坐标系中讨论.

# 球面

除了平面以外, 最简单的曲面也许就是球面 (sphere) 了. 下面来讨论球面方程. 在给定的右手直角坐标系中设球心为 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T }$ , 半径为 $R$ , 则点 $M = [ x , y , z ] ^ { T }$ 在球面上当且仅当 $\mid \overrightarrow { M _ { 0 } M } \mid = R$ , 于是得

$$
\left(x - x _ {0}\right) ^ {2} + \left(y - y _ {0}\right) ^ {2} + \left(z - z _ {0}\right) ^ {2} = R ^ {2}. \tag {3.14}
$$

上式这就是球面的方程. 把上式展开得

$$
x ^ {2} + y ^ {2} + z ^ {2} - 2 x _ {0} x - 2 y _ {0} y - 2 z _ {0} z + x _ {0} ^ {2} + y _ {0} ^ {2} + z _ {0} ^ {2} - R ^ {2} = 0.
$$

观察上式发现这样几个特征:

(1) 它是一个三元二次方程.  
(2) 它没有交叉项 (没有 ????, ????, ???? 项).  
(3) 它的三个平方项系数相同.

所以很自然地要问, 任意一个形如

$$
x ^ {2} + y ^ {2} + z ^ {2} + A x + B y + C z + D = 0
$$

的三元二次方程是否都表示一个球面? 将以上方程配方后得

$$
\left(x + \frac {A}{2}\right) ^ {2} + \left(y + \frac {B}{2}\right) ^ {2} + \left(z + \frac {C}{2}\right) ^ {2} = \frac {A ^ {2} + B ^ {2} + C ^ {2}}{4} - D.
$$

令

$$
O = \left[ - \frac {A}{2}, - \frac {B}{2}, - \frac {C}{2} \right] ^ {T}, \quad \Delta = A ^ {2} + B ^ {2} + C ^ {2} - 4 D.
$$

(1) 当 $\Delta > 0$ 时, 方程表示以 $o$ 为球心, 半径为 $\sqrt { \Delta } / 2$ 的球面. 此时我们称以上三元二次方程为球面的普通方程.  
(2) 当 $\Delta = 0$ 时, 方程表示点 $o$ , 此时我们称它是一个退化的圆.  
(3) 当 $\Delta \mathit { \Theta } < 0$ 时, 方程在 $\mathbb { R } ^ { 3 }$ 中无解, 因此在几何空间中没有轨迹, 此时我们称它表示一个虚球面 (imaginarysphere).

当 $\Delta > 0$ 时, 令 $z = 0$ 得球面与平面 $O x y$ 的交线

$$
\left\{ \begin{array}{l} {\left(x + \frac {A}{2}\right) ^ {2} + \left(y + \frac {B}{2}\right) ^ {2} = \frac {A ^ {2} + B ^ {2}}{4} - D} \\ z = 0 \end{array} , \quad \Delta = A ^ {2} + B ^ {2} - 4 D > 0. \right.
$$

它是 $O x y$ 上的以 $O = [ - A / 2 , - B / 2 ] ^ { T }$ 为圆心, $\sqrt { \Delta } / 2$ 为半径的圆.

和圆的参数方程类似, 我们可以利用三角函数得到球面的参数方程.

# 命题 3.54 (球面的参数方程)

在给定的右手直角坐标系中设球面的球心为原点 $o$ , 半径为 $R$ , 在球面上任取一点 $M = [ x , y , z ] ^ { T }$ , 过 $M$ 作平面 $O x y$ 的垂线, 垂足为 $N$ , 连接 $O M , O N$ , 设 $x$ 正半轴到 $\overrightarrow { O N }$ 的角度为 $\varphi , { \overrightarrow { O M } }$ $\varphi$ 到 $z$ 轴正半轴的角度为 $\theta$ ,

且规定 $M$ 在 $O x y$ 上方时 $\theta$ 取正号. 此时球面方程为

$$
\left\{ \begin{array}{l} x = R \sin \theta \cos \varphi \\ y = R \sin \theta \sin \varphi \\ z = R \cos \theta \end{array} , \quad 0 \leq \theta \pi , 0 <   \varphi \leq 2 \pi . \right.
$$

我们称以上方程为以 $o$ 为球心, $R$ 为半径的球面的参数方程. 其中 $\theta$ 和 $\varphi$ 是它的参数.

注在以上球面的参数方程中令纬度 $\theta = \pi / 2$ 得

$$
\left\{ \begin{array}{l} x = R \cos \varphi \\ y = R \sin \varphi \\ z = 0 \end{array} , \quad - \pi <   \varphi \leq \pi . \right.
$$

这就是在 $O x y$ 上的以 $o$ 为圆心, $R$ 为半径的圆的方程.

![](images/ed5c171c93c906de23b05ea11998fe182a3e85fa48e5ba61dbe9192b33191dea.jpg)  
图 3.3: 球面的参数方程.

由球面的参数方程可知, 球面上的每一点 (与 ?? 轴的交点除外) 都对应唯一的二元实数组 ??, ??. 因此我们称 $[ \theta , \varphi ] ^ { T }$ 为球面上点的曲纹坐标 (curvilinear coordinate). 而几何空间中的任意一点必在以原点 $o$ 为球心, $\vert O M \vert$ 为半径的球面上. 我们可以模仿平面上的极坐标系, 建立建立空间极坐标.

# 定义 3.42 (空间极坐标)

在几何空间中, 除去 ?? 轴外, 任意一点被一个三元有序实数组 $[ R , \theta , \varphi ] ^ { T }$ 唯一确定, 其中 $R$ 表示该点到原点$o$ 的距离, $[ \theta , \varphi ] ^ { T }$ 表示它所在的球面的曲纹坐标. 我们称 $[ R , \theta , \varphi ] ^ { T }$ 为空间极坐标 (space polar coordinate) 也称为球面坐标 (spherical coordinate). 它与直角坐标系的对应关系为

$$
\left\{ \begin{array}{l} x = R \sin \theta \cos \varphi \\ y = R \sin \theta \sin \varphi \\ z = R \cos \theta \end{array} , \quad R \geq 0, 0 \leq \theta \pi , 0 <   \varphi \leq 2 \pi . \right.
$$

在前一章我们已经看到, 在几何空间中一个平面 (二维线性流形) 的普通方程是一个三元一次方程. 我们又看到球面普通方程是一个三元二次方程. 一般情况下, 几何空间中中的曲面普通方程是一个三元方程 $F ( x , y , z ) = 0$ .

而曲面的参数方程通常含有两个参数

$$
\left\{ \begin{array}{l} x = x (u, v) \\ y = y (u, v) \\ z = z (u, v) \end{array} \right..
$$

$[ u . \nu ] ^ { T }$ 称为该曲面上点的曲纹坐标.

几何空间中的曲线通常可以看作两个曲面的交线, 所以曲线的方程通常是两个三元方程的联立:

$$
\left\{ \begin{array}{l} F (x, y, z) = 0 \\ G (x, y, z) = 0 \end{array} \right..
$$

而曲线的参数方程通常含有一个参数

$$
\left\{ \begin{array}{l} x = x (t) \\ y = y (t) \quad , \quad a \leq t \leq b. \\ z = z (t) \end{array} \right.
$$

# 旋转面

球面可以看作一个半圆绕它的直径旋转一周所形成的曲面. 很自然地, 我们希望更一般的情况.

# 定义 3.43 (旋转面)

在几何空间中设一条曲线 Γ 和一条直线 ??. Γ 绕 ?? 旋转一周所得的曲面称为以 ?? 为旋转轴(axis of revolution),以 $\Gamma$ 为母线 (generatrix) 的旋转面 (surface of revolution). 母线 Γ 上任意一点 $M _ { 0 }$ 绕?? 旋转都可以得到一个圆,我们称它为 $M _ { 0 }$ 的纬圆 (parallel circle). 过旋转轴 $l$ 的一个半平面与旋转面的交线称为经线 (longitude) 也称为子午线 (meridian).

注 任意一个纬圆所在平面都与旋转轴垂直.

注 旋转面的一条经线一定可以作为母线, 反之旋转面的母线未必是经线.

注 在古汉语中用地支表示方位, 其中 “子午” 表示 “南北”,“酉卯” 表示 “东西”.

![](images/9bd71061c92c19d1ddb2e9ed8e9ca5d8d42dcd75cfddd90cf5eb3e8fb795cad3.jpg)  
图 3.4: 旋转面示意图.

下面我们讨论给如何求旋转面的方程. 在给定的右手直角坐标系中设母线 Γ 和旋转轴 ??

$$
\Gamma : \left\{ \begin{array}{l} F (x, y, z) = 0 \\ G (x, y, z) = 0 \end{array} \right. \qquad l: \frac {x - x _ {1}}{l} = \frac {y - y _ {1}}{m} = \frac {z - z _ {1}}{n}.
$$

容易看出 $l$ 是过点 $M _ { 1 } = [ x _ { 1 } , y _ { 1 } , z _ { 1 } ] ^ { T }$ , 方向为 $\mathbf { \nu } ^ { \mathbf { \nu } } \mathbf { \nu } ^ { \mathbf { \nu } } \mathbf { \nu } ^ { \mathbf { \nu } } \mathbf { \nu } ^ { \mathbf { \nu } } [ l , m , n ] ^ { T }$ 的直线. 现在我们来求 $\Gamma$ 绕 $l$ 旋转所得的旋转面.

容易知道点 $M = [ x , y , z ] ^ { T }$ 在旋转面上当且仅当 $M$ 在某一个纬圆上, 即 $\Gamma$ 上存在一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T }$ 满足$M$ 到 $l$ 的距离等于 $M _ { 0 }$ 到 $l$ 的距离且过 $M _ { 0 }$ 的纬圆的平面垂直于 ??(即 $\overrightarrow { M M _ { 0 } } \perp \nu )$ . 于是有

$$
\left\{ \begin{array}{l} F (x _ {0}, y _ {0}, z _ {0}) = 0 \\ G (x _ {0}, y _ {0}, z _ {0}) = 0 \\ | \overrightarrow {M M _ {1}} \times v | = | \overrightarrow {M _ {0} M _ {1}} \times v | \\ \overrightarrow {M _ {0} M} \cdot v = 0 \end{array} \right..
$$

消去以上方程组中参数 $x _ { 0 } , y _ { 0 } , z _ { 0 }$ 就可以得到一个关于 $x , y , z$ 的三元方程, 它就是 $\Gamma$ 绕 $l$ 旋转所得旋转面的方程.

为了便于研究, 我们会尽量令母线在平面 ??????, ??????, ?????? 上, 旋转轴尽量选取 $x$ 轴, $y$ 轴, ?? 轴. 我们来看一下在这样的特殊情况下, 旋转面方程会得到怎样的简化. 在给定的右手直角坐标系中设母线在平面 $O y z$ 上:

$$
\Gamma : \left\{ \begin{array}{l} F (y, z) = 0 \\ x = 0 \end{array} \right.
$$

下面来求 $\Gamma$ 绕 ?? 轴旋转所得旋转面的方程. 由前面的讨论可知点 $M = [ x , y , z ] ^ { T }$ 在旋转面上当且仅当

$$
\left\{ \begin{array}{l} F (y _ {0}, z _ {0}) = 0 \\ x _ {0} = 0 \\ x ^ {2} + y ^ {2} = x _ {0} ^ {2} + y _ {0} ^ {2} \\ z - z _ {0} = 0 \end{array} \right..
$$

消去参数 $x _ { 0 } , y _ { 0 } , z _ { 0 }$ 得

$$
F \left(\pm \sqrt {x ^ {2} + y ^ {2}}, z\right) = 0.
$$

这就是满足要求的旋转面的方程. 由此可见平面 $O y z$ 上的母线 Γ 绕 ?? 轴旋转所得的旋转面方程只需将 Γ 在 ??????上的方程 $F ( y , z ) = 0$ 中的 $y$ 改成 $\pm { \sqrt { x ^ { 2 } + y ^ { 2 } } }$ 即可. 其它类似情况都有类似结论.

下面来看一下平面中的三种圆锥曲线 (椭圆, 抛物线, 双曲线) 旋转得到的旋转面. 其中圆的旋转面就是球面.平面?????? 上的椭圆 (关于 $x$ 轴和 $y$ 轴对称) 绕 $x$ 轴旋转所得的旋转面是一个 “橄榄形” 的曲面.

# 命题 3.55 (旋转椭球面)

在给定的右手直角坐标系中设平面?????? 上的椭圆

$$
\Gamma : \left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 \\ z = 0 \end{array} \right., \quad 0 <   b <   a.
$$

则 $\Gamma$ 绕 $x$ 轴旋转所得的旋转面为

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2} + z ^ {2}}{b ^ {2}} = 1.
$$

我们称以上曲面为旋转椭球面 (ellipsoid of revolution).

![](images/796bd291d02804144e8c7a6dd54fe54c28435ab9d0993c2b047e60533f504508.jpg)  
图 3.5: 旋转椭球面示意图.

注 当 $a = b$ 时, 平面 $O x y$ 上的椭圆变为圆

$$
\Gamma : \left\{ \begin{array}{l} x ^ {2} + y ^ {2} = a ^ {2} \\ z = 0 \end{array} \right., \quad a > 0.
$$

此时 $\Gamma$ 绕 $x$ 轴旋转所得的旋转面就是球面

$$
x ^ {2} + y ^ {2} + z ^ {2} = a ^ {2}.
$$

若平面 $O x z$ 上的圆不以原点 $o$ 为圆心, 绕 $x$ 轴旋转后可以得到 “甜甜圈形” 的曲面.

# 命题 3.56 (环面)

在给定的右手直角坐标系中设平面 $O z x$ 上的圆

$$
\Gamma : \left\{ \begin{array}{l} (x - a) ^ {2} + z ^ {2} = r ^ {2} \\ y = 0 \end{array} \right., \quad 0 <   r <   a.
$$

则 $\Gamma$ 绕 ?? 轴旋转所得的旋转面为

$$
\left(\pm \sqrt {x ^ {2} + y ^ {2}} - a\right) ^ {2} + z ^ {2} = r ^ {2} \Longleftrightarrow \left(x ^ {2} + y ^ {2} + z ^ {2} + a ^ {2} - r ^ {2}\right) ^ {2} = 4 a ^ {2} (x ^ {2} + y ^ {2}).
$$

我们称以上曲面为环面 (torus).

![](images/528553e3ae296b594cf27b7f7607f1412b876902bdd32fda6b4d6bfced986d81.jpg)  
图 3.6: 环面示意图.

平面 $O y z$ 上的抛物线绕 ?? 轴旋转所得的旋转面是一个 “手电筒反射面形” 的曲面.

# 命题 3.57 (旋转抛物面)

在给定的右手直角坐标系中设平面 ?????? 上的抛物线

$$
\Gamma : \left\{ \begin{array}{l} y ^ {2} = 2 p z \\ x = 0 \end{array} \right., \quad p > 0.
$$

则 Γ 绕 ?? 轴旋转所得的旋转面为

$$
x ^ {2} + y ^ {2} = 2 p z.
$$

我们称以上曲面为旋转抛物面 (revolution paraboloid).

![](images/614228592d198b53c2742a267a6873f9c28f3a04246fd657b446b9bdbb04cc22.jpg)  
图 3.7: 旋转抛物面示意图.

平面 ?????? 上的双曲线分别绕 $x$ 轴旋转和 $y$ 轴旋转可以得到两种重要的旋转面.

# 命题 3.58 (旋转双曲面)

在给定的右手直角坐标系中设平面?????? 上的双曲线

$$
\Gamma : \left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1 \\ z = 0 \end{array} \right..
$$

则

(1) Γ 绕 $x$ 轴旋转所得的旋转面为

$$
\frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2} + z ^ {2}}{b ^ {2}} = 1.
$$

我们称以上曲面为旋转双叶双曲面 (hyperboloid of revolution of two sheets).

(2) Γ 绕 $y$ 轴旋转所得的旋转面为

$$
\frac {x ^ {2} + z ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1.
$$

我们称以上曲面为旋转单叶双曲面 (hyperboloid of revolution of one sheet).

![](images/54e86580c5e66a1cb7c0eb741062f0b4cedb7f0aa782b14a38de36bf3546d681.jpg)  
图 3.8: 旋转双叶和单叶双曲面示意图.

# 柱面

下面来看柱面.

# 定义 3.44 (柱面)

在几何空间中设一条曲线 ??, 给定方向 $\nu$ , 则所有平行于 $\nu$ 且与 $C$ 相交的直线组成的曲面称为柱面 (cylin-drical surface), 其中每一条满足要求的直线都称为该柱面的母线 (generatrix), 曲线 $C$ 称为该柱面的准线 (di-rectrix).

注 显然平面也是一种柱面.

注 柱面的母线和准线都不唯一. 但母线的方向唯一 (平面除外). 与每一条母线都相交的曲线都可以看作准线.

![](images/f0781cc1b1510a33743407a2fa6c79c8c496d086866e8ced2b65a061bf0c49cc.jpg)  
图 3.9: 柱面示意图.

下面我们来讨论柱面方程. 在给定的右手直角坐标系中设方向为 $\mathbf { \nu } ^ { \mathbf { \nu } } \mathbf { \nu } ^ { \mathbf { \nu } } \mathbf { \nu } ^ { \mathbf { \nu } } \mathbf { \nu } ^ { \mathbf { \nu } } [ l , m , n ] ^ { T }$ 的母线以及准线

$$
C: \left\{ \begin{array}{l} F (x, y, z) = 0 \\ G (x, y, z) = 0 \end{array} \right.
$$

下面来求该柱面的方程.

容易知道点 $M = [ x , y , z ] ^ { T }$ 在柱面上当且仅当 $M$ 在某条母线上, 即准线 $C$ 上存在一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T }$ 满足$\overrightarrow { M M _ { 0 } }$ 平行于 $\nu$ . 于是有

$$
\left\{ \begin{array}{l} F (x _ {0}, y _ {0}, z _ {0}) = 0 \\ G (x _ {0}, y _ {0}, z _ {0}) = 0 \\ x = x _ {0} + t l \\ y = y _ {0} + t m \\ z = z _ {0} + t n \end{array} \right..
$$

消去以上方程组中参数 $x _ { 0 } , y _ { 0 } , z _ { 0 }$ 得

$$
\left\{ \begin{array}{l} F (x - t l, y - t m, z - t n) = 0 \\ G (x - t l, y - t m, z - t n) = 0 \end{array} \right..
$$

再消去参数 $t$ 就可以得到一个关于 $x , y , z$ 的三元方程, 它就是以 $C$ 为准线母线方向 $\nu$ 的柱面方程.

为了便于研究, 我们会尽量令母线方向为 $x$ 轴, $y$ 轴, ?? 轴. 我们来看一下在这样的特殊情况下, 柱面方程会得到怎样的简化.

# 命题 3.59 (柱面方程的特征)

在给定的右手直角坐标系中设一个曲面 ??, 它是一个平行于 ?? 轴 $\boldsymbol { x }$ 轴或 $y$ 轴) 的柱面当且仅当它的方程中不含 ?? (?? 或 ??).

证明 只证明 ?? 的情况.

(i)证明必要性.若 ?? 一个平行于 ?? 轴的柱面,则它的每条母线都与 $O x y$ 相交,于是它与 $O x y$ 的交线 $C$ 就是该柱面的一条准线, 设它的方程为

$$
\left\{ \begin{array}{l} f (x, y) = 0 \\ z = 0 \end{array} \right..
$$

设 $C$ 上一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T } ,$ 于是柱面方程为

$$
\left\{ \begin{array}{l} f (x _ {0}, y _ {0}) = 0 \\ z _ {0} = 0 \\ x = x _ {0} \\ y = y _ {0} \\ z = z _ {0} + t \end{array} \right. \iff \left\{ \begin{array}{l} f (x, y) = 0 \\ z = t \end{array} \right., \forall t \in \mathbb {R} \iff f (x, y) = 0.
$$

于是该柱面方程不含 ??.

(ii) 证明充分性. 任意一个不含 ?? 的三元方程 $g ( x , y ) = 0 .$ . 容易知道该方程表示以

$$
\left\{ \begin{array}{l} g (x, y) = 0 \\ z = 0 \end{array} \right.
$$

为准线, 母线方向为 ?? 轴的柱面, 即该方程表示一个平行于 $z$ 轴的柱面.

下面来看由二次曲线 (圆, 椭圆, 双曲线, 抛物线) 为准线形成的柱面. 其中圆柱面是最简单的一种柱面.

# 定义 3.45 (圆柱面)

在几何空间中设平面 $\pi$ 上的一个圆 $C$ , 以 $C$ 为准线, 母线方向垂直于 $\pi$ 的柱面称为圆柱面 (cylindrical sur-face). 过圆 $C$ 的圆心 $o$ 垂直于 $\pi$ 的直线 $l$ 称为该圆柱面的对称轴 (symmetry axis). 圆柱面上任意一点到对称轴 $l$ 的距离称为该圆柱面的半径 (radius).

注 圆柱面的准线未必是圆.

![](images/d091886ade55eb5b2abaa1c3045b703fe2e1f4b8cb5367428bdfeb2d50f9ec76.jpg)  
图 3.10: 圆柱面示意图.

利用前面介绍的方法可以求出圆柱面的方程.若给了圆柱面的半径,对称轴,则可以利用圆柱面的几何特征得出圆柱面的方程. 设圆柱面对称轴 $l$ 过点 $M _ { 0 }$ , 方向为 $\nu$ , 半径为 $r$ , 则圆柱面的方程为

$$
\frac {\mid \overrightarrow {M M _ {0}} \times v \mid}{| v |} = r.
$$

特别地, 若圆柱面的对称轴为 ?? 轴, 则它的方程就是

$$
x ^ {2} + y ^ {2} = r ^ {2}.
$$

于是不难知道圆柱面的参数方程:

$$
\left\{ \begin{array}{l} x = \cos \theta \\ y = \sin \theta \\ z = z \end{array} \right..
$$

几何空间中任意一点必在一个圆柱面上. 因此我们可以类比球面坐标系建立柱面坐标系.

# 定义 3.46 (柱面坐标系)

在几何空间中,任意一点被一个三元有序实数组 $[ R , \theta , u ] ^ { T }$ 唯一确定,其中 $R$ 表示该点在 $O x y$ 上的投影到原点 $o$ 的距离, $[ \theta , z ] ^ { T }$ 表示它所在的圆柱面的曲纹坐标. 我们称 $[ R , \theta , z ] ^ { T }$ 为柱面坐标 (cylindrical coordinate).它与直角坐标系的对应关系为

$$
\left\{ \begin{array}{l} x = R \cos \theta \\ y = R \sin \theta \\ z = z \end{array} , \quad R \geq 0,   0 \leq \theta \leq 2 \pi ,   u \in \mathbb {R}. \right.
$$

类似研究圆柱面的方法我们可以研究椭圆柱面, 双曲柱面和抛物柱面.

# 定义 3.47 (常见柱面)

在几何空间中设平面 $\pi$ 上的一个椭圆, 双曲线和抛物线. 以它们为准线, 母线方向垂直于 $\pi$ 的柱面分别称为椭圆柱面 (elliptic cylindrical surface), 双曲柱面 (hyperbolic cylindrical surface) 和抛物柱面 (parabolic cylindricalsurface)

注 在给定的右手直角坐标系中设椭圆, 双曲线和抛物线

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 \\ z = 0 \end{array} \right., \quad \left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1 \\ z = 0 \end{array} \right., \quad \left\{ \begin{array}{l} x ^ {2} = 2 p y \\ z = 0 \end{array} \right.,
$$

则以它们为准线, 母线方向为 ?? 轴的柱面方程分别为

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1, \quad \frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1, \quad x ^ {2} = 2 p y.
$$

# 锥面

下面来看锥面.

# 定义 3.48 (锥面)

在几何空间中设曲线 $C$ 和一个不在 $C$ 上的定点 $M _ { 0 }$ , 由曲线 $C$ 上的点和 $M _ { 0 }$ 的连线组成的曲面称为锥面(conical surface). 其中 $M _ { 0 }$ 称为顶点 (vertex), 曲线 $C$ 上的点与 $M _ { 0 }$ 的连线称为该锥面的母线 (generatrix), 曲线 $C$ 称为该锥面的准线 (directrix).

注 一个锥面的准线不唯一. 锥面上与每一条母线都相交的曲线均可看作它的准线.

注 由以上定义可知, 圆锥体的侧面只是一个有限锥面. 以上定义中的锥面是连接在顶点处的两支无限延伸的锥面.

注 平面也可看作锥面. 其上的每一点都可看作顶点. 有轴平面束中的两个或多个平面也可以看作锥面. 轴上的每一点都可看作顶点. 除这两种特殊锥面外一般锥面的顶点都是确定的.

![](images/ee2da1661df0e8db29bc5740ab2c65928017ec7dc0f71394a9197ccd0dc6b509.jpg)  
图 3.11: 锥面示意图.

下面我们来求锥面的方程. 在给定的右手直角坐标系中设准线和顶点

$$
C: \left\{ \begin{array}{l} F (x, y, z) = 0 \\ G (x, y, z) = 0 \end{array} \right., \qquad M _ {0} = [ x _ {0}, y _ {0}, z _ {0} ] ^ {T}.
$$

容易知道点 $\boldsymbol { M } ~ = ~ [ x , y , z ] ^ { T }$ $\begin{array} { l } { M \ \ne \ M _ { 0 } ) } \end{array}$ 在该锥面上当且仅当 ?? 在某条母线上, 即准线 $C$ 上存在一点 $\begin{array} { r l } { M _ { 1 } } & { { } = } \end{array}$ $[ x _ { 1 } , y _ { 1 } , z _ { 1 } ] ^ { T }$ 满足 $M _ { 1 } , M , M _ { 0 }$ $M _ { 1 }$ 三点共线. 于是有

$$
\left\{ \begin{array}{l} F (x _ {1}, y _ {1}, z _ {1}) = 0 \\ G (x _ {1}, y _ {1}, z _ {1}) = 0 \\ x _ {1} = x _ {0} + t (x - x _ {0}) \\ y _ {1} = y _ {0} + t (y - y _ {0}) \\ z _ {1} = z _ {0} + t (z - z _ {0}) \end{array} \right..
$$

消去以上方程组中参数 $x _ { 1 } , y _ { 1 } , z _ { 1 }$ 得

$$
\left\{ \begin{array}{l} F (x _ {0} + t (x - x _ {0}), y _ {0} + t (y - y _ {0}), z _ {0} + t (z - z _ {0})) = 0 \\ G (x _ {0} + t (x - x _ {0}), y _ {0} + t (y - y _ {0}), z _ {0} + t (z - z _ {0})) = 0 \end{array} \right..
$$

再消去参数 $t$ 就可以得到一个关于 $x , y , z$ 的三元方程, 它就是以 $C$ 为准线 $M _ { 0 }$ 为顶点的锥面方程 (不包括顶点).

用以上方法求得的锥面方程不包含顶点, 所以需要再最后补上. 若准线方程中的 $F ( x , y , z )$ 和 $G ( x , y , z )$ 是 多项式, 则消去参数后求得的去顶点锥面方程通常是一个分式方程. 如果把方程有理化, 则会扩大方程的解集. 很多情况下, 增加的解恰好是锥面的顶点. 如果是这样, 那么有理化后的多项式方程就是锥面的方程. 但有时候有理化后多出来的解并不恰好是锥面的顶点. 我们举例说明. 求以原点为顶点, 准线为

$$
\left\{ \begin{array}{l} x ^ {2} = 2 p y \\ z = 1 \end{array} \right.
$$

的锥面方程.

容易求得去顶点的锥面方程为

$$
\frac {x ^ {2}}{z ^ {2}} = \frac {2 p y}{z}.
$$

若将它有理化得

$$
x ^ {2} = 2 p y z.
$$

则增加的点不仅有原点 $o$ , 还有整条 $y$ 轴. 所以求锥面方程时, 一旦要对所求方程有理化, 一定要进行检验.

下面来看一下圆锥面的方程.

# 定义 3.49 (圆锥面)

在几何空间中设平面 $\pi$ 上的一个圆 $C$ , 过圆 $C$ 的圆心 $o$ 作垂直于 $\pi$ 的直线 ??, 在 $\pi$ 外取 $l$ 上一点 $M _ { 0 }$ , 则以$M _ { 0 }$ 为顶点, $C$ 为准线的锥面称为圆锥面 (circular conical surface). 其中 $l$ 称为该圆锥面的对称轴 (symmetryaxis). 每一条准线与 ?? 所成的角都相等, 称为该圆锥面的半顶角 (semiapex angle).

![](images/7f4e2d7aa62838fc86b5cf6eda8cd29090ef67dcb1c73faabf95c35fa921c665.jpg)  
图 3.12: 圆锥面示意图.

若给了圆锥面的顶点 $M _ { 0 }$ , 对称轴 $l$ 的方向 $\nu$ 和半顶角 $\alpha$ , 则 $M = [ x , y , z ] ^ { T }$ $M \ne M _ { 0 } )$ ) 在圆锥面上当且仅当

$$
\left\langle \overrightarrow {M _ {0} M}, \pmb {v} \right\rangle = \alpha   \text {或}   \pi - \alpha   \Longleftrightarrow   \frac {\mid \overrightarrow {M _ {0} M} \cdot \pmb {v} \mid}{\mid \overrightarrow {M _ {0} M} \mid \mid \pmb {v} \mid} = \cos \alpha .
$$

以上就是圆锥面的方程 (不包括顶点).

例 3.17 求半顶角为 $\pi / 2$ 的圆锥方程.

解 设圆锥的顶点为原点, 对称轴为 $z$ 轴, 则可以立刻写出圆锥方程 (不含顶点):

$$
\frac {| z |}{\sqrt {x ^ {2} + y ^ {2} + z ^ {2}}} = \cos \frac {\pi}{2} \Longleftrightarrow \frac {z ^ {2}}{x ^ {2} + y ^ {2} + z ^ {2}} = \frac {1}{2}.
$$

去分母有理化后恰好使得方程含有顶点, 于是可知圆锥的方程为:

$$
x ^ {2} + y ^ {2} - z ^ {2} = 0.
$$

观察以上方程特征, 我们发现上述方程是一个只有 2 次项的多项式. 令 $F ( x , y , z ) = x ^ { 2 } + y ^ { 2 } - z ^ { 2 }$ , 则

$$
F (t x, t y, t z) = t ^ {2} F (x, y, z).
$$

于是可以引出以下概念.

# 定义 3.50 (齐次方程)

设多元函数 $F : \mathbb { R } ^ { n } \to \mathbb { R } .$ . 若对于任一 $\boldsymbol { x } \in \mathbb { R } ^ { n }$ 和任一非零实数 $t$ 都有

$$
F (t x) = t ^ {k} F (x),
$$

则称 $F$ 为 $k$ 次齐次函数 (homogeneous function). 此时方程 $F ( { \pmb x } ) = 0$ 称为齐次方程 (homogeneous equation).

# 定理 3.17 (锥面方程的特征)

在给定的右手直角坐标系中, 一个三元齐次方程表示的曲面是一个以原点为顶点的锥面.

证明 设三元 $n$ 次齐次方程 $F ( x , y , z ) = 0$ 表示的曲面 ??. 在 $S$ 上任取与原点不同的一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T } .$ 则直线

$O M _ { 0 }$ 上任意与原点不同的点 $M _ { 1 } = [ x _ { 1 } , y _ { 1 } , z _ { 1 } ] ^ { T }$ 满足

$$
\overrightarrow {O M _ {1}} = \lambda \overrightarrow {O M _ {0}} \iff \left\{ \begin{array}{l} x _ {1} = \lambda x _ {0} \\ y _ {1} = \lambda y _ {0} \\ z _ {1} = \lambda z _ {0} \end{array} \right.,
$$

其中 $\lambda$ 是非零实数. 由于 $F ( x , y , z ) = 0$ 是 $n$ 次齐次方程, 于是有

$$
F (x _ {1}, y _ {1}, z _ {1}) = F (\lambda x _ {0}, \lambda y _ {0}, \lambda z _ {0}) = \lambda^ {n} F (x _ {0}, y _ {0}, z _ {0}) = 0.
$$

于是可知 $M _ { 1 }$ 也在 ?? 上, 这说明直线 $O M _ { 0 }$ 都在 ?? 上. 因此 ?? 是由经过原点的一些直线组成的, 即 ?? 是以原点为顶点的锥面. ■

# 二次曲面简介

在上一节我们通过已经看到了二元二次方程表示的曲面可以是各种旋转面 (球面, 旋转椭球面, 旋转抛物面,旋转双叶双曲面, 旋转单叶双曲面等), 各种柱面和各种锥面等. 本节将研究更多类型的二次方程表示的曲面. 并从方程特点对曲面进行归类.

# 定义 3.51 (椭球面)

在给定的右手直角坐标系中曲面

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} = 1, \quad a, b, c > 0. \tag {3.15}
$$

称为椭球面 (ellipsoid).

注 特别地,

(1) 当 $a = b = c$ 时, 以上方程表示的就是一个球面 (sphere). 它球心为原点 $o$ , 半径为 1.  
(2) 当 $a , b , c$ 中有两个数相等时, 以上方程表示的椭球面就是一个旋转椭球面 (ellipsoid of revolution). 旋转椭球面又分为长球面 (prolate spheroid)(相等的两个数小于另一个数) 和扁球面 (oblate spheroid)(相等的两个数大于另一个数).  
(3) 当 $a , b , c$ 全部不相等时, 以上方程表示的椭球面称为三轴椭球面 (3-axes ellipsoid).

下面我们来讨论椭球面 (3.15) 的性质.

(1) 对称性.在椭球面上任取一点 $M = [ x , y , z ] ^ { T }$ ,显然 $M = [ x , y , z ] ^ { T }$ 关于原点 $O , x$ 轴, $y$ 轴, ?? 轴, 平面 $O x y$ , 平面 $O y z ,$ 平面 $O z x$ 的对称点

$$
[ - x, - y, - z ] ^ {T}, [ x, - y, - z ] ^ {T}, [ - x, y, - z ] ^ {T}, [ - x, - y, z ] ^ {T}, [ x, y, - z ] ^ {T}, [ - x, y, z ] ^ {T}, [ x, - y, z ] ^ {T}
$$

都在该椭球面上,故知椭球面关于原点 $O , x$ 轴, $y$ 轴, $z$ 轴,平面 $O x y$ ,平面 $O y z ,$ ,平面 $O z x$ 对称.我们称它的3条对称轴为主轴 (principal axis), 称它的 3 个对称面为主径面 (principal diametral plane). 称它与主轴的 6 个交点 $[ \pm a , 0 , 0 ] ^ { T }$ ,$[ 0 , \pm b , 0 ] ^ { T }$ , $[ 0 , 0 , \pm c ] ^ { T }$ 为顶点 (vertex).

(2) 范围. 由方程 (3.15) 可以看出

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} \leq 1 \\ \frac {y ^ {2}}{b ^ {2}} \leq 1 \\ \frac {z ^ {2}}{c ^ {2}} \leq 1 \end{array} \right. \iff \left\{ \begin{array}{l} x ^ {2} \leq a ^ {2} \\ y ^ {2} \leq b ^ {2} \\ z ^ {2} \leq c ^ {2} \end{array} \right. \iff \left\{ \begin{array}{l} | x | \leq a \\ | y | \leq b \\ | z | \leq c \end{array} \right..
$$

这表明椭球面可以被限制在一个封闭区域内.

(3) 形状. 容易看出椭球面 (3.15) 与 3 个主径面的交线都是椭圆. 椭球面 (3.15) 与平行于 $O x y$ 的平面 $z = h$ 的

交线为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 - \frac {h ^ {2}}{c ^ {2}} \\ z = h \end{array} , \quad h \neq 0. \right.
$$

若 $0 < | h | < c$ , 则交线是一个椭圆. 若 $| h | = c$ , 则交线是一个点. 当 $| h | > c$ 时, 无轨迹 (也可看作虚椭圆). 其余情况可以作类似讨论. 与平行于主径面的平面的交线通常称为截 $\pmb { \alpha }$ (section). 截口在平面 $O x y$ 上的投影称为等高线(contour line).

# 定义 3.52 (单叶双曲面)

在给定的右手直角坐标系中, 曲面

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 1, \quad a, b, c > 0. \tag {3.16}
$$

称为单叶双曲面 (hyperboloid of one sheet).

注 特别地, 当 $a = b$ 时, 以上方程表示的就是一个旋转单叶双曲面 (hyperboloid of revolution of one sheet). 它的旋转轴是 ?? 轴.

下面我们来讨论单叶双曲面 (3.16) 的性质.

(1) 对称性. 单叶双曲面 (3.16) 关于原点 $O , 3$ 个坐标轴, 3 个坐标平面对称. 我们称它的 3 条对称轴为主轴, 称它的 3 个对称面为主径面. 称它与主轴的 4 个交点 $[ \pm a , 0 , 0 ] ^ { T }$ , $[ 0 , \pm b , 0 ] ^ { T }$ 为顶点.

(2) 范围. 由方程 (3.16) 可以看出

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 + \frac {z ^ {2}}{c ^ {2}} \geq 1.
$$

这表明单叶双曲面都在椭圆柱面

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1
$$

的外部或柱面上.

(3) 形状. 容易看出单叶双曲面 (3.16) 与主径面 $O y z , O z x$ 的交线分别为

$$
\left\{ \begin{array}{l} \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 1 \\ x = 0 \end{array} , \quad \left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 1 \\ y = 0 \end{array} . \right. \right.
$$

它们都是双曲线. 与主径面 ?????? 的交线为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 \\ z = 0 \end{array} \right.,
$$

它是一个椭圆, 通常称为该单叶双曲面的腰椭圆 (central ellipse). 平行于 ?????? 的平面的截口为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 + \frac {h ^ {2}}{c ^ {2}} \\ z = h \end{array} , \quad h \neq 0. \right.
$$

容易看出, 它们都是椭圆. 容易知道椭圆的长短半轴分别为

$$
a ^ {\prime} = a \sqrt {1 + \frac {h ^ {2}}{c ^ {2}}}, \quad b ^ {\prime} = b \sqrt {1 + \frac {h ^ {2}}{c ^ {2}}}.
$$

因此它们的长短半轴随着 $| h |$ 的增大而增大.

(4) 渐进锥面. 设锥面

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 0. \tag {3.17}
$$

它的平行于 ?????? 的平面的截口为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {h ^ {2}}{c ^ {2}} \\ z = h \end{array} \right.,
$$

它们都是椭圆. 容易知道椭圆的长短半轴分别为

$$
a ^ {\prime \prime} = a \frac {| h |}{c}, \quad b ^ {\prime \prime} = b \frac {| h |}{c}.
$$

于是

$$
a ^ {\prime} - a ^ {\prime \prime} = a \sqrt {1 + \frac {h ^ {2}}{c ^ {2}}} - a \frac {| h |}{c} = \frac {a}{\sqrt {1 + \frac {h ^ {2}}{c ^ {2}}} + \frac {| h |}{c}},
$$

$$
b ^ {\prime} - b ^ {\prime \prime} = b \sqrt {1 + \frac {h ^ {2}}{c ^ {2}}} - b \frac {| h |}{c} = \frac {b}{\sqrt {1 + \frac {h ^ {2}}{c ^ {2}}} + \frac {| h |}{c}}.
$$

故

$$
\lim  _ {| h | \to \infty} (a ^ {\prime} - a ^ {\prime \prime}) = 0, \quad \lim  _ {| h | \to \infty} (b ^ {\prime} - b ^ {\prime \prime}) = 0.
$$

这表明当 $| h |$ 无限增大时, 单叶双曲面 (3.16) 的截口椭圆与锥面 (3.17) 的截口椭圆任意接近, 即单叶双曲面 (3.16)与锥面 (3.17) 任意接近. 我们称锥面 (3.17) 为单叶双曲面 (3.16) 的渐进锥面 (asymptotic conical surface).

# 定义 3.53 (双叶双曲面)

在给定的右手直角坐标系中, 曲面

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = - 1, \quad a, b, c > 0. \tag {3.18}
$$

称为双叶双曲面 (hyperboloid of two sheets).

注 特别地, 当 $a = b$ 时, 以上方程表示的就是一个旋转双叶双曲面 (hyperboloid of revolution two sheets). 它的旋转轴是 ?? 轴.

下面我们来讨论双叶双曲面 (3.18) 的性质.

(1) 对称性.双叶双曲面(3.18)关于原点 $O , 3$ 个坐标轴,3个坐标平面对称.我们称它的3条对称轴为主轴,称它的 3 个对称面为主径面. 称它与主轴的 2 个交点 $[ 0 , 0 , \pm c ] ^ { T }$ 为顶点.  
(2) 范围. 由方程 (3.18) 可以看出

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {z ^ {2}}{c ^ {2}} - 1 \geq 0 \Longrightarrow | z | \geq c
$$

这表明双叶双曲面在平面 $z = c$ 的上方和平面 $z = - c$ 的下方.

(3) 形状. 容易看出双叶双曲面 (3.18) 与主径面 $O y z , O z x$ 的交线分别为

$$
\left\{ \begin{array}{l} \frac {z ^ {2}}{c ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1 \\ x = 0 \end{array} , \quad \left\{ \begin{array}{l} \frac {z ^ {2}}{c ^ {2}} - \frac {x ^ {2}}{a ^ {2}} = 1 \\ y = 0 \end{array} . \right. \right.
$$

它们都是双曲线. 与主径面 $O x y$ 的交线为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = - 1 \\ z = 0 \end{array} , \right.
$$

它是一个虚椭圆, 即该双叶双曲面与 $O x y$ 无交点. 平行于 $O x y$ 的平面的截口为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {h ^ {2}}{c ^ {2}} - 1 \\ z = h \end{array} , \quad h \neq 0. \right.
$$

容易看出, 当 $0 < | h | < c$ 时截口是虚椭圆, 即没有交线. 当 $| h | = c$ 时截口是一点. 当 $| h | > c$ 时截口都是椭圆, 此时椭圆的长短半轴分别为

$$
a ^ {\prime} = a \sqrt {\frac {h ^ {2}}{c ^ {2}} - 1}, \quad b ^ {\prime} = b \sqrt {\frac {h ^ {2}}{c ^ {2}} - 1}.
$$

因此它们的长短半轴随着 $| h |$ 的增大而增大.

(4) 渐进锥面. 设锥面

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 0. \tag {3.19}
$$

它的平行于 ?????? 的平面的截口为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {h ^ {2}}{c ^ {2}} \\ z = h \end{array} \right.,
$$

它们都是椭圆. 容易知道椭圆的长短半轴分别为

$$
a ^ {\prime \prime} = a \frac {| h |}{c}, \quad b ^ {\prime \prime} = b \frac {| h |}{c}.
$$

于是

$$
a ^ {\prime} - a ^ {\prime \prime} = a \sqrt {\frac {h ^ {2}}{c ^ {2}} - 1} - a \frac {| h |}{c} = - \frac {a}{\sqrt {\frac {h ^ {2}}{c ^ {2}} - 1} + \frac {| h |}{c}},
$$

$$
b ^ {\prime} - b ^ {\prime \prime} = b \sqrt {\frac {h ^ {2}}{c ^ {2}} - 1} - b \frac {| h |}{c} = - \frac {b}{\sqrt {\frac {h ^ {2}}{c ^ {2}} - 1} + \frac {| h |}{c}}.
$$

故

$$
\lim  _ {| h | \to \infty} (a ^ {\prime} - a ^ {\prime \prime}) = 0, \quad \lim  _ {| h | \to \infty} (b ^ {\prime} - b ^ {\prime \prime}) = 0.
$$

这表明当 $| h |$ 无限增大时, 双叶双曲面 (3.18) 的截口椭圆与锥面 (3.19) 的截口椭圆任意接近, 即双叶双曲面 (3.18)与锥面 (3.19) 任意接近. 我们称锥面 (3.19) 为双叶双曲面 (3.18) 的渐进锥面 (asymptotic conical surface). 我们发现单叶双曲面 (3.16) 和双叶双曲面 (3.18) 有相同的渐近锥面.

# 定义 3.54 (椭圆抛物面)

在给定的右手直角坐标系中, 曲面

$$
\frac {x ^ {2}}{p} + \frac {y ^ {2}}{q} = 2 z, \quad p, q > 0. \tag {3.20}
$$

称为椭圆抛物面 (elliptic paraboloid).

注 特别地, 当 $p = q$ 时, 以上方程表示的就是一个旋转抛物面 (paraboloid of revolution) 它的旋转轴是 ?? 轴.

下面我们来讨论椭圆抛物面 (3.20) 的性质.

(1) 对称性: 椭圆抛物面 (3.20) 关于 $z$ 轴, 平面 $O y z ,$ , 平面 $O z x$ 对称. 我们称它的对称轴为主轴, 称它的 2 个对称面为主径面. 它与主轴交于原点 $o$ , 称为顶点.  
(2) 范围: 由方程 (3.20) 可以看出 $z \geq 0$ , 即椭圆抛物面 (3.20) 都在平面 ?????? 上方.

(3) 形状: 容易看出椭圆抛物面 (3.20) 与主径面 $O y z , O z x$ 的交线分别为

$$
\left\{ \begin{array}{l} y ^ {2} = 2 q z \\ x = 0 \end{array} \right. \quad \left\{ \begin{array}{l} x ^ {2} = 2 p z \\ y = 0 \end{array} \right.,
$$

它们都是抛物线. 显然与主径面 ?????? 的交线就是原点 $o$ . 平行于 ?????? 的平面的截口为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{p} + \frac {y ^ {2}}{q} = 2 h \\ z = h \end{array} \right., \quad h \neq 0.
$$

当 $h < 0$ 时, 截口是虚椭圆, 即此时无交线. 当 $h > c$ 时截口都是椭圆. 此时椭圆的长短半轴分别为

$$
a ^ {\prime} = \sqrt {2 p h}, b ^ {\prime} = \sqrt {2 q h}.
$$

因此它们的长短半轴随着 $| h |$ 的增大而增大.

# 定义 3.55 (双曲抛物面)

在给定的右手直角坐标系中, 曲面

$$
\frac {x ^ {2}}{p} - \frac {y ^ {2}}{q} = 2 z, \quad p, q > 0. \tag {3.21}
$$

称为双曲抛物面 (hyperbolic paraboloid), 也称为马鞍面 (saddle surface).

![](images/8bacafe826f214a1194599deecb09038f730f86557584e9acc5a2c74ab299542.jpg)

![](images/cca7d667f663fb4b532a624c2e143894a6ddc12d9547300b4b07b9322712fc5f.jpg)  
图 3.13: 马鞍面示意图.

下面我们来讨论马鞍面 (3.21) 的性质.

(1) 对称性. 马鞍面 (3.21) 关于 ?? 轴, 平面 $O y z$ , 平面 $O z x$ 对称. 我们称它的对称轴为主轴, 称它的 2 个对称面为主径面. 它与主轴交于原点 $o$ , 称为顶点.  
(2) 形状. 容易看出马鞍面 (3.21) 与主径面 $O y z , O z x$ 的交线分别为

$$
\left\{ \begin{array}{l} y ^ {2} = - 2 q z \\ x = 0 \end{array} , \right. \tag {3.22}
$$

$$
\left\{ \begin{array}{l} x ^ {2} = 2 p z \\ y = 0 \end{array} \right.. \tag {3.23}
$$

它们都是抛物线. 与主径面 ?????? 的交线为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{p} - \frac {y ^ {2}}{q} = 0 \iff \frac {x}{\sqrt {p}} \pm \frac {y}{\sqrt {q}} = 0 \\ z = 0 \end{array} \right.
$$

这是一对过原点相交直线. 平行于 $O x y$ 的平面的截口为

$$
\left\{ \begin{array}{l} \frac {x ^ {2}}{p} - \frac {y ^ {2}}{q} = 2 h \\ z = h \end{array} \right., \quad h \neq 0.
$$

它们都是双曲线. 当 $h > 0$ 时双曲线的实轴平行于 $x$ 轴. 当 $h < 0$ 时双曲线的实轴平行于 $y$ 轴.

(3) 将抛物线(3.22)沿着抛物线(3.23)平移(使得(3.22)的顶点沿着(3.23)),我们来求这种平移得到的曲面方程. 设点 $M = [ x , y , z ] ^ { T }$ , 再设 (3.23) 上的一点 $M _ { 0 } = [ x _ { 0 } , y _ { 0 } , z _ { 0 } ] ^ { T }$ . 则 $M$ 在这个曲面上当且仅当 ?? 在一条以 $M _ { 0 }$ 为顶点由 (3.22) 平移得到的抛物线上, 即

$$
\left\{ \begin{array}{l} x _ {0} ^ {2} = 2 p z _ {0} \\ y _ {0} = 0 \\ y ^ {2} = - 2 q (z - z _ {0}) \\ x = x _ {0} \end{array} \right.
$$

消去参数 $x _ { 0 } , y _ { 0 } , z _ { 0 }$ 得

$$
\frac {x ^ {2}}{p} - \frac {y ^ {2}}{q} = 2 z.
$$

以上讨论表明将抛物线 (3.22) 沿着抛物线 (3.23) 平移得到的曲面就是马鞍面 (3.21). 类似地将抛物线 (3.22) 沿着抛物线 (3.23) 平移得到的曲面也是马鞍面 (3.21).

前面我们一共介绍了一些二次曲面的, 它们都是由标准方程定义的. 我们根据它们的标准方程可以总结如下.

# 定理 3.18 (二次曲面的分类)

我们根据二次曲线标准方程的特点, 把二次曲面分称了 17 种 (其中有 3 种无轨迹).

1. 标准方程中三个元都没有消失.

(i) 三个元都是二次的.

(a) 椭球面类:

??2 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } + { \frac { z ^ { 2 } } { c ^ { 2 } } } = 1$ ??2 ??2 ??2 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } + { \frac { z ^ { 2 } } { c ^ { 2 } } } = - 1 .$ ??2 ??2 ??2 ??2椭球面 : ??2 ?? 2 ?? 2 1, 虚椭球面 ??2 ?? 2 一个点 : ??2 + ?? 2 ?? 2 0.

(b) 双曲面类:

单叶双曲面 : ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } - { \frac { z ^ { 2 } } { c ^ { 2 } } } = 1$ , 双叶双曲面 : ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } - { \frac { z ^ { 2 } } { c ^ { 2 } } } = - 1 .$ ??2??2 ?? 2 ??2 ??2 ?? 2 ?? 2

(c) 锥面类:

二次锥面 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } - { \frac { z ^ { 2 } } { c ^ { 2 } } } = 0 .$ +??2 ?? 2

(ii) 三个元中有一个退化为一次则成为抛物面类.

??2 ${ \frac { x ^ { 2 } } { p } } + { \frac { y ^ { 2 } } { q } } = 2 z$ ??2 ??2 $\frac { x ^ { 2 } } { p } - \frac { y ^ { 2 } } { q } = 2 z$ ??2椭圆抛物面 : , 双曲抛物面 : = 2??.

2. 标准方程中三个元有一个消失则成为柱面类.

椭圆柱面 : ??2 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } = 1$ ?? 2 ??2 , 虚椭圆柱面 : ??2 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } = - 1$ ?? 2 ??2 , 直线 : ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } = 0 .$ ??2 ,

??2 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } - { \frac { y ^ { 2 } } { b ^ { 2 } } } = 1$ ??2 ??2 ${ \frac { x ^ { 2 } } { a ^ { 2 } } } - { \frac { y ^ { 2 } } { b ^ { 2 } } } = 0$ ??2 抛物柱面 : ,双曲柱面 : , 一对相交平面 : ??2 , $x ^ { 2 } = 2 p y$

3. 标准方程中三个元有两个消失则成为平面类.

一对平行平面 : $x ^ { 2 } = a ^ { 2 }$ , 一对虚平行平面 : $x ^ { 2 } = - a ^ { 2 }$ , 一对重合平面 : $x ^ { 2 } = 0$ .

注 用高等代数的方法进一步研究二次曲面的理论, 我们将看到二次曲面有且仅有这 17 种.

# 内容提要

h 方向导数

h 全微分

h 偏导数

# 4.1 导数和微分的概念

# 4.1.1 方向导数和偏导数

在《数学分析 I》中我们用导数研究了一元函数在局部的变化率. 我们曾经这样定义函数 $f$ 在 $x _ { 0 }$ 处的导数

$$
\frac {\mathrm {d} f}{\mathrm {d} x} = \lim  _ {t \rightarrow 0} \frac {f (x _ {0} + t) - f (x _ {0})}{t}.
$$

现在希望研究多元函数在局部的变化率. 多元函数和一元函数最大的不同点是一元函数的自变量只能在同一直线的方向上变动, 而多元函数可以在各个方向上变化. 因此我们考虑研究某一个给定方向上的变化率.

# 定义 4.1 (方向导数)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集. 给定一个方向向量 $\pmb { u }$ 和一点 $x _ { 0 }$ . 若存在 $\ell \in \mathbb { R }$ 使得

$$
\lim  _ {t \rightarrow 0} \frac {f (\boldsymbol {x} _ {0} + t \boldsymbol {u}) - f (\boldsymbol {x} _ {0})}{t} = \ell .
$$

则称 $\ell$ 为 $f$ 在点 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 沿着 $\pmb { u }$ 的方向导数 (directional derivative), 记作

$$
\frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}) := \lim  _ {t \rightarrow 0} \frac {f (\boldsymbol {x} _ {0} + t \boldsymbol {u}) - f (\boldsymbol {x} _ {0})}{t}.
$$

注 方向导数 $\pmb { u }$ 的长度是 1.

注定义中要求函数 $f$ 的定义域是一个开集,这样做是为了使得 $\scriptstyle { \mathbf { \mathit { x } } } _ { 0 }$ 加上一个很小的增量 $\pmb { h }$ 后 $\mathbf { \nabla } _ { \boldsymbol { x } _ { 0 } + h }$ 仍在定义域中.

![](images/b1aa42fa0ed610c178f284fe525eb3622c5e0169f9679e95bf2761f3ccdcfbe5.jpg)  
图 4.1: 方向导数示意图

若 $f$ 在 $x _ { 0 }$ 处沿方向 $\pmb { u }$ 的方向导数为 $\ell .$ , 则 $f$ 在 $x _ { 0 }$ 处沿方向 $- { \pmb u }$ 的方向导数为

$$
\lim _ {t \to 0} \frac {f [ \pmb {x} _ {0} + t (- \pmb {u}) ] - f (\pmb {x} _ {0})}{t} = - \lim _ {t \to 0} \frac {f (\pmb {x} _ {0} + (- t) \pmb {u}) - f (\pmb {x} _ {0})}{- t} = - \lim _ {t \to 0} \frac {f (\pmb {x} _ {0} + t \pmb {u}) - f (\pmb {x} _ {0})}{t} = - \ell .
$$

这表明 $f$ 在 $x _ { 0 }$ 处沿着 $\pmb { u }$ 和 $- { \pmb u }$ 的方向导数绝对值相等, 只差一个符号.

令一元函数 $\varphi ( t ) = f ( \pmb { x } _ { 0 } + t \pmb { u } )$ , 则 $\varphi$ 在 $| t |$ 充分小时有定义, 且

$$
\varphi^ {\prime} (0) = \lim  _ {t \rightarrow 0} \frac {\varphi (t) - \varphi (0)}{t} = \lim  _ {t \rightarrow 0} \frac {f \left(\boldsymbol {x} _ {0} + t \boldsymbol {u}\right) - f \left(\boldsymbol {x} _ {0}\right)}{t} = \frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}).
$$

于是方向导数可以转化为一元函数的导数. 下面来看一个例子.

例 4.1 设二元函数

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {2 x y}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 1, & (x, y) = (0, 0) \end{array} \right..
$$

讨论 $f ( x , y )$ 在 $\mathbf { \nabla } \mathbf { x } _ { 0 } = \mathbf { 0 }$ 的方向导数.

解 任一方向向量都可以表示为 $\pmb { u } = ( \cos \theta , \sin \theta )$ , 其中 $\theta \in [ 0 , 2 \pi )$ . 令 $\varphi ( t ) = f ( \pmb { x } _ { 0 } + t \pmb { u } )$ , 则

$$
\varphi (t) = \left\{ \begin{array}{l l} f (\boldsymbol {x} _ {0}) = f (0, 0) = 1, & t = 0 \\ f (\boldsymbol {x} _ {0} + t \boldsymbol {u}) = f (t \cos \theta , t \sin \theta) = \sin 2 \theta , & t \neq 0 \end{array} \right..
$$

若要 $\varphi ( t )$ 在 0 处可导, 则需要 $\varphi ( t )$ 在 0 处连续, 因此

$$
1 = \varphi (0) = \lim  _ {t \rightarrow 0} \varphi (t) = \sin 2 \theta .
$$

故 $\theta = \pi / 4$ 或 $5 \pi / 4$ 此时 $\varphi ( t ) \equiv 1$ . 故 $\varphi ^ { \prime } ( 0 ) = 0$ . 于是可知 $f$ 在 $\mathbf { \delta } _ { \mathbf { \boldsymbol { x } } _ { 0 } } = \mathbf { \delta } \mathbf { \boldsymbol { 0 } }$ 处只有在 $\left( \sqrt { 2 } / 2 , \sqrt { 2 } / 2 \right) , \left( - \sqrt { 2 } / 2 , - \sqrt { 2 } / 2 \right)$ 两个方向上有方向导数, 且方向导数都为零.

特别地, 在 $\mathbb { R } ^ { n }$ 中, 单位坐标向量是最简单的. 因此它们的方向导数也应该是最容易计算的.

# 定义 4.2 (偏导数)

设函数 $f : D \to \mathbb { R } .$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集. 我们称 $f$ 在点 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处沿第 $i$ 个单位坐标向量 $e _ { i }$ 的方向导数为 $f$ 在 $x _ { 0 }$ 处的第 $i$ 个偏导数 (partial derivative), 记作

$$
\frac {\partial f}{\partial x _ {i}} (\pmb {x} _ {0}) \quad \text {或} \quad f _ {x _ {i}} ^ {\prime} (\pmb {x} _ {0}) \quad \text {或} \quad \mathcal {D} _ {x _ {i}} f (\pmb {x} _ {0}).
$$

我们来试着计算 $f$ 在 $\pmb { x } _ { 0 } = \left( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } \right)$ 处的偏导数 $f _ { 1 } ^ { \prime } ( { \pmb x } _ { 0 } )$ . 由定义可知

$$
\frac {\partial f}{\partial x _ {1}} \left(\boldsymbol {x} _ {0}\right) = \lim  _ {t \rightarrow 0} \frac {f \left(\boldsymbol {x} _ {0} + t \boldsymbol {e} _ {1}\right) - f \left(\boldsymbol {x} _ {0}\right)}{t} = \lim  _ {t \rightarrow 0} \frac {f \left(x _ {1} + t , x _ {2} , \cdots , x _ {n}\right) - f \left(x _ {1} , x _ {2} , \cdots , x _ {n}\right)}{t}.
$$

于是引出了偏导数的等价定义.

# 定义 4.3 (偏导数)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集. 取一点 $\pmb { x } _ { 0 } = ( x _ { 1 } , \cdot \cdot \cdot , x _ { n } ) \in D$ . 若以下极限存在且有限:

$$
\lim  _ {t \rightarrow 0} \frac {f (x _ {1} , \cdots , x _ {i} + t , \cdots , x _ {n}) - f (x _ {1} , \cdots , x _ {i} , \cdots , x _ {n})}{t}.
$$

则把极限值称为 $f$ 在点 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处关于 $x _ { i }$ 的偏导数 (partial derivative), 记作

$$
\frac {\partial f}{\partial x _ {i}} (x _ {0}) \quad \text {或} \quad f _ {x _ {i}} ^ {\prime} (x _ {0}) \quad \text {或} \quad \mathcal {D} _ {x _ {i}} f (x _ {0}).
$$

注 以上三种记号是沿袭了一元函数的导数,

<table><tr><td></td><td>Lagrange 记号</td><td>Leibnitz 记号</td><td>Euler 记号</td></tr><tr><td>导数</td><td>f&#x27;</td><td>\(\frac{df}{dx}\)</td><td>\(\mathcal{D}f\)</td></tr><tr><td>偏导数</td><td>f&#x27;_x</td><td>\(\frac{\partial f}{\partial x}\)</td><td>\(\mathcal{D}_xf\)</td></tr></table>

$\frac { \partial f } { \partial x }$ 和 $\mathcal { D } _ { x }$ 称为偏微分算子 (partial differential operator). $\mathcal { D } _ { x _ { i } }$ 也可以记作 $\mathcal { D } _ { 1 }$ , $f _ { x _ { i } } ^ { \prime }$ 也可以记作 $f _ { 1 } ^ { \prime }$ . $\mathcal { D } _ { x }$ 偏微分符号 ??

是微分符号 d 的变体, 由法国数学家 Adrien-Marie Legendre 引入, 但直到普鲁士数学家 Jacobi 重新引入后才得到普遍接受.

以上定义这表明, 计算偏导数本质上和计算一元函数的导数没有区别, 计算 $f _ { i } ^ { \prime } ( { \pmb x } _ { 0 } )$ 时, 只需对 $x _ { i }$ 求导, 而把除了 $x _ { i }$ 以外的变量看作常数. 下面来看几个计算偏导数的例子.

# 例 4.2 设三元函数

$$
f (x, y, z) = x ^ {2} + y + \cos y ^ {2} z.
$$

求 $f ( x , y , z )$ 的三个偏导数.

解 计算得

$$
\frac {\partial f}{\partial x} (x, y, z) = 2 x. \quad \frac {\partial f}{\partial y} (x, y, z) = 1 - 2 y z \sin y ^ {2} z. \quad \frac {\partial f}{\partial z} (x, y, z) = - y ^ {2} \sin y ^ {2} z.
$$

例 4.3 设 $n$ 元函数

$$
f (\boldsymbol {x}) = \| \boldsymbol {x} \|.
$$

求 $f$ 的偏导数.

解 设 $\pmb { x } = ( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } )$ , 则

$$
f (\boldsymbol {x}) = \left(x _ {1} ^ {2} + x _ {2} ^ {2} + \dots + x _ {n} ^ {2}\right) ^ {1 / 2}.
$$

当 $\mathbf { \nabla } _ { \mathbf { \boldsymbol { x } } } \neq \mathbf { \boldsymbol { 0 } }$ 时, $f$ 的第 $i$ 个偏导数为

$$
\frac {\partial f}{\partial x _ {i}} (\boldsymbol {x}) = \frac {1}{2} \left(x _ {1} ^ {2} + x _ {2} ^ {2} + \dots + x _ {n} ^ {2}\right) ^ {- 1 / 2} \cdot 2 x _ {i} = \frac {x _ {i}}{\| \boldsymbol {x} \|}, \quad i = 1, 2, \dots , n.
$$

当 $\mathbf { \nabla } \mathbf { x } = \mathbf { 0 }$ 时, 对于任一方向向量都有

$$
\frac {f (\boldsymbol {x} + t \boldsymbol {u}) - f (\boldsymbol {x})}{t} = \frac {\| t \boldsymbol {u} \|}{t} = \frac {| t |}{t} = \left\{ \begin{array}{l l} 1, & t > 0 \\ - 1, & t <   0 \end{array} \right..
$$

当 $t  0$ 时, 上式极限不存在. 这表明 $f$ 在 $\mathbf { \nabla } \mathbf { x } = \mathbf { 0 }$ 处的任何方向导数都不存在, 从而所有偏导数也都不存在.

注 函数 $f ( \pmb { x } ) = \| \pmb { x } \|$ 的图像是一个顶点在原点的 “圆锥”.

例 4.4 在三角形中由余弦定理可知以下函数关系:

$$
a = \sqrt {b ^ {2} + c ^ {2} - 2 b c \cos A}.
$$

求 $a$ 的所有偏导数.

解 计算可知:

$$
\frac {\partial a}{\partial b} = \frac {2 b - 2 c \cos A}{2 \sqrt {b ^ {2} + c ^ {2}} - 2 b c \cos A} = \frac {b - c \cos A}{a}.
$$

对称地可知

$$
\frac {\partial a}{\partial c} = \frac {c - b \cos A}{a}.
$$

计算可知

$$
\frac {\partial a}{\partial A} = \frac {2 b c \sin A}{2 \sqrt {b ^ {2} + c ^ {2} - 2 b c \cos A}} = \frac {b c \sin A}{a}.
$$

物理中的方程大多数涉及 2 个以上变量, 即使是最简单的均速直线运动方程 $\nu = s / t$ . 在中学时, 我们已经知道可以用“控制变量法”研究多变量之间的依赖关系,事实上这就是偏导数的思想——固定其余变量,使得多元函数变成一个一元函数. 下面就来看一个物理学的例子.

例 4.5 Clapeyron 方程 热力学中有一个很重要的理想气体的 Clapeyron 方程

$$
p V = R T,
$$

其中 $p$ 是理想气体的压强, ?? 是体积, $R$ 是理想气体常数. 方程中的 3 个变量分别可以看作其他 2 个变量的函数.求 $p , V , T$ 的所有偏导数.

解 分别写出三个变量的显示函数表达式:

$$
p = R \frac {T}{V}, \qquad V = R \frac {T}{p}, \qquad T = \frac {1}{R} p V.
$$

计算可知

$$
\frac {\partial p}{\partial T} = \frac {R}{V}, \quad \frac {\partial p}{\partial V} = - \frac {R T}{V ^ {2}}.
$$

$$
\frac {\partial V}{\partial T} = \frac {R}{p}, \quad \frac {\partial V}{\partial p} = - \frac {R T}{p ^ {2}}.
$$

$$
\frac {\partial T}{\partial p} = \frac {V}{R}, \qquad \frac {\partial T}{\partial V} = \frac {p}{R}.
$$

注 由以上计算结果可知

$$
\frac {\partial p}{\partial V} \frac {\partial V}{\partial T} \frac {\partial T}{\partial p} = - \frac {R T}{V ^ {2}} \frac {R}{p} \frac {V}{R} = \frac {R T}{p V} = - 1.
$$

这是热力学中的一个重要规律. 从这个等式可知偏导记号中的 $\frac { \partial p } { \partial V }$ 不能看作 $\partial p$ 和 $\partial V$ 的商.

分段函数的偏导数只能用偏导数的定义来计算.

例 4.6 设函数

$$
f (x, y) = \left\{ \begin{array}{l l} y \ln \left(x ^ {2} + y ^ {2}\right), & (x, y) \neq (0, 0) \\ 1, & (x, y) = (0, 0) \end{array} \right..
$$

求 $f$ 在 $( 0 , 0 )$ 处的两个偏导数.

解 由定义可知

$$
\frac {\partial f}{\partial x} (0, 0) = \lim  _ {t \rightarrow 0} \frac {f (t , 0) - f (0 , 0)}{t} = 0.
$$

由于

$$
\lim  _ {t \rightarrow 0} \frac {f (0 , t) - f (0 , 0)}{t} = \ln t ^ {2} = - \infty .
$$

因此 $f _ { \mathrm { y } } ^ { \prime }$ 不存在.

我们知道, 一元函数在 $x _ { 0 }$ 处可导, 意味着在这一点连续. 但如果多元函数 $f$ 在 $x _ { 0 }$ 处所有的偏导数都存在, 则不意味着 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处连续, 甚至不能推得 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 有极限. 下面看一个例子.

例 4.7 设函数

$$
f (x, y) = \left\{ \begin{array}{l l} 1, & x y \neq 0 \\ 0, & x y = 0 \end{array} \right..
$$

则在 $( 0 , 0 )$ 处 $f _ { x } ^ { \prime }$ 和 $f _ { \mathrm { y } } ^ { \prime }$ 都存在, 但 $f$ 在 $( 0 , 0 )$ 的极限不存在.

解 由定义可知

$$
\frac {\partial f}{\partial x} (0, 0) = \lim  _ {t \rightarrow 0} \frac {f (t , 0) - f (0 , 0)}{t} = 0.
$$

$$
\frac {\partial f}{\partial y} (0, 0) = \lim  _ {t \rightarrow 0} \frac {f (0 , t) - f (0 , 0)}{t} = 0.
$$

取点列

$$
\boldsymbol {a} _ {n} = \left(0, \frac {1}{n}\right)\rightarrow (0, 0), \quad \boldsymbol {b} _ {n} = \left(\frac {1}{n}, \frac {1}{n}\right)\rightarrow (0, 0).
$$

则

$$
f (\boldsymbol {a} _ {n}) \equiv 0, \qquad f (\boldsymbol {b} _ {n}) \equiv 1.
$$

因此 $f$ 在 $( 0 , 0 )$ 处极限不存在.

在偏导数都存在的情况下, 需要满足什么条件可以使得函数连续呢?

# 命题 4.1

设开集 $D$ 上的的二元函数 $f ( x , y )$ . 若两个偏导数 $f _ { x } ^ { \prime } , f _ { y } ^ { \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 的某个邻域内存在且有界, 则 $f$ 在 $( x _ { 0 } , y _ { 0 } )$ 处连续.

证明 令 $\Delta f = f ( x _ { 0 } + \Delta x , y _ { 0 } + \Delta y ) - f ( x _ { 0 } , y _ { 0 } ) ,$ . 由一元函数的 Lagrange 中值定理可知

$$
\begin{array}{l} \Delta f = f \left(x _ {0} + \Delta x, y _ {0} + \Delta y\right) - f \left(x _ {0}, y _ {0} + \Delta y\right) + f \left(x _ {0}, y _ {0} + \Delta y\right) - f \left(x _ {0}, y _ {0}\right) \\ = \frac {\partial f}{\partial x} \left(x _ {0} + \theta_ {1} \Delta x, y _ {0} + \Delta y\right) \Delta x + \frac {\partial f}{\partial y} \left(x _ {0}, y _ {0} + \theta_ {2} \Delta y\right) \Delta y, \\ \end{array}
$$

其中 $\theta _ { 1 } , \theta _ { 2 } \in ( 0 , 1 )$ . 由于 $f _ { x } ^ { \prime } , f _ { y } ^ { \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 的某个邻域内存在且有界, 故

$$
\lim  _ {(\Delta x, \Delta y) \rightarrow (0, 0)} \Delta f = 0.
$$

于是可知 $f$ 在 $( x _ { 0 } , y _ { 0 } )$ 处连续.

对于二元函数, 偏导数有很清楚的几何意义, 如图4.2所示. 设二元函数 $f : D \to \mathbb { R } ,$ , 其中 $D$ 是 $\mathbb { R } ^ { 2 }$ 上的一个区域. 此时 $z = f ( x , y )$ 在 3 维 Euclid 空间 $\mathbb { R } ^ { 3 }$ 中的图像是点集

$$
G (f) = \{(x, y, f (x, y)) \mid (x, y) \in D \}
$$

它是一张曲面, 平行于 $z$ 轴的直线至多与该曲面有一个交点. 任取一点 $( x _ { 0 } , y _ { 0 } ) \in D$ , 令 $z _ { 0 } = f ( x _ { 0 } , y _ { 0 } )$ . 现假设 $f$ 在$( x _ { 0 } , y _ { 0 } )$ 处的两个偏导数都存在.

先来看 $f _ { \mathrm { y } } ^ { \prime } ( x _ { 0 } , y _ { 0 } )$ 几何意义. 作平面 $y = y _ { 0 }$ 与曲面 $z = f ( x , y )$ 的交线:

$$
\Gamma_ {1}: \left\{ \begin{array}{l} z = f (x, y) \\ y = y _ {0} \end{array} \right.
$$

它是一条平面曲线. 过点 $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 可以作一条 $\Gamma _ { 1 }$ 的切线, 切线的方向就是 $( 1 , 0 , f _ { \mathrm { y } } ^ { \prime } ( x _ { 0 } , y _ { 0 } ) )$ , 切线的方程就是

$$
\frac {x - x _ {0}}{1} = \frac {y - y _ {0}}{0} = \frac {z - z _ {0}}{f _ {y} ^ {\prime} (x _ {0} , y _ {0})}.
$$

如果投影到 $x z O$ 平面上看, 这条直线就是

$$
\frac {x - x _ {0}}{1} = \frac {z - z _ {0}}{f _ {y} ^ {\prime} (x _ {0} , y _ {0})} \iff z = f _ {y} ^ {\prime} (x _ {0}, y _ {0}) (x - x _ {0}) + z _ {0}.
$$

此时偏导数 $f _ { \mathrm { y } } ^ { \prime } ( x _ { 0 } , y _ { 0 } )$ 就是该直线的斜率.

另一个偏导数 $f _ { x } ^ { \prime } ( x _ { 0 } , y _ { 0 } )$ 的几何意义也是类似的. 作平面 $x = x _ { 0 }$ 与曲面 $z = f ( x , y )$ 的交线:

$$
\Gamma_ {2}: \left\{ \begin{array}{l} z = f (x, y) \\ x = x _ {0} \end{array} \right.
$$

过点 $( x _ { 0 } , y _ { 0 } , f ( x _ { 0 } , y _ { 0 } ) )$ 可以作一条 $\Gamma _ { 2 }$ 的切线, 切线的方向就是 $( 0 , 1 , f _ { x } ^ { \prime } ( x _ { 0 } , y _ { 0 } ) )$ , 切线方程就是

$$
\frac {x - x _ {0}}{0} = \frac {y - y _ {0}}{1} = \frac {z - z _ {0}}{f _ {x} ^ {\prime} (x _ {0} , y _ {0})}.
$$

如果投影到 $y z O$ 平面上看, 这条直线就是

$$
\frac {y - y _ {0}}{1} = \frac {z - z _ {0}}{f _ {x} ^ {\prime} (x _ {0} , y _ {0})} \Longleftrightarrow z = f _ {x} ^ {\prime} (x _ {0}, y _ {0}) (y - y _ {0}) + z _ {0}.
$$

此时偏导数 $f _ { x } ^ { \prime } ( x _ { 0 } , y _ { 0 } )$ 就是该直线的斜率.

![](images/ded0a9b639a95afb4a85aa3a9ce780305576a390f205dc4c47fb47a35af31797.jpg)

![](images/3982572de1a468085698b486eeae19fa5053c23e96e0a0bc2bf979934a4ab4e0.jpg)  
图 4.2: 偏导数的几何意义

# 4.1.2 多元函数的全微分

现在来回忆一下一元函数微分的概念. 设函数 $y = f ( x )$ , 取一点 $x _ { 0 }$ , 令 $y _ { 0 } = f ( x _ { 0 } )$ . 若自变量在 $x _ { 0 }$ 处有一个增量 $\Delta x$ , 则函数值 $y _ { 0 }$ 也会产生一个增量 $\Delta y$ , 因此 $\Delta y$ 是 $\Delta x$ 的函数. 如果直接计算 $\Delta y$ 可能是十分复杂的:

$$
\Delta y = f (x _ {0} + \Delta x) - f (x _ {0}).
$$

于是我们考虑当增量 $\Delta x$ 非常小的时候, 能不能把增量 $\Delta y$ 近似地看作 $\Delta x$ 的线性映射, 即是否存在 $\lambda \in \mathbb { R }$ 使得

$$
\Delta y \approx \lambda \Delta x.
$$

更准确地说就是, 能不能找到 $\lambda \in \mathbb { R }$ 使得

$$
\Delta y = \lambda \Delta x + o (\Delta x), \quad \Delta x \rightarrow 0. \tag {4.1}
$$

如果存在这样的 $\lambda$ , 就说函数 $f$ 在 $x _ { 0 }$ 处可微, 线性映射 $\lambda \Delta x$ 就称为 $f$ 在 $x _ { 0 }$ 处的微分, 记作 $\mathrm { d } y = \lambda \Delta x .$ . 我们还知道如果函数 $f$ 在 $x _ { 0 }$ 处可微当且仅当它在 $x _ { 0 }$ 处可导, 且微分的系数恰好就是 $f ^ { \prime } ( x _ { 0 } )$ . 另一方面, 可以把 $x$ 看作正比例函数 $f ( x ) = x$ , 显然它在任一点都可微, 且 $\mathrm { d } x = \Delta x$ . 于是我们可以把 $\Delta x$ 都记作 $\mathrm { d } x .$ . 于是就有

$$
\mathrm {d} y = f ^ {\prime} \left(x _ {0}\right) \mathrm {d} x.
$$

下面希望把微分的概念推广到多元函数中. 设二元函数 $z = f ( x , y )$ . 取一点 $( x _ { 0 } , y _ { 0 } )$ , 令 $z _ { 0 } = f ( x _ { 0 } , z _ { 0 } )$ . 若自变量在 $( x _ { 0 } , y _ { 0 } )$ 处有一个增量 $( \Delta x , \Delta y )$ , 注意函数的两个自变量同时发生了改变, 这和偏导数中的增量不同, 我们称这样的增量为全增量.于是函数值 $z _ { 0 }$ 也会产生一个增量 $\Delta z$ ,因此 $\Delta z$ 是 $( \Delta x , \Delta y )$ 的函数.如果直接计算 $\Delta y$ 可能是十分复杂的:

$$
\Delta z = f (x _ {0} + \Delta x, y _ {0} + \Delta y) - f (x _ {0}, y _ {0}).
$$

于是我们考虑当增量 $( \Delta x , \Delta y ) \to ( 0 , 0 )$ 时, 把增量 $\Delta z$ 近似地看作 $( \Delta x , \Delta y )$ 的线性映射. 这里和一元函数不同, 这里的线性映射是一个 $\mathbb { R } ^ { 2 } \to \mathbb { R }$ 的映射, 因此线性映射的 “系数” 不再是一个实数, 而是一个 $1 \times 2$ 的矩阵:

$$
\Delta z \approx [ \lambda_ {1}, \lambda_ {2} ] \left[ \begin{array}{c} \Delta x \\ \Delta y \end{array} \right].
$$

我们希望仿照一元函数的微分定义式, 把上式写成无穷小增量公式. 这里的问题是等式4.1中的 $o ( \Delta x )$ 应该变成什么. 注意到此时的极限过程是 $( \Delta x , \Delta y )  ( 0 , 0 )$ , 即两个偏增量同时趋于无穷小, 由于

$$
(\Delta x, \Delta y) \rightarrow (0, 0) \iff \sqrt {\Delta x ^ {2} + \Delta y ^ {2}} \rightarrow 0
$$

因此我们可以考虑用 $o \left( \sqrt { \Delta x ^ { 2 } + \Delta y ^ { 2 } } \right)$ 代替等式4.1中的 $o ( \Delta x )$ . 于是就有

$$
\Delta z = [ \lambda_ {1}, \lambda_ {2} ] \left[ \begin{array}{c} \Delta x \\ \Delta y \end{array} \right] + o \left(\sqrt {\Delta x ^ {2} + \Delta y ^ {2}}\right), \quad (\Delta x, \Delta y) \to (0, 0).
$$

至此我们已经成功地把一元函数的微分推广到了多元函数.

# 定义 4.4 (多元函数的全微分)

设函数 $f : D \to \mathbb { R } .$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集. 给定 $\pmb { x } _ { 0 } \in D$ . 若存在 $\lambda = \left( \lambda _ { 1 } , \lambda _ { 2 } , \cdots , \lambda _ { n } \right)$ 使得

$$
f \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - f \left(\boldsymbol {x} _ {0}\right) = \lambda \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0,
$$

其中 $\pmb { h } = ( h _ { 1 } , h _ { 2 } , \cdots , h _ { n } ) ^ { T }$ 是全增量, 则称函数 $f$ 在点 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微 (differentiable). 并称关于 $\pmb { h }$ 的线性映射 ????为 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处的全微分 (total differential), 简称微分. 记作

$$
\mathrm {d} f \left(\boldsymbol {x} _ {0}\right) = \lambda \boldsymbol {h}.
$$

若 $f$ 在 $D$ 上的每一点都可微, 则称 $f$ 是 $D$ 上的一个可微函数 (differentiable function).

下面我们先来确定上述定义中的线性映射 $\lambda h$ 的系数??.令 $y = f ( { \pmb x } )$ .为了简化问题,不妨令 $\pmb { h } = ( 0 , \cdots , h _ { i } , \cdots , 0 )$ .这时

$$
f \left(x _ {1}, \dots , x _ {i} + h _ {i}, \dots , x _ {n}\right) - f \left(x _ {1}, \dots , x _ {i}, \dots , x _ {n}\right) = \lambda_ {i} h _ {i} + o \left(\left| h _ {i} \right|\right).
$$

于是

$$
\frac {\partial y}{\partial x _ {i}} = \lim  _ {h _ {i} \rightarrow 0} \frac {f (x _ {1} , \cdots , x _ {i} + h _ {i} , \cdots , x _ {n}) - f (x _ {1} , \cdots , x _ {i} , \cdots , x _ {n})}{h _ {i}} = \lambda_ {i}, \quad i = 1, 2, \dots , n.
$$

于是我们就完全确定了全微分的系数 ??,它的第 $i$ 个分量 $\lambda _ { i }$ 恰好是 $f$ 在 $x _ { 0 }$ 处的第 $i$ 个偏导数 $y _ { i } ^ { \prime }$ .于是我们可以把$f$ 在 $\scriptstyle x _ { 0 }$ 的全微分写成

$$
\mathrm {d} y = \left[ \frac {\partial y}{\partial x _ {1}}, \frac {\partial y}{\partial x _ {2}}, \dots , \frac {\partial y}{\partial x _ {n}} \right] \left[ \begin{array}{c} h _ {1} \\ h _ {2} \\ \vdots \\ h _ {n} \end{array} \right].
$$

设投影

$$
f _ {i} \left(x _ {1}, x _ {2}, \dots , x _ {n}\right) = x _ {i}, \quad i = 1, 2, \dots , n.
$$

则

$$
\mathrm {d} x _ {i} = \mathrm {d} f _ {i} = \frac {\partial f}{\partial x _ {1}} h _ {1} + \dots + \frac {\partial f}{\partial x _ {i}} h _ {i} + \dots + \frac {\partial x _ {i}}{\partial x _ {n}} h _ {n} = h _ {i}, \quad i = 1, 2, \dots , n.
$$

因此我们可以把 $h _ { 1 }$ 看作是自变量 $x _ { i }$ 的微分 ${ \mathrm { d } } x _ { i }$ . 于是全微分可以表示为

$$
\mathrm {d} y = \left[ \begin{array}{c} \frac {\partial y}{\partial x _ {1}}, \frac {\partial y}{\partial x _ {2}}, \dots , \frac {\partial y}{\partial x _ {n}} \end{array} \right] \left[ \begin{array}{c} \mathrm {d} x _ {1} \\ \mathrm {d} x _ {2} \\ \vdots \\ \mathrm {d} x _ {n} \end{array} \right].
$$

为了简洁, 我们可以令

$$
\nabla y := \left[ \frac {\partial y}{\partial x _ {1}}, \frac {\partial y}{\partial x _ {2}}, \dots , \frac {\partial y}{\partial x _ {n}} \right],
$$

或

$$
\boldsymbol {j} y := \left[ \frac {\partial y}{\partial x _ {1}}, \frac {\partial y}{\partial x _ {2}}, \dots , \frac {\partial y}{\partial x _ {n}} \right],
$$

于是

$$
\mathrm {d} y = \nabla y h.
$$

我们把

$$
\frac {\partial y}{\partial x _ {1}} \mathrm {d} x _ {i}, \quad i = 1, 2, \dots , n
$$

称为函数 $f$ 关于 $x _ { i }$ 的偏微分 (partial differential), 记作 ${ \mathrm { d } } _ { i } y$ $\mathrm { d } _ { i } y ( i = 1 , 2 , \cdots , n )$ . 如此一来偏导数也可以表示成两个微分的商:

$$
{\frac {\partial y}{\partial x _ {1}}} = {\frac {\mathrm {d} _ {i} y}{\mathrm {d} x _ {i}}}.
$$

现在我们来总结一下以上讨论的内容.

# 定理 4.1

设函数 $y = f ( { \pmb x } )$ 在 $x _ { 0 }$ 处可微. 则它在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 的全微分等于每个变量偏微分的线性组合, 其中系数分别为各个变量在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处的偏导数, 即

$$
\mathrm {d} y = \sum_ {i = 1} ^ {n} \mathrm {d} _ {i} y = \sum_ {i = 1} ^ {n} \frac {\partial y}{\partial x _ {i}}   \mathrm {d} x _ {i} = \left[ \frac {\partial y}{\partial x _ {1}}, \frac {\partial y}{\partial x _ {2}}, \dots , \frac {\partial y}{\partial x _ {n}} \right] \left[ \begin{array}{c} \mathrm {d} x _ {1} \\ \mathrm {d} x _ {2} \\ \vdots \\ \mathrm {d} x _ {n} \end{array} \right] = \nabla y \boldsymbol {h}.
$$

有时候函数可微也可以用另一种形式定义.

# 定理 4.2

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集. 给定 $\pmb { x } _ { 0 } \in D$ . 则函数 $f$ 在 $x _ { 0 }$ 可微当且仅当

$$
f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {h} + \sum_ {i = 1} ^ {n} \varepsilon_ {i} (\boldsymbol {h}) h _ {i}.
$$

当 $\| \pmb { h } \|  0$ 时, $\varepsilon _ { i } ( \pmb { h } )  0 ( i = 1 , 2 , \cdots )$ $\varepsilon _ { i } ( \pmb { h } )  0$ .

证明 (i) 证明充分性. 由于 $\varepsilon _ { i } ( \pmb { h } )  0 ( i = 1 , 2 , \cdots )$ , 故

$$
\left| \frac {1}{\| \boldsymbol {h} \|} \sum_ {i = 1} ^ {n} \varepsilon_ {i} (\boldsymbol {h}) h _ {i} \right| = \left| \sum_ {i = 1} ^ {n} \varepsilon_ {i} (\boldsymbol {h}) \frac {h _ {i}}{\| \boldsymbol {h} \|} \right| \leq \sum_ {i = 1} ^ {n} \left| \varepsilon_ {i} (\boldsymbol {h}) \frac {h _ {i}}{\| \boldsymbol {h} \|} \right| \leq \sum_ {i = 1} ^ {n} | \varepsilon_ {i} (\boldsymbol {h}) | \to 0, \quad \| \boldsymbol {h} \| \to 0.
$$

这表明 $\begin{array} { r } { \sum _ { i = 1 } ^ { n } \varepsilon _ { i } ( { \pmb h } ) h _ { i } = o ( \| { \pmb h } \| ) } \end{array}$ . 于是可知 $f$ 在 $x _ { 0 }$ 可微.

(ii) 证明必要性. 设 $f$ 在 $x _ { 0 }$ 可微, 则

$$
f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0,
$$

令

$$
r (\boldsymbol {h}) = f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) - \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {h}.
$$

则当 $\| h \| \to 0$ 时, $r ( h ) = o ( \left\| h \right\| )$ . 由于

$$
r (\boldsymbol {h}) = r (\boldsymbol {h}) \sum_ {i = 1} ^ {n} \frac {h _ {i} ^ {2}}{\| \boldsymbol {h} \| ^ {2}} = \frac {r (\boldsymbol {h})}{\| \boldsymbol {h} \|} \sum_ {i = 1} ^ {n} \frac {h _ {i}}{\| \boldsymbol {h} \|} h _ {i}.
$$

因此可令

$$
\varepsilon_ {i} (\boldsymbol {h}) = \frac {r (\boldsymbol {h})}{\| \boldsymbol {h} \|} \cdot \frac {h _ {i}}{\| \boldsymbol {h} \|}.
$$

由于

$$
\left| \frac {h _ {i}}{\| \boldsymbol {h} \|} \right| \leq 1, \quad i = 1, 2, \dots , n.
$$

因此 $\varepsilon _ { i } ( h ) \to 0$ $\varepsilon _ { i } ( \pmb { h } )  0 ( i = 1 , 2 , \cdots )$ . 且满足

$$
f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {h} + \sum_ {i = 1} ^ {n} \varepsilon_ {i} (\boldsymbol {h}) h _ {i}.
$$

利用全微分和偏导数的关系, 可以巧妙地解决一些偏导数的计算问题.

例 4.8 设 Vandermonde 行列式

$$
u = \left| \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ x _ {1} & x _ {2} & \dots & x _ {n} \\ x _ {1} ^ {2} & x _ {2} ^ {2} & \dots & x _ {n} ^ {2} \\ \vdots & \vdots & & \vdots \\ x _ {1} ^ {n - 1} & x _ {2} ^ {n - 1} & \dots & x _ {n} ^ {n - 1} \end{array} \right|.
$$

则

(1) $\sum _ { i = 1 } ^ { n } { \frac { \partial u } { \partial x _ { i } } } = 0 ,$

(2) $\sum _ { i = 1 } ^ { n } x _ { i } { \frac { \partial u } { \partial x _ { i } } } = { \frac { n ( n - 1 ) } { 2 } } u .$

解 $u$ 是一个多项式函数, 显然可微, 故

$$
u \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - u \left(\boldsymbol {x} _ {0}\right) = \left(\frac {\partial y}{\partial x _ {1}}, \frac {\partial y}{\partial x _ {2}}, \dots , \frac {\partial y}{\partial x _ {n}}\right) \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0,
$$

其中 $\pmb { h } = ( h _ { 1 } , h _ { 2 } , \cdots , h _ { n } ) ^ { T }$ .

(1) 令 $h _ { 1 } = h _ { 2 } = \cdot \cdot \cdot = h _ { n } = h .$ . 由于

$$
u = \prod_ {1 \leq i <   j \leq n} \left(x _ {j} - x _ {i}\right).
$$

故

$$
u \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - u \left(\boldsymbol {x} _ {0}\right) = \prod_ {1 \leq i <   j \leq n} \left[ \left(x _ {j} + h\right) - \left(x _ {i} + h\right) \right] - \prod_ {1 \leq i <   j \leq n} \left(x _ {j} - x _ {i}\right) = 0.
$$

于是

$$
0 = h \sum_ {i = 1} ^ {n} \frac {\partial u}{\partial x _ {i}} + o (h), \quad h \rightarrow 0,
$$

这表明

$$
\sum_ {i = 1} ^ {n} \frac {\partial u}{\partial x _ {i}} = 0.
$$

(2) 令 $h _ { i } = x _ { i } h$ $( i = 1 , 2 , \cdots , n )$ , 则

$$
u \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - u \left(\boldsymbol {x} _ {0}\right) = \prod_ {1 \leq i <   j \leq n} \left[ \left(x _ {j} + x _ {j} h\right) - \left(x _ {i} + x _ {i} h\right) \right] - \prod_ {1 \leq i <   j \leq n} \left(x _ {j} - x _ {i}\right) = \left[ (h + 1) ^ {\mathrm {C} _ {n} ^ {2}} - 1 \right] u.
$$

于是

$$
\left[ (h + 1) ^ {\mathrm {C} _ {n} ^ {2}} - 1 \right] u = h \sum_ {i = 1} ^ {n} x _ {i} \frac {\partial u}{\partial x _ {i}} + o (h), \quad h \to 0,
$$

于是可知

$$
\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial u}{\partial x _ {i}} = \lim  _ {h \rightarrow 0} \frac {\left[ (h + 1) ^ {\mathrm {C} _ {n} ^ {2}} - 1 \right] u}{h} = \mathrm {C} _ {n} ^ {2} u = \frac {n (n - 1)}{2} u.
$$

我们知道任何一个方向向量都可以用基向量线性表出, 而基向量的方向导数就是偏导数. 因此很自然地想法是: 方向导数能不能用偏导数线性表出? 如果函数可微, 则这个想法是可以实现的.

# 定理 4.3 (方向导数的分解)

设函数 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微, 则 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处沿任一方向 $\pmb { u }$ 的方向导数为

$$
\frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}) = \left[ \frac {\partial f}{\partial x _ {1}} (\boldsymbol {x} _ {0}), \frac {\partial f}{\partial x _ {2}} (\boldsymbol {x} _ {0}), \dots , \frac {\partial f}{\partial x _ {n}} (\boldsymbol {x} _ {0}) \right] \left[ \begin{array}{c} u _ {1} \\ u _ {2} \\ \vdots \\ u _ {n} \end{array} \right] = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {u}. \tag {4.2}
$$

证明 由于 $f$ 在 $x _ { 0 }$ 处可微, 故

$$
f (\boldsymbol {x} _ {0} + t \boldsymbol {u}) - f (\boldsymbol {x} _ {0}) = \nabla f (\boldsymbol {x} _ {0}) t \boldsymbol {u} + o (t).
$$

于是可知

$$
\frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}) = \lim  _ {t \rightarrow 0} \frac {f (\boldsymbol {x} _ {0} + t \boldsymbol {u}) - f (\boldsymbol {x} _ {0})}{t} = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {u}.
$$

注 对于二元函数, 方向向量通常写成 (cos ??,sin ??), 而三元函数的方向通常可以用方向余弦 $( \cos \alpha , \cos \beta , \cos \gamma ,$ ) 表示, 其中 $\alpha , \beta , \gamma$ 分别是这一方向与 $x , y , z$ 轴的夹角.

再次考察一下公式4.2. 设向量 $\nabla f ( \mathbf { x } _ { 0 } )$ 和 $\pmb { u }$ 的夹角为 $\theta$ , 则

$$
\frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}) = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {u} = | \nabla f (\boldsymbol {x} _ {0}) | \cos \theta .
$$

因此当 $\cos \theta = 1$ , 即 $\theta = 0$ 时方向导数取到最大值. 这表明函数 $f$ 沿着向量 $\nabla f (  { \mathbf { x } } _ { 0 } )$ 的方向导数是最大的, 换句话说函数 $f$ 沿着 $\nabla f (  { \boldsymbol { { x } } } _ { 0 } )$ 方向的增速最快. 因此向量 $\nabla f (  { \boldsymbol { { x } } } _ { 0 } )$ 就有了明确的几何意义, 我们称它为梯度 (gradient), 因此 $\nabla f (  { \boldsymbol { { x } } } _ { 0 } )$ 也可以记作 grad $f (  { \boldsymbol { { x } } } _ { 0 } )$ .

我们来看一个例子. 我们分别用定义和以上公式求函数的一个方向导数.

例 4.9 设函数

$$
f (x, y) = (x - 1) ^ {2} - y ^ {2}
$$

求 $f$ 在 $\pmb { x } _ { 0 } = ( 0 , 1 )$ 处沿方向 ${ \pmb u } = ( 3 / 5 , - 4 / 5 )$ 的方向导数.

解 解法一 令

$$
\varphi (t) = f \left(\boldsymbol {x} _ {0} + t \boldsymbol {u}\right) = f \left(\frac {3 t}{5}, 1 - \frac {4 t}{5}\right) = \left(\frac {3 t}{5} - 1\right) ^ {2} - \left(1 - \frac {4 t}{5}\right) ^ {2} = - \frac {7}{2 5} t ^ {2} + \frac {2}{5} t.
$$

于是

$$
\frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}) = \varphi^ {\prime} (0) = \frac {2}{5}.
$$

解法二 函数 $f$ 在 $x _ { 0 }$ 的两个偏导数为

$$
\left. \frac {\partial f}{\partial x} \left(\boldsymbol {x} _ {0}\right) = 2 (x - 1) \right| _ {(0, 1)} = - 2, \quad \left. \frac {\partial f}{\partial y} \left(\boldsymbol {x} _ {0}\right) = - 2 y \right| _ {(0, 1)} = - 2.
$$

于是可知 $f$ 在 $\pmb { x } _ { 0 } = ( 0 , 1 )$ 处沿方向 ${ \pmb u } = ( 3 / 5 , - 4 / 5 )$ 的方向导数为

$$
\frac {\partial f}{\partial \boldsymbol {u}} (\boldsymbol {x} _ {0}) = \frac {\partial f}{\partial x} (\boldsymbol {x} _ {0}) u _ {1} + \frac {\partial f}{\partial x} (\boldsymbol {x} _ {0}) u _ {2} = \frac {2}{5}.
$$

很多问题用方向导数的偏导数分解公式可以顺利解决. 下面看一个例子.

例 4.10 设函数 $f ( x , y , z )$ 在 $\mathbb { R } ^ { 3 }$ 上可微. 若 $u , \nu , w$ 是三个互相垂直的方向向量. 则

$$
\left(\frac {\partial f}{\partial \boldsymbol {u}}\right) ^ {2} + \left(\frac {\partial f}{\partial \boldsymbol {v}}\right) ^ {2} + \left(\frac {\partial f}{\partial \boldsymbol {w}}\right) ^ {2} = \left(\frac {\partial f}{\partial x}\right) ^ {2} + \left(\frac {\partial f}{\partial y}\right) ^ {2} + \left(\frac {\partial f}{\partial z}\right) ^ {2}.
$$

证明 设 $\pmb { u } = [ u _ { 1 } , u _ { 2 } , u _ { 3 } ] ^ { T } , \pmb { \nu } = [ \nu _ { 1 } , \nu _ { 2 } , \nu _ { 3 } ] ^ { T } , \pmb { w } = [ w _ { 1 } , w _ { 2 } , w _ { 3 } ] ^ { T } .$ $\pmb { u } = [ u _ { 1 } , u _ { 2 } , u _ { 3 } ] ^ { T }$ . 令 $\pmb { A } = [ \pmb { u } , \pmb { \nu } , \pmb { w } ]$ 则

$$
\left[ \frac {\partial f}{\partial \boldsymbol {u}}, \frac {\partial f}{\partial \boldsymbol {v}}, \frac {\partial f}{\partial \boldsymbol {w}} \right] = \left[ \frac {\partial f}{\partial x}, \frac {\partial f}{\partial y}, \frac {\partial f}{\partial z} \right] \left[ \begin{array}{c c c} u _ {1} & v _ {1} & w _ {1} \\ u _ {2} & v _ {2} & w _ {2} \\ u _ {3} & v _ {3} & w _ {3} \end{array} \right] = \nabla f \boldsymbol {A}.
$$

于是

$$
\left(\frac {\partial f}{\partial \boldsymbol {u}}\right) ^ {2} + \left(\frac {\partial f}{\partial \boldsymbol {v}}\right) ^ {2} + \left(\frac {\partial f}{\partial \boldsymbol {w}}\right) ^ {2} = \nabla f \boldsymbol {A} (\nabla f \boldsymbol {A}) ^ {T} = \nabla f \boldsymbol {A} \boldsymbol {A} ^ {T} \nabla f \boldsymbol {A} ^ {T} = \nabla f (\nabla f) ^ {T} = \left(\frac {\partial f}{\partial x}\right) ^ {2} + \left(\frac {\partial f}{\partial y}\right) ^ {2} + \left(\frac {\partial f}{\partial z}\right) ^ {2}.
$$

我们已经知道, 偏导数是只让一个变量发生改变, 其余变量全部固定. 而全微分是允许所有变量全部发生改变. 现在我们来研究一种中间状态: 让其中一部分变量变得, 固定其余变量. 设开集 $D$ 上的一个 $n + p$ 元函数. 为了简洁, 我们把 $\mathbb { R } ^ { n + p }$ 看作 $\mathbb { R } ^ { n } \times \mathbb { R } ^ { p }$ :

$$
f: D \to \mathbb {R} ^ {n}
$$

$$
(x, y) \mapsto f (x, y),
$$

其中 $\pmb { x } = \left( x _ { 1 } , \cdots , x _ { n } \right)$ , $\boldsymbol { y } = ( y _ { 1 } , \cdots , y _ { p } )$ . 模仿偏导数和全微分的定义, 可以定义只有 $\boldsymbol { x }$ 变化或只有 $\textbf {  { y } }$ 变化时的 “可微性”.

# 定义 4.5 (偏微分)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D$ 是 $\mathbb { R } ^ { n } \times \mathbb { R } ^ { p }$ 上的一个开集. 给定 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ . 若存在 $\lambda = \left( \lambda _ { 1 } , \lambda _ { 2 } , \cdots , \lambda _ { n } \right)$ 使得

$$
f \left(\boldsymbol {x} _ {0} + \boldsymbol {h}, \boldsymbol {y} _ {0}\right) - f \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) = \lambda_ {\boldsymbol {x}} \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0,
$$

其中 $\pmb { h } = ( h _ { 1 } , h _ { 2 } , \cdots , h _ { n } ) ^ { T }$ 是 $\boldsymbol { x }$ 的增量, 则称函数 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处对 $\boldsymbol { x }$ 可微 (differentiable). 并称关于 $\pmb { h }$ 的线性映射 $\lambda _ { x } h$ 为 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处对 $\boldsymbol { x }$ 的偏微分 (partial differential), 记作

$$
\mathrm {d} _ {x} f \left(x _ {0}, y _ {0}\right) = \lambda_ {x} h.
$$

以上定义中的 $n = 1$ 时, $\lambda _ { x }$ 就是 $x$ 的偏导数:

$$
f (x _ {0} + h, \mathbf {y} _ {0}) - f (x _ {0}, \mathbf {y} _ {0}) = \frac {\partial f}{\partial x} (x, \mathbf {y} _ {0}) h + o (h), \quad h \to 0,
$$

当 $p = 0$ 时, 偏微分就成了全微分. 因此不难猜到知道一下结论.

# 定理 4.4

设函数 $n + p$ 元函数 $f ( { \pmb x } , { \pmb y } )$ 在 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ 处对 $\boldsymbol { x }$ 可微, 则它在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处对于 $\boldsymbol { x }$ 的偏微分等于 $\boldsymbol { x }$ 的每个变量偏微分的线性组合, 其中系数分别为各个变量在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处的偏导数, 即

$$
\mathrm {d} _ {\boldsymbol {x}} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \sum_ {i = 1} ^ {n} \mathrm {d} _ {x _ {i}}   y = \sum_ {i = 1} ^ {n} \frac {\partial f}{\partial x _ {i}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0})   \mathrm {d} x _ {i} = \left[ \frac {\partial f}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}), \frac {\partial f}{\partial x _ {2}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}), \dots , \frac {\partial f}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \right] \left[ \begin{array}{c} \mathrm {d}   x _ {1} \\ \mathrm {d}   x _ {2} \\ \vdots \\ \mathrm {d}   x _ {n} \end{array} \right].
$$

为了记号简洁, 可以令

$$
\boldsymbol {J} _ {\boldsymbol {x}} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \frac {\partial f}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}), \dots , \frac {\partial f}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \right], \quad \boldsymbol {J} _ {\boldsymbol {y}} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \frac {\partial f}{\partial y _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}), \dots , \frac {\partial f}{\partial y _ {p}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \right].
$$

不难看出, 若 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 可微, 则

$$
\boldsymbol {J} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = [ \boldsymbol {J} _ {\boldsymbol {x}} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}), \boldsymbol {J} _ {\boldsymbol {y}} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) ].
$$

反之, 若向量值函数 $J _ { x } f$ 和 $J _ { y } f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处连续, 则 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处可微.

# 4.1.3 全微分的几何意义

下面来讨论微分的几何意义. 还是先来回顾一元函数微分的几何意义. 设函数 $y = f ( x )$ , 它的图像是一条平面曲线. 若 $f$ 在 $x _ { 0 }$ 处可微, 就可以在 $x _ { 0 }$ 处作一条切线

$$
\ell : y = f ^ {\prime} (x _ {0}) (x - x _ {0}) + y _ {0}.
$$

现在在 $x _ { 0 }$ 附近给一个增量 $\Delta x$ , 则 $f ( x )$ 也会产生一个增量, 这个增量是函数 $f$ 在 $x _ { 0 }$ 处的差分:

$$
\Delta y = f (x _ {0} + \Delta x) - f (x _ {0}).
$$

而且切线 $\ell$ 也同样会有一个增量, 这个增量就是函数 $f$ 在 $x _ { 0 }$ 处的微分:

$$
\mathrm {d} y = f ^ {\prime} \left(x _ {0}\right) \Delta x.
$$

由于

$$
\lim  _ {\Delta x \to 0} \frac {\Delta y}{\Delta x} = f ^ {\prime} (x _ {0}).
$$

故

$$
\Delta y - \mathrm {d} y = \Delta y - f ^ {\prime} (x _ {0}) \Delta x = o (\Delta x), \quad \Delta x \rightarrow 0.
$$

这表明当 $\Delta x$ 很小时, 差分和微分的误差是 $\Delta x$ 的一个高阶无穷小. 因此当 $\Delta x$ 很小时, 微分可以作为差分的近似.这就是一元微分的几何意义. 根据以上讨论, 我们可以用新的方法来定义切线.

![](images/557044b82f1fe3dae6116386405a29b2d57d27196cfec0f5b6cf58f9bee03fc3.jpg)  
图 4.3: 微分和差分的几何意义.

# 定义 4.6 (切线)

设曲线 $\Gamma : y = f ( x )$ , 取 $\Gamma$ 上一点 $M _ { 0 } ( x _ { 0 } , y _ { 0 } )$ . 过 $M _ { 0 }$ 作直线 $L : y = \ell ( x )$ . 任取 $\Gamma$ 上一点 $M ( x , y )$ . 若

$$
f (x) - \ell (x) = o (x - x _ {0}), \quad x \to x _ {0}.
$$

则称直线 $L$ 是曲线 $\Gamma$ 在 $x _ { 0 }$ 处的切线 (tangent line).

在以上定义下, 不难证明曲线 $y = f ( x )$ 在 $x _ { 0 }$ 处存在切线当且仅当函数 $f$ 在 $x _ { 0 }$ 处可微, 且切线方程的法向量是

$$
\boldsymbol {n} = \left(\frac {\mathrm {d} f}{\mathrm {d} x} (x _ {0}), - 1\right).
$$

从而切线方程是

$$
\frac {\mathrm {d} f}{\mathrm {d} x} (x _ {0}) (x - x _ {0}) - (y - y _ {0}) = 0.
$$

上述切线定义的好处是可以推广到三维空间, 这样就可以讨论二元函数微分的几何意义.

# 定义 4.7 (切面)

在 $\mathbb { R } ^ { 3 }$ 中设曲面 $S : z = f ( x , y )$ , 取 $s$ 上一点 $M _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ . 过 $M _ { 0 }$ 作平面 $\pi : z = p ( x , y )$ . 任取 Γ 上一点$M ( x , y , z )$ . 若

$$
f (x, y) - p (x, y) = o \left(\sqrt {\Delta x ^ {2} + \Delta y ^ {2}}\right), \quad (x, y) \rightarrow (x _ {0}, y _ {0}).
$$

其中 $\Delta x = x - x _ { 0 }$ , $\Delta y = y - y _ { 0 }$ , 则称平面 $\pi$ 是曲面 $s$ 在 $( x _ { 0 } , y _ { 0 } )$ 处的切面 (tangent surface).

类比一元函数的情况, 我们有理由猜测以下结论.

![](images/00e9360974d471dd82fd81ad6de01cb0350185e69000c06e288d4c25032757b2.jpg)  
图 4.4: 二元函数全微分的几何意义.

# 定理 4.5 (二元函数全微分的几何意义)

曲面 $S : z = f ( x , y )$ 在 $( x _ { 0 } , y _ { 0 } )$ 处存在切面当且仅当二元函数 $f ( x , y )$ 在 $( x _ { 0 } , y _ { 0 } )$ 处可微, 且切面方程的法向量是

$$
\boldsymbol {n} = \left(\frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right), \frac {\partial f}{\partial y} \left(x _ {0}, y _ {0}\right), - 1\right).
$$

从而 $S : z = f ( x , y )$ 在 $( x _ { 0 } , y _ { 0 } )$ 的切面方程是

$$
\frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \left(x - x _ {0}\right) + \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \left(y - y _ {0}\right) - (z - z _ {0}) = 0. \tag {4.3}
$$

其中 $z _ { 0 } = f ( x _ { 0 } , y _ { 0 } )$

证明 (i) 证明充分性. 设二元函数 $f ( x , y )$ 在 $( x _ { 0 } , y _ { 0 } )$ 处可微, 则

$$
f (x, y) = z _ {0} + A \Delta x + B \Delta y + o (r), \quad (\Delta x, \Delta y) \rightarrow (0, 0).
$$

其中

$$
A = \frac {\partial f}{\partial x} (x _ {0}, y _ {0}), \qquad B = \frac {\partial f}{\partial x} (x _ {0}, y _ {0}), \qquad \Delta x = x - x _ {0}, \qquad \Delta y = y - y _ {0}, \qquad r = \sqrt {\Delta x ^ {2} + \Delta y ^ {2}}.
$$

先证明切面的存在性. 设过点 $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 的平面方程

$$
p (x, y) = A ^ {\prime} (x - x _ {0}) + B ^ {\prime} (y - y _ {0}) + z _ {0}.
$$

于是

$$
f (x, y) - p (x, y) = \left(A - A ^ {\prime}\right) \Delta x + \left(B - B ^ {\prime}\right) \Delta y + o (r), \quad (\Delta x, \Delta y) \rightarrow (0, 0).
$$

当 $A = A ^ { \prime }$ , $B = B ^ { \prime }$ 时

$$
f (x, y) - p (x, y) = o (r), \quad (\Delta x, \Delta y) \rightarrow (0, 0).
$$

因此方程4.3就是曲面 $S$ 在 $( x _ { 0 } , y _ { 0 } )$ 的切面方程. 下面证明切面的唯一性. 假设存在另一个切面, 则

$$
a \Delta x + b \Delta y = o (r), \quad (\Delta x, \Delta y) \rightarrow (0, 0).
$$

其中 $a = A - A ^ { \prime } \neq 0$ , $b = B - B ^ { \prime } \neq 0 .$ . 令 $\Delta x = r c o s \theta$ , Δ?? = ?? sin ??, 则

$$
0 = \lim  _ {r \rightarrow 0} \frac {a \Delta x + b \Delta y}{r} = \lim  _ {r \rightarrow 0} (a \sin \theta + b \cos \theta).
$$

出现矛盾. 于是可知切面是唯一存在的.

(ii) 证明必要性. 设曲面 $S : z = f ( x , y )$ 在 $( x _ { 0 } , y _ { 0 } )$ 处存在切面, 且切面方程是4.3, 写成显式方程, 即

$$
p (x, y) = \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \Delta x + \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \Delta y + z _ {0}
$$

其中 $\Delta x = x - x _ { 0 } , \Delta y = y - y _ { 0 } .$ 根据切面的定义可知

$$
o \left(\sqrt {\Delta x ^ {2} + \Delta y ^ {2}}\right) = f (x, y) - p (x, y) = f (x, y) - \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \Delta x - \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \Delta y - z _ {0}, \quad (\Delta x, \Delta y) \rightarrow (0, 0).
$$

这表明 $f ( x , y )$ 在 $( x _ { 0 } , y _ { 0 } )$ 处可微.

![](images/516c310d585155dd7f258661b369ec7537bb84a6ee43beeafc45241823f03dd1.jpg)  
图 4.5: 二元函数全微分分解.

# 4.1.4 多元函数可微的条件

下面我们来讨论函数可微的条件. 在一元函数中, 函数在一点可微至少要求在这一点连续. 多元函数的情况也一样.

# 定理 4.6 (多元函数可微的必要条件)

设 $n$ 元函数 $f$ 在 $\scriptstyle { \mathbf { \mathit { x } } } _ { 0 }$ 处可微, 则 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处连续.

证明 由于 $f$ 在 $x _ { 0 }$ 处可微, 因此

$$
f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) = \nabla f (\boldsymbol {x} _ {0}) \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

因此

$$
\lim  _ {\boldsymbol {h} \to \boldsymbol {0}} [ f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) ] = 0.
$$

于是可知 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处连续.

我们已经知道一元函数 $f$ 在 $x _ { 0 }$ 处可微当且仅当它在 $x _ { 0 }$ 处可导. 那么如果一个多元函数在 $x _ { 0 }$ 处的偏导数都存在是否可以推出函数在这一点可微呢?

例 4.11 设二元函数

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {x y}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0) \end{array} \right..
$$

则 $f$ 在 0 的两个偏导数都存在, 但 $f ( x , y )$ 在 $\mathbf { \delta } _ { \mathbf { \boldsymbol { x } } _ { 0 } } = \mathbf { \delta } \mathbf { \boldsymbol { 0 } }$ 处不可微.

证明 由偏导数的定义可知 $f$ 在 0 的两个偏导数为:

$$
\frac {\partial f}{\partial x} (\mathbf {0}) = \lim  _ {t \rightarrow 0} \frac {f (0 + t , 0) - f (0 , 0)}{t} = 0,
$$

$$
\frac {\partial f}{\partial y} (\mathbf {0}) = \lim _ {t \to 0} \frac {f (0 , 0 + t) - f (0 , 0)}{t} = 0.
$$

由例2.34可知 $f$ 在 0 处不连续. 因此 $f$ 在 0 处不可微.

![](images/eeefe4f80fc2a2829a2dbfe2f0d6a2725b85288041b4dbdd094b3a39d8eb0ecc.jpg)  
图 4.6: 例题图.

以上例子这说明多元函数在一点的所有偏导数都存在也不足以推出在这里点可微. 事实上, 即使函数 $f$ 在一点 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 各个方向的方向导数都存在还是不足以推出函数在 $\scriptstyle { \mathbf { \mathit { x } } } _ { 0 }$ 处可微.

# 例 4.12 设函数

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {x ^ {2} y}{x ^ {4} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0) \end{array} \right..
$$

则 $f$ 在原点 0 处各个方向导数都存在, 但它在原点处不可微.

证明 设方向向量为 $\pmb { u } = ( \cos \theta , \sin \theta )$ , 其中 $\theta \in [ 0 , 2 \pi )$ . 令

$$
\varphi (t) = f (\mathbf {0} + t \mathbf {u}) = f (t \cos \theta , t \sin \theta).
$$

则

$$
\frac {\varphi (t) - \varphi (0)}{t} = \frac {f (t \cos \theta , t \sin \theta) - f (0 , 0)}{t} = \frac {\cos^ {2} \theta \sin \theta}{t ^ {2} \cos^ {4} \theta + \sin^ {2} \theta}.
$$

于是可知

$$
\varphi^ {\prime} (0) = \left\{ \begin{array}{l l} \frac {\cos^ {2} \theta}{\sin \theta}, & \sin \theta \neq 0 \\ 0, & \sin \theta = 0 \end{array} \right..
$$

于是可知 $f$ 在原点 0 处各个方向导数都存在. 由例2.22可知 $f$ 在 $\mathbf { 0 }$ 处不连续, 故它在 0 处不可微.

如果各个偏导数都存在, 且函数连续, 是否可以推得函数可微?

# 例 4.13 设函数

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {x ^ {2} y}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0) \end{array} \right..
$$

则

(1) $f$ 在原点 $( 0 , 0 )$ 处连续.   
(2) $f$ 在原点 $( 0 , 0 )$ 处的两个偏导数都存在.  
(3) $f$ 在的两个偏导数在原点 $( 0 , 0 )$ 处不连续.   
(4) $f$ 在 $( 0 , 0 )$ 处不可微.

证明 (1) 由于

$$
\lim  _ {(x, y) \rightarrow (0, 0)} f (x, y) = \lim  _ {(x, y) \rightarrow (0, 0)} \frac {x ^ {2} y}{x ^ {2} + y ^ {2}} = \lim  _ {r \rightarrow 0} \frac {r ^ {2} \cos \theta \cdot r \sin \theta}{r ^ {2}} = \lim  _ {r \rightarrow 0} r \cos^ {2} \theta \sin \theta = 0.
$$

因此 $f$ 在 $( 0 , 0 )$ 连续.

(2) 由偏导数的定义可知

$$
\begin{array}{l} \frac {\partial f}{\partial x} (0, 0) = \lim  _ {t \rightarrow 0} \frac {f (0 + t , 0) - f (0 , 0)}{t} = 0. \\ \frac {\partial f}{\partial y} (0, 0) = \lim _ {t \to 0} \frac {f (0 , 0 + t) - f (0 , 0)}{t} = 0. \\ \end{array}
$$

(3) 计算可知, 当 $( x , y ) \neq ( 0 , 0 )$ 时

$$
\frac {\partial f}{\partial x} (x, y) = \frac {2 x y ^ {3}}{\left(x ^ {2} + y ^ {2}\right) ^ {2}}, \quad \frac {\partial f}{\partial x} (x, y) = \frac {x ^ {2} \left(x ^ {2} - y ^ {2}\right)}{\left(x ^ {2} + y ^ {2}\right) ^ {2}}.
$$

对于 $f _ { x } ^ { \prime }$ , 取 $x = 2 / n \to 0$ , $y = 1 / n \to 0$ , 则

$$
\frac {\partial f}{\partial x} \left(\frac {2}{n}, \frac {1}{n}\right) = \frac {4}{2 5} \neq 0, \quad \frac {\partial f}{\partial x} \left(\frac {2}{n}, \frac {1}{n}\right) = \frac {1 2}{2 5} \neq 0.
$$

因此 $f _ { x } ^ { \prime } , f _ { y } ^ { \prime }$ 在 $( 0 , 0 )$ 处都不连续.

(4) 若 $f$ 在 $( 0 , 0 )$ 处可微, 则

$$
f \left(h _ {1}, h _ {2}\right) - f (0, 0) = \frac {\partial f}{\partial x} (0, 0) h _ {1} + \frac {\partial f}{\partial y} (0, 0) h _ {2} + o \left(\sqrt {h _ {1} ^ {2} + h _ {2} ^ {2}}\right) \Longleftrightarrow \frac {h _ {1} ^ {2} h _ {2}}{h _ {1} ^ {2} + h _ {2} ^ {2}} = o \left(\sqrt {h _ {1} ^ {2} + h _ {2} ^ {2}}\right)
$$

令 $h _ { 1 } = h _ { 2 } = h .$ , 则

$$
\frac {h}{2} = o \left(\sqrt {2} h\right) \Longleftrightarrow \frac {1}{2 \sqrt {2}} = o (1).
$$

这显然不成立. 于是可知 $f$ 在 $( 0 , 0 )$ 处不可微.

很自然的想法是, 把条件再加强一些, 如果偏导数连续, 是否可以确保函数可微?

# 定理 4.7 (多元函数可微的充分条件)

设函数 $f : D \to \mathbb { R } ,$ 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 若 $f$ 的各个偏导数 $f _ { i } ^ { \prime } ( x ) ~ ( i = 1 , 2 , \cdots , n )$ $f _ { i } ^ { \prime } ( { \pmb x } )$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 的一个邻域中都存在, 且在点 $x _ { 0 }$ 处都连续, 则 $f$ 在 $x _ { 0 }$ 处可微.

证明 对 $n$ 进行归纳. 当 $n = 1$ 时, 显然成立, 这是因为一元函数在一点可导当且仅当这一点可微. 假设 $n - 1$ 时命题成立. 下面来看 $n$ 时的情况. 令

$$
f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) = d _ {1} + d _ {2},
$$

其中

$$
d _ {1} = f \left(x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n} + h _ {n}\right) - f \left(x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n}\right),
$$

$$
d _ {2} = f \left(x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n}\right) - f \left(x _ {1}, \dots , x _ {n - 1}, x _ {n}\right).
$$

对 $d _ { 1 }$ 使用一元函数的 Lagrange 中值定理, 即存在 $\theta \in ( 0 , 1 )$ 使得

$$
d _ {1} = f _ {n} ^ {\prime} (x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n} + \theta h _ {n}) h _ {n} = \left[ f _ {n} ^ {\prime} (x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n} + \theta h _ {n}) - f _ {n} ^ {\prime} (\boldsymbol {x} _ {0}) \right] h _ {n} + f _ {n} ^ {\prime} (\boldsymbol {x} _ {0}) h _ {n}.
$$

令

$$
\varepsilon_ {n} (\boldsymbol {h}) = f _ {n} ^ {\prime} \left(x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n} + \theta h _ {n}\right) - f _ {n} ^ {\prime} \left(\boldsymbol {x} _ {0}\right).
$$

则

$$
d _ {1} = f _ {n} ^ {\prime} (\boldsymbol {x} _ {0}) h _ {n} + \varepsilon_ {n} (\boldsymbol {h}) h _ {n}.
$$

由于 $f$ 的各个偏导数 $f _ { i } ^ { \prime } ( \pmb { x } ) ~ ( i = 1 , 2 , \cdots , n )$ 在 $x _ { 0 }$ 的一个邻域中都存在, 且在点 $x _ { 0 }$ 处都连续, 故

$$
\lim  _ {\| \boldsymbol {h} \| \to 0} \varepsilon_ {n} (\boldsymbol {h}) = \lim  _ {\| \boldsymbol {h} \| \to 0} f _ {n} ^ {\prime} (x _ {1} + h _ {1}, \dots , x _ {n - 1} + h _ {n - 1}, x _ {n} + \theta h _ {n}) - f _ {n} ^ {\prime} (\boldsymbol {x} _ {0}) = 0.
$$

另一方面, 由归纳假设可知

$$
d _ {2} = \sum_ {i = 1} ^ {n - 1} f _ {i} ^ {\prime} (\boldsymbol {x} _ {0}) h _ {i} + \sum_ {i = 1} ^ {n - 1} \varepsilon_ {i} (\boldsymbol {h}) h _ {i},
$$

其中 $\varepsilon _ { i } ( h ) \to 0$ $\varepsilon _ { i } ( h ) \to 0 \left( \left\| h \right\| \to 0 \right) ( i = 1 , 2 , \cdot \cdot \cdot , n - 1 )$ $\| \pmb { h } \|  0 \}$ 于是

$$
f \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - f \left(\boldsymbol {x} _ {0}\right) = d _ {1} + d _ {2} = \sum_ {i = 1} ^ {n} f _ {i} ^ {\prime} \left(\boldsymbol {x} _ {0}\right) h _ {i} + \sum_ {i = 1} ^ {n} \varepsilon_ {i} (\boldsymbol {h}) h _ {i}
$$

其中 $\varepsilon _ { i } ( h ) \to 0 ( \left\| h \right\| \to 0 ) ( i = 1 , 2 , \cdot \cdot \ , n )$ $\| h \|  0 )$ $( i = 1 , 2 , \cdots , n )$ . 于是可知 $f$ 在 $x _ { 0 }$ 处可微.

由数学归纳原理可知对于任一 $n \in \mathbb { N } ^ { * }$ 命题都成立.

偏导连续虽然可以推出函数可微, 却不是必要条件. 我们来看一个例子.

例 4.14 设二元函数

$$
f (x, y) = \left\{ \begin{array}{l l} \left(x ^ {2} + y ^ {2}\right) \sin \frac {1}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0) \end{array} \right..
$$

则 $f$ 在 0 处可微, 但它的两个偏导数在 0 不连续.

证明 (i) 分别计算 $f$ 的两个偏导数. 当 $( x , y ) \neq ( 0 , 0 )$ 时

$$
\frac {\partial f}{\partial x} (x, y) = 2 x \sin \frac {1}{x ^ {2} + y ^ {2}} - \frac {2 x}{x ^ {2} + y ^ {2}} \cos \frac {1}{x ^ {2} + y ^ {2}}.
$$

$$
\frac {\partial f}{\partial y} (x, y) = 2 y \sin \frac {1}{x ^ {2} + y ^ {2}} - \frac {2 y}{x ^ {2} + y ^ {2}} \cos \frac {1}{x ^ {2} + y ^ {2}}.
$$

当 $( x , y ) = ( 0 , 0 )$ 时

$$
\frac {\partial f}{\partial x} (x, y) = \lim  _ {t \rightarrow 0} \frac {f (0 + t , 0) - f (0 , 0)}{t} = \lim  _ {t \rightarrow 0} t ^ {2} \sin \frac {1}{t ^ {2}} = 0,
$$

$$
\frac {\partial f}{\partial y} (x, y) = \lim  _ {t \rightarrow 0} \frac {f (0 , 0 + t) - f (0 , 0)}{t} = \lim  _ {t \rightarrow 0} t ^ {2} \sin \frac {1}{t ^ {2}} = 0.
$$

设两个点列 ${ \pmb a } _ { n } = \bigg ( 1 / \sqrt { 2 n \pi } , 0 \bigg ) , { \pmb b } _ { n } = \bigg ( 0 , 1 / \sqrt { 2 n \pi } \bigg )$ 则 ${ \pmb a } _ { n }  { \pmb 0 }$ $\mathbf { 0 } _ { n }  \mathbf { 0 } , b _ { n }  \mathbf { 0 } .$ ${ \pmb b } _ { n }  { \pmb 0 }$ 但

$$
\frac {\partial f}{\partial x} \left(\boldsymbol {a} _ {n}\right) = \frac {2}{\sqrt {2 n \pi}} \sin 2 n \pi - 2 \sqrt {2 n \pi} \cos 2 n \pi = - 2 \sqrt {2 n \pi} \rightarrow - \infty .
$$

$$
\frac {\partial f}{\partial y} \left(\boldsymbol {b} _ {n}\right) = \frac {2}{\sqrt {2 n \pi}} \sin 2 n \pi - 2 \sqrt {2 n \pi} \cos 2 n \pi = - 2 \sqrt {2 n \pi} \rightarrow - \infty .
$$

因此两个偏导数在 0 处的极限都不是 0, 因此它们在 0 处都不连续.

(ii) 由于

$$
\lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \frac {f \left(h _ {1} , h _ {2}\right) - f (0 , 0) - f _ {x} ^ {\prime} (0 , 0) h _ {1} - f _ {y} ^ {\prime} (0 , 0) h _ {2}}{\| \boldsymbol {h} \|} = \lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \| \boldsymbol {h} \| \sin \frac {1}{\| \boldsymbol {h} \| ^ {2}} = 0.
$$

这表明 $f$ 在 0 处可微.

现在我们可以来总结一下一元函数和多元函数中极限、连续、可导、可微这四个概念的关系了.

![](images/a124eead985eec41069c6af43420b4a18702222c219a72988ce65a1405c68ae7.jpg)  
图 4.7: 一元函数, 可导, 可微, 连续, 有极限的关系.

![](images/22812e39029b71ce689c8b44346261c960d030452a65b0b810151e9df701d5a5.jpg)  
图 4.8: 多元函数偏导连续, 可微, 连续, 有偏导, 有极限的关系.

于是可以总结出证明可微或不可微的方法:

(1) 证明不可微:   
(i) 证明函数的某个偏导不存在.  
(ii) 证明函数不连续.   
(iii) 直接用定义证明.  
(2) 证明可微:   
(i) 证明函数的所有偏导都存在且连续.  
(ii) 直接用定义证明.

# 4.1.5 用全微分估计误差

设一个物理量 $z = f ( x , y )$ , 其中 $x$ 和 $y$ 都可以通过测量得到. 现在假设测量得到的近似值分别为 $x ^ { \prime }$ 和 $y ^ { \prime }$ , 我们希望估计因此计算出的近似值 $z ^ { \prime } = f ( x ^ { \prime } , y ^ { \prime } )$ 产生的误差. 令

$$
\Delta x = x ^ {\prime} - x, \quad \Delta y = y ^ {\prime} - y, \quad \Delta z = z ^ {\prime} - z.
$$

通常我们把 $\Delta x , \Delta y$ 和 $\Delta z$ 称为绝对误差 (absolute error), 把 $\Delta x / x , \Delta y / y$ 和 $\Delta z / z$ 称为相对误差 (relative error). 若存在$\delta x , \delta y , \delta z > 0$ 使得

$$
| \Delta x | \leq \delta x, \qquad | \Delta y | \leq \delta x, \qquad | \Delta z | \leq \delta z,
$$

则称 $\delta x , \delta y$ 和 $\delta z$ 称为绝对误差限 , 称 $\delta x / | x | , \delta y / | y |$ 和 $\delta z / | z |$ 称为相对误差限.一般来说,我们可以确定 $\delta x$ 和 $\delta y$ . 我们想要知道的是 $\delta z$ , 这就是多元函数的误差估计问题.

用全微分就可以非常方便地估计误差. 根据全微分的定义可知:

$$
\mathrm {d} z = \frac {\partial z}{\partial x} \Delta x + \frac {\partial z}{\partial y} \Delta y
$$

当 $\Delta x$ 和 $\Delta y$ 非常小的时候 ${ \bf \nabla } \mathcal { S } \approx \mathrm { d } z$ , 因此

$$
| \Delta z | \approx | d z | \leq \left| \frac {\partial z}{\partial x} \right| | \Delta x | + \left| \frac {\partial z}{\partial y} \right| | \Delta y | \leq \left| \frac {\partial z}{\partial x} \right| \delta x + \left| \frac {\partial z}{\partial y} \right| \delta y.
$$

于是上述不等式右侧可以看作 ?? 的绝对误差限, 即

$$
\delta z = \left| \frac {\partial z}{\partial x} \right| \delta x + \left| \frac {\partial z}{\partial y} \right| \delta y.
$$

设二元函数 $z = x y$ . 在 $| z | = | x | | y |$ 两边取对数

$$
\ln | z | = \ln | x | + \ln | y |.
$$

对两边微分可得

$$
\frac {\Delta z}{| z |} = \frac {\Delta x}{| x |} + \frac {\Delta y}{| y |}
$$

于是

$$
\frac {\delta z}{| z |} = \frac {\delta x}{| x |} + \frac {\delta y}{| y |}.
$$

以上结论表明乘积的相对误差限等于各个因子的相对误差限的和类似可知以下命题. 类似地, 若 $z = x / y$ 则

$$
\frac {\delta z}{| z |} = \frac {\delta x}{| x |} - \frac {\delta y}{| y |}.
$$

下面看一个例子.

例 4.15 设直角三角形 ??????, 其中 $B$ 是直角. 已经测得 $| A B | = c$ 和 $\angle A$ . 则可以计算出

$$
a = c \tan A.
$$

请估计 $a$ 的误差.

解 根据误差估计公式可知

$$
\delta a = \frac {\partial a}{\partial c} \delta c + \frac {\partial a}{\partial A} \delta A = \tan A \delta c + \frac {c}{\cos^ {2} A} \delta A.
$$

注 若实际测量得到

$$
c = 1 2 1. 5 6 \pm 0. 0 5, \quad \angle A = 2 5 ^ {\circ} 2 1 ^ {\prime} 4 0 ^ {\prime \prime} \pm 1 2 ^ {\prime \prime}.
$$

计算可知

$$
a = c \tan A = 1 2 1. 5 6 \times \tan 2 5 ^ {\circ} 2 1 ^ {\prime} 4 0 ^ {\prime \prime} \approx 5 7. 6 2.
$$

下面来根据上例中的公式估计误差. 由于

$$
\delta c = 0. 0 5, \quad \delta A = \frac {1 2}{6 0 \times 6 0} \cdot \frac {2 \pi}{3 6 0} = \frac {\pi}{5 4 0 0 0}.
$$

于是

$$
\delta a = \tan A \delta c + \frac {c}{\cos^ {2} A} \delta A = \tan 2 5 ^ {\circ} 2 1 ^ {\prime} 4 0 ^ {\prime \prime} \times 0. 0 5 + \frac {1 2 1 . 5 6}{\cos^ {2} 2 5 ^ {\circ} 2 1 ^ {\prime} 4 0 ^ {\prime \prime}} \times \frac {\pi}{5 4 0 0 0} \approx 0. 0 3.
$$

因此我们可以把结果记成:

$$
a = 5 7. 6 2 \pm 0. 0 3.
$$

例 4.16 设三角形 ??????. 已经测得 $b , c$ 和 $\angle A$ . 用余弦定理可以计算出

$$
a = \sqrt {b ^ {2} + c ^ {2} - 2 b c \cos A}.
$$

请估计 $a$ 的误差.

解 根据误差估计公式可知

$$
\delta a = \frac {\partial a}{\partial b} \delta b + \frac {\partial a}{\partial c} \delta c + \frac {\partial a}{\partial A} \delta A. = \frac {b - c \cos A}{a} \delta b + \frac {c - b \cos A}{a} \delta c + \frac {b c \sin A}{a} \delta A.
$$

由于

$$
b - c \cos A = a \cos C, \quad c - b \cos A = a \cos B, \quad b c \sin A = a h,
$$

其中 $h$ 是 $a$ 的上的高. 于是

$$
\delta a = \cos C \delta b + \cos B \delta c + h \delta A.
$$

这样就得到了 $a$ 的误差估计公式.

# 4.1.6 向量值函数的微分和可微映射

下面我们把微分的概念推广到向量值函数中. 在此之前, 我们先来回顾一下微分的概念.

设一元实值函数 $f : D \to \mathbb { R }$ $( D \in \mathbb { R } )$ ) 在 $x _ { 0 }$ 处可微, 是指 $f$ 在 $x _ { 0 }$ 附近的增量可以近似为一个 $\mathbb { R } \to \mathbb { R }$ 的线性映射, 即

$$
f (x _ {0} + h) - f (x _ {0}) = \lambda h + o (h), \quad h \to 0.
$$

以上等式等价于

$$
\lim  _ {h \to 0} \frac {f (x _ {0} + h) - f (x _ {0}) - \lambda h}{h} = 0.
$$

我们把关于增量 $h$ 的线性映射 $\lambda h$ 称为 $f$ 在 $x _ { 0 }$ 处的微分. 其中系数 $\lambda$ 等于 $f$ 在 $x _ { 0 }$ 处的导数

$$
\lambda = \frac {\mathrm {d} f (x _ {0})}{\mathrm {d} x}.
$$

设 $n$ 元实值函数 $f : D \to \mathbb { R } \left( D \in \mathbb { R } ^ { n } \right)$ $D \in \mathbb { R } ^ { n } ,$ 在 $x _ { 0 }$ 处可微, 是指 $f$ 在 $x _ { 0 }$ 附近的增量可以近似为一个 $\mathbb { R } ^ { n } \to \mathbb { R }$ 的线性映射, 即

$$
f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) = \boldsymbol {\lambda} \cdot \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

以上等式等价于

$$
\lim_{\| \boldsymbol {h}\| \to 0}\frac{f(\boldsymbol{x}_{0} + \boldsymbol{h}) - f(\boldsymbol{x}_{0}) - \boldsymbol{\lambda}\cdot\boldsymbol{h}}{\|\boldsymbol{h}\|} = 0.
$$

这里的增量 $\pmb { h }$ 是一个 $n$ 维列向量, 为了使极限式有意义, 需要取 $\pmb { h }$ 的范数. 同样, 我们把关于增量 $\pmb { h }$ 的线性映射$\lambda \cdot h$ 称为 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处的微分. 这里的 $\lambda$ 是一个行向量, 它的第 $i$ 个分量是 $f$ 在 $x _ { 0 }$ 处的第 $i$ 个偏导数

$$
\boldsymbol {\lambda} = \left(\frac {\partial f (\boldsymbol {x} _ {0})}{\partial x _ {1}}, \frac {\partial f (\boldsymbol {x} _ {0})}{\partial x _ {2}}, \dots , \frac {\partial f (\boldsymbol {x} _ {0})}{\partial x _ {n}}\right).
$$

我们称这个行向量为 $f$ 在 $x _ { 0 }$ 的梯度, 记作 $\nabla f ( \mathbf { x } _ { 0 } )$ . 梯度实际上可以看作一个多元实值函数的导数.

通过以上的复习整理, 我们可以很容易地把微分的概念推广到向量值函数函数 $f : D \to \mathbb { R } ^ { m }$ $\mathbf { \Delta } ^ { \prime } D \in \mathbb { R } ^ { n } ,$ ). 如果$f$ 在 $x _ { 0 }$ 处可微则应该有等式

$$
\lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \frac {\| \boldsymbol {f} (\boldsymbol {x} _ {0} + \boldsymbol {h}) - \boldsymbol {f} (\boldsymbol {x} _ {0}) - \boldsymbol {A h} \|}{\| \boldsymbol {h} \|} = 0.
$$

从前面情况类比可知, 此时函数 $f$ 的微分应该是一个 $\mathbb { R } ^ { n } \to \mathbb { R } ^ { m }$ 的线性映射 $\boldsymbol { A } \boldsymbol { h }$ , 因此 $\pmb { A }$ 应该是一个 $m \times n$ 矩阵.与前面两种情况不同的是,此时 $f ( { \pmb x } _ { 0 } + { \pmb h } ) - f ( { \pmb x } _ { 0 } ) - { \pmb A } { \pmb h }$ 是一个 $m$ 维向量,因此也需要把它变成范数. 其中分子是$\mathbb { R } ^ { m }$ 中的范数, 分母是 $\mathbb { R } ^ { n }$ 中的范数. 前面的一元或多元实值函数的微分与这个定义是一致的. 现在我们可以正式给出微分的定义了.

# 定义 4.8 (向量值函数的微分)

设向量值函数 $f : D \to \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 给定 $\pmb { x } _ { 0 } \in D$ . 若存在 $m \times n$ 矩阵 $\pmb { A }$ 使得

$$
\lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \frac {\| \boldsymbol {f} (\boldsymbol {x} _ {0} + \boldsymbol {h}) - \boldsymbol {f} (\boldsymbol {x} _ {0}) - \boldsymbol {A h} \|}{\| \boldsymbol {h} \|} = 0.
$$

则称 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微, 称线性映射 $_ { A h }$ 是 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处的微分. 记作 $\mathrm { d } f ( { \boldsymbol { x } } _ { 0 } ) = A h$ .

注 若 $f$ 在 $D$ 上每一点都可微, 则称 $f$ 在 $D$ 上可微, 此时对于给定的 $\pmb { h }$ 微分 $\mathcal { A } h$ 是 $\boldsymbol { x }$ 的向量值函数, 若它在 $D$ 上连续, 则称 $f$ 在 $D$ 上连续可微, 记作 $f \in C ^ { 1 } ( D )$ .

注 由于 $\mathbb { R } ^ { n }$ 中的范数都是等价的, 因此不同范数下的微分都是等价的.

注 由于 $f ( { \pmb x } _ { 0 } + { \pmb h } ) - f ( { \pmb x } _ { 0 } )$ 和 $_ { A h }$ 都是 $m$ 维向量, 因此不能写成

$$
f \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - f \left(\boldsymbol {x} _ {0}\right) = \boldsymbol {A} \boldsymbol {h} + o (\| \boldsymbol {h} \|), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

但可以写成

$$
\left\| f \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - f \left(\boldsymbol {x} _ {0}\right) - \boldsymbol {A h} \right\| = o (\left\| \boldsymbol {h} \right\|), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

如果令

$$
\boldsymbol {r} (\boldsymbol {h}) = f (\boldsymbol {x} _ {0} + \boldsymbol {h}) - f (\boldsymbol {x} _ {0}) - \boldsymbol {A h}.
$$

则 $f$ 可微当且仅当

$$
\lim  _ {\boldsymbol {h} \rightarrow \boldsymbol {0}} \frac {\| \boldsymbol {r} (\boldsymbol {h}) \|}{\| \boldsymbol {h} \|} = 0.
$$

下面我们来看矩阵 ?? 的元素. 为此只需考虑 $f$ 的分量函数.

# 定理 4.8

设向量值函数 $f : D \to \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 给定 $\pmb { x } _ { 0 } \in D$ . 则 $\boldsymbol { f } = ( f _ { 1 } , f _ { 2 } , \cdots , f _ { m } )$ 在 $x _ { 0 }$ 处可微当且仅当分量函数 $f _ { i }$ $( i = 1 , 2 , \cdots , m )$ 都在 $x _ { 0 }$ 处可微.

证明 设

$$
\boldsymbol {A} = \left[ \begin{array}{l} \boldsymbol {A} _ {1} \\ \boldsymbol {A} _ {2} \\ \dots \\ \boldsymbol {A} _ {m} \end{array} \right] = \left[ \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {m 1} & a _ {m 2} & \dots & a _ {m n} \end{array} \right], \qquad \boldsymbol {h} = \left[ \begin{array}{l} h _ {1} \\ h _ {2} \\ \dots \\ h _ {m} \end{array} \right].
$$

由于

$$
\left\| f \left(x _ {0} + h\right) - f \left(x _ {0}\right) - A h \right\| = o (\left\| h \right\|), \quad h \rightarrow 0
$$

当且仅当

$$
\left| f _ {i} \left(\boldsymbol {x} _ {0} + \boldsymbol {h}\right) - f _ {i} \left(\boldsymbol {x} _ {0}\right) - \boldsymbol {A} _ {i} \boldsymbol {h} \right| = o (\| \boldsymbol {h} \|), \quad \boldsymbol {h} \rightarrow 0
$$

因此 $f$ 在 $x _ { 0 }$ 可微当且仅当 $f _ { i }$ $\ B _ { i } \ ( i = 1 , 2 , \cdots , m )$ 在 $x _ { 0 }$ 处可微. 且

$$
\boldsymbol {A} _ {i} = \left[ \frac {\partial f _ {i}}{\partial x _ {1}} (\boldsymbol {x} _ {0}), \frac {\partial f _ {i}}{\partial x _ {2}} (\boldsymbol {x} _ {0}), \dots , \frac {\partial f _ {i}}{\partial x _ {n}} (\boldsymbol {x} _ {0}) \right], \quad i = 1, 2, \dots , m.
$$

上面的定理引出了以下重要概念.

# 定义 4.9 (Jacobi 矩阵)

设向量值函数 $f : D \to \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 给定 $\pmb { x } _ { 0 } \in D$ . 若 $\ b _ { f } = ( f _ { 1 } , f _ { 2 } , \cdot \cdot \cdot , f _ { m } )$ 的所有分量函数在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处存在所有偏导数, 则可令

$$
\boldsymbol {A} = \left[ \begin{array}{c} \nabla f _ {1} (\boldsymbol {x} _ {0}) \\ \nabla f _ {2} (\boldsymbol {x} _ {0}) \\ \vdots \\ \nabla f _ {m} (\boldsymbol {x} _ {0}) \end{array} \right] = \left[ \begin{array}{c c c c} \frac {\partial f _ {1}}{\partial x _ {1}} (\boldsymbol {x} _ {0}) & \frac {\partial f _ {1}}{\partial x _ {2}} (\boldsymbol {x} _ {0}) & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} (\boldsymbol {x} _ {0}) \\ \frac {\partial f _ {2}}{\partial x _ {1}} (\boldsymbol {x} _ {0}) & \frac {\partial f _ {2}}{\partial x _ {2}} (\boldsymbol {x} _ {0}) & \dots & \frac {\partial f _ {2}}{\partial x _ {n}} (\boldsymbol {x} _ {0}) \\ \vdots & \vdots & & \vdots \\ \frac {\partial f _ {m}}{\partial x _ {1}} (\boldsymbol {x} _ {0}) & \frac {\partial f _ {m}}{\partial x _ {2}} (\boldsymbol {x} _ {0}) & \dots & \frac {\partial f _ {m}}{\partial x _ {n}} (\boldsymbol {x} _ {0}) \end{array} \right].
$$

我们把矩阵 $\pmb { A }$ 称为 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处的 Jacobi 矩阵 (Jacobian maxtrix), 记作 $J f ( \pmb { x } _ { 0 } )$ .

注 Jacobi 矩阵可以看作函数 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 的导数, 因此也可以记作 $f ^ { \prime } ( \pmb { x } _ { 0 } )$ . 容易看出, 前面定义的多元实值函数的梯度实质上可以看作一个 $1 \times n$ 的Jacobi矩阵.我们在一元实值函数中定义的导数实质上可以看作一个 $1 \times 1$ 的 Jacobi矩阵, 也可以看作一个 1 维的梯度, 因此这些概念都是一致的.

例 4.17 设线性映射 $f : \mathbb { R } ^ { n }  \mathbb { R } ^ { m }$ . 求 $J f$ .

证明 设 $f ( { \pmb x } ) = A { \pmb x }$ , 其中 $A$ 是一个 $m \times n$ 矩阵. 由于

$$
\lim  _ {t \rightarrow 0} \frac {\| f (\boldsymbol {x} + t \boldsymbol {h}) - f (\boldsymbol {x}) - \boldsymbol {A} (t \boldsymbol {h}) \|}{t} = \lim  _ {t \rightarrow 0} \frac {\| \boldsymbol {A} (\boldsymbol {x} + t \boldsymbol {h}) - \boldsymbol {A} \boldsymbol {x} - t \boldsymbol {A} \boldsymbol {h} \|}{t} = 0.
$$

于是可知 $J f = A$ .

以上例子说明线性映射的微分就是它本身. 下面的例子是上面的特例.

例 4.18 设恒等映射 $f : \mathbb { R } ^ { n } \to \mathbb { R } ^ { n }$ . 则 $J f = I _ { n }$ , 其中 $I _ { n }$ 是 $n$ 级单位矩阵.

导数推广后, 原来求导法则在形式上仍然成立.

# 命题 4.2 (Jacobi 算子的运算法则)

设向量值函数 $\pmb { f } , \pmb { g } : D  \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 则

(1) $J ( A f ) = A J f$ .   
(2) $J ( f + g ) = J f + J g$ .   
(3) $\begin{array} { r } { J \left( f ^ { T } g \right) = g ^ { T } J f + f ^ { T } J g . } \end{array}$

其中 $\pmb { A }$ 是一个 $p \times m$ 矩阵, $f$ 和 $\pmb { g }$ 都看作列向量.

证明 设 ?? = ( ??1, ??2, · · · , ????), ?? = (??1, ??2, · · · , ????), ?? = (???? ?? ) (?? = 1, 2, · · · , ??, $j = 1 , 2 , \cdots , m )$ .

(1) 显然等式两边都是 $p \times n$ 矩阵, 下面分别看他们的 $( i ; j )$ 元:

$$
\boldsymbol {J} (\boldsymbol {A} \boldsymbol {f}) (i; j) = \boldsymbol {J} \left[ \begin{array}{c} \sum_ {k = 1} ^ {m} a _ {1 k} f _ {k} \\ \vdots \\ \sum_ {k = 1} ^ {m} a _ {p k} f _ {k} \end{array} \right] (i; j) = \frac {\partial \sum_ {k = 1} ^ {m} a _ {i k} f _ {k}}{\partial x _ {j}} = \sum_ {k = 1} ^ {m} a _ {i k} \frac {\partial f _ {k}}{\partial x _ {j}}.
$$

$$
\boldsymbol {A} \boldsymbol {J} \boldsymbol {f} (i; j) = \left[ \begin{array}{c c c} a _ {1 1} & \dots & a _ {1 m} \\ \vdots & & \vdots \\ a _ {p 1} & \dots & a _ {p m} \end{array} \right] \left[ \begin{array}{c c c} \frac {\partial f _ {1}}{\partial x _ {1}} & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial f _ {m}}{\partial x _ {1}} & \dots & \frac {\partial f _ {m}}{\partial x _ {n}} \end{array} \right] (i; j) = \sum_ {k = 1} ^ {m} a _ {i k} \frac {\partial f _ {k}}{\partial x _ {j}}.
$$

(2) 显然等式两边都是 $m \times n$ 矩阵, 下面分别看它们的 $( i ; j )$ 元 :

$$
\boldsymbol {J} (\boldsymbol {f} + \boldsymbol {g}) (i; j) = \frac {\partial \left(f _ {i} + g _ {i}\right)}{\partial x _ {j}} = \frac {\partial f _ {i}}{\partial x _ {j}} + \frac {\partial g _ {i}}{\partial x _ {j}}.
$$

$$
\left(J f + J g\right) (i; j) = \frac {\partial f _ {i}}{\partial x _ {j}} + \frac {\partial g _ {i}}{\partial x _ {j}}.
$$

(3) 显然等式两边都是 $1 \times n$ 矩阵, 下面分别看它们的 $( 1 ; j )$ 元:

$$
\boldsymbol {J} \left(\boldsymbol {f} ^ {T} \boldsymbol {g}\right) (1; j) = \left(\boldsymbol {J} \sum_ {k = 1} ^ {m} f _ {k} g _ {k}\right) (1; j) = \frac {\partial \sum_ {k = 1} ^ {m} f _ {k} g _ {k}}{\partial x _ {j}} = \sum_ {k = 1} ^ {m} g _ {k} \frac {\partial f _ {k}}{\partial x _ {j}} + \sum_ {k = 1} ^ {m} f _ {k} \frac {\partial g _ {k}}{\partial x _ {j}}.
$$

$$
\begin{array}{l} \left(\boldsymbol {g} ^ {T} \boldsymbol {J} \boldsymbol {f} + \boldsymbol {f} ^ {T} \boldsymbol {J} \boldsymbol {g}\right) (1; j) = (g _ {1}, \dots , g _ {m}) \left[ \begin{array}{c c c} \frac {\partial f _ {1}}{\partial x _ {1}} & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial f _ {m}}{\partial x _ {1}} & \dots & \frac {\partial f _ {m}}{\partial x _ {n}} \end{array} \right] (1; j) + (f _ {1}, \dots , f _ {m}) \left[ \begin{array}{c c c} \frac {\partial g _ {1}}{\partial x _ {1}} & \dots & \frac {\partial g _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial g _ {m}}{\partial x _ {1}} & \dots & \frac {\partial g _ {m}}{\partial x _ {n}} \end{array} \right] (1; j) \\ = \sum_ {k = 1} ^ {m} g _ {k} \frac {\partial f _ {k}}{\partial x _ {j}} + \sum_ {k = 1} ^ {m} f _ {k} \frac {\partial g _ {k}}{\partial x _ {j}}. \\ \end{array}
$$

注 若函数 $f$ 和 $\pmb { g }$ 可微, 则可以用可微的定义验证. 下面来证明 (1). 由于 $f$ 可微, 对于任一 $\varepsilon > 0$ 都存在 $\delta > 0$ , 当$0 < \| h \| < \delta$ 时就有

$$
\left\| f (x + h) - f (x) - J f (x) h \right\| <   \frac {\varepsilon}{\| A \|} \| h \|.
$$

于是

$$
\left\| (\boldsymbol {A} \boldsymbol {f}) (\boldsymbol {x} + \boldsymbol {h}) - (\boldsymbol {A} \boldsymbol {f}) (\boldsymbol {x}) - \boldsymbol {A} \boldsymbol {J} \boldsymbol {f} (\boldsymbol {x}) \boldsymbol {h} \right\| \leq \left\| \boldsymbol {A} \right\| \left\| \boldsymbol {f} (\boldsymbol {x} + \boldsymbol {h}) - \boldsymbol {f} (\boldsymbol {x}) - \boldsymbol {J} \boldsymbol {f} (\boldsymbol {x}) \boldsymbol {h} \right] \| <   \varepsilon \| \boldsymbol {h} \|.
$$

于是可知 $A f$ 也可微, 且

$$
\boldsymbol {J} (\boldsymbol {A} \boldsymbol {f}) = \boldsymbol {A} \boldsymbol {J} \boldsymbol {f}.
$$

注 公式 (3) 的左边是 $\mathbb { R } ^ { m }$ 中的内积, 右边是 $1 \times m$ 与 $m \times n$ 的矩阵乘法, 所以这里的 $g J f$ 和 $f J g$ 不能写成 $J f g$ 和$J g f$ .

至此, 微分和导数的概念都得到了推广. 在学习一元函数微分学时, 我们先介绍了导数. 但在推广到多元函数时微分的概念反而容易推广.

在多元实值函数函数中, 我们已经证明各偏导连续是可微的充分条件. 这个结论可以进一步推广到向量值函数中.

# 定理 4.9

设向量值函数 $f$ . 若 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 的一个邻域内存在 Jacobi 矩阵 $J f$ , 且 $J f$ 中的各元素在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处连续, 则 $f$ 在 $x _ { 0 }$ 处可微.

证明 由条件可知 $f$ 的所有分量函数都在 $x _ { 0 }$ 处可微, 于是可知 $f$ 在 $x _ { 0 }$ 处可微.

多元函数在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微, 则在 $x _ { 0 }$ 处连续. 这个结论可以进一步推广到向量值函数中.

# 定理 4.10

设向量值函数 $f$ . 若 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微, 则 $f$ 在 $x _ { 0 }$ 处连续.

证明 由条件可知 $f$ 的所有分量函数都在 $x _ { 0 }$ 处可微,故 $f$ 的所有分量函数都在 $x _ { 0 }$ 处连续,于是可知 $f$ 在 $x _ { 0 }$ 处连续.

# 定理 4.11

设向量值函数 $\pmb { f } : D  \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 则 $f \in C ^ { 1 } ( D )$ 当且仅当 $f$ 的任一分量函数对任一自变量分量都连续可微.

仿照多元函数的偏微分, 可以定义向量值函数的偏微分.

# 定义 4.10 (偏微分)

设向量值函数 $f : D  \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n } \times \mathbb { R } ^ { p }$ 上的一个开集. 给定 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ . 若存在 $m \times n$ 矩阵 $A _ { x }$ 使得

$$
\left\| f \left(\boldsymbol {x} _ {0} + \boldsymbol {h}, \boldsymbol {y} _ {0}\right) - f \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) - \boldsymbol {A} _ {\boldsymbol {x}} \boldsymbol {h} \right\| = o (\left\| \boldsymbol {h} \right\|), \quad \left\| \boldsymbol {h} \right\|\rightarrow 0,
$$

其中 $\pmb { h } = ( h _ { 1 } , h _ { 2 } , \cdots , h _ { n } ) ^ { T }$ 是 $\boldsymbol { x }$ 的增量, 则称 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处对 $\boldsymbol { x }$ 可微 (differentiable). 并称关于 $\pmb { h }$ 的线性映射 $A _ { x } h$ 为 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处对 $\boldsymbol { x }$ 的偏微分 (partial differential), 记作

$$
\mathrm {d} _ {x} f \left(x _ {0}, y _ {0}\right) = A _ {x} h.
$$

容易知道 $A _ { x }$ 就是 $f$ 的 Jacobi 矩阵的一个子矩阵.

# 定理 4.12

设向量值函数 $f : D \to \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n } \times \mathbb { R } ^ { p }$ 上的一个开集. 若 $\ b _ { f } = ( f _ { 1 } , f _ { 2 } , \cdot \cdot \cdot , f _ { m } )$ 在 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ 处对$\boldsymbol { x }$ 可微, 则

$$
\mathrm {d} _ {\boldsymbol {x}} f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \begin{array}{c c c c} \frac {\partial f _ {1}}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \frac {\partial f _ {1}}{\partial x _ {2}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \\ \frac {\partial f _ {2}}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \frac {\partial f _ {2}}{\partial x _ {2}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {2}}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \\ \vdots & \vdots & & \vdots \\ \frac {\partial f _ {m}}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \frac {\partial f _ {m}}{\partial x _ {2}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {m}}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \end{array} \right] \left[ \begin{array}{c} \mathrm {d} x _ {1} \\ \mathrm {d} x _ {2} \\ \vdots \\ \mathrm {d} x _ {n} \end{array} \right].
$$

为了记号简洁, 可以令

$$
\boldsymbol {J} _ {\boldsymbol {x}} \boldsymbol {f} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \begin{array}{c c c} \frac {\partial f _ {1}}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \\ \vdots & & \vdots \\ \frac {\partial f _ {m}}{\partial x _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {m}}{\partial x _ {n}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \end{array} \right], \qquad \boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {f} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \begin{array}{c c c} \frac {\partial f _ {1}}{\partial y _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {1}}{\partial y _ {p}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \\ \vdots & & \vdots \\ \frac {\partial f _ {m}}{\partial y _ {1}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) & \dots & \frac {\partial f _ {m}}{\partial y _ {p}} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \end{array} \right].
$$

不难看出, 若 $f$ 在 $( \boldsymbol { \mathfrak { x } } _ { 0 } , \boldsymbol { \mathfrak { y } } _ { 0 } )$ 可微, 则

$$
J f \left(x _ {0}, y _ {0}\right) = \left[ J _ {x} f \left(x _ {0}, y _ {0}\right), J _ {y} f \left(x _ {0}, y _ {0}\right) \right].
$$

反之, 若向量值函数 $J _ { x } f$ 和 $J _ { y } f$ 在 $( \boldsymbol { \mathfrak { x } } _ { 0 } , \boldsymbol { \mathfrak { y } } _ { 0 } )$ 处连续, 则 $f$ 在 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 处可微.

从微分的定义看出,只要有范数就可以定义映射的微分,换句话说,在一般的赋范线性空间(一般是Banana空间) 之间的映射都可以定义可微性, 这样一来微分的思想就可以推广到无穷维空间.

# 定义 4.11 (可微映射)

设赋范线性空间 $( V _ { 1 } , N _ { 1 } )$ 到 $( V _ { 2 } , N _ { 2 } )$ 的映射 $f$ . 给定 $\pmb { x } _ { 0 } \in V _ { 1 }$ . 若存在线性映射 $\mathcal { A } : V _ { 1 } \to V _ { 2 }$ 使得

$$
\lim  _ {N _ {1} (\boldsymbol {h}) \rightarrow 0} \frac {N _ {2} [ \boldsymbol {f} (\boldsymbol {x} _ {0} + \boldsymbol {h}) - \boldsymbol {f} (\boldsymbol {x} _ {0}) - \mathcal {A} \boldsymbol {h} ]}{N _ {1} (\boldsymbol {h})} = 0.
$$

则称 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微, 称线性映射 $\mathcal { A }$ 是 $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处的微分. 记作 $\mathrm { d } f ( { \pmb x } _ { 0 } ) = \mathcal { A } { \pmb h }$

注 以上定义的可微通常称为 Fréchet可微 (Fréchet differentiable). 泛函分析中将深入研究赋范空间中的可微映射.

如果要让命题4.2中的结论在 Banach 空间中定义的可微映射继续成立, 只需定义一个线性映射的范数. 设线性映射 $\mathcal { A } : V \to W$ , 令

$$
\| \mathcal {A} \| := \sup  _ {\boldsymbol {x} \in V} \frac {\| \mathcal {A} \boldsymbol {x} \|}{\| \boldsymbol {x} \|}.
$$

显然这样定义的 $\| \cdot \|$ 满足范数的三条公理.

# 命题 4.3 (映射范数的性质)

线性映射的范数满足以下性质

(1) $\| { \mathcal { A } } x \| \leq \| { \mathcal { A } } \| \| x \|$ .   
(2) $\| \mathcal { A B } \| \leq \| \mathcal { A } \| \| \mathcal { B } \| .$

证明 (1) 由于

$$
\frac {\| \mathcal {A} x \|}{\| x \|} \leq \sup  _ {x} \frac {\| \mathcal {A} x \|}{\| x \|} = \| \mathcal {A} \|.
$$

因此 $\| { \mathcal { A } } x \| \leq \| { \mathcal { A } } \| \| x \|$ .

(2) 由 (1) 可知

$$
\frac {\| \mathcal {A} \mathcal {B} \boldsymbol {x} \|}{\| \boldsymbol {x} \|} \leq \frac {\| \mathcal {A} \| \| \mathcal {B} \boldsymbol {x} \|}{\| \boldsymbol {x} \|} \leq \frac {\| \mathcal {A} \| \| \mathcal {B} \| \| \boldsymbol {x} \|}{\| \boldsymbol {x} \|} = \| \mathcal {A} \| \| \mathcal {B} \|, \quad \forall \boldsymbol {x}.
$$

因此

$$
\| \mathcal {A} \mathcal {B} \| = \sup  _ {x} \frac {\| \mathcal {A} \mathcal {B} x \|}{\| x \|} \leq \| \mathcal {A} \| \| \mathcal {B} \|.
$$

注 以上定义的范数要求 $\| { \boldsymbol x } \| \neq 0$ .

以上定义的线性映射的范数和矩阵范数满足相同的性质, 因此命题4.2中 (1) 仍旧成立:

$$
\mathcal {J} (\mathcal {A} f) = \mathcal {A J} f.
$$

这里的 $\mathcal { T } f$ 是一个线性映射, 不再是矩阵. 这样一来这个性质就可以推广到无穷维空间.

# 4.2 导数和微分的计算

接下来讨论多元函数导数和微分的计算. 从形式上看多元函数公式和一元函数是一样的.

# 4.2.1 链式法则

下面讨论多元函数的链式法则. 先看最简单的情况. 设 $n$ 元可微函数

$$
u = f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right),
$$

其中 $x _ { i }$ 都是 $t$ 的可微函数: $x _ { i } = x _ { i } ( t ) ~ ( i = 1 , 2 , \cdot \cdot \cdot , n )$ . 于是就有关于 $t$ 的复合函数

$$
u = f [ x _ {1} (t), x _ {2} (t), \dots , x _ {n} (t) ].
$$

设 $t$ 有一个增量 $\Delta t$ , 令

$$
\Delta x _ {i} = x _ {i} (t + \Delta t) - x _ {i} (t), \quad i = 1, 2, \dots , n.
$$

再令

$$
\Delta u = f \left(x _ {1} + \Delta x _ {1}, x _ {2} + \Delta x _ {2}, \dots , x _ {n} + \Delta x _ {n}\right) - f \left(x _ {1}, x _ {2}, \dots , x _ {n}\right).
$$

由于 $u$ 可微, 故

$$
\Delta u = \sum_ {i = 1} ^ {n} \frac {\partial u}{\partial x _ {i}} \Delta x _ {i} + \sum_ {i = 1} ^ {n} \varepsilon_ {i} \Delta x _ {i},
$$

其中 $\varepsilon _ { i } \to 0$ ( (Δ??1, Δ??2, · · · , Δ????) → 0) $( i = 1 , 2 , \cdots , n )$ . 在上式两边除以 $\Delta t$ 得

$$
\frac {\Delta u}{\Delta t} = \sum_ {i = 1} ^ {n} \frac {\partial u}{\partial x _ {i}} \frac {\Delta x _ {i}}{\Delta t} + \sum_ {i = 1} ^ {n} \varepsilon_ {i} \frac {\Delta x _ {i}}{\Delta t}.
$$

令 $\Delta t \to 0$ 即得

$$
\frac {\mathrm {d} u}{\mathrm {d} t} = \sum_ {i = 1} ^ {n} \frac {\partial u}{\partial x _ {i}} \frac {\mathrm {d} x _ {i}}{\mathrm {d} t}.
$$

以上结论可以写成矩阵形式 (这样做的好处下一节将会看到):

$$
\frac {\mathrm {d} u}{\mathrm {d} t} = \left[ \frac {\partial u}{\partial x _ {1}}, \frac {\partial u}{\partial x _ {2}}, \dots , \frac {\partial u}{\partial x _ {n}} \right] \left[ \begin{array}{c} \frac {\mathrm {d} x _ {1}}{\mathrm {d} t} \\ \frac {\mathrm {d} x _ {2}}{\mathrm {d} t} \\ \vdots \\ \frac {\mathrm {d} x _ {n}}{\mathrm {d} t} \end{array} \right]
$$

进一步, 如果 $x _ { i }$ 也是多元函数. 那么如果对 $x _ { i }$ 的某个变量求偏导本质上和求一元函数的导数一样, 因此上面的公式可以推广. 下面正式给出多元函数的链式法则.

# 定理 4.13 (多元函数的链式法则)

设 $m$ 元可微函数

$$
y = f \left(x _ {1}, x _ {2}, \dots , x _ {m}\right),
$$

其中 $x ^ { i }$ 都是 $n$ 元可微函数

$$
x _ {i} = g _ {i} \left(t _ {1}, t _ {2}, \dots , t _ {n}\right), \quad i = 1, 2, \dots , m.
$$

则复合函数

$$
y = f \left[ g _ {1} \left(t _ {1}, t _ {2}, \dots , t _ {n}\right), \dots , g ^ {m} \left(t _ {1}, t _ {2}, \dots , t _ {n}\right) \right]
$$

是一个 $n$ 元可微函数, 且

$$
\frac {\partial y}{\partial t _ {i}} = \frac {\partial f}{\partial x _ {1}} \frac {\partial x _ {1}}{\partial t _ {i}} + \frac {\partial f}{\partial x _ {2}} \frac {\partial x _ {2}}{\partial t _ {i}} + \dots + \frac {\partial f}{\partial x _ {n}} \frac {\partial x _ {n}}{\partial t _ {i}}, i = 1, 2, \dots , n.
$$

注 以上结论可以用矩阵表示为

$$
\left[ \frac {\partial y}{\partial t _ {1}}, \frac {\partial y}{\partial t _ {2}}, \dots , \frac {\partial y}{\partial t _ {m}} \right] = \left[ \frac {\partial f}{\partial x _ {1}}, \frac {\partial f}{\partial x _ {2}}, \dots , \frac {\partial f}{\partial x _ {n}} \right] \left[ \begin{array}{c c c c} \frac {\partial x _ {1}}{\partial t _ {1}} & \frac {\partial x _ {1}}{\partial t _ {2}} & \dots & \frac {\partial x _ {1}}{\partial t ^ {m}} \\ \frac {\partial x _ {2}}{\partial t _ {1}} & \frac {\partial x _ {2}}{\partial t _ {2}} & \dots & \frac {\partial x _ {2}}{\partial t ^ {m}} \\ \vdots & \vdots & & \vdots \\ \frac {\partial x _ {n}}{\partial t _ {1}} & \frac {\partial x _ {n}}{\partial t _ {2}} & \dots & \frac {\partial x _ {n}}{\partial t _ {m}} \end{array} \right]. \tag {4.4}
$$

令向量值函数 $\pmb { g } = ( g _ { 1 } , g _ { 2 } , \cdot \cdot \cdot , g _ { m } )$ , 则等式4.4可以用 Jacobi 矩阵简洁地写出:

$$
\boldsymbol {J} (f \circ \boldsymbol {g}) = \boldsymbol {J} f \boldsymbol {J} \boldsymbol {g},
$$

其中 $y = f \circ g$ . 如果把 $J$ 看作是作用在映射上的算子, 则它具有类似于 “同态” 的性质, 我们称这样的性质为 “函子性质”.

需要注意如果定理中的函数 $y$ 不可微, 则链式法则不一定成立. 下面看一个反例.

例 4.19 设函数 $u = f ( x , y )$ 满足

$$
f (x, y) = \left\{ \begin{array}{c c} \frac {x ^ {2} y}{x ^ {2} + y ^ {2}}, & x ^ {2} + y ^ {2} > 0 \\ 0, & x ^ {2} + y ^ {2} = 0 \end{array} \right.,
$$

其中 $x = t$ , $y = t$ . 求 $u _ { t } ^ { \prime }$

解 由题设可知

$$
u = f (t, t) = \left\{ \begin{array}{c c} \frac {t ^ {2} t}{t ^ {2} + t ^ {2}}, & t \neq 0 \\ 0, & t = 0 \end{array} \right. = \frac {1}{2} t.
$$

于是可知 $u _ { t } ^ { \prime } = 1 / 2$ .

注 例4.13已经计算过 $f _ { x } ^ { \prime } = f _ { y } ^ { \prime } = 0$ . 如果用链式法则计算得到

$$
\frac {\mathrm {d} u}{\mathrm {d} t} = \frac {\partial f}{\partial x} \frac {\mathrm {d} x}{\mathrm {d} t} + \frac {\partial f}{\partial x} \frac {\mathrm {d} x}{\mathrm {d} t} = 0.
$$

计算结果错误的原因是 $f$ 在 $( 0 , 0 )$ 处不可微 (见例4.13), 因此不能使用链式法则.

下面举例说明具体的计算方法.

# 例 4.20 设幂指函数

$$
u = x ^ {y}.
$$

其中 $x = x ( t )$ , $y = y ( t )$ . 求 $u _ { t } ^ { \prime }$ .

解 由链式法则计算可知

$$
\frac {\mathrm {d} u}{\mathrm {d} t} = \frac {\partial u}{\mathrm {d} x} \frac {\mathrm {d} x}{\mathrm {d} t} + \frac {\partial u}{\mathrm {d} y} \frac {\mathrm {d} y}{\mathrm {d} t} = y x ^ {y - 1} x _ {t} ^ {\prime} + x ^ {y} y _ {t} ^ {\prime} \ln x = x ^ {y} \left(\frac {y x _ {t} ^ {\prime}}{x} + y _ {t} ^ {\prime} \ln x\right).
$$

注 以上结论和对数求导法得动的结论一致.

很多时候, 题中没有给我们具体的函数解析式, 只给了变量之间的依赖关系.

例 4.21 设可微函数 $u = f ( x , y , z )$ , 其中

$$
x = r - s, \qquad y = s - t, \qquad z = t - r
$$

求 $u _ { r } ^ { \prime } , u _ { s } ^ { \prime } , u _ { t } ^ { \prime }$ .

解 解法一 由链式法则计算可知

$$
\frac {\partial u}{\partial r} = \frac {\partial f}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial f}{\partial y} \frac {\partial y}{\partial r} + \frac {\partial f}{\partial z} \frac {\partial z}{\partial r} = \frac {\partial f}{\partial x} - \frac {\partial f}{\partial z},
$$

$$
\frac {\partial u}{\partial s} = \frac {\partial f}{\partial x} \frac {\partial x}{\partial s} + \frac {\partial f}{\partial y} \frac {\partial y}{\partial s} + \frac {\partial f}{\partial z} \frac {\partial z}{\partial s} = - \frac {\partial f}{\partial x} + \frac {\partial f}{\partial y},
$$

$$
\frac {\partial u}{\partial t} = \frac {\partial f}{\partial x} \frac {\partial x}{\partial t} + \frac {\partial f}{\partial y} \frac {\partial y}{\partial t} + \frac {\partial f}{\partial z} \frac {\partial z}{\partial t} = - \frac {\partial f}{\partial y} + \frac {\partial f}{\partial z}.
$$

解法二 由 Jacobi 矩阵等式可知:

$$
\begin{array}{l} \left[ \frac {\partial f}{\partial r}, \frac {\partial f}{\partial s}, \frac {\partial f}{\partial t} \right] = \left[ \frac {\partial f}{\partial x}, \frac {\partial f}{\partial y}, \frac {\partial f}{\partial z} \right] \left[ \begin{array}{c c c} \frac {\partial x}{\partial r} & \frac {\partial x}{\partial s} & \frac {\partial x}{\partial t} \\ \frac {\partial y}{\partial r} & \frac {\partial y}{\partial s} & \frac {\partial y}{\partial t} \\ \frac {\partial z}{\partial r} & \frac {\partial z}{\partial s} & \frac {\partial z}{\partial t} \end{array} \right] = \left[ \frac {\partial f}{\partial x}, \frac {\partial f}{\partial y}, \frac {\partial f}{\partial z} \right] \left[ \begin{array}{r r r} 1 & - 1 & 0 \\ 0 & 1 & - 1 \\ - 1 & 0 & 1 \end{array} \right] \\ = \left[ \frac {\partial f}{\partial x} - \frac {\partial f}{\partial z}, - \frac {\partial f}{\partial x} + \frac {\partial f}{\partial y}, - \frac {\partial f}{\partial y} + \frac {\partial f}{\partial z} \right] \\ \end{array}
$$

于是可知

$$
\frac {\partial u}{\partial r} = \frac {\partial f}{\partial x} - \frac {\partial f}{\partial z}, \quad \frac {\partial u}{\partial s} = - \frac {\partial f}{\partial x} + \frac {\partial f}{\partial y}, \quad \frac {\partial u}{\partial t} = - \frac {\partial f}{\partial y} + \frac {\partial f}{\partial z}.
$$

例 4.22 设可微函数

$$
u = f (x + y + z, x ^ {2} + y ^ {2} + z ^ {2}).
$$

求 $u _ { x } ^ { \prime } , u _ { y } ^ { \prime } , u _ { z } ^ { \prime }$

解 解法一 令 $\xi = x + y + z$ , $\eta = x ^ { 2 } + y ^ { 2 } + z ^ { 2 }$ . 由链式法则可知

$$
\frac {\partial u}{\partial x} = \frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial x} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial x} = \frac {\partial f}{\partial \xi} + 2 x \frac {\partial f}{\partial \eta}.
$$

$$
\frac {\partial u}{\partial y} = \frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial y} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial y} = \frac {\partial f}{\partial \xi} + 2 y \frac {\partial f}{\partial \eta}.
$$

$$
\frac {\partial u}{\partial z} = \frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial z} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial z} = \frac {\partial f}{\partial \xi} + 2 z \frac {\partial f}{\partial \eta}.
$$

解法二 令 ?? = ?? + ?? + ??, $\eta = x ^ { 2 } + y ^ { 2 } + z ^ { 2 }$ . 由 Jacobi 矩阵等式可知

$$
\begin{array}{l} \left[ \frac {\partial u}{\partial x}, \frac {\partial u}{\partial y}, \frac {\partial u}{\partial z} \right] = \left[ \frac {\partial f}{\partial \xi}, \frac {\partial f}{\partial \eta} \right] \left[ \begin{array}{c c c} \frac {\partial \xi}{\partial x} & \frac {\partial \xi}{\partial y} & \frac {\partial \xi}{\partial z} \\ \frac {\partial \eta}{\partial x} & \frac {\partial \eta}{\partial y} & \frac {\partial \eta}{\partial z} \end{array} \right] = \left[ \frac {\partial f}{\partial \xi}, \frac {\partial f}{\partial \eta} \right] \left[ \begin{array}{c c c} 1 & 1 & 1 \\ 2 x & 2 y & 2 z \end{array} \right] \\ = \left[ \frac {\partial f}{\partial \xi} + 2 x \frac {\partial f}{\partial \eta}, \frac {\partial f}{\partial \xi} + 2 y \frac {\partial f}{\partial \eta}, \frac {\partial f}{\partial \xi} + 2 z \frac {\partial f}{\partial \eta} \right]. \\ \end{array}
$$

于是可知

$$
\frac {\partial u}{\partial x} = \frac {\partial f}{\partial \xi} + 2 x \frac {\partial f}{\partial \eta}, \quad \frac {\partial u}{\partial y} = \frac {\partial f}{\partial \xi} + 2 y \frac {\partial f}{\partial \eta}, \quad \frac {\partial u}{\partial z} = \frac {\partial f}{\partial \xi} + 2 z \frac {\partial f}{\partial \eta}.
$$

有时候函数变量的依赖关系比较复杂, 不是单纯的 “两层”. 而是会出现 “层级混合”.

# 例 4.23 设可微函数

$$
u = f (x, y, z).
$$

其中 $y = \varphi ( x )$ , $z = \psi ( x )$ . 求 $u _ { x } ^ { \prime }$ .

解 把 $x$ 看作是自身的函数, 由链式法则可知

$$
\frac {\partial u}{\partial x} = \frac {\partial f}{\partial x} \frac {\partial x}{\partial x} + \frac {\partial f}{\partial y} \frac {\partial \varphi}{\partial x} + \frac {\partial f}{\partial z} \frac {\partial \psi}{\partial x} = \frac {\partial f}{\partial x} + \frac {\partial f}{\partial y} \frac {\partial \varphi}{\partial x} + \frac {\partial f}{\partial z} \frac {\partial \psi}{\partial x}.
$$

# 例 4.24 设可微函数

$$
u = f (x, y, z).
$$

其中 $z = \varphi ( x , y )$ . 求 $u _ { x } ^ { \prime } , u _ { y } ^ { \prime }$ .

解 由链式法则可知

$$
\frac {\partial u}{\partial x} = \frac {\partial f}{\partial x} \frac {\partial x}{\partial x} + \frac {\partial f}{\partial y} \frac {\partial y}{\partial x} + \frac {\partial f}{\partial z} \frac {\partial \varphi}{\partial x} = \frac {\partial f}{\partial x} + \frac {\partial f}{\partial z} \frac {\partial \varphi}{\partial x}.
$$

对称可知

$$
\frac {\partial u}{\partial y} = \frac {\partial f}{\partial y} + \frac {\partial f}{\partial z} \frac {\partial \varphi}{\partial y}.
$$

例 4.25 设函数 $u = f ( x , y , t )$ , 其中 $x = \varphi ( s , t )$ , $y = \psi ( s , t )$ , 求 $u _ { s } ^ { \prime }$ 和 $u _ { t } ^ { \prime }$ .

解 由链式法则可知

$$
\frac {\partial u}{\partial s} = \frac {\partial f}{\partial x} \frac {\partial \varphi}{\partial s} + \frac {\partial f}{\partial y} \frac {\partial \psi}{\partial s}, \quad \frac {\partial u}{\partial t} = \frac {\partial f}{\partial x} \frac {\partial \varphi}{\partial t} + \frac {\partial f}{\partial y} \frac {\partial \psi}{\partial t} + \frac {\partial f}{\partial t}.
$$

注 需要注意, 计算 $u _ { t } ^ { \prime }$ 时, 如果 $f$ 写成 $u$ 则

$$
\frac {\partial u}{\partial t} = \frac {\partial u}{\partial x} \frac {\partial \varphi}{\partial t} + \frac {\partial u}{\partial y} \frac {\partial \psi}{\partial t} + \frac {\partial u}{\partial t}.
$$

这样等式右侧也会出现 $\partial u / \partial t$ , 而它的意义和等式左侧的 $\partial u / \partial t$ 不同: 左边的 $\partial u / \partial t$ 表示把 $u$ 看作关于 $s$ 和 $t$ 的二元复合函数, 然后对 $t$ 求偏导. 右侧的 $\frac { \partial f } { \partial t }$ 表示三元函数 $f$ 对第三个位置的 $t$ 求偏导. 因此在用链式法则求复合函数的偏导数时应尽量写函数名.

现在我们来总结一下复合函数偏导数的计算方法.

(1) 画出复合函数的变量依赖关系图. 如图4.9是上例中的变量关系图.

![](images/df9bc4d60e7c3ef05f11a053f3044ca5f9b33477d96a16afd9e6f5dbcff57573.jpg)  
图 4.9: 多元函数链式法则.

(2) 根据关系图确定复合函数的最终自变量. 图中, $u$ 分出三条 “路” 分别通往 $x , y , t .$ 而 $x$ 又分出两条路通往 ??和 $t ,$ , 同样地 $y$ 也分出两条路通往 $s$ 和 $t .$ 因此 $u$ 最终由 $s$ 和 $t$ 决定, 是 $s$ 和 $t$ 的函数. 因此 $u$ 有两个偏导数.  
(3) 先看关于 $t$ 的偏导, 如图从 $u$ 通往 $t$ 的路有三条, 因此计算时分成三块, 用加号连接. 每一条路又会分成若干段, 用链式法则把每一段都写出来. 类似地可以看到从 $u$ 通往 $s$ 的路只有两条, 因此计算时分成两块. 这个计算过程可以类比计数原理中的加法原理和乘法原理.

例 4.26 设函数 $u ( x , y )$ 有连续的一阶偏导数, 其中

$$
x = r \cos \theta , \qquad y = r \sin \theta .
$$

则

$$
\left(\frac {\partial u}{\partial x}\right) ^ {2} + \left(\frac {\partial u}{\partial y}\right) ^ {2} = \left(\frac {\partial u}{\partial r}\right) ^ {2} + \frac {1}{r ^ {2}} \left(\frac {\partial u}{\partial \theta}\right) ^ {2}.
$$

证明 证法一 由链式法则可知

$$
\frac {\partial u}{\partial r} = \frac {\partial u}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial u}{\partial y} \frac {\partial y}{\partial r} = \frac {\partial u}{\partial x} \cos \theta + \frac {\partial u}{\partial y} \sin \theta .
$$

$$
\frac {\partial u}{\partial \theta} = \frac {\partial u}{\partial x} \frac {\partial x}{\partial \theta} + \frac {\partial u}{\partial y} \frac {\partial y}{\partial \theta} = - \frac {\partial u}{\partial x} r \sin \theta + \frac {\partial u}{\partial y} r \cos \theta .
$$

于是计算可知

$$
\left(\frac {\partial u}{\partial r}\right) ^ {2} + \frac {1}{r ^ {2}} \left(\frac {\partial u}{\partial \theta}\right) ^ {2} = \left(\frac {\partial u}{\partial x}\right) ^ {2} + \left(\frac {\partial u}{\partial y}\right) ^ {2}.
$$

证法二 我们有 Jacobi 矩阵等式:

$$
\left[ \frac {\partial u}{\partial r}, \frac {\partial u}{\partial \theta} \right] = \left[ \frac {\partial u}{\partial x}, \frac {\partial u}{\partial y} \right] \left[ \begin{array}{l l} \frac {\partial x}{\partial r} & \frac {\partial x}{\partial \theta} \\ \frac {\partial y}{\partial r} & \frac {\partial y}{\partial \theta} \end{array} \right] = \left[ \frac {\partial u}{\partial x}, \frac {\partial u}{\partial y} \right] \left[ \begin{array}{l l} \cos \theta & - r \sin \theta \\ \sin \theta & r \cos \theta \end{array} \right].
$$

于是可知

$$
\left[ \frac {\partial u}{\partial x}, \frac {\partial u}{\partial y} \right] = \left[ \frac {\partial u}{\partial r}, \frac {\partial u}{\partial \theta} \right] \left[ \begin{array}{c c} \cos \theta & - r \sin \theta \\ \sin \theta & r \cos \theta \end{array} \right] ^ {- 1} = \frac {1}{r} \left[ \frac {\partial u}{\partial r}, \frac {\partial u}{\partial \theta} \right] \left[ \begin{array}{c c} r \cos \theta & r \sin \theta \\ - \sin \theta & \cos \theta \end{array} \right].
$$

于是

$$
\left[ \begin{array}{c} \frac {\partial u}{\partial x} \\ \frac {\partial u}{\partial y} \end{array} \right] = \frac {1}{r} \left[ \begin{array}{c c} r \cos \theta & - \sin \theta \\ r \sin \theta & \cos \theta \end{array} \right] \left[ \begin{array}{c} \frac {\partial u}{\partial r} \\ \frac {\partial u}{\partial \theta} \end{array} \right].
$$

于是可知

$$
\begin{array}{l} \left(\frac {\partial u}{\partial x}\right) ^ {2} + \left(\frac {\partial u}{\partial y}\right) ^ {2} = \left[ \frac {\partial u}{\partial x}, \frac {\partial u}{\partial y} \right] \left[ \begin{array}{l} \frac {\partial u}{\partial x} \\ \frac {\partial u}{\partial y} \end{array} \right] = \frac {1}{r ^ {2}} \left[ \frac {\partial u}{\partial r}, \frac {\partial u}{\partial \theta} \right] \left[ \begin{array}{c c} r \cos \theta & r \sin \theta \\ - \sin \theta & \cos \theta \end{array} \right] \left[ \begin{array}{c c} r \cos \theta & - \sin \theta \\ r \sin \theta & \cos \theta \end{array} \right] \left[ \begin{array}{l} \frac {\partial u}{\partial r} \\ \frac {\partial u}{\partial \theta} \end{array} \right] \\ = \frac {1}{r ^ {2}} \left[ \frac {\partial u}{\partial r}, \frac {\partial u}{\partial \theta} \right] \left[ \begin{array}{l l} r ^ {2} & 0 \\ 0 & 1 \end{array} \right] \left[ \begin{array}{l} \frac {\partial u}{\partial r} \\ \frac {\partial u}{\partial \theta} \end{array} \right] = \left[ \frac {\partial u}{\partial r}, \frac {1}{r ^ {2}} \frac {\partial u}{\partial \theta} \right] \left[ \begin{array}{l} \frac {\partial u}{\partial r} \\ \frac {\partial u}{\partial \theta} \end{array} \right] = \left(\frac {\partial u}{\partial r}\right) ^ {2} + \frac {1}{r ^ {2}} \left(\frac {\partial u}{\partial \theta}\right) ^ {2}. \\ \end{array}
$$

下面来看一个有趣的例子.

例 4.27 行列式的微分 设 $n$ 阶行列式

$$
y = \left| \begin{array}{c c c c} a _ {1 1} & a _ {1 2} & \dots & a _ {1 n} \\ a _ {2 1} & a _ {2 2} & \dots & a _ {2 n} \\ \vdots & \vdots & & \vdots \\ a _ {n 1} & a _ {n 2} & \dots & a _ {n n} \end{array} \right|,
$$

其中 $a _ { i k }$ $( i , k = 1 , 2 , \cdots , n )$ 都是 $t$ 的可微函数. 求 $y _ { t } ^ { \prime }$ .

解 将行列式按第 $k$ 列展开得

$$
y = \sum_ {i = 1} ^ {n} A _ {i k} a _ {i k}.
$$

其中 $\boldsymbol { A } _ { i k }$ 是第 $i$ 行第 $k$ 列的代数余子式. 因此

$$
\frac {\partial y}{\partial a _ {i k}} = A _ {i k}.
$$

由链式法则可知

$$
\frac {\mathrm {d} y}{\mathrm {d} t} = \sum_ {k = 1} ^ {n} \sum_ {i = 1} ^ {n} \frac {\partial y}{\partial a _ {i k}} \frac {\mathrm {d} a _ {i k}}{\mathrm {d} t} = \sum_ {k = 1} ^ {n} \sum_ {i = 1} ^ {n} A _ {i k} \frac {\mathrm {d} a _ {i k}}{\mathrm {d} t}.
$$

注 容易看出

$$
\sum_ {i = 1} ^ {n} \boldsymbol {A} _ {i k} \frac {\mathrm {d} a _ {i k}}{\mathrm {d} t} = \left| \begin{array}{c c c c c} a _ {1 1} & \dots & a _ {1 k} ^ {\prime} & \dots & a _ {1 n} \\ a _ {2 1} & \dots & a _ {2 k} ^ {\prime} & \dots & a _ {2 n} \\ \vdots & & \vdots & & \vdots \\ a _ {n 1} & \dots & a _ {n k} ^ {\prime} & \dots & a _ {n n} \end{array} \right|.
$$

因此 $y ^ { \prime }$ 等于 $n$ 个行列式的和, 其中第 $k$ 个行列式是由原行列式的第 $k$ 列求导后得到的.

现在来看向量值函数的链式法则. 设可微的向量值函数 $\mathbb { R } ^ { m } \to \mathbb { R } ^ { l } : f = ( f _ { 1 } , f _ { 2 } , \cdot \cdot \cdot , f _ { \ell } )$ , 其中每一个分量函数$f _ { i }$ 都是 $m$ 元函数:

$$
y _ {i} = f _ {i} \left(x _ {1}, x _ {2}, \dots , x _ {m}\right), \quad i = 1, 2, \dots , \ell .
$$

设其中 $x _ { i }$ 都是 $n$ 元函数

$$
x _ {i} = g _ {i} \left(t _ {1}, t _ {2}, \dots , t _ {n}\right), \quad i = 1, 2, \dots , m.
$$

令 $\pmb { g } = ( g _ { 1 } , g _ { 2 } , \cdots , g _ { n } ) .$ . 若 $\pmb { g }$ 也是一个可微向量值函数, 则复合映射 $f \circ g$ 是可微映射吗? 我们知道 $f$ 可微当且仅当分量函数 $f _ { i }$ $\dot { \mathbf { \rho } } _ { i } \left( i = 1 , 2 , \cdots , \ell \right)$ 可微, 根据定理4.13可知

$$
\boldsymbol {J} \left(f _ {i} \circ \boldsymbol {g}\right) = \boldsymbol {J} f _ {i} \boldsymbol {J} \boldsymbol {g}, \quad i = 1, 2, \dots , \ell .
$$

这表明 $f \circ g$ 的每一个分量函数 $f _ { i } \circ g$ $f _ { i } \circ g \ ( i = 1 , 2 , \cdots , \ell )$ 都可微, 于是可知复合映射 $f \circ g$ 可微, 且

$$
\boldsymbol {J} (\boldsymbol {f} \circ \boldsymbol {g}) = \left[ \begin{array}{c} \boldsymbol {J} (f _ {1} \circ \boldsymbol {g}) \\ \boldsymbol {J} (f _ {2} \circ \boldsymbol {g}) \\ \vdots \\ \boldsymbol {J} (f _ {\ell} \circ \boldsymbol {g}) \end{array} \right] = \left[ \begin{array}{c} \boldsymbol {J} f _ {1} \boldsymbol {J} \boldsymbol {g} \\ \boldsymbol {J} f _ {2} \boldsymbol {J} \boldsymbol {g} \\ \vdots \\ \boldsymbol {J} f _ {\ell} \boldsymbol {J} \boldsymbol {g} \end{array} \right] = \left[ \begin{array}{c} \boldsymbol {J} f _ {1} \\ \boldsymbol {J} f _ {2} \\ \vdots \\ \boldsymbol {J} f _ {\ell} \end{array} \right] \boldsymbol {J} \boldsymbol {g} = \boldsymbol {J} f \boldsymbol {J} \boldsymbol {g}.
$$

于是就得到了向量值函数的链式法则. 以上证法是从多元函数的链式法则直接推演过来的, 我们还可以直接用向量值函数微分的定义来证明, 这样的证法可以推广到更一般的情况, 因此需要掌握.

# 定理 4.14 (链式法则)

设函数 $\pmb { g } : D  \mathbb { R } ^ { m }$ $( D \subseteq \mathbb { R } ^ { n } )$ 在 $t _ { 0 }$ 处可微.向量值函数 $f : \pmb { g } ( D )  \mathbb { R } ^ { l }$ 在 $x _ { 0 }$ 处可微.若 $\boldsymbol { x } _ { 0 } = \boldsymbol { g } ( t _ { 0 } )$ ,则复合

映射 $f \circ g$ 在 $t _ { 0 }$ 处可微, 且

$$
\boldsymbol {J} (\boldsymbol {f} \circ \boldsymbol {g}) (\boldsymbol {t} _ {0}) = \boldsymbol {J} f (\boldsymbol {x} _ {0}) \boldsymbol {J} \boldsymbol {g} (\boldsymbol {t} _ {0}).
$$

证明 设 $A = J f ( x _ { 0 } )$ , $B = J g ( t _ { 0 } )$ . 只需证明

$$
\lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \frac {\| (\boldsymbol {f} \circ \boldsymbol {g}) (\boldsymbol {t} _ {0} + \boldsymbol {h}) - (\boldsymbol {f} \circ \boldsymbol {g}) (\boldsymbol {t} _ {0}) - \boldsymbol {A B h} \|}{\| \boldsymbol {h} \|} = 0. \tag {4.5}
$$

由于 $\pmb { g }$ 和 $f$ 分别在 $t _ { 0 }$ 和 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 处可微, 故

$$
\boldsymbol {g} \left(\boldsymbol {t} _ {0} + \boldsymbol {h}\right) - \boldsymbol {g} \left(\boldsymbol {t} _ {0}\right) = \boldsymbol {B} \boldsymbol {h} + \boldsymbol {r} (\boldsymbol {h}).
$$

$$
\boldsymbol {f} (\boldsymbol {x} _ {0} + \boldsymbol {k}) - \boldsymbol {f} (\boldsymbol {x} _ {0}) = \boldsymbol {A} \boldsymbol {k} + \boldsymbol {s} (\boldsymbol {k}).
$$

其中

$$
\lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \frac {\| \boldsymbol {r} (\boldsymbol {h}) \|}{\| \boldsymbol {h} \|} = 0, \quad \lim  _ {\| \boldsymbol {k} \| \rightarrow 0} \frac {\| \boldsymbol {s} (\boldsymbol {k}) \|}{\| \boldsymbol {k} \|} = 0.
$$

令

$$
\varepsilon (\boldsymbol {h}) = \frac {\| \boldsymbol {r} (\boldsymbol {h}) \|}{\| \boldsymbol {h} \|}, \qquad \delta (\boldsymbol {k}) = \frac {\| \boldsymbol {s} (\boldsymbol {k}) \|}{\| \boldsymbol {k} \|}.
$$

对于给定的 $\pmb { h }$ , 令 $k = g ( t _ { 0 } + \pmb { h } ) - g ( t _ { 0 } )$ , 则

$$
\| \boldsymbol {k} \| = \| \boldsymbol {g} (t _ {0} + \boldsymbol {h}) - \boldsymbol {g} (t _ {0}) \| = \| \boldsymbol {B} \boldsymbol {h} + \boldsymbol {r} (\boldsymbol {h}) \| \leq \| \boldsymbol {B} \boldsymbol {h} \| + \| \boldsymbol {r} (\boldsymbol {h}) \| = \| \boldsymbol {B} \boldsymbol {h} \| + \varepsilon (\boldsymbol {h}) \| \boldsymbol {h} \| \leq [ \| \boldsymbol {B} \| + \varepsilon (\boldsymbol {h}) ] \| \boldsymbol {h} \|.
$$

于是

$$
\begin{array}{l} \left\| \left(\boldsymbol {f} \circ \boldsymbol {g}\right) \left(\boldsymbol {t} _ {0} + \boldsymbol {h}\right) - \left(\boldsymbol {f} \circ \boldsymbol {g}\right) \left(\boldsymbol {t} _ {0}\right) - \boldsymbol {A B h} \right\| \\ = \| f [ \boldsymbol {g} (\boldsymbol {t} _ {0} + \boldsymbol {h}) ] - \boldsymbol {f} [ \boldsymbol {g} (\boldsymbol {t} _ {0}) ] - \boldsymbol {A B h} \| = \| \boldsymbol {f} (\boldsymbol {x} _ {0} + \boldsymbol {k}) - \boldsymbol {f} (\boldsymbol {x} _ {0}) - \boldsymbol {A B h} \| = \| \boldsymbol {A k} + s (\boldsymbol {k}) - \boldsymbol {A B h} \| \\ = \| A (\boldsymbol {k} - \boldsymbol {B h}) + s (\boldsymbol {k}) \| \leq \| A (\boldsymbol {k} - \boldsymbol {B h}) \| + \| s (\boldsymbol {k}) \| = \| A r (\boldsymbol {h}) \| + \delta (\boldsymbol {k}) \| \boldsymbol {k} \| \leq \| A \| \| r (\boldsymbol {h}) \| + \delta (\boldsymbol {k}) \| \boldsymbol {k} \| \\ \leq \| A \| \varepsilon (\boldsymbol {h}) \| \boldsymbol {h} \| + \delta (\boldsymbol {k}) \| \boldsymbol {k} \| \leq \| A \| \varepsilon (\boldsymbol {h}) \| \boldsymbol {h} \| + \delta (\boldsymbol {k}) [ \| \boldsymbol {B} \| + \varepsilon (\boldsymbol {h}) ] \| \boldsymbol {h} \|. \\ \end{array}
$$

由于 $\begin{array} { r } { \operatorname* { l i m } _ { \| \pmb { h } \|  0 } \varepsilon ( \pmb { h } ) = 0 } \end{array}$ , $\begin{array} { r } { \operatorname* { l i m } _ { \| \pmb { k } \|  0 } \delta ( \pmb { k } ) = 0 } \end{array}$ , 因此

$$
\lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \frac {\| (\boldsymbol {f} \circ \boldsymbol {g}) (\boldsymbol {t} _ {0} + \boldsymbol {h}) - (\boldsymbol {f} \circ \boldsymbol {g}) (\boldsymbol {t} _ {0}) - \boldsymbol {A B h} \|}{\| \boldsymbol {h} \|} = \lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \left\{\| \boldsymbol {A} \| \varepsilon (\boldsymbol {h}) + \delta (\boldsymbol {k}) [ \| \boldsymbol {B} \| + \varepsilon (\boldsymbol {h}) ] \right\} = 0.
$$

注 以上证明用到了向量范数的三角不等式 (命题2.3) 和矩阵范数的不等式 (3.6):

$$
\left\| \alpha + \boldsymbol {\beta} \right\| \leq \left\| \alpha \right\| + \left\| \boldsymbol {\beta} \right\|, \quad \left\| \boldsymbol {A} \boldsymbol {B} \right\| \leq \left\| \boldsymbol {A} \right\| \left\| \boldsymbol {B} \right\|.
$$

# 4.2.2 一阶微分形式不变性

在一元函数中, 我们讨论过一阶微分形式不变性. 下面来看这个性质是否可以推广到多元函数.

设函数 $f ( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } )$ 可微, 则

$$
\mathrm {d} f = \sum_ {i = 1} ^ {n} \frac {\partial f}{\partial x _ {i}} \mathrm {d} x _ {i}.
$$

假设 $x _ { 1 } , x _ { 2 } , \cdots , x _ { n }$ 不是自变量, 而是 $t _ { 1 } , t _ { 2 } , \cdots , t _ { m }$ 的函数:

$$
x _ {i} = x _ {i} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right), \quad i = 1, 2, \dots , n.
$$

令

$$
g \left(t _ {1}, t _ {2}, \dots , t _ {m}\right) = f \left[ x _ {1} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right), x _ {2} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right), \dots , x _ {n} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right) \right].
$$

则

$$
\mathrm {d} g = \sum_ {i = 1} ^ {m} \frac {\partial g}{\partial t _ {i}} \mathrm {d} t _ {i}.
$$

由链式法则可知

$$
\frac {\partial g}{\partial t _ {i}} = \sum_ {j = 1} ^ {n} \frac {\partial f}{\partial x _ {j}} \frac {\partial x _ {j}}{\partial t _ {i}}, \quad i = 1, 2, \dots , m.
$$

因此

$$
\mathrm {d} g = \sum_ {i = 1} ^ {m} \left(\sum_ {j = 1} ^ {n} \frac {\partial f}{\partial x _ {j}} \frac {\partial x _ {j}}{\partial t _ {i}}\right) \mathrm {d} t _ {i} = \sum_ {j = 1} ^ {n} \frac {\partial f}{\partial x _ {j}} \sum_ {i = 1} ^ {m} \frac {\partial x _ {j}}{\partial t _ {i}} \mathrm {d} t _ {i} = \sum_ {j = 1} ^ {n} \frac {\partial f}{\partial x _ {j}} \mathrm {d} x _ {j}.
$$

这表明复合函数 $f$ 的微分是

$$
\mathrm {d} f = \sum_ {i = 1} ^ {n} \frac {\partial f}{\partial x _ {i}} \mathrm {d} x _ {i}.
$$

这表明无论 $x _ { 1 } , x _ { 2 } , \cdots , x _ { n }$ 是自变量, 还是 $t _ { 1 } , t _ { 2 } , \cdots , t _ { m }$ 的函数, $f$ 作为 $x _ { 1 } , x _ { 2 } , \cdots , x _ { n }$ 的函数的一阶微分在形式上是不变的. 微分的这个性质被称为一阶微分形式的不变性. 在一元微分中已经见过微分的这个性质.

微分形式不变性结合全微分等式可以大幅简化求导的计算量. 下面看两个例子.

例 4.28 设函数

$$
f (x, y) = \arctan \frac {x}{y}.
$$

求 $f _ { x } ^ { \prime }$ 和 $f _ { \mathrm { y } } ^ { \prime }$

解 解法一 直接计算可知

$$
\frac {\partial f}{\partial x} = \frac {\frac {1}{y}}{\frac {x ^ {2}}{y ^ {2}} + 1} = \frac {y}{x ^ {2} + y ^ {2}}, \quad \frac {\partial f}{\partial y} = \frac {- \frac {1}{y ^ {2}}}{\frac {x ^ {2}}{y ^ {2}} + 1} = - \frac {1}{x ^ {2} + y ^ {2}}.
$$

解法二 由一阶微分形式不变性可知

$$
\mathrm {d} f (x, y) = \mathrm {d} \arctan \frac {x}{y} = \frac {\frac {1}{y}}{1 + \left(\frac {x}{y}\right)} \mathrm {d} \left(\frac {x}{y}\right) = \frac {y}{x ^ {2} + y ^ {2}} \mathrm {d} x - \frac {x}{x ^ {2} + y ^ {2}} \mathrm {d} y.
$$

由全微分的定义可知

$$
\frac {\partial f}{\partial x} = \frac {y}{x ^ {2} + y ^ {2}}, \quad \frac {\partial f}{\partial y} = - \frac {1}{x ^ {2} + y ^ {2}}.
$$

例 4.29 设函数

$$
f (x, y, z) = \frac {x}{x ^ {2} + y ^ {2} + z ^ {2}}
$$

求 ?? 0?? , ?? 0?? , ?? 0??

解 解法一 直接计算可知

$$
\frac {\partial f}{\partial x} = \frac {\left(x ^ {2} + y ^ {2} + z ^ {2}\right) - 2 x ^ {2}}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}} = \frac {y ^ {2} + z ^ {2} - x ^ {2}}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}.
$$

对称地可知

$$
\frac {\partial f}{\partial y} = - \frac {2 x y}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}, \quad \frac {\partial f}{\partial z} = - \frac {2 x z}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}.
$$

解法二 由一阶微分形式不变性可知

$$
\mathrm {d} f (x, y, z) = \mathrm {d} \frac {x}{x ^ {2} + y ^ {2} + z ^ {2}} = \frac {\left(x ^ {2} + y ^ {2} + z ^ {2}\right) \mathrm {d} x - x \mathrm {d} \left(x ^ {2} + y ^ {2} + z ^ {2}\right)}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}
$$

$$
= \frac {y ^ {2} + z ^ {2} - x ^ {2}}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}} d x - \frac {2 x y}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}} d y - \frac {2 x z}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}} d z
$$

由全微分等式可知

$$
\frac {\partial f}{\partial x} = \frac {y ^ {2} + z ^ {2} - x ^ {2}}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}, \quad \frac {\partial f}{\partial y} = - \frac {2 x y}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}, \quad \frac {\partial f}{\partial z} = - \frac {2 x z}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {2}}.
$$

# 4.2.3 高阶偏导数

设函数 $f$ 在开集 $D$ 上的每一点处存在偏导数

$$
\mathcal {D} _ {i} f (\boldsymbol {x}) = \frac {\partial f}{\partial x _ {i}} (\boldsymbol {x}), \quad i = 1, 2, \dots , n.
$$

这称它们为 $f$ 的一阶偏导函数 . 如果这些偏导函数还可以继续求偏导, 就可以得出 $f$ 的二阶偏导函数 . 这样依次下去可以定义 $f$ 的各阶偏导数.

有 $n$ 个变量的函数的一阶偏导数有 $n$ 个, 因此它的二阶偏导数有 $n ^ { 2 }$ 个, $k$ 阶偏导数就有 $n ^ { k }$ 个. 若一阶偏导$\frac { \partial f } { \partial x _ { i } }$ $( i = 1 , 2 , \cdots , n )$ 继续对 $x _ { j }$ $( j = 1 , 2 , \cdots , n )$ 时, 记作

$$
\frac {\partial^ {2} f}{\partial x _ {i} \partial x _ {j}} := \frac {\partial}{\partial x _ {i}} \left(\frac {\partial f}{\partial x _ {j}}\right), \quad i, j = 1, 2, \dots , n.
$$

也可以记作 $f _ { x _ { j } x _ { i } } ^ { \prime \prime }$ 或 $f _ { x _ { j } x _ { i } }$ . 特别地, 当 $i = j$ 时

$$
\frac {\partial^ {2} f}{\partial x _ {i} ^ {2}} := \frac {\partial^ {2} f}{\partial x _ {i} \partial x _ {i}}, \quad i = 1, 2, \dots , n.
$$

下面来看两个例子.

例 4.30 求函数 $z = x y ^ { 3 }$ 的全部二阶偏导数.

解 先求一阶偏导数:

$$
\frac {\partial z}{\partial x} = y ^ {3}, \quad \frac {\partial z}{\partial y} = 3 x y ^ {2}.
$$

然后再分别计算它们的二阶偏导

$$
\frac {\partial^ {2} z}{\partial x ^ {2}} = 0, \quad \frac {\partial^ {2} z}{\partial x \partial y} = 3 y ^ {2}, \quad \frac {\partial^ {2} z}{\partial y \partial x} = 3 y ^ {2}, \quad \frac {\partial^ {2} z}{\partial y ^ {2}} = 6 x y.
$$

例 4.31 设函数

$$
f (x, y) = \left\{ \begin{array}{l l} x y \frac {x ^ {2} - y ^ {2}}{x ^ {2} + y ^ {2}}, & x ^ {2} + y ^ {2} > 0 \\ 0, & x = y = 0 \end{array} \right..
$$

求函数 $f$ 在 $( 0 , 0 )$ 处的两个二阶偏导数

$$
\frac {\partial^ {2} f (0 , 0)}{\partial x \partial y}, \qquad \frac {\partial^ {2} f (0 , 0)}{\partial y \partial x}.
$$

解 容易验证 $f$ 在 $( 0 , 0 )$ 处连续. 先求 $f$ 的一阶导函数. 当 $x ^ { 2 } + y ^ { 2 } > 0$ 时

$$
\frac {\partial f (x , y)}{\partial x} = \frac {y \left(x ^ {4} + 4 x ^ {2} y ^ {2} - y ^ {4}\right)}{\left(x ^ {2} + y ^ {2}\right) ^ {2}}, \quad \frac {\partial f (x , y)}{\partial y} = \frac {x \left(x ^ {4} - 4 x ^ {2} y ^ {2} - y ^ {4}\right)}{\left(x ^ {2} + y ^ {2}\right) ^ {2}}.
$$

当 $x = y = 0$ 时

$$
\frac {\partial f (0 , 0)}{\partial x} = \lim  _ {x \rightarrow 0} \frac {f (x , 0) - f (0 , 0)}{x} = 0. \quad \frac {\partial f (0 , 0)}{\partial y} = \lim  _ {y \rightarrow 0} \frac {f (0 , y) - f (0 , 0)}{y} = 0.
$$

于是可以计算 $f$ 在 $( 0 , 0 )$ 处的两个二阶偏导数

$$
\frac {\partial^ {2} f (0 , 0)}{\partial x \partial y} = \lim  _ {x \rightarrow 0} \frac {1}{x} \left[ \frac {\partial f (x , 0)}{\partial y} - \frac {\partial f (0 , 0)}{\partial y} \right] = \lim  _ {x \rightarrow 0} \frac {x}{x} = 1.
$$

$$
\frac {\partial^ {2} f (0 , 0)}{\partial y \partial x} = \lim  _ {x \rightarrow 0} \frac {1}{y} \left[ \frac {\partial f (0 , y)}{\partial x} - \frac {\partial f (0 , 0)}{\partial x} \right] = \lim  _ {x \rightarrow 0} \frac {- y}{y} = - 1.
$$

从上例可知, 一般来说

$$
\frac {\partial^ {2} f}{\partial x \partial y} \neq \frac {\partial^ {2} f}{\partial y \partial x}.
$$

这样的偏导数称为混合偏导数 , 对 $x$ 和 $y$ 的求导次序是不能随便交换的. 下面来探索偏微分算子可以换序的条件.令

$$
\begin{array}{l} \Phi (h, k) = \frac {1}{h} \left[ \frac {f (x _ {0} + h , y _ {0} + k) - f (x _ {0} + h , y _ {0})}{k} - \frac {f (x _ {0} , y _ {0} + k) - f (x _ {0} , y _ {0})}{k} \right] \\ = \frac {1}{k} \left[ \frac {f (x _ {0} + h , y _ {0} + k) - f (x _ {0} + h , y _ {0})}{h} - \frac {f (x _ {0} , y _ {0} + k) - f (x _ {0} , y _ {0})}{h} \right]. \\ \end{array}
$$

则

$$
\begin{array}{l} \frac {\partial^ {2} f}{\partial x \partial y} = \lim  _ {h \rightarrow 0} \frac {f _ {y} ^ {\prime} (x _ {0} + h , y _ {0}) - f _ {y} ^ {\prime} (x _ {0} , y _ {0})}{h} = \lim  _ {h \rightarrow 0} \lim  _ {k \rightarrow 0} \Phi (h, k). \\ \frac {\partial^ {2} f}{\partial y \partial x} = \lim  _ {k \rightarrow 0} \frac {f _ {x} ^ {\prime} \left(x _ {0} , y _ {0} + k\right) - f _ {x} ^ {\prime} \left(x _ {0} , y _ {0}\right)}{k} = \lim  _ {k \rightarrow 0} \lim  _ {h \rightarrow 0} \Phi (h, k). \\ \end{array}
$$

因此偏微分算子的换序问题本质上就是累次极限的换序问题. 根据引理2.1可知, 只需以下重极限存在即可:

$$
\lim  _ {(h, k) \rightarrow (0, 0)} \Phi (h, k)
$$

# 定理 4.15

设函数 $f : D \to \mathbb { R } ,$ 其中 $D$ 是 $\mathbb { R } ^ { 2 }$ 中的开集. 若 $f _ { x } ^ { \prime } , f _ { y } ^ { \prime } , f _ { x y } ^ { \prime \prime }$ $f _ { x } ^ { \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 的附近存在, 且 $f _ { x y } ^ { \prime \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 处连续,则 $f _ { y x } ^ { \prime \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 处存在, 且

$$
\frac {\partial^ {2} f}{\partial x \partial y} = \frac {\partial^ {2} f}{\partial y \partial x}.
$$

证明 令

$$
\varphi (h, k) = [ f (x _ {0} + h, y _ {0} + k) - f (x _ {0} + h, y _ {0}) ] - [ f (x _ {0}, y _ {0} + k) - f (x _ {0}, y _ {0}) ].
$$

再令

$$
g (x) = f (x, y _ {0} + k) - f (x, y _ {0}).
$$

则由 Lagrange 中值定理可知, 存在 $\theta _ { 1 }$ $\mathbf { \xi } _ { 1 } , \theta _ { 2 } \in ( 0 , 1 )$ 使得

$$
\begin{array}{l} \varphi (h, k) = g \left(x _ {0} + h\right) - g \left(x _ {0}\right) = g ^ {\prime} \left(x _ {0} + \theta_ {1} h\right) h = \frac {\partial f}{\partial x} \left(x _ {0} + \theta_ {1} h, y _ {0} + k\right) h - \frac {\partial f}{\partial x} \left(x _ {0} + \theta_ {1} h, y _ {0}\right) h \\ = \frac {\partial^ {2} f}{\partial y \partial x} \left(x _ {0} + \theta_ {1} h, y _ {0} + \theta_ {2} k\right) h k. \\ \end{array}
$$

由于 $f _ { x y } ^ { \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 处连续, 因此

$$
\lim  _ {(h, k) \rightarrow (0, 0)} \frac {\varphi (h , k)}{h k} = \lim  _ {(h, k) \rightarrow (0, 0)} \frac {\partial^ {2} f}{\partial y \partial x} \left(x _ {0} + \theta_ {1} h, y _ {0} + \theta_ {2} k\right) = \frac {\partial^ {2} f}{\partial y \partial x} \left(x _ {0}, y _ {0}\right).
$$

另一方面, 由于 $f _ { x } ^ { \prime } , f _ { y } ^ { \prime }$ 存在, 故由引理2.1可知

$$
\begin{array}{l} \frac {\partial^ {2} f}{\partial x \partial y} = \lim  _ {h \rightarrow 0} \frac {f _ {y} ^ {\prime} \left(x _ {0} + h , y _ {0}\right) - f _ {y} ^ {\prime} \left(x _ {0} , y _ {0}\right)}{h} = \lim  _ {h \rightarrow 0} \lim  _ {k \rightarrow 0} \frac {\varphi (h , k)}{h k} = \lim  _ {(h, k) \rightarrow (0, 0)} \frac {\varphi (h , k)}{h k}, \\ \frac {\partial^ {2} f}{\partial y \partial x} = \lim  _ {k \rightarrow 0} \frac {f _ {x} ^ {\prime} (x _ {0} , y _ {0} + k) - f _ {x} ^ {\prime} (x _ {0} , y _ {0})}{k} = \lim  _ {k \rightarrow 0} \lim  _ {h \rightarrow 0} \frac {\varphi (h , k)}{h k} = \lim  _ {(h, k) \rightarrow (0, 0)} \frac {\varphi (h , k)}{h k}. \\ \end{array}
$$

注 从以上证明过程可知, 条件减弱为 “ $f _ { x y } ^ { \prime \prime }$ 在 $( x _ { 0 } , y _ { 0 } )$ 处有极限”, 就可以证得结论.

下面把定理推广到一般情况.

# 定理 4.16 (偏导算子的换序定理)

设函数 $f : D \to \mathbb { R } ,$ 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的开集. 若 ℎ −1 阶的一切偏导数和一切 $k$ 阶混合偏导都存在, 且它们都在 $D$ 中连续, 则任一 $k$ 阶混合偏导的计算结果与逐次计算偏导的次序无关.

证明 (i) 证明 $k = 2$ 的情况, 即

$$
\frac {\partial^ {2} f}{\partial x _ {i} \partial x _ {j}} = \frac {\partial^ {2} f}{\partial x _ {j} \partial x _ {i}}.
$$

事实上, 只需将 $x _ { i }$ 和 $x _ { j }$ 以外的变量看作常数, 那么就变成了和定理4.15一样的情况.

(ii) 当 $k > 2$ 时, 先证明

$$
\frac {\partial^ {k} f}{\partial x _ {i _ {1}} \partial x _ {i _ {2}} \cdots \partial x _ {i _ {h}} \partial x _ {i _ {h + 1}} \cdots \partial x _ {i _ {k}}} = \frac {\partial^ {k} f}{\partial x _ {i _ {1}} \partial x _ {i _ {2}} \cdots \partial x _ {i _ {h + 1}} \partial x _ {i _ {h}} \cdots \partial x _ {i _ {k}}}
$$

其中 $i _ { 1 } , i _ { 2 } , \cdots , i _ { h } , i _ { h + 1 } , i _ { k }$ 是 $1 , 2 , \cdots , n$ 个数中 $k$ 个数的某一个排列 (允许重复). 首先前 ℎ − 1 阶导数是相等的, 应用 (i) 的结论可以知道进行完 $h$ 阶和 $h + 1$ 阶求导后还是相等的. 而剩下的运算是相同的, 因此上式成立.  
(iii) 由于任一 $k$ 阶混合偏导的逐次偏导顺序变化总是可以分解为有限次的两个相继元素偏导的互换, 于是可知一般情况也是成立的. ■

例 4.32 在物理中有一个很重要的热方程 (heat equation), 它描述了一个空间中, 温度随时间的变化规律. 现在我们来看一维直线上的热方程. 设二元函数 $u = u ( x , t )$ , 其中 $u$ 是直线上 $x$ 位置, $t$ 时刻的温度, 它们满足方程:

$$
\frac {\partial u}{\partial t} = a ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}},
$$

其中 $a$ 是非零常数. 试验证对于任一 $t > 0$ , 以下函数是方程的一个解:

$$
u = \frac {1}{2 a \sqrt {\pi t}} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}}.
$$

解 分别计算函数 $u ( x , t )$ 的两个偏导:

$$
\frac {\partial u}{\partial x} = \frac {1}{2 a \sqrt {\pi t}} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \left(- \frac {2 x}{4 a ^ {2} t}\right) = - \frac {1}{2 a \sqrt {\pi t}} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \frac {x}{2 a ^ {2} t}.
$$

$$
\frac {\partial u}{\partial t} = - \frac {1}{4 a \sqrt {\pi} t ^ {3 / 2}} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} + \frac {1}{2 a \sqrt {\pi} t} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \frac {x ^ {2}}{4 a ^ {2} t ^ {2}} = \frac {1}{4 a \sqrt {\pi} t ^ {3 / 2}} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \left(\frac {x ^ {2}}{2 a ^ {2} t} - 1\right).
$$

计算 $f _ { x x } ^ { \prime }$

$$
\frac {\partial^ {2} u}{\partial x ^ {2}} = \frac {1}{2 a \sqrt {\pi t}} \left(\mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \frac {2 x}{4 a ^ {2} t} \frac {x}{2 a ^ {2} t} - \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \frac {1}{2 a ^ {2} t}\right) = \frac {1}{4 a ^ {3} \sqrt {\pi} t ^ {3 / 2}} \mathrm {e} ^ {- \frac {x ^ {2}}{4 a ^ {2} t}} \left(\frac {x ^ {2}}{2 a ^ {2} t} - 1\right).
$$

于是可知

$$
\frac {\partial u}{\partial t} = a ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}}.
$$

上例中的热方程仅仅是最简单的一维形式. 三维空间中的热方程是

$$
\frac {\partial u}{\partial t} = a ^ {2} \left(\frac {\partial^ {2} u}{\partial x ^ {2}} + \frac {\partial^ {2} u}{\partial y ^ {2}} + \frac {\partial^ {2} u}{\partial z ^ {2}}\right),
$$

其中 $a$ 是非零常数. 于是引出了以下概念.

# 定义 4.12 (Laplace 算子)

设 $n$ 元函数 $f ( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } )$ . 令

$$
\Delta f = \sum_ {i = 1} ^ {n} \frac {\partial^ {2} f}{\partial x _ {i} ^ {2}}.
$$

则称 $\Delta$ 为 Laplace 算子 (Laplace operator)

Laplace 算子有很多性质. 下面来看一些例子.

例 4.33 设函数

$$
p = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}, \quad p > 0.
$$

求 Δ??, Δ(ln ??), $\Delta ( 1 / p )$ .

解 (i) 计算对 $x$ 的导数:

$$
\frac {\partial p}{\partial x} = \frac {2 x}{2 \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}} = \frac {x}{p}, \qquad \frac {\partial^ {2} p}{\partial x ^ {2}} = \frac {p - x \frac {x}{p}}{p ^ {2}} = \frac {p ^ {2} - x ^ {2}}{p ^ {3}}.
$$

对称地可知

$$
\frac {\partial^ {2} p}{\partial y ^ {2}} = \frac {p ^ {2} - y ^ {2}}{p ^ {3}}, \quad \frac {\partial^ {2} p}{\partial z ^ {2}} = \frac {p ^ {2} - z ^ {2}}{p ^ {3}}.
$$

于是可知

$$
\Delta p = \frac {3 p ^ {2} - x ^ {2} - y ^ {2} - z ^ {2}}{p ^ {3}} = \frac {2}{p}.
$$

(ii) 计算对 $x$ 的导数:

$$
\frac {\partial}{\partial x} \ln p = \frac {1}{p} \cdot \frac {x}{p} = \frac {x}{p ^ {2}}, \quad \frac {\partial^ {2}}{\partial x ^ {2}} \ln p = \frac {\partial}{\partial x} \left(\frac {x}{p ^ {2}}\right) = \frac {p ^ {2} - x \cdot 2 p \cdot \frac {x}{p}}{p ^ {4}} = \frac {p ^ {2} - 2 x ^ {2}}{p ^ {4}}.
$$

对称地可知

$$
\frac {\partial^ {2}}{\partial y ^ {2}} \ln p = \frac {p ^ {2} - 2 y ^ {2}}{p ^ {4}}, \quad \frac {\partial^ {2}}{\partial z ^ {2}} \ln p = \frac {p ^ {2} - 2 z ^ {2}}{p ^ {4}}.
$$

于是可知

$$
\Delta (\ln p) = \frac {3 p ^ {2} - 2 x ^ {2} - 2 y ^ {2} - 2 z ^ {2}}{p ^ {4}} = \frac {1}{p ^ {2}}.
$$

(iii) 计算对 $x$ 的导数:

$$
\frac {\partial}{\partial x} \left(\frac {1}{p}\right) = - \frac {1}{p ^ {2}} \cdot \frac {x}{p} = - \frac {x}{p ^ {3}}, \quad \frac {\partial^ {2}}{\partial x ^ {2}} \left(\frac {1}{p}\right) = \frac {\partial}{\partial x} \left(- \frac {x}{p ^ {3}}\right) = - \frac {p ^ {3} - x \cdot 3 p ^ {2} \cdot \frac {x}{p}}{p ^ {6}} = \frac {3 x ^ {2} - p ^ {2}}{p ^ {5}}.
$$

对称地可知

$$
\frac {\partial^ {2}}{\partial y ^ {2}} \left(\frac {1}{p}\right) = \frac {3 y ^ {2} - p ^ {2}}{p ^ {5}}, \quad \frac {\partial^ {2}}{\partial z ^ {2}} \left(\frac {1}{p}\right) = \frac {3 z ^ {2} - p ^ {2}}{p ^ {5}}.
$$

于是可知

$$
\Delta \left(\frac {1}{p}\right) = \frac {3 x ^ {2} + 3 y ^ {2} + 3 z ^ {2} - 3 p ^ {2}}{p ^ {5}} = 0.
$$

注 形如 $\Delta u = 0$ 的偏微分方程称为 Laplace 方程 (Laplace equation). 从上例可见 $u = 1 / p$ 就是 Laplace 方程的一个解.

例 4.34 解下列偏微分方程

(1) $\frac { \partial ^ { 2 } u } { \partial x ^ { 2 } } = 0 ,$

(2) $\frac { \partial ^ { 2 } u } { \partial x \partial y } = 0 ,$

(3) $\frac { \partial ^ { 3 } u } { \partial x \partial y \partial z } = 0 .$

其中 $u$ 是 $x , y , z$ 的函数.

解 (1) 由于

$$
\frac {\partial}{\partial x} \left(\frac {\partial u}{\partial x}\right) = 0,
$$

故 $u _ { x }$ 可以是任意一个不含 $x$ 的可微函数, 即

$$
\frac {\partial u}{\partial x} = \varphi (y, z).
$$

于是可知

$$
u (x, y, z) = x \varphi (y, z) + \psi (y, z),
$$

其中 $\varphi$ 和 $\psi$ 都是任一可微函数.

(2) 由于

$$
\frac {\partial}{\partial x} \left(\frac {\partial u}{\partial y}\right) = 0,
$$

故

$$
\frac {\partial u}{\partial y} = \varphi_ {1} (y, z).
$$

其中 $\varphi _ { 1 }$ 是任一可微函数. 于是可知

$$
u (x, y, z) = \int \varphi_ {1} (y, z) d y + \psi (x, z) = \varphi (y, z) + \psi (y, z),
$$

其中 $\varphi$ 和 $\psi$ 都是任一可微函数.

(3) 由于

$$
\frac {\partial}{\partial x} \left(\frac {\partial^ {2} u}{\partial y \partial z}\right) = 0,
$$

故

$$
\frac {\partial^ {2} u}{\partial y \partial z} = \frac {\partial}{\partial y} \left(\frac {\partial u}{\partial z}\right) = \varphi_ {2} (y, z).
$$

其中 $\varphi _ { 2 }$ 是任一可微函数. 于是

$$
\frac {\partial u}{\partial z} = \int \varphi_ {2} (y, z) d y + \psi_ {1} (x, z) = \varphi_ {1} (y, z) + \psi_ {1} (x, z),
$$

其中 $\varphi _ { 1 }$ 和 $\psi _ { 1 }$ 都是任一可微函数. 于是可知

$$
u (x, y, z) = \int \varphi_ {1} (y, z) d z + \int \psi_ {1} (x, z) d z + \eta (x, y) = \varphi (y, z) + \psi (x, z) + \eta (x, y).
$$

# 4.2.4 复合函数的高阶偏导数

下面来看复合函数的高阶偏导数. 用第二数学归纳法容易证明如果两个函数都有连续偏导, 则它们的复合函数也有连续偏导. 更确切地有以下命题.

# 命题 4.4

设函数

$$
y = f (x _ {1}, x _ {2}, \dots , x _ {n}).
$$

和向量值函数

$$
\boldsymbol {x} = \left\{ \begin{array}{l} x _ {1} = x _ {1} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right) \\ x _ {2} = x _ {2} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right) \\ \dots \\ x _ {n} = x _ {n} \left(t _ {1}, t _ {2}, \dots , t _ {m}\right) \end{array} . \right.
$$

若函数 $f$ 和 $\boldsymbol { x }$ 的所有分量函数都有一切 $k$ 阶连续偏导数, 则复合函数 $f \circ x$ 的所有 $k$ 阶偏导都存在, 且都是连续的, 且它们都是关于 $f$ 和 $x _ { 1 } , x _ { 2 } , \cdots , x _ { n }$ 的偏导数的多项式.

计算复合函数的高阶偏导数在理论上没有什么困难, 但实际运算时, 由于运算量很大, 因此快速计算出正确结果并不是一件容易的事情. 哪怕是计算复合二元函数的的二阶偏导数, 计算量就已经不小了.

例 4.35 设函数 $f ( x , y )$ , 其中 $x = x ( s , t )$ , $y = y ( s , t )$ . 若 $f , x , y$ 都有连续的二阶偏导数, 求二阶偏导数: $u _ { s s }$ , $u _ { t t }$ , $u _ { t s }$

解 计算一阶导:

$$
\frac {\partial u}{\partial s} = f _ {x} x _ {s} + f _ {y} y _ {s}, \quad \frac {\partial u}{\partial t} = f _ {x} x _ {t} + f _ {y} y _ {t}.
$$

计算 $s$ 的二阶导:

$$
\begin{array}{l} \frac {\partial^ {2} u}{\partial s ^ {2}} = \frac {\partial}{\partial s} (f _ {x} x _ {s} + f _ {y} y _ {s}) = \frac {\partial f _ {x}}{\partial s} x _ {s} + f _ {x} x _ {s s} + \frac {\partial f _ {y}}{\partial s} y _ {s} + f _ {y} y _ {s s} \\ = \left(f _ {x x} x _ {s} + f _ {x y} y _ {s}\right) x _ {s} + f _ {x} x _ {s s} + \left(f _ {y x} x _ {s} + f _ {y y} y _ {s}\right) y _ {s} + f _ {y} y _ {s s} \\ = f _ {x x} \left(x _ {s}\right) ^ {2} + 2 f _ {x y} x _ {s} y _ {s} + f _ {y y} \left(y _ {s}\right) ^ {2} + f _ {x} x _ {s s} + f _ {y} y _ {s s}. \\ \end{array}
$$

对称地可知

$$
\frac {\partial^ {2} u}{\partial t ^ {2}} = f _ {x x} (x _ {t}) ^ {2} + 2 f _ {x y} x _ {t} y _ {t} + f _ {y y} (y _ {t}) ^ {2} + f _ {x} x _ {t t} + f _ {y} y _ {t t}.
$$

计算 $s$ 和 $t$ 的混合二阶导:

$$
\begin{array}{l} \frac {\partial^ {2} u}{\partial s \partial t} = \frac {\partial}{\partial s} \left(f _ {x} x _ {t} + f _ {y} y _ {t}\right) = \frac {\partial f _ {x}}{\partial s} x _ {t} + f _ {x} x _ {t s} + \frac {\partial f _ {y}}{\partial s} y _ {t} + f _ {y} y _ {t s} \\ = \left(f _ {x x} x _ {s} + f _ {x y} y _ {s}\right) x _ {t} + f _ {x} x _ {t s} + \left(f _ {y x} x _ {s} + f _ {y y} y _ {s}\right) y _ {t} + f _ {y} y _ {t s} \\ = f _ {x x} x _ {s} x _ {t} + f _ {y y} y _ {s} y _ {t} + f _ {x y} \left(x _ {t} y _ {s} + x _ {s} y _ {t}\right) + f _ {x} x _ {t s} + f _ {y} y _ {t s}. \\ \end{array}
$$

注 需要注意 $f _ { x }$ 仍然是 $x , y$ 与 $s , t$ 的复合函数, 因此计算 $\textstyle { \frac { \partial } { \partial s } } f _ { x }$ 时需要继续用链式法则.

例 4.36 设 $f ( x , y )$ 是具有 $n$ 阶连续偏导数的函数. 令

$$
\varphi (t) = f (x + t h, y + t k).
$$

求 $\varphi ^ { ( n ) } ( t )$ .

解 由链式法则可知

$$
\frac {\mathrm {d}}{\mathrm {d} t} \varphi (t) = \frac {\partial f}{\partial x} h + \frac {\partial f}{\partial y} k = \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) f.
$$

下面用数学归纳法证明

$$
\varphi^ {(n)} (t) = \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n} f, \tag {4.6}
$$

其中

$$
\left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n} = \sum_ {i + j = n} \frac {n !}{i ! j !} \left(h \frac {\partial}{\partial x}\right) ^ {i} \left(k \frac {\partial}{\partial y}\right) ^ {j} = \sum_ {i + j = n} \frac {n !}{i ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n}}{\partial x ^ {i} \partial y ^ {j}}.
$$

假设以上结论成立, 则

$$
\begin{array}{l} \varphi^ {(n + 1)} (t) = \frac {\mathrm {d}}{\mathrm {d} t} \left(\sum_ {i + j = n} \frac {n !}{i ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n}}{\partial x ^ {i} \partial y ^ {j}} f\right) = \sum_ {i + j = n} \frac {n !}{i ! j !} h ^ {i + 1} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i + 1} \partial y ^ {j}} f + \sum_ {i + j = n} \frac {n !}{i ! j !} h ^ {i} k ^ {j + 1} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j + 1}} f \\ = \sum_ {i + j = n + 1} \frac {n !}{(i - 1) ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j}} f + \sum_ {i + j = n + 1} \frac {n !}{i ! (j - 1) !} h ^ {i} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j}} f \\ = \sum_ {i + j = n + 1} \frac {n ! i}{i ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j}} f + \sum_ {i + j = n + 1} \frac {n ! j}{i ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j}} f = \sum_ {i + j = n + 1} \frac {n ! (i + j)}{i ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j}} f \\ = \sum_ {i + j = n + 1} \frac {(n + 1) !}{i ! j !} h ^ {i} k ^ {j} \frac {\partial^ {n + 1}}{\partial x ^ {i} \partial y ^ {j}} f = \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n + 1} f. \\ \end{array}
$$

由数学归纳原理可知等式4.6对一切 $n \in \mathbb { N } ^ { * }$ 都成立.

注 上例中, 之所以可以用二项式定理展开, 是因为偏微分算子可以换序.

注 容易看出, 把

$$
\left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n}
$$

整体看作一个算子比较简洁. 这个算子很重要, 我们将在二元函数高阶微分和 Taylor 公式中再次看到它.

例 4.37 设函数 $u = f ( p )$ , 其中

$$
p = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}, \quad p > 0.
$$

求 $\Delta u$

证明 先计算

$$
\frac {\partial p}{\partial x} = \frac {2 x}{2 \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}} = \frac {x}{p}.
$$

计算一阶导:

$$
\frac {\partial u}{\partial x} = f ^ {\prime} \frac {x}{p}
$$

计算二阶导:

$$
\frac {\partial^ {2} u}{\partial x ^ {2}} = f ^ {\prime \prime} \left(\frac {x}{p}\right) ^ {2} + f ^ {\prime} \frac {p - x \frac {x}{p}}{p ^ {2}} = \frac {x ^ {2}}{p ^ {2}} f ^ {\prime \prime} + \frac {p ^ {2} - x ^ {2}}{p ^ {3}} f ^ {\prime}.
$$

对称地知道

$$
\frac {\partial^ {2} u}{\partial y ^ {2}} = \frac {y ^ {2}}{p ^ {2}} f ^ {\prime \prime} + \frac {p ^ {2} - y ^ {2}}{p ^ {3}} f ^ {\prime}, \quad \frac {\partial^ {2} u}{\partial z ^ {2}} = \frac {z ^ {2}}{p ^ {2}} f ^ {\prime \prime} + \frac {p ^ {2} - z ^ {2}}{p ^ {3}} f ^ {\prime}.
$$

于是可知

$$
\Delta u = \frac {x ^ {2} + y ^ {2} + z ^ {2}}{p ^ {2}} f ^ {\prime \prime} + \frac {3 p ^ {2} - x ^ {2} - y ^ {2} - z ^ {2}}{p ^ {3}} f ^ {\prime} = f ^ {\prime \prime} + \frac {2}{p} f ^ {\prime}.
$$

例 4.38 波动方程的 d’Alembert 解 设函数

$$
u = \frac {1}{p} [ \varphi (p - a t) + \psi (p + a t) ].
$$

其中 $p = { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } }$ . 则函数 $u$ 满足方程

$$
\frac {\partial^ {2} u}{\partial t ^ {2}} = a ^ {2} \Delta u.
$$

证明 (i) 计算等式左边. 计算一阶导:

$$
\frac {\partial u}{\partial t} = \frac {1}{p} \left[ \varphi^ {\prime} (- a) + \psi^ {\prime} a \right] = \frac {a}{p} \left(- \varphi^ {\prime} + \psi^ {\prime}\right).
$$

计算二阶导:

$$
\frac {\partial^ {2} u}{\partial t ^ {2}} = \frac {a}{p} \left[ (- \varphi^ {\prime \prime}) (- a) + \psi^ {\prime \prime} a \right] = \frac {a ^ {2}}{p} (\varphi^ {\prime \prime} + \psi^ {\prime \prime}).
$$

(ii) 计算等式右边. 先计算

$$
\frac {\partial p}{\partial x} = \frac {2 x}{2 \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}} = \frac {x}{p}.
$$

计算一阶导:

$$
\frac {\partial u}{\partial x} = \frac {\left(\varphi^ {\prime} \frac {x}{p} + \psi^ {\prime} \frac {x}{p}\right) p - (\varphi + \psi) \frac {x}{p}}{p ^ {2}} = \frac {x}{p ^ {2}} \left(\varphi^ {\prime} + \psi^ {\prime}\right) - \frac {x}{p ^ {3}} (\varphi + \psi)
$$

计算二阶导:

$$
\begin{array}{l} \frac {\partial^ {2} u}{\partial x ^ {2}} = \frac {\left[ (\varphi^ {\prime} + \psi^ {\prime}) + x \left(\varphi^ {\prime \prime} \frac {x}{p} + \psi^ {\prime \prime} \frac {x}{p}\right) \right] p ^ {2} - x (\varphi^ {\prime} + \psi^ {\prime}) 2 p \frac {x}{p}}{p ^ {4}} - \frac {\left[ (\varphi + \psi) + x \left(\varphi^ {\prime} \frac {x}{p} + \psi^ {\prime} \frac {x}{p}\right) \right] p ^ {3} - x (\varphi + \psi) 3 p ^ {2} \frac {x}{p}}{p ^ {6}} \\ = \left(- \frac {1}{p ^ {3}} + \frac {3 x ^ {2}}{p ^ {5}}\right) (\varphi + \psi) + \left(\frac {1}{p ^ {2}} - \frac {3 x ^ {2}}{p ^ {4}}\right) (\varphi^ {\prime} + \psi^ {\prime}) + \frac {x ^ {2}}{p ^ {3}} (\varphi^ {\prime \prime} + \psi^ {\prime \prime}). \\ \end{array}
$$

对称地知道

$$
\begin{array}{l} \frac {\partial^ {2} u}{\partial y ^ {2}} = \left(- \frac {1}{p ^ {3}} + \frac {3 y ^ {2}}{p ^ {5}}\right) (\varphi + \psi) + \left(\frac {1}{p ^ {2}} - \frac {3 y ^ {2}}{p ^ {4}}\right) (\varphi^ {\prime} + \psi^ {\prime}) + \frac {y ^ {2}}{p ^ {3}} (\varphi^ {\prime \prime} + \psi^ {\prime \prime}). \\ \frac {\partial^ {2} u}{\partial z ^ {2}} = \left(- \frac {1}{p ^ {3}} + \frac {3 z ^ {2}}{p ^ {5}}\right) (\varphi + \psi) + \left(\frac {1}{p ^ {2}} - \frac {3 z ^ {2}}{p ^ {4}}\right) (\varphi^ {\prime} + \psi^ {\prime}) + \frac {z ^ {2}}{p ^ {3}} (\varphi^ {\prime \prime} + \psi^ {\prime \prime}). \\ \end{array}
$$

于是

$$
a ^ {2} \Delta u = a ^ {2} \left[ \left(- \frac {3}{p ^ {3}} + \frac {3 p ^ {2}}{p ^ {5}}\right) (\varphi + \psi) + \left(\frac {3}{p ^ {2}} - \frac {3 p ^ {2}}{p ^ {4}}\right) (\varphi^ {\prime} + \psi^ {\prime}) + \frac {p ^ {2}}{p ^ {3}} (\varphi^ {\prime \prime} + \psi^ {\prime \prime}) \right] = \frac {a ^ {2}}{p} (\varphi^ {\prime \prime} + \psi^ {\prime \prime}).
$$

综上可知 $u$ 满足方程.

注上例中的方程称为波动方程(wave equation).它可以刻画机械波、声波、光波、引力波、无线电波、水波、和地震波等各种波动的运动规律. 1746 年, d’Alembert 发现了一维波动方程, 并在不久后给出了一个解 (即上例中的函数 $u _ { \cdot }$ ), 这个解被称为 d’Alembert’s 公式 (d’Alembert’s formula).

# 4.2.5 齐次函数

在学习锥面的时候我们已经接触到了齐次函数.

# 定义 4.13 (齐次函数)

设多元函数 $F : \mathbb { R } ^ { n } \to \mathbb { R }$ . 若对于任一 $\boldsymbol { x } \in \mathbb { R } ^ { n }$ 和任一非零实数 $t$ 都有

$$
F (t \boldsymbol {x}) = t ^ {k} F (\boldsymbol {x}),
$$

则称 $F$ 为 $k$ 次齐次函数 (homogeneous function). 此时方程 $F ( { \pmb x } ) = 0$ 称为齐次方程 (homogeneous equation).

如果函数具有光滑性质, 则可以用偏导数来刻画函数的齐次性.

# 定理 4.17 (Euler 齐次函数定理)

设 $n$ 元函数 $f \in C ^ { 1 } ( D )$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集, 则 $f$ 是一个 $k$ 次齐次函数当且仅当

$$
\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial}{\partial x _ {i}} f (\boldsymbol {x}) = k f (\boldsymbol {x}). \tag {4.7}
$$

证明 (i) 证明必要性. 设 $f$ 是一个 $k$ 次齐次函数, 则对于任一 $\boldsymbol { x } \in D$ 都有

$$
f (t \boldsymbol {x}) = t ^ {k} f (\boldsymbol {x}). \tag {4.8}
$$

在等式两边求?? 的偏导可得

$$
\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial}{\partial x _ {i}} f (t \boldsymbol {x}) = k t ^ {k - 1} f (\boldsymbol {x}).
$$

令 $t = 1$ , 即得

$$
\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial}{\partial x _ {i}} f (\boldsymbol {x}) = k f (\boldsymbol {x}).
$$

(ii) 证明充分性. 令

$$
\varphi (t) = \frac {f (t \boldsymbol {x})}{t ^ {k}}.
$$

由等式4.7可知

$$
\varphi^ {\prime} (t) = \frac {\left[ \sum_ {i = 1} ^ {n} x _ {i} \frac {\partial}{\partial x _ {i}} f (t \boldsymbol {x}) \right] t ^ {k} - k t ^ {k - 1} f (t \boldsymbol {x})}{t ^ {2 k}} = \frac {\sum_ {i = 1} ^ {n} t x _ {i} \frac {\partial}{\partial x _ {i}} f (t \boldsymbol {x}) - k f (t \boldsymbol {x})}{t ^ {k + 1}} = 0.
$$

因此 $\varphi ( t )$ 是常值函数. 设 $\varphi ( t ) = C$ . 令 $t = 1$ 得

$$
C = \varphi (1) = f (\boldsymbol {x}).
$$

于是可知

$$
\frac {f (t \boldsymbol {x})}{t ^ {k}} = \varphi (t) = C = f (\boldsymbol {x}).
$$

这表明 $f$ 是一个 $k$ 次齐次函数.

利用齐次函数的性质可以求出一些特定形式的偏导数.

例 4.39 设 Vandermonde 行列式

$$
u = \left| \begin{array}{c c c c} 1 & 1 & \dots & 1 \\ x _ {1} & x _ {2} & \dots & x _ {n} \\ x _ {1} ^ {2} & x _ {2} ^ {2} & \dots & x _ {n} ^ {2} \\ \vdots & \vdots & & \vdots \\ x _ {1} ^ {n - 1} & x _ {2} ^ {n - 1} & \dots & x _ {n} ^ {n - 1} \end{array} \right|.
$$

则

$$
\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial u}{\partial x _ {i}} = \frac {n (n - 1)}{2} u.
$$

解 解法二 由于

$$
u = \prod_ {1 \leq i <   j \leq n} \left(x _ {j} - x _ {i}\right),
$$

故

$$
u (t \boldsymbol {x}) = \prod_ {1 \leq i <   j \leq n} \left(t x _ {j} - t x _ {i}\right) = t ^ {C _ {n} ^ {2}} u.
$$

因此 $u$ 是一个 ${ \mathrm { C } } _ { n } ^ { 2 }$ 次齐次函数, 于是可知

$$
\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial u}{\partial x _ {i}} = C _ {n} ^ {2} u = \frac {n (n - 1)}{2} u.
$$

例 4.40 设可微函数 $u = F ( x , y )$ 满足

$$
x \frac {\partial u}{\partial x} + y \frac {\partial u}{\partial y} = 0.
$$

则 $F ( x , y )$ 在极坐标下只是 $\theta$ 的函数.

解 解法一 令 ?? = ?? cos ??, $y = r \sin \theta$ , 则

$$
\left\{ \begin{array}{l} \frac {\partial u}{\partial r} = \frac {\partial u}{\partial x} \cos \theta + \frac {\partial u}{\partial y} \sin \theta \\ \frac {\partial u}{\partial \theta} = - \frac {\partial u}{\partial x} r \sin \theta + \frac {\partial u}{\partial y} r \cos \theta \end{array} \right..
$$

由 Cramer 法则解得

$$
\frac {\partial u}{\partial x} = \frac {1}{r ^ {2}} \left| \begin{array}{c c} \frac {\partial u}{\partial r} & \sin \theta \\ \frac {\partial u}{\partial \theta} & r \cos \theta \end{array} \right|, \qquad \frac {\partial u}{\partial y} = \frac {1}{r ^ {2}} \left| \begin{array}{c c} \cos \theta & \frac {\partial u}{\partial r} \\ - r \sin \theta & \frac {\partial u}{\partial \theta} \end{array} \right|.
$$

于是

$$
0 = x \frac {\partial u}{\partial x} + y \frac {\partial u}{\partial y} = \frac {\cos \theta}{r} \left| \begin{array}{c c} \frac {\partial u}{\partial r} & \sin \theta \\ \frac {\partial u}{\partial \theta} & r \cos \theta \end{array} \right| + \frac {\sin \theta}{r} \left| \begin{array}{c c} \cos \theta & \frac {\partial u}{\partial r} \\ - r \sin \theta & \frac {\partial u}{\partial \theta} \end{array} \right| = \frac {\partial u}{\partial r}.
$$

这表明 $F ( x , y )$ 在极坐标下只是 $\theta$ 的函数.

解法二 由题意可知 $F ( x , y )$ 是一个零次齐次函数, 故

$$
F (x, y) = F (t x, t y).
$$

令 $t = 1 / x$ , 则

$$
F (x, y) = F \left(1, \frac {y}{x}\right).
$$

令 $x = r$ cos ??, ?? = ?? sin ??, 则

$$
F (x, y) = F (1, \tan \theta).
$$

于是可知 $F ( x , y )$ 在极坐标下只是 $\theta$ 的函数.

根据上题, 可以看出齐次函数满足以下命题.

# 命题 4.5

$k$ 次齐次函数满足

$$
f (x _ {1}, x _ {2}, \dots , x _ {n}) = x _ {1} ^ {k} \varphi \left(\frac {x _ {2}}{x _ {1}}, \dots , \frac {x _ {n}}{x _ {1}}\right).
$$

如果 $f \in C ^ { n } ( D )$ , 则可以在4.8两边对 $t$ 求 $n$ 次偏导, 这样就可以得到以下命题.

# 定理 4.18

设 $n$ 元函数 $f \in C ^ { n } ( D )$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个开集, 若 $f$ 是一个 $k$ 次齐次函数, 则

$$
\left(\sum_ {i = 1} ^ {n} x _ {i} \frac {\partial}{\partial x _ {i}}\right) ^ {n} f (\boldsymbol {x}) = k (k - 1) \dots (k - n + 1) f (\boldsymbol {x}).
$$

注 当 $k < n$ 时上式右侧为零.

例 4.41 设函数

$$
u = \varphi \left(\frac {y}{x}\right) + y \psi \left(\frac {y}{x}\right),
$$

其中 $\varphi , \psi$ 都有二阶连续可微的. 则

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} u = 0.
$$

证明 解法一 计算一阶导:

$$
\frac {\partial u}{\partial x} = \varphi^ {\prime} \cdot \left(- \frac {y}{x ^ {2}}\right) + y \psi^ {\prime} \cdot \left(- \frac {y}{x ^ {2}}\right) = - \frac {y}{x ^ {2}} \varphi^ {\prime} - \frac {y ^ {2}}{x ^ {2}} \psi^ {\prime}.
$$

$$
\frac {\partial u}{\partial y} = \frac {1}{x} \varphi^ {\prime} + \psi + y \psi^ {\prime} \frac {1}{x} = \frac {1}{x} \varphi^ {\prime} + \psi + \frac {y}{x} \psi^ {\prime}.
$$

计算二阶导:

$$
\begin{array}{l} \frac {\partial^ {2} u}{\partial x ^ {2}} = \frac {2 y}{x ^ {3}} \varphi^ {\prime} - \frac {y}{x ^ {2}} \varphi^ {\prime \prime} \cdot \left(- \frac {y}{x ^ {2}}\right) + \frac {2 y ^ {2}}{x ^ {3}} \psi^ {\prime} - \frac {y ^ {2}}{x ^ {2}} \psi^ {\prime \prime} \cdot \left(- \frac {y}{x ^ {2}}\right) = \frac {2 y}{x ^ {3}} \varphi^ {\prime} + \frac {y ^ {2}}{x ^ {4}} \varphi^ {\prime \prime} + \frac {2 y ^ {2}}{x ^ {3}} \psi^ {\prime} + \frac {y ^ {3}}{x ^ {4}} \psi^ {\prime \prime}. \\ \frac {\partial^ {2} u}{\partial y ^ {2}} = \frac {1}{x} \varphi^ {\prime \prime} \frac {1}{x} + \psi^ {\prime} \frac {1}{x} + \frac {1}{x} \psi^ {\prime} + \frac {y}{x} \psi^ {\prime \prime} \frac {1}{x} = \frac {1}{x ^ {2}} \varphi^ {\prime \prime} + \frac {2}{x} \psi^ {\prime} + \frac {y}{x ^ {2}} \psi^ {\prime \prime}. \\ \frac {\partial^ {2} u}{\partial x \partial y} = - \frac {x}{x ^ {2}} \varphi^ {\prime} + \frac {1}{x} \varphi^ {\prime \prime} \cdot \left(- \frac {y}{x}\right) + \psi^ {\prime} \cdot \left(- \frac {y}{x ^ {2}}\right) + \left(- \frac {y}{x ^ {2}}\right) \psi^ {\prime} + \frac {y}{x} \psi^ {\prime \prime} \cdot \left(- \frac {y}{x ^ {2}}\right) = - \frac {1}{x ^ {2}} \varphi^ {\prime} - \frac {y}{x ^ {3}} \varphi^ {\prime \prime} - \frac {2 y}{x ^ {2}} \psi^ {\prime} - \frac {y ^ {2}}{x ^ {3}} \psi^ {\prime \prime}. \\ \end{array}
$$

于是

$$
\begin{array}{l} x ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}} = \frac {2 y}{x} \varphi^ {\prime} + \frac {y ^ {2}}{x ^ {2}} \varphi^ {\prime \prime} + \frac {2 y ^ {2}}{x} \psi^ {\prime} + \frac {y ^ {3}}{x ^ {2}} \psi^ {\prime \prime}, \\ y ^ {2} \frac {\partial^ {2} u}{\partial y ^ {2}} = \frac {y ^ {2}}{x ^ {2}} \varphi^ {\prime \prime} + \frac {2 y ^ {2}}{x} \psi^ {\prime} + \frac {y ^ {3}}{x ^ {2}} \psi^ {\prime \prime}, \\ 2 x y \frac {\partial^ {2} u}{\partial x \partial y} = - \frac {2 y}{x} \varphi^ {\prime} - \frac {2 y ^ {2}}{x ^ {2}} \varphi^ {\prime \prime} - \frac {4 y ^ {2}}{x} \psi^ {\prime} - \frac {2 y ^ {3}}{x ^ {2}} \psi^ {\prime \prime}. \\ \end{array}
$$

于是可知

$$
x ^ {2} \frac {\partial^ {2} u}{\partial x ^ {2}} + y ^ {2} \frac {\partial^ {2} u}{\partial y ^ {2}} + 2 x y \frac {\partial^ {2} u}{\partial x \partial y} = 0.
$$

解法二 显然 $\varphi$ 是一个零次齐次函数, ???? 是一个一次齐次函数, 因此

$$
\begin{array}{l} \left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} \varphi \left(\frac {y}{x}\right) = 0 (0 - 1) \varphi \left(\frac {y}{x}\right) = 0, \\ \left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} \left[ y \psi \left(\frac {y}{x}\right) \right] = 1 (1 - 1) \left[ y \psi \left(\frac {y}{x}\right) \right] = 0. \\ \end{array}
$$

于是可知

$$
\left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} u = \left(x \frac {\partial}{\partial x} + y \frac {\partial}{\partial y}\right) ^ {2} \left[ \varphi \left(\frac {y}{x}\right) + y \psi \left(\frac {y}{x}\right) \right] = 0.
$$

# 4.2.6 高阶全微分

设函数 $y = f ( x _ { 1 } , x _ { 2 } , \cdot \cdot \cdot , x _ { n } )$ 在 $x _ { 0 }$ 处可微, 则

$$
\mathrm {d} y = \frac {\partial f (x _ {0})}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial f (x _ {0})}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial f (x _ {0})}{\partial x _ {n}} \mathrm {d} x _ {n}.
$$

若函数 $f$ 在开集 $D$ 上的每一点都可微, 则对于给定的 $\mathrm { d } x _ { 1 }$ $, \mathrm { d } x _ { 2 } , \cdots , \mathrm { d } x _ { n }$ , 全微分 ${ \mathrm { d } } y$ 是 $D$ 上的一个 $n$ 元函数:

$$
\mathrm {d} y = \frac {\partial y}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial y}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial y}{\partial x _ {n}} \mathrm {d} x _ {n}.
$$

若 $f$ 在 $D$ 上有二阶连续偏导数, 则 $\mathrm { d } y$ 就有一阶连续偏导数, 于是函数 ${ \mathrm { d } } y$ 继续可微, 它的微分记作 $\mathrm { d } ^ { 2 } \boldsymbol { y }$ , 称为 $f$ 的二阶微分 (2-order differential). 二阶微分实际上仍然是函数的全微分, 因此我们只需按照全微分的定义按部就班地计算二阶微分:

$$
\mathrm {d} ^ {2} y = \mathrm {d} (\mathrm {d} y) = \mathrm {d} \left(\sum_ {i = 1} ^ {n} \frac {\partial y}{\partial x _ {i}} \mathrm {d} x _ {i}\right) = \sum_ {i = 1} ^ {n} \mathrm {d} \left(\frac {\partial y}{\partial x _ {i}}\right) \mathrm {d} x _ {i} = \sum_ {i = 1} ^ {n} \left(\sum_ {j = 1} ^ {n} \frac {\partial^ {2} y}{\partial x _ {j} \partial x _ {i}} \mathrm {d} x _ {j}\right) \mathrm {d} x _ {i} = \sum_ {i = 1} ^ {n} \sum_ {j = 1} ^ {n} \frac {\partial^ {2} y}{\partial x _ {j} \partial x _ {i}} \mathrm {d} x _ {j} \mathrm {d} x _ {i}.
$$

用同样的方法可以继续定义三阶微分. 于是用数学归纳法可以定义 $k$ 阶全微分:

$$
\mathrm {d} ^ {k} y = \mathrm {d} \left(\mathrm {d} ^ {k - 1} y\right)
$$

但是随着阶数的增加,计算复杂度呈指数级增长,为了使得形式上的简洁,我们可以把一阶全微分等式的右侧看作一个算子对 ?? 作用:

$$
\mathrm {d} y = \left(\frac {\partial}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial}{\partial x _ {n}} \mathrm {d} x _ {n}\right) y.
$$

这样一来 $k$ 阶全微分就可以写成

$$
\mathrm {d} ^ {k} y = \left(\frac {\partial}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial}{\partial x _ {n}} \mathrm {d} x _ {n}\right) ^ {k} y.
$$

这里的算子

$$
\left(\frac {\partial}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial}{\partial x _ {n}} \mathrm {d} x _ {n}\right) ^ {k}
$$

可以像多项式那样展开并合并同类项, 这是由定理4.16保证的. 因此计算高阶微分实际上只需知道多项式的 $k$ 次方如何展开.

# 定理 4.19 (多项式定理)

设多项式 $x _ { 1 } + x _ { 2 } + \cdots + x _ { n }$ . 它的 $k$ $( k \in \mathbb { N } ^ { * } ,$ ) 次展开式为

$$
\left(x _ {1} + x _ {2} + \dots + x _ {n}\right) ^ {k} = \sum_ {\alpha_ {1} + \dots + \alpha_ {n} = k} \frac {k !}{\alpha_ {1} ! \cdots \alpha_ {n} !} x _ {1} ^ {\alpha_ {1}} x _ {2} ^ {\alpha_ {2}} \dots x _ {n} ^ {\alpha_ {n}}.
$$

证明 对 $n$ 进行归纳. 当 $n = 2$ 时命题就是二项式定理. 假设 $n - 1$ 的情况命题成立, 下面来看 $n$ 的情况. 由归纳假设和二项式定理可知

$$
\begin{array}{l} \left(x _ {1} + x _ {2} + \dots + x _ {n}\right) ^ {k} = \left[ \left(x _ {1} + x _ {2} + \dots + x _ {n - 1}\right) + x _ {n} \right] ^ {k} = \sum_ {\alpha_ {n} = 0} ^ {k} \frac {k !}{\alpha_ {n} ! (k - \alpha_ {n}) !} \left(x _ {1} + \dots + x _ {n - 1}\right) ^ {k - \alpha_ {n}} x _ {n} ^ {\alpha_ {n}} \\ = \sum_ {\alpha_ {n} = 0} ^ {k} \frac {k !}{\alpha_ {n} ! (k - \alpha_ {n}) !} \sum_ {\alpha_ {1} + \dots + \alpha_ {n - 1} = k - \alpha_ {n}} \frac {(k - \alpha_ {n}) !}{\alpha_ {1} ! \cdots \alpha_ {n - 1} !} x _ {1} ^ {\alpha_ {1}} \dots x _ {n - 1} ^ {\alpha_ {n - 1}} x _ {n} ^ {\alpha_ {n}} \\ = \sum_ {\alpha_ {1} + \dots + \alpha_ {n} = k} \frac {k !}{\alpha_ {1} ! \cdots \alpha_ {n} !} x _ {1} ^ {\alpha_ {1}} x _ {2} ^ {\alpha_ {2}} \dots x _ {n} ^ {\alpha_ {n}}. \\ \end{array}
$$

由数学归纳原理可知对于任一 $n \in \mathbb { N } ^ { * }$ 命题都成立.

为了让表达式简洁, 我们可以引入多重指标记号 (multi-index notation).

# 定义 4.14 (多重指标记号)

一组指标 $\alpha _ { 1 } , \alpha _ { 2 } , \cdots , \alpha _ { n }$ $\alpha _ { n }$ 可以记作:

$$
\alpha = \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right).
$$

这样的记号称为多重指标记号 (multi-index notation). 规定如下几种记号:

$$
\left| \boldsymbol {\alpha} \right| = \alpha_ {1} + \alpha_ {2} + \dots + \alpha_ {n}.
$$

$$
\alpha! = \alpha_ {1}! \alpha_ {2}! \dots \alpha_ {n}!.
$$

$$
\mathrm {C} _ {k} ^ {\alpha} = \frac {k !}{\alpha !} = \frac {k !}{\alpha_ {1} ! \alpha_ {2} ! \cdots \alpha_ {n} !}, \quad k = | \alpha |.
$$

$$
\boldsymbol {x} ^ {\alpha} = x _ {1} ^ {\alpha_ {1}} x _ {2} ^ {\alpha_ {2}} \dots x _ {n} ^ {\alpha_ {n}}.
$$

$$
\mathcal {D} ^ {\alpha} = \frac {\partial^ {\alpha_ {1}}}{\partial x _ {1} ^ {\alpha_ {1}}} \frac {\partial^ {\alpha_ {2}}}{\partial x _ {2} ^ {\alpha_ {2}}} \dots \frac {\partial^ {\alpha_ {n}}}{\partial x _ {n} ^ {\alpha_ {n}}} = \frac {\partial^ {\alpha}}{\partial x _ {1} ^ {\alpha_ {1}} \partial x _ {2} ^ {\alpha_ {2}} \cdots \partial x _ {n} ^ {\alpha_ {n}}}.
$$

设另一个多重指标 $\beta = ( \beta _ { 1 } , \beta _ { 2 } , \cdot \cdot \cdot , \beta _ { n } ) .$ , 并规定:

$$
\alpha \pm \beta = (\alpha_ {1} \pm \beta_ {1}, \alpha_ {2} \pm \beta_ {2}, \dots , \alpha_ {n} \pm \beta_ {n}).
$$

$$
\alpha \leq \beta \iff \alpha_ {i} \leq \beta_ {i}, \quad i = 1, 2, \dots , n.
$$

$$
\mathsf {C} _ {\alpha} ^ {\beta} = \mathsf {C} _ {\alpha_ {1}} ^ {\beta_ {1}} \mathsf {C} _ {\alpha_ {2}} ^ {\beta_ {2}} \dots \mathsf {C} _ {\alpha_ {n}} ^ {\beta_ {n}} = \frac {\alpha !}{\beta ! (\alpha - \beta) !}.
$$

有了多重指标记号就可以把多项式定理写成

$$
\left(x _ {1} + x _ {2} + \dots + x _ {n}\right) ^ {k} = \sum_ {| \alpha | = k} \frac {k !}{\alpha !} \boldsymbol {x} ^ {\alpha} = \sum_ {| \alpha | = k} C _ {k} ^ {\alpha} \boldsymbol {x} ^ {\alpha}
$$

这样就在形式上与二项式定理一致了. 于是就可以写出高阶微分的展开式

$$
\mathrm {d} ^ {k} y = \left(\frac {\partial}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial}{\partial x _ {n}} \mathrm {d} x _ {n}\right) ^ {k} y = \sum_ {| \alpha = k |} C _ {k} ^ {\alpha} \mathcal {D} ^ {\alpha} y.
$$

我们已经知道, 利用全微分的定义可以利用全微分来计算偏导数. 类似地, 用高阶微分也可以计算高阶偏导数. 下面来看个例子.

例 4.42 设函数

$$
u = \arctan \frac {x}{y}.
$$

求 $u _ { x x x }$ , $u _ { x x y }$ , ???? ????, ????????.

解 计算一阶全微分:

$$
\mathrm {d} u = \frac {y \mathrm {d} x - x \mathrm {d} y}{x ^ {2} + y ^ {2}}.
$$

计算二阶全微分:

$$
\mathrm {d} ^ {2} u = \frac {d (y \mathrm {d} x - x \mathrm {d} y) (x ^ {2} + y ^ {2}) - (y \mathrm {d} x - x \mathrm {d} y) \mathrm {d} (x ^ {2} + y ^ {2})}{(x ^ {2} + y ^ {2}) ^ {2}} = \frac {2 (x \mathrm {d} y - y \mathrm {d} x) (x \mathrm {d} x + y \mathrm {d} y)}{(x ^ {2} + y ^ {2}) ^ {2}}.
$$

计算三阶全微分:

$$
\begin{array}{l} \mathrm {d} ^ {3} u = \frac {2 (x \mathrm {d} y - y \mathrm {d} x) (\mathrm {d} x ^ {2} + \mathrm {d} y ^ {2}) (x ^ {2} + y ^ {2}) ^ {2} - 8 (x \mathrm {d} y - y \mathrm {d} x) (x \mathrm {d} x + y \mathrm {d} y) (x ^ {2} + y ^ {2}) (x \mathrm {d} x + y \mathrm {d} y)}{(x ^ {2} + y ^ {2}) ^ {4}} \\ = \frac {2 (x \mathrm {d} y - y \mathrm {d} x) (\mathrm {d} x ^ {2} + \mathrm {d} y ^ {2}) (x ^ {2} + y ^ {2}) - 8 (x \mathrm {d} y - y \mathrm {d} x) (x \mathrm {d} x + y \mathrm {d} y) ^ {2}}{(x ^ {2} + y ^ {2}) ^ {4}} \\ = \frac {\left(6 x ^ {2} y - 2 y ^ {3}\right) \mathrm {d} x ^ {3} + 3 \left(6 x y ^ {2} - 2 x ^ {3}\right) \mathrm {d} x ^ {2} \mathrm {d} y + 3 \left(2 y ^ {3} - 6 x ^ {2} y\right) \mathrm {d} x \mathrm {d} y ^ {2} + \left(2 x ^ {3} - 6 x y ^ {2}\right) \mathrm {d} y ^ {3}}{\left(x ^ {2} + y ^ {2}\right) ^ {3}}. \\ \end{array}
$$

于是可知

$$
\frac {\partial^ {3} u}{\partial x ^ {3}} = \frac {6 x ^ {2} y - 2 y ^ {3}}{\left(x ^ {2} + y ^ {2}\right) ^ {3}}, \qquad \frac {\partial^ {3} u}{\partial x ^ {2} y} = \frac {6 x y ^ {2} - 2 x ^ {3}}{\left(x ^ {2} + y ^ {2}\right) ^ {3}}, \qquad \frac {\partial^ {3} u}{\partial x y ^ {2}} = \frac {2 y ^ {3} - 3 x ^ {2} y}{\left(x ^ {2} + y ^ {2}\right) ^ {3}}, \qquad \frac {\partial^ {3} u}{\partial y ^ {3}} = \frac {2 x ^ {3} - 6 x y ^ {2}}{\left(x ^ {2} + y ^ {2}\right) ^ {3}}.
$$

和一元函数的情况类似, 多元函数的高阶微分不具有形式不变性. 设函数 $u \ : = \ : f ( x _ { 1 } , x _ { 2 } , \cdot \cdot \cdot , x _ { n } )$ , 其中 $\begin{array} { r l } { x _ { i } } & { { } = } \end{array}$ $x _ { i } ( t _ { 1 } , t _ { 2 } , \cdots , t _ { m } )$ $( i = 1 , 2 , \cdots , n )$ . 计算复合函数的二阶微分:

$$
\begin{array}{l} \mathrm {d} ^ {2} u = \mathrm {d} (\mathrm {d} u) = \mathrm {d} \left(\frac {\partial u}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial u}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial u}{\partial x _ {n}} \mathrm {d} x _ {n}\right) \\ = \mathrm {d} \left(\frac {\partial u}{\partial x _ {1}}\right) \mathrm {d} x _ {1} + \mathrm {d} \left(\frac {\partial u}{\partial x _ {2}}\right) \mathrm {d} x _ {2} + \dots + \mathrm {d} \left(\frac {\partial u}{\partial x _ {n}}\right) \mathrm {d} x _ {n} + \frac {\partial u}{\partial x _ {1}} \mathrm {d} (\mathrm {d} x _ {1}) + \frac {\partial u}{\partial x _ {2}} \mathrm {d} (\mathrm {d} x _ {2}) + \dots + \frac {\partial u}{\partial x _ {n}} \mathrm {d} (\mathrm {d} x _ {n}) \\ = \left(\frac {\partial}{\partial x _ {1}} \mathrm {d} x _ {1} + \frac {\partial}{\partial x _ {2}} \mathrm {d} x _ {2} + \dots + \frac {\partial}{\partial x _ {n}} \mathrm {d} x _ {n}\right) ^ {2} u + \frac {\partial u}{\partial x _ {1}} \mathrm {d} ^ {2} x _ {1} + \frac {\partial u}{\partial x _ {2}} \mathrm {d} ^ {2} x _ {2} + \dots + \frac {\partial u}{\partial x _ {n}} \mathrm {d} ^ {2} x _ {n}. \\ \end{array}
$$

通过以上计算可以看到二阶微分不再具有形式不变性, 这是因为当 $x _ { i }$ 是一个中间变量时 ${ \mathrm { d } } x _ { i }$ 不再是一个常数, 而是一个函数.

特别地, 若 $x _ { i }$ 是一个线性函数, 即

$$
x _ {i} = k _ {0} + k _ {1} t _ {1} + \dots + k _ {m} t _ {m}, \quad k _ {0}, k _ {1}, \dots , k _ {m} \in \mathbb {R}, i = 1, 2, \dots , n,
$$

则

$$
\mathrm {d} x _ {i} = k _ {1} \mathrm {d} t _ {1} + \dots + k _ {m} \mathrm {d} t _ {m}.
$$

此时 ${ \mathrm { d } } x _ { i }$ $( i = 1 , 2 , \cdots , n )$ 都是常数, 因此

$$
\mathrm {d} ^ {k} x _ {1} = \mathrm {d} ^ {k} x _ {2} = \dots = \mathrm {d} ^ {k} x _ {n} \equiv 0, \quad k = 2, 3, \dots .
$$

因此复合函数 $u$ 可以继续保持微分形式的不变性.

# 4.3 中值定理和 Taylor 公式

# 4.3.1 多元函数的微分中值定理和 Taylor 公式

我们已经学过一元函数的微分中值定理. 设一元函数 $f$ 在开区间 ?? 上可微, 则对于任一 $x , x + h \in I$ 都有

$$
f (x + h) - f (x) = f ^ {\prime} (x + \theta h) h,
$$

其中 $\theta \in ( 0 , 1 )$ . 这个结论称为 Lagrange 中值定理, 也称为有限增量公式. 以上公式可以改写成微分形式:

$$
f (x + h) - f (x) = \mathrm {d} f (x + \theta h).
$$

以上形式的有限增量公式很容易推广到多元函数中.

# 定理 4.20 (多元函数的微分中值定理)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ 是一个凸区域. 则对于任意 ${ \pmb x } , { \pmb x } + { \pmb h } \in D$ , 则存在 $\theta \in ( 0 , 1 )$ 使得

$$
f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) = \mathrm {d} f (\boldsymbol {x} + \theta \boldsymbol {h}). \tag {4.9}
$$

证明 令

$$
\varphi (t) = f (\boldsymbol {x} + t \boldsymbol {h}), \quad t \in [ 0, 1 ].
$$

显然 $\varphi$ 是 [0,1] 上的一个可微函数. 由一元函数的 Lagrange 中值定理可知, 存在 $\theta \in ( 0 , 1 )$ 使得

$$
\varphi^ {\prime} (\theta) = \varphi (1) - \varphi (0) = f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}).
$$

设 $\pmb { x } = ( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } )$ , $\pmb { h } = \left( h _ { 1 } , h _ { 2 } , \cdots , h _ { n } \right)$ , 由链式法则可知

$$
\varphi^ {\prime} (\theta) = \frac {\partial f}{\partial x _ {1}} (\boldsymbol {x} + \theta \boldsymbol {h}) h _ {1} + \frac {\partial f}{\partial x _ {2}} (\boldsymbol {x} + \theta \boldsymbol {h}) h _ {2} + \dots + \frac {\partial f}{\partial x _ {n}} (\boldsymbol {x} + \theta \boldsymbol {h}) h _ {n} = \mathrm {d} f (\boldsymbol {x} + \theta \boldsymbol {h}).
$$

注 微分形式的有限增量公式更加简洁.

对于一个一元函数 $f _ { : }$ ,若它在开区间 $I$ 上的导数为零,则 $f$ 在 $I$ 上为常值函数.在多元函数中也有类似的结论.

# 定理 4.21

设函数 $f : D \to \mathbb { R }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个区域. 若对于任一 $\boldsymbol { x } \in D$ 都有

$$
\frac {\partial f}{\partial x _ {1}} (\boldsymbol {x}) = \frac {\partial f}{\partial x _ {2}} (\boldsymbol {x}) = \dots = \frac {\partial f}{\partial x _ {n}} (\boldsymbol {x}) = 0.
$$

则 $f$ 是 $D$ 上的一个常值函数.

证明 (i) 当 $D$ 是 $\mathbb { R } ^ { n }$ 上的一个凸区域时, 由多元函数的微分中值定理立刻可知 $f$ 是 $D$ 上的一个常值函数.

(ii) 当 $D$ 不是 $\mathbb { R } ^ { n }$ 上的一个凸区域时. 任取 $\pmb { x } _ { 0 } \in D$ . 令

$$
A = \left\{\boldsymbol {x} \in D: f (\boldsymbol {x}) = f \left(\boldsymbol {x} _ {0}\right) \right\}, \quad B = \left\{\boldsymbol {x} \in D: f (\boldsymbol {x}) \neq f \left(\boldsymbol {x} _ {0}\right) \right\}.
$$

下面来证明 $B = \neq \emptyset$ . 显然 $A \neq \emptyset$ . 任取 $a \in A \subseteq D$ . 由于 $D$ 是一个开集, 因此存在邻域 $N _ { r } ( { \pmb a } ) \subseteq D$ . 由于邻域都是凸区域, 因此 $f$ 在 $N _ { r } ( { \pmb a } )$ 上是常值函数. 因此对于任一 ${ \pmb x } \in N _ { r } ( { \pmb a } )$ 都有

$$
f (\boldsymbol {x}) = f (\boldsymbol {a}) = f (\boldsymbol {x} _ {0}).
$$

因此 $N _ { r } ( { \pmb a } ) \subseteq A$ , 这表明 $A$ 是一个开集. 同理可证 $B$ 也是一个开集. 由于 $A \cup B = D$ , $A \cap B = \emptyset$ , $A \neq \emptyset$ , 且 $D$ 是一个连通集, 因此 $B = \varnothing$ . ■

对于一个一元函数 $f$ , 如果它有连续的高阶导数, 则可以把 Lagrange 中值定理推广为带 Lagrange 余项的 Tay-lor 公式. 设 $f$ 有 $k + 1$ 阶导数, 则存在 $\theta \in ( 0 , 1 )$ 使得

$$
f (x + h) - f (x) = \sum_ {i = 1} ^ {k} \frac {1}{i !} f ^ {(i)} (x) h ^ {i} + \frac {1}{(k + 1) !} f ^ {(k + 1)} (x + \theta h) h ^ {k + 1}.
$$

现在也把上式改写成微分形式:

$$
f (x + h) - f (x) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} f (x) + \frac {1}{(k + 1) !} \mathrm {d} ^ {k + 1} f (x + \theta h).
$$

上式立刻可以推广到多元函数.

# 定理 4.22 (多元函数的带 Lagrange 余项的 Taylor 公式)

设函数 $f : D \to \mathbb { R } .$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ 是一个凸区域. $f \in C ^ { k + 1 } ( D )$ , 任取 ${ \pmb x } , { \pmb x } + { \pmb h } \in D$ , 则存在 $\theta \in ( 0 , 1 )$ 使得

$$
f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} f (\boldsymbol {x}) + \frac {1}{(k + 1) !} \mathrm {d} ^ {k + 1} f (\boldsymbol {x} + \theta \boldsymbol {h}). \tag {4.10}
$$

证明 令

$$
\varphi (t) = f (\boldsymbol {x} + t \boldsymbol {h}), \quad t \in [ 0, 1 ].
$$

显然 $\varphi \in C ^ { k + 1 } ( [ 0 , 1 ] )$ . 由一元函数的带 Lagrange 余项的 Taylor 公式可知, 存在 $\theta \in ( 0 , 1 )$ 使得

$$
f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) = \varphi (1) - \varphi (0) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} \varphi (0) + \frac {1}{(m + 1) !} \mathrm {d} ^ {k + 1} \varphi (\theta).
$$

由于 $\varphi ( t )$ 是多元函数 $f$ 和线性函数 $x + t h$ 的复合函数, 因此它的高阶微分继续保持形式不变性, 即

$$
\mathrm {d} ^ {k} \varphi (t) = \mathrm {d} ^ {k} f (\boldsymbol {x} + t \boldsymbol {h}), \quad k = 0, 1, 2, \dots .
$$

于是可知

$$
f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} \varphi (0) + \frac {1}{(m + 1) !} \mathrm {d} ^ {k + 1} \varphi (\theta) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} f (\boldsymbol {x}) + \frac {1}{(k + 1) !} \mathrm {d} ^ {k + 1} f (\boldsymbol {x} + \theta \boldsymbol {h}).
$$

注 以上定理也可以写成偏导数形式:

$$
\begin{array}{l} f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \left(h _ {i} \frac {\partial}{\partial x _ {i}}\right) ^ {i} f (\boldsymbol {x}) + \frac {1}{(k + 1) !} \left(h _ {i} \frac {\partial}{\partial x _ {i}}\right) ^ {k + 1} f (\boldsymbol {x} + \theta \boldsymbol {h}) \\ = \sum_ {i = 1} ^ {k} \frac {1}{i !} \sum_ {\alpha_ {1} + \dots + \alpha_ {n} = i} \frac {i !}{\alpha_ {1} ! \cdots \alpha_ {n} !} h _ {1} ^ {\alpha_ {1}} \dots h _ {n} ^ {\alpha_ {n}} \frac {\partial^ {\alpha_ {1}}}{\partial x _ {1} ^ {\alpha_ {1}}} \dots \frac {\partial^ {\alpha_ {n}}}{\partial x _ {n} ^ {\alpha_ {n}}} f (\boldsymbol {x}) \\ + \frac {1}{(k + 1) !} \sum_ {\alpha_ {1} + \dots + \alpha_ {n} = k + 1} \frac {(k + 1) !}{\alpha_ {1} ! \cdots \alpha_ {n} !} h _ {1} ^ {\alpha_ {1}} \dots h _ {n} ^ {\alpha_ {n}} \frac {\partial^ {\alpha_ {1}}}{\partial x _ {1} ^ {\alpha_ {1}}} \dots \frac {\partial^ {\alpha_ {n}}}{\partial x _ {n} ^ {\alpha_ {n}}} f (\boldsymbol {x} + \theta \boldsymbol {h}) \\ = \sum_ {i = 1} ^ {k} \sum_ {| \alpha | = i} \frac {h ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x}) + \sum_ {| \alpha | = k + 1} \frac {h ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} + \theta \boldsymbol {h}). \\ \end{array}
$$

和一元函数一样,多元函数的Taylor公式可以带积分余项.设函数 $f \in C ^ { k + 1 } ( a , b )$ ,则对于任一给定的 $x , x + h \in$ $( a , b )$ 都有

$$
f (x + h) - f (x) = \sum_ {i = 1} ^ {k} \frac {1}{i !} f ^ {(i)} (x) h ^ {i} + \frac {1}{n !} \int_ {0} ^ {1} (1 - t) ^ {n} f ^ {(n + 1)} (x + t h) h ^ {n + 1} d t.
$$

把它改写成微分形式

$$
f (x + h) - f (x) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} f (x) + \frac {1}{n !} \int_ {0} ^ {1} (1 - t) ^ {n} \mathrm {d} ^ {n + 1} f (x + t h) \mathrm {d} t.
$$

上式可以推广到多元函数中.

# 定理 4.23 (多元函数的带积分余项的 Taylor 公式)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ 是一个凸区域. $f \in C ^ { k + 1 } ( D )$ , 任取 ${ \pmb x } , { \pmb x } + { \pmb h } \in D$ , 则存在 $\theta \in ( 0 , 1 )$ 使得

$$
f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) = \sum_ {i = 1} ^ {k} \frac {1}{i !} \mathrm {d} ^ {i} f (\boldsymbol {x}) + \frac {1}{n !} \int_ {0} ^ {1} (1 - t) ^ {n} \mathrm {d} ^ {n + 1} f (\boldsymbol {x} + t \boldsymbol {h}) \mathrm {d} t. \tag {4.11}
$$

和一元函数的情况一元, 一个多元 $n$ 次多项式展开到第 $n + 1$ 项时余项为零.

例 4.43 将下列多项式在 (1, 1, 1) 处展开成 Taylor 多项式:

$$
f (x, y, z) = x ^ {3} + y ^ {3} + z ^ {3} - 3 x y z.
$$

解 先求各个偏导数:

$$
\frac {\partial f}{\partial x} = 3 x ^ {2} - 3 y z, \quad \frac {\partial f}{\partial y} = 3 y ^ {2} - 3 x z, \quad \frac {\partial f}{\partial z} = 3 z ^ {2} - 3 x y,
$$

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} = 6 x, \qquad \frac {\partial^ {2} f}{\partial y ^ {2}} = 6 y, \qquad \frac {\partial^ {2} f}{\partial z ^ {2}} = 6 z, \qquad \frac {\partial^ {2} f}{\partial x \partial y} = - 3 z, \qquad \frac {\partial^ {2} f}{\partial y \partial z} = - 3 x, \qquad \frac {\partial^ {2} f}{\partial z \partial x} = - 3 y,
$$

$$
\frac {\partial^ {3} f}{\partial x ^ {3}} = 6, \quad \frac {\partial^ {3} f}{\partial y ^ {3}} = 6, \quad \frac {\partial^ {3} f}{\partial z ^ {3}} = 6, \quad \frac {\partial^ {3} f}{\partial x \partial y \partial z} = - 3,
$$

其余各阶偏导都是零. 计算 (1, 1, 1) 处的各阶偏导数:

$$
f (1, 1, 1) = \frac {\partial f}{\partial x} (1, 1, 1) = \frac {\partial f}{\partial y} (1, 1, 1) = \frac {\partial f}{\partial z} (1, 1, 1) = 0,
$$

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} (1, 1, 1) = \frac {\partial^ {2} f}{\partial y ^ {2}} (1, 1, 1) = \frac {\partial^ {2} f}{\partial z ^ {2}} (1, 1, 1) = 6,
$$

$$
\frac {\partial^ {2} f}{\partial x \partial y} (1, 1, 1) = \frac {\partial^ {2} f}{\partial y \partial z} (1, 1, 1) = \frac {\partial^ {2} f}{\partial z \partial x} (1, 1, 1) - 3.
$$

由 Taylor 公式可知

$$
\begin{array}{l} f (\boldsymbol {x}) = \frac {1}{2} \left(6 h _ {1} ^ {2} + 6 h _ {2} ^ {2} + 6 h _ {3} ^ {2} - 6 h _ {1} h _ {2} - 6 h _ {2} h _ {3} - 6 h _ {3} h _ {1}\right) + \frac {1}{6} \left(6 h _ {1} ^ {3} + 6 h _ {2} ^ {3} + 6 h _ {3} ^ {3} - 1 8 h _ {1} h _ {2} h _ {3}\right) \\ = h _ {1} ^ {3} + h _ {2} ^ {3} + h _ {3} ^ {3} + 3 h _ {1} ^ {2} + 3 h _ {2} ^ {2} + 3 h _ {3} ^ {2} - 3 h _ {1} h _ {2} - 3 h _ {2} h _ {3} - 3 h _ {3} h _ {1} - 3 h _ {1} h _ {2} h _ {3} \\ = (x - 1) ^ {3} + (y - 1) ^ {3} + (z - 1) ^ {3} + 3 (x - 1) ^ {2} + 3 (y - 1) ^ {2} + 3 (z - 1) ^ {2} \\ - 3 (x - 1) (y - 1) - 3 (y - 1) (z - 1) - 3 (z - 1) (x - 1) - 3 (x - 1) (y - 1) (z - 1). \\ \end{array}
$$

在实际应用时, 只需要把 Taylor 公式展开到二阶, 具体写出来就是

$$
\begin{array}{l} f (\boldsymbol {x} + \boldsymbol {h}) = f (\boldsymbol {x}) + \left(h _ {1} \frac {\partial}{\partial x} + \dots + h _ {n} \frac {\partial}{\partial x _ {n}}\right) f (\boldsymbol {x}) + \frac {1}{2} \left(h _ {1} \frac {\partial}{\partial x _ {1}} + \dots + h _ {n} \frac {\partial}{\partial x _ {n}}\right) ^ {2} f (\boldsymbol {x}) + R _ {2} (\boldsymbol {x}) \\ = f (\boldsymbol {x} + \boldsymbol {h}) + h _ {1} \frac {\partial}{\partial x} f (\boldsymbol {x}) + \dots + h _ {n} \frac {\partial}{\partial x _ {n}} f (\boldsymbol {x}) + \frac {1}{2} \sum_ {i + j = 2} ^ {n} h _ {i} h _ {j} \frac {\partial^ {2}}{\partial x _ {i} \partial y _ {j}} f (\boldsymbol {x}) + R _ {2} (\boldsymbol {x}). \tag {4.12} \\ \end{array}
$$

其中 $R _ { 2 } ( { \pmb x } )$ 是 Lagrange 余项.

用矩阵和向量可以进一步简化上式.

# 定义 4.15 (Hesse 矩阵)

设函数 $f : D \to \mathbb { R }$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ 是一个开集. $f \in C ^ { 2 } ( D )$ . 令

$$
\boldsymbol {H} f = \left[ \begin{array}{c c c} \frac {\partial^ {2} f}{\partial x _ {1} ^ {2}} & \dots & \frac {\partial^ {2} f}{\partial x _ {1} \partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial^ {2} f}{\partial x _ {n} \partial x _ {1}} & \dots & \frac {\partial^ {2} f}{\partial x _ {n} ^ {2}} \end{array} \right].
$$

我们称矩阵 $H f$ 为 $f$ 的 Hesse 矩阵 (Hessian matrix).

注 Hesse 矩阵是以德国数学家 Ludwig Otto Hesse 命名的.

注 不难看出, Hesse 矩阵可以看作是 $f$ 的梯度 $\nabla f$ 的 Jacobi 矩阵, 也可以看作 $f$ 的 Jacobi 矩阵的 Jacobi 矩阵:

$$
\boldsymbol {H} f = \boldsymbol {J} (\nabla f) = \boldsymbol {J} (\boldsymbol {J} f).
$$

函数的 Jacobi 矩阵就是多元函数的导数, 因此 Hesse 矩阵实质上就是函数的二阶导.

用函数 $f$ 的梯度和 Hesse 矩阵可以把等式4.12记作

$$
f (\boldsymbol {x}) = f \left(\boldsymbol {x} _ {0}\right) + \nabla f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + \frac {1}{2} \boldsymbol {h} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + R _ {2} (\boldsymbol {x}).
$$

由于 Hesse 矩阵是一个对称矩阵, 因此 ${ \pmb { h } } ^ { T } { \pmb { H } } f ( { \pmb { x } } _ { \mathbf { 0 } } ) { \pmb { h } }$ 表示一个二次型. 如果用导数符号就可以把上式写成

$$
f (\boldsymbol {x}) = f \left(\boldsymbol {x} _ {0}\right) + f ^ {\prime} \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + \frac {1}{2} \boldsymbol {h} ^ {T} f ^ {\prime \prime} \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + R _ {2} (\boldsymbol {x}).
$$

这样就在形式上和一元函数的 Taylor 展开式一致起来了. 但这个形式无法继续推广到 Taylor 展开式的第四项, 这是因为“三次形式”没有对应的线性代数表示工具.但在物理中二阶导就已经足够,所以在场论中将会大量出现梯度和 Hesse 矩阵, 因为它们分别是多元函数的一阶导和二阶导.

例 4.44 设二次多项式

$$
f (x, y, z) = [ x, y, z ] \left[ \begin{array}{c c c} A & D & F \\ D & B & E \\ F & E & C \end{array} \right] \left[ \begin{array}{c} x \\ y \\ z \end{array} \right].
$$

将 $f ( x + \Delta x , y + \Delta y , z + \Delta z )$ 按 $\Delta x , \Delta y , \Delta z$ 的正整数次幂展开.

解 先求各个偏导数:

$$
\frac {\partial f}{\partial x} = 2 A x + 2 D y + 2 F z, \quad \frac {\partial f}{\partial y} = 2 D x + 2 B y + 2 E z, \quad \frac {\partial f}{\partial z} = 2 F x + 2 E y + 2 C z,
$$

$$
\frac {\partial f ^ {2}}{\partial x ^ {2}} = 2 A, \quad \frac {\partial f ^ {2}}{\partial y ^ {2}} = 2 B, \quad \frac {\partial f ^ {2}}{\partial z ^ {2}} = 2 C,
$$

$$
\frac {\partial^ {2} f}{\partial x \partial y} = 2 D \quad \frac {\partial^ {2} f}{\partial y \partial z} = 2 E, \quad \frac {\partial^ {2} f}{\partial z \partial x} = 2 F.
$$

令 $\pmb { x } = ( x , y , z ) ^ { T }$ , $\Delta \pmb { x } = ( \Delta x , \Delta y , \Delta z ) ^ { T }$ , 再令 $f ( { \pmb x } )$ 的系数矩阵为 ??. 则

$$
\nabla f = \left[ 2 A x + 2 D y + 2 F z, 2 D x + 2 B y + 2 E z, 2 F x + 2 E y + 2 C z \right] = 2 A x.
$$

$$
\boldsymbol {H} f = \left[ \begin{array}{c c c} 2 A & 2 D & 2 F \\ 2 D & 2 B & 2 E \\ 2 F & 2 E & 2 C \end{array} \right] = 2 \boldsymbol {A}.
$$

由 Taylor 公式可知

$$
f (\boldsymbol {x} + \Delta \boldsymbol {x}) = f (\boldsymbol {x}) + 2 \Delta \boldsymbol {x} ^ {T} \boldsymbol {A} \boldsymbol {x} + \frac {1}{2} \Delta \boldsymbol {x} ^ {T} (2 \boldsymbol {A}) \Delta \boldsymbol {x} = f (\boldsymbol {x}) + 2 \Delta \boldsymbol {x} ^ {T} \boldsymbol {A} \boldsymbol {x} + f (\Delta \boldsymbol {x}).
$$

由带 Lagrange 余项的 Taylor 公式可以得到带 Peano 余项的 Taylor 公式, 这是多元函数微分的推广.

# 定理 4.24 (带 Peano 余项的 Taylor 公式)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D \subseteq \mathbb { R } ^ { n }$ 是一个凸区域. $f \in C ^ { m } ( D )$ , 任取 $\pmb { x } = ( x _ { 1 } , \cdot \cdot \cdot , x _ { n } ) , \pmb { x } _ { 0 } \in D$ $\boldsymbol { x } _ { 0 } \in D$ , 令 $\pmb { h } = \pmb { x } - \pmb { x } _ { 0 } =$ $( h _ { 1 } , \cdots , h _ { n } )$ , 则

$$
f (\boldsymbol {x}) = \sum_ {k = 0} ^ {m} \frac {1}{k !} \left(\sum_ {i = 1} ^ {n} h _ {i} \frac {\partial}{\partial x _ {i}}\right) ^ {k} f (\boldsymbol {x} _ {0}) + o \left(\| \boldsymbol {h} \| ^ {m}\right) = \sum_ {k = 0} ^ {m} \sum_ {| \alpha | = k} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + o \left(\| \boldsymbol {h} \| ^ {m}\right), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

证明 由于 $f \in C ^ { m } ( D )$ , 由带 Lagrange 余项的 Taylor 公式可知

$$
f (\boldsymbol {x}) = \sum_ {k = 0} ^ {m - 1} \sum_ {| \alpha | = k} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + \sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}).
$$

因此只需证明

$$
\sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}) = \sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + o \left(\| \boldsymbol {h} \| ^ {m}\right), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

由于 $f \in C ^ { m } ( D )$ , 因此

$$
\begin{array}{l} \lim  _ {\| \boldsymbol {h} \| \rightarrow 0} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}) = \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) \iff \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}) = \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + o (1), \| \boldsymbol {h} \| \rightarrow 0 \\ \Longleftrightarrow \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}) = \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + o \left(\boldsymbol {h} ^ {\alpha}\right), \quad \| \boldsymbol {h} \| \rightarrow 0 \\ \Longleftrightarrow \sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}) = \sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + o \left(\boldsymbol {h} ^ {\alpha}\right), \| \boldsymbol {h} \| \rightarrow 0. \\ \end{array}
$$

由于

$$
\left| \boldsymbol {h} ^ {\alpha} \right| = \left| h _ {1} ^ {\alpha_ {1}} \dots h _ {n} ^ {\alpha_ {n}} \right| = \left| h _ {1} \right| ^ {\alpha_ {1}} \dots \left| h _ {n} \right| ^ {\alpha_ {n}} \leq \| \boldsymbol {h} \| ^ {\alpha_ {1} + \alpha_ {n}} = \| \boldsymbol {h} \| ^ {m}.
$$

因此

$$
\sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0} + \theta \boldsymbol {h}) = \sum_ {| \alpha | = m} \frac {\boldsymbol {h} ^ {\alpha}}{\alpha !} \mathcal {D} ^ {\alpha} f (\boldsymbol {x} _ {0}) + o \left(\| \boldsymbol {h} \| ^ {m}\right), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

于是可知命题成立.

注 一元函数的带 Peano 余项的 Taylor 公式只要求函数 $f$ 在 $x _ { 0 }$ 处有 $m$ 阶导数, 但多元函数的带 Peano 余项的 Taylor公式要求 $m$ 阶连续可导. 这是因为在多元函数下, 有偏导这个条件是很弱的, 连函数连续都无法保证, 这在前面已经讨论过.

# 4.3.2 向量值函数的拟微分中值定理

既然多元函数也有微分中值定理, 那么很自然地想法是想把微分中值定理进一步推广到向量组函数中. 下面先看一个例子.

例 4.45 设向量值函数 $f ( t ) = \left( t ^ { 2 } , t ^ { 3 } \right)$ ( $0 \leq t \leq 1 \}$ . 则

$$
\boldsymbol {J} \boldsymbol {f} (t) = \left[ \begin{array}{c} 2 t \\ 3 t ^ {2} \end{array} \right].
$$

假设存在 $\xi \in ( 0 , 1 )$ 使得

$$
\boldsymbol {f} (1) - \boldsymbol {f} (0) = \boldsymbol {J} \boldsymbol {f} (\xi) (1 - 0) = \boldsymbol {J} \boldsymbol {f} (\xi).
$$

则

$$
\left[ \begin{array}{c} 1 \\ 1 \end{array} \right] = \left[ \begin{array}{c} 2 \xi \\ 3 \xi^ {2} \end{array} \right].
$$

出现矛盾, 因此这样的 $\xi$ 不存在.

上例表明向量组函数是不满足微分中值定理的.

# 定理 4.25 (1 维的拟微分中值定理)

设连续映射 $f : [ a , b ] \to { \mathbb { R } } ^ { m }$ . 若 $f$ 在 $( a , b )$ 上可微, 则存在 $\xi \in ( a , b )$ 使得

$$
\| \boldsymbol {f} (b) - \boldsymbol {f} (a) \| \leq \| \boldsymbol {J} \boldsymbol {f} (\xi) \| (b - a).
$$

证明 令 ${ \pmb u } = f ( b ) - f ( a )$ , 再令

$$
\varphi (t) = \left\langle \boldsymbol {u}, \boldsymbol {f} (t) \right\rangle , \quad a \leq t \leq b.
$$

容易知道 $\varphi ( t )$ 是 $[ a , b ]$ 上连续, 在 $( a , b )$ 上可导. 由 Lagrange 中值定理可知, 存在 $\xi \in ( a , b )$ 使得

$$
\varphi (b) - \varphi (a) = (b - a) \varphi^ {\prime} (\xi) = (b - a) \langle \boldsymbol {u}, \boldsymbol {J} \boldsymbol {f} (t) \rangle .
$$

另一方面

$$
\varphi (b) - \varphi (a) = \langle \boldsymbol {u}, \boldsymbol {f} (b) \rangle - \langle \boldsymbol {u}, \boldsymbol {f} (a) \rangle = \langle \boldsymbol {u}, \boldsymbol {f} (b) - \boldsymbol {f} (a) \rangle = \langle \boldsymbol {u}, \boldsymbol {u} \rangle = \| \boldsymbol {u} \| ^ {2}.
$$

由 Cauchy-Schwarz 不等式可知

$$
\| \boldsymbol {u} \| ^ {2} = (b - a) \langle \boldsymbol {u}, \boldsymbol {J} \boldsymbol {f} (t) \rangle \leq (b - a) \| \boldsymbol {u} \| \| \boldsymbol {J} \boldsymbol {f} (t) \|.
$$

当 $\| u \| \neq 0$ 时就得到

$$
\| \boldsymbol {u} \| \leq (b - a) \| \boldsymbol {J} \boldsymbol {f} (t) \| \Longleftrightarrow \| \boldsymbol {f} (b) - \boldsymbol {f} (a) \| \leq \| \boldsymbol {J} \boldsymbol {f} (\xi) \| (b - a).
$$

当 $\| u \| = 0$ 时上式也成立, 于是可知命题成立.

# 定理 4.26 (?? 维的拟微分中值定理)

设映射 $f : D \to \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 上的凸区域. 若 $f$ 在 $D$ 上可微, 则对于任意 ${ \pmb a } , { \pmb b } \in D$ , 在由 $\pmb { a }$ 和 $\pmb { b }$ 决定的线段上存在一点 $\pmb { \xi }$ 使得

$$
\left\| f (\boldsymbol {b}) - \boldsymbol {f} (\boldsymbol {a}) \right\| \leq \left\| J \boldsymbol {f} (\boldsymbol {\xi}) \right\| (\boldsymbol {b} - \boldsymbol {a}).
$$

证明 令

$$
\boldsymbol {r} (t) = \boldsymbol {a} + t (\boldsymbol {b} - \boldsymbol {a}), \quad 0 \leq t \leq 1.
$$

则 $\boldsymbol { r } ( t )$ 是 $\pmb { a }$ 和 $\pmb { b }$ 决定的线段上的点. 令

$$
\boldsymbol {g} (t) = \boldsymbol {f} [ \boldsymbol {r} (t) ], \quad 0 \leq t \leq 1.
$$

容易知道 $\pmb { g }$ 在 [0, 1] 上连续, 在 (0, 1) 上可微. 由链式法则可知

$$
\boldsymbol {J} \boldsymbol {g} (t) = \boldsymbol {J} \boldsymbol {f} [ \boldsymbol {r} (t) ] \boldsymbol {J} \boldsymbol {r} (t) = \boldsymbol {J} \boldsymbol {f} [ \boldsymbol {r} (t) ] \cdot (\boldsymbol {b} - \boldsymbol {a}).
$$

对于 $\pmb { g }$ , 由 1 维的拟微分中值定理可知, 存在 $\xi \in ( 0 , 1 )$ 使得

$$
\| \boldsymbol {g} (1) - \boldsymbol {g} (0) \| \leq \| \boldsymbol {J} \boldsymbol {g} (\xi) \| (1 - 0) = \| \boldsymbol {J} \boldsymbol {g} (\xi) \|.
$$

由于

$$
\boldsymbol {g} (1) = \boldsymbol {f} [ \boldsymbol {r} (1) ] = \boldsymbol {f} (\boldsymbol {b}), \quad \boldsymbol {g} (0) = \boldsymbol {f} [ \boldsymbol {r} (0) ] = \boldsymbol {f} (\boldsymbol {a}), \quad \boldsymbol {J} \boldsymbol {g} (\xi) = \boldsymbol {J} \boldsymbol {f} [ \boldsymbol {r} (\xi) ] \cdot (\boldsymbol {b} - \boldsymbol {a}).
$$

令 $\xi = r ( \xi )$ , 则

$$
\left\| f (\boldsymbol {b}) - \boldsymbol {f} (\boldsymbol {a}) \right\| = \left\| \boldsymbol {g} (1) - \boldsymbol {g} (0) \right\| \leq \left\| J \boldsymbol {g} (\xi) \right\| = J f (\xi) \cdot (\boldsymbol {b} - \boldsymbol {a}) \leq \left\| J f (\xi) \right\| \left\| \boldsymbol {b} - \boldsymbol {a} \right\|.
$$

注意到多元函数的微分中值定理是等式, 而向量值函数的拟微分中值定理是不等式.

# 4.3.3 多元函数的极值问题

用多元函数的微分中值定理和 Taylor 公式可以研究多元函数的极值问题.

# 定义 4.16 (多元函数的极值)

设函数 $f : D \to \mathbb { R } ,$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集.

(1) 若点 $\pmb { x } _ { 0 } \in D$ 存在一个邻域 $U \subseteq D$ 使得对于任一 $x \in U$ 都有 $f ( \pmb { x } ) \geq f ( \pmb { x } _ { 0 } )$ , 则称 $f$ 在 $x _ { 0 }$ 处取到极小值, 称 $x _ { 0 }$ 是 $f$ 的一个极小值点.  
(2) 若点 $\pmb { x } _ { 0 } \in D$ 存在一个邻域 $U \subseteq D$ 使得对于任一 $x \in U$ 都有 $f ( \pmb { x } ) \leq f ( \pmb { x } _ { 0 } )$ , 则称 $f$ 在 $x _ { 0 }$ 处取到极大值, 称 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 是 $f$ 的一个极大值点.

注 如果 $\leq$ 改为 $< ,$ , 则称为 “严格的极大值”. $\geq$ 改为 $>$ , 则称为 “严格的极小值”.

在多元函数中也有类似 Fermat 引理的结论.

# 定理 4.27 (多元函数的 Fermat 引理)

设 $n$ 元函数 $f$ 在 $\pmb { a }$ 处取得极值, 且 $f$ 在 $\pmb { a }$ 处的各个偏导数都存在, 则

$$
\frac {\partial f}{\partial x _ {i}} (\boldsymbol {a}) = 0, \quad i = 1, 2, \dots , n.
$$

证明 只证明 $\pmb { a }$ 是极小值点的情况.有极小值点的定义可知存在 $\pmb { a }$ 的一个球形邻域 $N _ { r } ( { \pmb a } )$ 使得对于任一 ${ \pmb x } \in N _ { r } ( { \pmb a } )$ 都有 $f ( { \pmb x } ) \geq f ( { \pmb a } )$ . 设 $\pmb { a } = ( a _ { 1 } , \cdots , a _ { n } ) .$ . 令

$$
\varphi (t) = f \left(a _ {1}, \dots , a _ {i - 1}, t, a _ {i + 1}, \dots , a _ {n}\right).
$$

取 $\pmb { x } = ( a _ { 1 } , \cdots , a _ { i - 1 } , t , a _ { i + 1 } , \cdots , a _ { n } )$ 满足 $| t - a _ { i } | < r$ . 则

$$
\left\| \boldsymbol {x} - \boldsymbol {a} \right\| = \left| t - a _ {i} \right| <   r.
$$

因此 ${ \pmb x } \in N _ { r } ( { \pmb x } )$ . 故 $f ( { \pmb x } ) \geq f ( { \pmb a } )$ , 即 $\varphi ( t ) \geq \varphi ( a _ { i } )$ . 这表明 $\varphi$ 在 $a _ { i }$ 处取到极小值, 由 Fermat 引理可知

$$
\varphi^ {\prime} (a _ {i}) = 0 \iff \frac {\partial f}{\partial x _ {i}} (\boldsymbol {a}) = 0.
$$

同理可证其余偏导数也都为零.

注 若函数 $f$ 在 $\pmb { a }$ 可微, 则取得极值的必要条件可以写作

$$
\mathrm {d} f (\boldsymbol {a}) = 0.
$$

和一元函数一样,为了方便叙述,我们也称满足以上条件的点为驻点.同样地,驻点只是极值点的必要条件.下面看一个例子.

例 4.46 设二元函数 $f ( x , y ) = x y$ . 由于

$$
\frac {\partial f}{\partial x} = y, \quad \frac {\partial f}{\partial y} = x.
$$

因此 $( 0 , 0 )$ 是 $f$ 的唯一驻点. 由于第一第三象限的点取正值, 第二第四象限取负值, 因此 $( 0 , 0 )$ 任一邻域内都同时存在正值点和负值点. 这表明 $( 0 , 0 )$ 不是 $f$ 的极值点.

注 事实上 $f ( x , y ) = x y$ 的图像是一张马鞍面, 如图所示

![](images/f7c15c8f97c00672040fbbd45c6fbb93c2eaf71c40e364afc22c7ad96306b140.jpg)  
图 4.10: ???? 示意图.

下面

# 例 4.47 设 $D$ 上的一个二元函数

$$
f (x, y) = \sin x \sin y \sin (x + y).
$$

其中 $D = \{ ( x + y ) : 0 \leq x , y , x + y \leq \pi \}$ . 求函数 $f$ 的最大值和最小值.

解 容易看出在 $D$ 上 $f \geq 0$ . 当 $\pmb { x } \in \partial D$ 时 $f ( \pmb { x } ) = 0$ , 当 $\boldsymbol { x } \in D ^ { \circ }$ 时 $f ( \pmb { x } ) > 0$ . 因此 $f$ 的最小值在 $\partial D$ 上取到.

为了求出 $f$ 的最大值, 先求驻点. 为此先求偏导数:

$$
\frac {\partial f}{\partial x} (x, y) = \sin y [ \cos x \sin (x + y) + \sin x \cos (x + y) ] = \sin y \sin (2 x + y),
$$

$$
\frac {\partial f}{\partial x} (x, y) = \sin x [ \cos y \sin (x + y) + \sin y \cos (x + y) ] = \sin x \sin (x + 2 y).
$$

令偏导数都为零, 由于 sin ?? ≠ 0, sin ?? ≠ 0, 故

$$
\sin (2 x + y) = 0, \qquad \sin (x + 2 y) = 0.
$$

由于 $0 < 2 x + y < 2 \pi$ , $0 < x + 2 y < 2 \pi$ , 所以

$$
2 x + y = \pi , \qquad x + 2 y = \pi .
$$

解得 $x = y = \pi / 3$ . 因此 $( \pi / 3 , \pi / 3 )$ 是 $f$ 的唯一驻点. 且

$$
f \left(\frac {\pi}{3}, \frac {\pi}{3}\right) = \sin \frac {\pi}{3} \sin \frac {\pi}{3} \sin \frac {2 \pi}{3} = \frac {3}{8} \sqrt {3}.
$$

由于 $f$ 是连续函数,因此它在有界闭集上的一定可以取到最大值,因此 $f$ 一定在 $( \pi / 3 , \pi / 3 )$ 上取到最大值3 3/8.■

研究多元函数的极值需要线性代数中的二次型理论, 由于这部分内容在《高等代数》中已经详细介绍, 因此相关定理的证明不再赘述.

# 定义 4.17 (实二次型)

设 $n$ 级实对称矩阵 $A = \left( a _ { i j } \right)$ 和实数域 $\mathbb { R }$ 上的 $n$ 维列向量 $\pmb { x } = ( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } ) ^ { T }$ . 令

$$
Q (\boldsymbol {x}) = \boldsymbol {x} ^ {T} \boldsymbol {A} \boldsymbol {x} = \sum_ {i, j} ^ {n} a _ {i j} x _ {i} x _ {j}.
$$

我们称 $Q ( { \pmb x } )$ 为 $x _ { 1 } , x _ { 2 } , \cdots , x _ { n }$ 的一个实二次型 (real quadratic form), 其中 $\pmb { A }$ 称为 $Q ( { \pmb x } )$ 的系数矩阵 (coefficientmatrix).

# 定义 4.18 (正定矩阵、负定矩阵和不定矩阵)

设 $n$ 元实二次型 $Q ( { \pmb x } )$ .

(1) 若对于任一 $\boldsymbol { x } \in \mathbb { R } ^ { n }$ 都有 $Q ( { \pmb x } ) > 0$ , 则称 $Q$ 是正定的 (positive definite), 此时称它的系数矩阵为正定矩阵 (positive definite matrix).  
(2) 若对于任一 $\boldsymbol { x } \in \mathbb { R } ^ { n }$ 都有 $Q ( { \pmb x } ) < 0$ , 则称 $Q$ 是负定的 (negative definite), 此时称它的系数矩阵为负定矩阵 (negative definite matrix).  
(3) 若存在 $\pmb { a } , \pmb { b } \in \mathbb { R } ^ { n }$ 使得 $Q ( { \pmb a } ) < 0 < Q ( { \pmb b } ) .$ , 则称 $Q$ 是不定的 (indefinite ), 此时称它的系数矩阵为不定矩阵 (indefinite matrix).

注 如果 $>$ 改为 $\geq$ , 则称为半正定的 (positive semi-definite). 如果 $<$ 改为 $\leq$ , 则称为半负定的 (negative semi-definite).

下面是线性代数中判断正定矩阵和负定矩阵的充要条件.

# 定理 4.28

设 $n$ 级实对称矩阵 $A = \left( a _ { i j } \right)$ . 则 $\pmb { A }$ 是正定的当且仅当它的各阶顺序主子式均大于零:

$$
a _ {1 1} > 0, \qquad \left| \begin{array}{c c} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| > 0, \qquad \left| \begin{array}{c c c} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| > 0, \qquad \dots , \qquad \det  A > 0.
$$

用以上两个结论可以证明二级不定矩阵的充要条件.

# 定理 4.29

设 $n$ 级实对称矩阵 $A = \left( a _ { i j } \right)$ . 则 $\pmb { A }$ 是负定的当且仅当它的奇数阶顺序主子式均小于零,偶数阶顺序主子式 均大于零:

$$
a _ {1 1} <   0, \quad \left| \begin{array}{l l} a _ {1 1} & a _ {1 2} \\ a _ {2 1} & a _ {2 2} \end{array} \right| > 0, \quad \left| \begin{array}{l l l} a _ {1 1} & a _ {1 2} & a _ {1 3} \\ a _ {2 1} & a _ {2 2} & a _ {2 3} \\ a _ {3 1} & a _ {3 2} & a _ {3 3} \end{array} \right| <   0, \quad \dots .
$$

下面给出一个判断二级不定矩阵的充要条件, 这个命题在线性代数中没有介绍.

# 定理 4.30

设 2 级实对称矩阵 $A = \left( a _ { i j } \right)$ , 则 $\pmb { A }$ 是不定矩阵当且仅当 det $A < 0$ .

证明 由题意 $A$ 对应的二次型为

$$
Q (x, y) = a _ {1 1} x ^ {2} + 2 a _ {1 2} x y + a _ {2 2} y ^ {2}.
$$

(i) 证明必要性. 若 $\pmb { A }$ 是不定的, 则由定理4.28和4.29可知 det $A = a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } ^ { 2 } \leq 0 .$ . 现假设 $a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } ^ { 2 } = 0$ .

若 $a _ { 1 1 } = 0 ,$ , 则 $a _ { 1 2 } = 0$ , 于是

$$
Q (x, y) = a _ {2 2} y ^ {2} \geq 0.
$$

显然这时 $Q ( x , y )$ 不是不定的.

若 $a 1 1 \neq 0$ , 则

$$
Q (x, y) = a _ {1 1} \left(x + \frac {a _ {1 2}}{a _ {1 1}} y\right) ^ {2} + \left(\frac {a _ {1 1} a _ {2 2} - a _ {1 2} ^ {2}}{a _ {1 1}}\right) y ^ {2} = a _ {1 1} \left(x + \frac {a _ {1 2}}{a _ {1 1}}\right) ^ {2} \geq 0.
$$

显然这时 $Q ( x , y )$ 不是不定的. 于是可知当 $\pmb { A }$ 不定时, det $A < 0$ .

(ii) 证明充分性. 设 d $\mathfrak { t } A = a _ { 1 1 } a _ { 2 2 } - a _ { 1 2 } ^ { 2 } < 0 .$ .

若 $a _ { 1 1 } = 0$ , 则 $a _ { 1 2 } \neq 0$ , 于是

$$
Q (x, y) = \left(2 a _ {1 2} x + a _ {2 2} y\right) y.
$$

取

$$
x _ {1} <   - \frac {a _ {1 1}}{2 a _ {1 2}}, \quad x _ {2} > \frac {a _ {1 1}}{2 a _ {1 2}}.
$$

则

$$
Q \left(x _ {1}, 1\right) = 2 a _ {1 2} x + a _ {2 2} <   0, \quad Q \left(x _ {2}, 1\right) = 2 a _ {1 2} x _ {2} + a _ {2 2} > 0.
$$

因此 $Q ( x , y )$ 是正定的.

若 $a _ { 1 1 } \neq 0$ , 则

$$
Q (x, y) = a _ {1 1} \left[ \left(x + \frac {a _ {1 2}}{a _ {1 1}} y\right) ^ {2} + \left(\frac {a _ {1 1} a _ {2 2} - a _ {1 2} ^ {2}}{a _ {1 1} ^ {2}}\right) y ^ {2} \right].
$$

若 $a _ { 1 1 } > 0$ , 则

$$
Q \left(\frac {- a _ {1 2}}{a _ {1 1}}, 1\right) = a _ {1 1} \left[ \left(x + \frac {a _ {1 2}}{a _ {1 1}} y\right) ^ {2} + \left(\frac {a _ {1 1} a _ {2 2} - a _ {1 2} ^ {2}}{a _ {1 1} ^ {2}}\right) y ^ {2} \right] = \frac {a _ {1 1} a _ {2 2} - a _ {1 2} ^ {2}}{a _ {1 1}} <   0., \quad Q (1, 0) = a _ {1 1} > 0.
$$

若 $a _ { 1 1 } < 0$ , 则

$$
Q \left(\frac {- a _ {1 2}}{a _ {1 1}}, 1\right) = a _ {1 1} \left[ \left(x + \frac {a _ {1 2}}{a _ {1 1}} y\right) ^ {2} + \left(\frac {a _ {1 1} a _ {2 2} - a _ {1 2} ^ {2}}{a _ {1 1} ^ {2}}\right) y ^ {2} \right] = \frac {a _ {1 1} a _ {2 2} - a _ {1 2} ^ {2}}{a _ {1 1}} > 0., \quad Q (1, 0) = a _ {1 1} <   0.
$$

因此 $Q ( x , y )$ 是正定的.

XXXX

# 定理 4.31 (多元函数极值的充分条件)

设 $n$ 元函数 $f , { \pmb x } _ { 0 }$ 是 $f$ 的一个驻点. $f$ 在 $x _ { 0 }$ 的一个邻域内有连续的二阶偏导数.

(1) 若 $H f ( { \pmb x } ) _ { 0 }$ 是正定的, 则 $x _ { 0 }$ 是 $f$ 的一个严格极小值点.  
(2) 若 $H f ( x ) _ { 0 }$ 是负定的, 则 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 是 $f$ 的一个严格极大值点.  
(3) 若 $H f ( { \pmb x } ) _ { 0 }$ 是不定的, 则 $x _ { 0 }$ 不是 $f$ 的极值点.

证明 由于 $f$ 在 $x _ { 0 }$ 的一个邻域内有连续的二阶偏导数, 故

$$
f (\boldsymbol {x}) = f \left(\boldsymbol {x} _ {0}\right) + \boldsymbol {J} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + \frac {1}{2} \boldsymbol {h} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + o \left(\| \boldsymbol {h} \| ^ {2}\right), \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

其中 $\pmb { h } = \pmb { x } - \pmb { x } _ { 0 }$ 由于 $x _ { 0 }$ 是 $f$ 的一个驻点, 故 $\begin{array} { r } { J f ( \pmb { x } _ { 0 } ) \pmb { 0 } , } \end{array}$ 于是

$$
f (\boldsymbol {x}) - f \left(\boldsymbol {x} _ {0}\right) = \frac {1}{2} \boldsymbol {h} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {h} + o \left(\| \boldsymbol {h} \| ^ {2}\right), \quad \| \boldsymbol {h} \| \rightarrow 0. \tag {4.13}
$$

(1) 设 $\left\| \mathbf { y } \right\| = 1$ , 它的全体就是单位球面 $\partial N _ { 1 } ( \mathbf { 0 } )$ . 由于 $H f ( { \pmb x } _ { 0 } )$ 是正定的, 因此

$$
\boldsymbol {y} ^ {T} \boldsymbol {H} f (\boldsymbol {x} _ {0}) \boldsymbol {y} > 0.
$$

这是单位球面上的连续函数, 且单位球面是一个有界闭集, 因此该函数在单位球面上的某点取得最小值, 设这个最小值是 $m > 0 .$ , 于是

$$
\boldsymbol {y} ^ {T} \boldsymbol {H} f (\boldsymbol {x} _ {0}) \boldsymbol {y} \geq m > 0.
$$

于是

$$
\frac {1}{2} \boldsymbol {h} ^ {T} \boldsymbol {H} f (\boldsymbol {x} _ {0}) \boldsymbol {h} = \frac {1}{2} \| \boldsymbol {h} \| ^ {2} \left(\frac {\boldsymbol {h} ^ {T}}{\| \boldsymbol {h} \|} \boldsymbol {H} f (\boldsymbol {x} _ {0}) \frac {\boldsymbol {h}}{\| \boldsymbol {h} \|}\right) \geq \frac {m}{2} \| \boldsymbol {h} \| ^ {2}.
$$

把上式代入等式4.13可知

$$
f (\boldsymbol {x}) - f \left(\boldsymbol {x} _ {0}\right) \geq \| \boldsymbol {h} \| ^ {2} \left[ \frac {m}{2} + o (1) \right], \quad \| \boldsymbol {h} \| \rightarrow 0.
$$

因此 $f ( \pmb { x } ) > f ( \pmb { x } _ { 0 } )$ . 这表明 $f$ 在 $x _ { 0 }$ 这点取到严格的极小值点. 同理可知 2 成立.

(3) 由于 $H f ( x ) _ { 0 }$ 是不定的, 故存在 $\pmb { p } , \pmb { q } \in \mathbb { R } ^ { n }$ 使得

$$
\boldsymbol {p} ^ {T} \boldsymbol {H} f (\boldsymbol {x} _ {0}) \boldsymbol {p} <   0 <   \boldsymbol {q} ^ {T} \boldsymbol {H} f (\boldsymbol {x} _ {0}) \boldsymbol {q}.
$$

等式4.13中的 $\pmb { h }$ 分别取 $\varepsilon p$ 和 $\varepsilon q$ 得

$$
f \left(\boldsymbol {x} _ {0} + \varepsilon \boldsymbol {p}\right) - f \left(\boldsymbol {x} _ {0}\right) = \frac {1}{2} \left[ \boldsymbol {p} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {p} \right] \varepsilon^ {2} + o \left(\varepsilon^ {2}\right) = \left[ \frac {1}{2} \boldsymbol {p} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {p} + o (1) \right] \varepsilon^ {2}.
$$

$$
f \left(\boldsymbol {x} _ {0} + \varepsilon \boldsymbol {q}\right) - f \left(\boldsymbol {x} _ {0}\right) = \frac {1}{2} \left[ \boldsymbol {q} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {q} \right] \varepsilon^ {2} + o \left(\varepsilon^ {2}\right) = \left[ \frac {1}{2} \boldsymbol {q} ^ {T} \boldsymbol {H} f \left(\boldsymbol {x} _ {0}\right) \boldsymbol {q} + o (1) \right] \varepsilon^ {2}.
$$

当 $\varepsilon$ 充分小时

$$
f \left(\boldsymbol {x} _ {0} + \varepsilon \boldsymbol {p}\right) <   f \left(\boldsymbol {x} _ {0}\right) <   f \left(\boldsymbol {x} _ {0} + \varepsilon \boldsymbol {q}\right).
$$

这表明 $x _ { 0 }$ 不是 $f$ 的极值点.

对于二元函数, 以上定理可以写成如下形式.

# 定理 4.32

设 2 元函数 $f , x _ { 0 }$ 是 $f$ 的一个驻点. $f$ 在 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 的一个邻域内有连续的二阶偏导数. 令

$$
a = \frac {\partial^ {2}}{\partial x ^ {2}} f (\boldsymbol {x} _ {0}), \qquad b = \frac {\partial^ {2}}{\partial x \partial y} f (\boldsymbol {x} _ {0}), \qquad c = \frac {\partial^ {2}}{\partial y ^ {2}} f (\boldsymbol {x} _ {0}).
$$

(1) 当 $a c - b ^ { 2 } > 0$ 且 $a > 0$ 时, $x _ { 0 }$ 是 $f$ 的一个严格极小值点.  
(2) 当 $a c - b ^ { 2 } > 0$ 且 $a < 0$ 时, $x _ { 0 }$ 是 $f$ 的一个严格极大值点.  
(3) 当 $a c - b ^ { 2 } < 0$ 时, $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 不是 $f$ 的极值点.

下面看一个例子.

例 4.48 设二元函数

$$
f (x, y) = 2 x ^ {4} + y ^ {4} - 2 x ^ {2} - 2 y ^ {2}.
$$

求 $f$ 的所有极值点.

解 建立驻点方程:

$$
\frac {\partial f}{\partial x} (x, y) = 8 x ^ {3} - 4 x = 0, \quad \frac {\partial f}{\partial y} (x, y) = 4 y ^ {3} - 4 y = 0.
$$

解得 $x = 0$ 或 $\pm { \sqrt { 2 } } / 2$ , $y = 0$ 或 $\pm 1$ . 因此一共有九个驻点. 求二阶偏导数:

$$
a = \frac {\partial^ {2}}{\partial x ^ {2}} f (x, y) = 2 4 x ^ {2} - 4, \quad b = \frac {\partial^ {2}}{\partial x \partial y} f (x, y) = 0, \quad c = \frac {\partial^ {2}}{\partial y ^ {2}} f (x, y) = 1 2 y ^ {2} - 4.
$$

下面来检验 $a c - b ^ { 2 }$ 和 $a$ 的正负性:

<table><tr><td>x</td><td>0</td><td>0</td><td>±√2/2</td><td>±√2/2</td></tr><tr><td>y</td><td>0</td><td>±1</td><td>0</td><td>±1</td></tr><tr><td>a</td><td>-4</td><td>-4</td><td>8</td><td>8</td></tr><tr><td>b</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>c</td><td>-4</td><td>8</td><td>-4</td><td>8</td></tr><tr><td>ac-b2</td><td>16&gt;0</td><td>-32&lt;0</td><td>-32&lt;0</td><td>64&gt;0</td></tr></table>

于是可知 $( 0 , 0 )$ 是严格极大值点, $( \pm { \sqrt { 2 } } / 2 , \pm 1 )$ 四点是严格极小值点. 其余的不是极值点.

多元函数的极值有很广泛的应用, 下面介绍一个在数学上的应用. 在平面上有一组点 $( x _ { i } , y _ { 1 } ) \ ( i = 1 , 2 , \cdot \cdot \cdot , n )$ $( x _ { i } , y _ { 1 } )$ ,发现这组点的近似地分布在某一条直线附近.现在我们希望找到一条直线来拟合这组点.那么很自然的想法是,所有点与这条直线的 “偏差” 之和应最小. 为了取消正负性的影响, 于是我们考虑 “偏差” 的平方和. 设满足要求的直线为 $y = a x + b$ , 令

$$
\varphi (a, b) = \sum_ {i = 1} ^ {n} \left(a x _ {i} + b - y _ {i}\right) ^ {2}.
$$

则问题就是讨论二元函数 $\varphi$ 是否存在最小值. 建立驻点方程:

$$
\frac {\partial \varphi}{\partial a} (a, b) = 2 \sum_ {i = 1} ^ {n} (a x _ {i} + b - y _ {i}) x _ {i} = 0, \quad \frac {\partial \varphi}{\partial b} (a, b) = 2 \sum_ {i = 1} ^ {n} (a x _ {i} + b - y _ {i}) = 0.
$$

整理得到

$$
\left\{ \begin{array}{l} {\left(\sum_ {i = 1} ^ {n} x _ {i} ^ {2}\right) a + \left(\sum_ {i = 1} ^ {n} x _ {i}\right) b = \sum_ {i = 1} ^ {n} x _ {i} y _ {i}} \\ {\left(\sum_ {i = 1} ^ {n} x _ {i}\right) a + n b = \sum_ {i = 1} ^ {n} y _ {i}} \end{array} . \right. \tag {4.14}
$$

根据 Cramer 法则, 需要看系数行列式是否为零. 由 Cauchy-Schwarz 不等式可知

$$
\left(\sum_ {i = 1} ^ {n} x _ {i}\right) ^ {2} = \left(\sum_ {i = 1} ^ {n} 1 \cdot x _ {i}\right) ^ {2} \leq \sum_ {i = 1} ^ {n} 1 ^ {2} \sum_ {i = 1} ^ {n} x _ {i} ^ {2} = n \left(\sum_ {i = 1} ^ {n} x _ {i} ^ {2}\right).
$$

现在假设 $x _ { 1 }$ , ??2, · · · , $x _ { n }$ 不全相等, 则上述 $\leq$ 取到严格 $< .$ 于是可知线性方程组的系数矩阵不为零, 因此方程组4.14有唯一解, 这表明 $\varphi$ 有唯一驻点. 下面来看这个驻点是不是极值点. 计算 Hesse 矩阵:

$$
\boldsymbol {H} \varphi (a, b) = 2 \left[ \begin{array}{c c} \frac {\partial^ {2} \varphi}{\partial a ^ {2}} & \frac {\partial^ {2} \varphi}{\partial a \partial b} \\ \frac {\partial^ {2} \varphi}{\partial a \partial b} & \frac {\partial^ {2} \varphi}{\partial b ^ {2}} \end{array} \right] _ {(a, b)} = 2 \left[ \begin{array}{c c} \sum_ {i = 1} ^ {n} x _ {i} ^ {2} & \sum_ {i = 1} ^ {n} x _ {i} \\ \sum_ {i = 1} ^ {n} x _ {i} & n \end{array} \right].
$$

由于

$$
n \left(\sum_ {i = 1} ^ {n} x _ {i} ^ {2}\right) - \left(\sum_ {i = 1} ^ {n} x _ {i}\right) ^ {2} > 0, \quad \sum_ {i = 1} ^ {n} x _ {i} ^ {2} > 0.
$$

由此可知 $\varphi$ 的唯一驻点正是它的极小值. 由直线的两点式方程可知满足要求的直线方程为

$$
\left| \begin{array}{c c c} x & y & 1 \\ \sum_ {i = 1} ^ {n} x _ {i} ^ {2} & \sum_ {i = 1} ^ {n} x _ {i} y _ {i} & \sum_ {i = 1} ^ {n} x _ {i} \\ \sum_ {i = 1} ^ {n} x _ {i} & \sum_ {i = 1} ^ {n} y _ {i} & n \end{array} \right| = 0.
$$

以上用直线拟合一组点的方法称为最小二乘法 (least squares method). 1801 年, 年仅 24 岁的 Gauss 用最小二乘法计算了谷神星的轨道, 根据他计算出来的轨道, 人们重新发现了谷神星. 1806 年法国数学家 Adrien-Marie Legendre独立提出了最小二乘法, 而 Gauss 是在 1809 年的著作《天体运动论》中第一次介绍了最小二乘法. 1829 年, 高斯

证明了最小二乘法的拟合效果强于其他方法, 这就是 Gauss-Markov 定理. 因此最小二乘法通常归功于 Gauss.

# 定理 4.33

# 证明

# 定理 4.34

# 证明

# 定理 4.35

# 证明

例 4.49

解 XXX

例 4.50

解 XXX

例 4.51

解 XXX

例 4.52

解 XXX

# 4.4 隐函数和隐映射的存在性及其微分

# 4.4.1 隐函数定理

我们在《数学分析1》中已经看到,不是每个函数都可以写成显式表达式,在更多情况下函数会写成隐式表达式, 这样的函数称为 “隐函数”. 因此我们专门讨论了隐函数的求导法则. 但对隐函数求导的前提是隐函数的存在性, 这是本节要讨论的主要问题.

设开集 $D \subseteq \mathbb { R } ^ { 2 }$ 上的一个二元函数 $F ( x , y )$ . 则二元方程 $F ( x , y ) = 0 $ 给出了 $x$ 和 $y$ 的一个隐式关系式. 但我们无法从这个关系式中一眼看出 $y$ 是不是 $x$ 的函数——对于给定的 $x \in D$ , 无法一眼看出是否存在唯一的 $y \in D$ 满足方程 $F ( x , y ) = 0 $ . 这就是隐函数存在性问题. 进一步, 我们还希望方程确定的隐函数可导.

数分中研究隐函数存在问题, 只需研究局部的存在性, 因为可导是一个局部概念, 如果隐函数能在局部存在,就已经足够研究它的导数了. 设一点 $( x _ { 0 } , y _ { 0 } )$ 满足 $F ( x , y ) = 0 $ . 若存在一个 $( x _ { 0 } , y _ { 0 } )$ 的邻域, 使得在这个邻域内$F ( x , y ) = 0 $ 能确定一个函数, 就可以把这个函数写成 $y = f ( x )$ . 这个 $f$ 表示 $x$ 到 $y$ 的对应法则, 它客观存在, 但却无法表达出来 (因为初等函数的符号有限, 并非我们的能力有限).

下面先看一个简单的例子. 设二元函数

$$
F (x, y) = x ^ {2} + y ^ {2} - 1.
$$

则方程 $F ( x , y ) = 0 $ 确定了一个单位圆.容易知道除了 $( 1 , 0 )$ 和 $( - 1 , 0 )$ 之外的每一点都存在一个邻域使得 $F ( x , y ) =$ 0 在这个邻域内确定了一个函数 $y = f ( x )$ . 很容易看出这两个的特殊之处, 在这两点的切线是平行于 $y$ 轴的, 换句话说, 这两点的偏导数

$$
\mathcal {D} _ {y} (1, 0) = \mathcal {D} _ {y} (- 1, 0) = 0.
$$

反之, 除了 $( 0 , 1 )$ 和 $( 0 , - 1 )$ 之外的每一点都存在一个邻域使得 $F ( x , y ) = 0 $ 在这个邻域内确定了一个函数 $x = g ( y )$ .类似地可以看出这两点的切线是平行于 $x$ 轴的, 即这两点的偏导数

$$
\mathcal {D} _ {x} (0, 1) = \mathcal {D} _ {x} (0, - 1) = 0.
$$

于是不难想到隐函数 $y = f ( x )$ 在 $( x _ { 0 } , y _ { 0 } )$ 附近存在且可导的条件. 下面尝试求出 $f ^ { \prime } ( x )$ . 对方程 $F ( x , y ) = 0 $ 两边求导, 由链式法则可知

$$
\frac {\partial F}{\partial x} (x, y) + \frac {\partial F}{\partial y} \frac {\partial f}{\partial x} (x, y) = 0 \iff f ^ {\prime} (x) = \frac {\mathcal {D} _ {x} (x , y)}{\mathcal {D} _ {y} (x , y)}.
$$

上面的计算能成立, 是因为 $F ( x , y )$ 的两个偏导数都存在且连续.

把以上的讨论整理后就是以下定理.

# 定理 4.36 (1 维的隐函数定理)

设函数 $F : D  \mathbb { R }$ , 其中 $D$ 是 $\mathbb { R } ^ { 2 }$ 中的一个开集. 若 $F$ 满足

${ \ v O } ^ { \circ } ~ F \in C ^ { 1 } ( D )$   
$2 ^ { \circ }$ 存在 $( x _ { 0 } , y _ { 0 } ) \in D$ 使得 $F ( x _ { 0 } , y _ { 0 } ) = 0$   
$3 ^ { \circ } \mathcal { D } _ { y } F ( x _ { 0 } , y _ { 0 } ) \neq 0 .$

则存在一个包含 $( x _ { 0 } , y _ { 0 } )$ 的开矩形 $I _ { x } \times I _ { y } \subseteq D$ 使得

$1 ^ { \circ }$ 对于任一 $x \in I _ { x }$ 方程 $F ( x , y ) = 0 $ 在 $I _ { y }$ 中都有唯一的解 $f ( x )$ .  
$2 ^ { \circ } \ y _ { 0 } = f ( x _ { 0 } )$   
3◦ $f \in C ^ { 1 } ( I _ { x } ) .$   
$4 ^ { \circ }$ 当 $x \in I _ { x }$ 时, 有

$$
f ^ {\prime} (x) = - \frac {\mathcal {D} _ {x} (x , y)}{\mathcal {D} _ {y} (x , y)},
$$

其中 $y = f ( x )$ .

证明 (i) 证明隐函数的存在性. 由于 $\mathcal { D } _ { y } F ( x _ { 0 } , y _ { 0 } ) \neq 0$ , 不妨设 $\mathcal { D } _ { y } ( x _ { 0 } , y _ { 0 } ) > 0 .$ . 由于 $F$ 在 $D$ 上连续, 故存在包含

$( x _ { 0 } , y _ { 0 } )$ 的开矩形 $I _ { x } ^ { \prime } \times I _ { y } \subseteq D$ 使得在 $I _ { x } ^ { \prime } \times I _ { y }$ 上保持 $\mathcal { D } _ { \mathrm { y } } F > 0 .$ . 因此对于任意给定的 $x \in I _ { x } ^ { \prime }$ , 关于 $y$ 的函数 $F ( x , y )$ 在闭区间 $\overline { { I } } _ { y }$ 都是严格递增的. 设 $\overline { { I } } _ { y } = \left[ c , d \right]$ , 由于 $F ( x _ { 0 } , y _ { 0 } ) = 0$ , 因此

$$
F (x _ {0}, c) <   0, \qquad F (x _ {0}, d) > 0.
$$

由于 $F$ 在 $D$ 上连续, 因此存在含有 $x _ { 0 }$ 的开区间 $I _ { x } \subseteq I _ { x } ^ { \prime }$ 使得当 $x \in I _ { x }$ 时

$$
F (x, c) <   0, \qquad F (x, d) > 0.
$$

有零点定理可知, 对于任一 $x \in I _ { x }$ 都存在 $f ( x ) \in I _ { y }$ 使得 $F ( x , f ( x ) ) = 0$ . 由于函数是严格递增的, 故这样的 $f ( x )$ 是唯一存在的. 这就证明了 $1 ^ { \circ }$ . 特别地, 当 $x = x _ { 0 }$ 时存在唯一的 $f ( x _ { 0 } )$ 满足 $F ( x , y ) = 0 $ , 因此 $y _ { 0 } = f ( x _ { 0 } )$ . 这就证明了 $2 ^ { \circ }$ .

(ii) 证明 $3 ^ { \circ }$ 和 $4 ^ { \circ }$ . 先证明 $f$ 在 $I _ { x }$ 上连续. 先看 $f$ 在 $x _ { 0 }$ 的情况. 事实上 (i) 的证明过程已经证明了 $f$ 在 $x _ { 0 }$ 连续.对于任一 $\varepsilon > 0$ ,只需令 $I _ { y } = ( f ( x _ { 0 } ) - \varepsilon , f ( x _ { 0 } ) + \varepsilon )$ ,就存在满足(i)中证明过程中要求的 $I _ { x }$ ,因此只需取 $\delta$ 满足$N _ { \delta } ( x _ { 0 } ) \subseteq I _ { x }$ , 就有当 $x \in N _ { \delta } ( x _ { 0 } )$ 时

$$
f (x _ {0}) - \varepsilon <   f (x) <   f (x _ {0}) + \varepsilon .
$$

这表明 $f$ 在 $x _ { 0 }$ 处连续.

现任取 $x _ { 1 } \in I _ { x }$ ,下面证明 $f$ 在 $x _ { 1 }$ 连续.设 $y _ { 1 } = f ( x _ { 1 } )$ .对于 $( x _ { 1 } , y _ { 1 } )$ 可以重复前面对 $( x _ { 0 } , y _ { 0 } )$ 的讨论过程.这样就可以知道以下事实: 存在包含 $( x _ { 1 } , y _ { 1 } )$ 的开矩形 $\widetilde { I _ { x } } \times \widetilde { I _ { y } } \subseteq I _ { x } \times I _ { y }$ 使得当 $x \in \widetilde { I _ { x } }$ 时方程 $F ( x , y ) = 0 $ 在 $\widetilde { I _ { \mathrm { y } } }$ 上有唯一解 $g ( x )$ , 且函数 $g$ 在 $x _ { 1 }$ 处连续. 由于当 $x \in \widetilde { I _ { x } }$ 时 $f = g$ , 这表明 $f$ 在 $x _ { 1 }$ 处连续.

下面证明 $4 ^ { \circ }$ . 设 $x \in I _ { x }$ , 取充分小的 $h$ 使得 $x + h \in I _ { x }$ . 设 $y = f ( x )$ , 则 $F ( x , y ) = 0 .$ 令

$$
k = f (x + h) - f (x).
$$

则 $F ( x + h , y + k ) = F ( x + h , f ( x + h ) ) = 0 .$ 由于 $F \in C ^ { 1 } ( D )$ , 故 $F$ 在 $D$ 上可微, 因此

$$
0 = F (x + h, y + k) - F (x, y) = \mathcal {D} _ {x} F (x, y) h + \mathcal {D} _ {y} F (x, y) k + \alpha h + \beta k,
$$

其中 $\alpha , \beta$ 满足当 $( h , k ) \to ( 0 , 0 )$ 时 $\alpha \to 0$ , $\beta \to 0$ . 由于 $f$ 在 $I _ { x }$ 上连续, 因此当 $h  0$ 时, $k  0$ . 这表明当 $h  0$ 时 $\alpha  0 , \beta  0$ . 于是可知

$$
f ^ {\prime} (x) = \lim _ {h \to 0} \frac {f (x + h) - f (x)}{h} = \lim _ {h \to 0} \frac {k}{h} = - \lim _ {h \to 0} \frac {\mathcal {D} _ {x} F (x , y) + \alpha}{\mathcal {D} _ {y} F (x , y) + \beta} = - \frac {\mathcal {D} _ {x} F (x , y)}{\mathcal {D} _ {y} F (x , y)}.
$$

由上式立刻可知 $f ^ { \prime }$ 在 $I _ { x }$ 上连续, 这表明 $f \in C ^ { 1 } ( I _ { x } )$ . 这就证明了 $3 ^ { \circ }$ .

![](images/d306b8c9904f3cb931af1f7d64ee2a75f2caf6527ecd5bfb32833af791922221.jpg)  
图 4.11: 隐函数在局部的存在性

![](images/fd1cf225125a3cd521e7ffa550b688e75983efcdaed0f82cabd78f6b29953810.jpg)  
图 4.12: 隐函数的连续性

下面看两个例子.

例 4.53 设方程

$$
x ^ {2} y ^ {2} - 3 y + 2 x ^ {3} = 0.
$$

判断方程是否在点 $( 1 , 1 )$ 和 (1, 2) 附近确定了函数 $y = f ( x )$ . 如果是, 则求出 $f ^ { \prime } ( 1 )$ .

解 令 $F ( x , y ) = x ^ { 2 } y ^ { 2 } - 3 y + 2 x ^ { 3 } .$ . 计算得 $F ( 1 , 1 ) = F ( 1 , 2 ) = 0 .$ . 由于

$$
\frac {\partial F}{\partial y} (x, y) = 2 x ^ {2} y - 3.
$$

故

$$
\frac {\partial F}{\partial y} (1, 1) = - 1 \neq 0, \quad \frac {\partial F}{\partial y} (1, 2) = 1 \neq 0.
$$

由隐函数定理可知方程在点 $( 1 , 1 )$ 和 $( 1 , 2 )$ 附近都可以确定函数 $y = f ( x )$ . 分别计算点 $( 1 , 1 )$ 和 $( 1 , 2 )$ 附近确定的函数在 $x = 1$ 处的导数:

$$
f ^ {\prime} (1) = - \frac {\frac {\partial F}{\partial x} (1 , 1)}{\frac {\partial F}{\partial x} (1 , 1)} = - \frac {8}{- 1} = 8. f ^ {\prime} (1) = - \frac {\frac {\partial F}{\partial x} (1 , 2)}{\frac {\partial F}{\partial x} (1 , 2)} = - \frac {1 4}{1} = - 1 4.
$$

以上例子是一个关于 $y$ 的二次方程, 因此我们可以用公式解出 $y .$ . 但更多情况下, 解出 $y$ 是行不通的, 这时就只能用隐函数定理解决问题.

例 4.54 设方程

$$
\sin x + \ln y - x y ^ {3} = 0.
$$

判断方程是否在 $( 0 , 1 )$ 附近确定了函数 $y = f ( x )$ . 如果是, 则求出 $f ^ { \prime } ( 0 )$ .

解 令 $F ( x , y ) = \sin x + \ln y - x y ^ { 3 } .$ 计算得 $F ( 0 , 1 ) = 0 $ . 由于

$$
\frac {\partial F}{\partial y} (0, 1) = \left. \frac {1}{y} - 3 x y ^ {2} \right| _ {(0, 1)} = 1 \neq 0
$$

由隐函数定理可知方程在点 $( 0 , 1 )$ 附近可以确定函数 $y = f ( x )$ . 于是

$$
f ^ {\prime} (0) = - \frac {\frac {\partial F}{\partial x} (0 , 1)}{\frac {\partial F}{\partial x} (0 , 1)} = - \frac {0}{1} = 0.
$$

需要注意隐函数定理给出的隐函数存在条件只是一个充分条件. 请看下面一个例子.

例 4.55 设方程组

$$
\left\{ \begin{array}{l} x = t + \frac {1}{t} \\ y = t ^ {2} + \frac {1}{t ^ {2}} \end{array} \right..
$$

判断以上方程组是否确定了 $y$ 关于 $x$ 的函数.

解

上例表明, 不满足隐函数定理的条件也未必不能确定隐函数.

# 4.4.2 隐函数的导数

# 4.4.3 隐映射定理

现在可以来看更复杂的情况, 设函数 $F ( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } , y )$ . 若要研究方程 $F ( x _ { 1 } , x _ { 2 } , \cdot \cdot \cdot , x _ { n } , y ) = 0$ 是否能在局部确定一个隐函数, 只需令 $\pmb { x } = \left( x _ { 1 } , x _ { 2 } , \cdots , x _ { n } \right)$ , 则方程就记成了 $F ( x , y ) = 0 $ . 然后把 1 维的隐函数定理证明中的 $x$ 用 $\boldsymbol { x }$ 替换就可以很容易地证明 $n$ 维的隐函数定理.

# 定理 4.37 (?? 维的隐函数定理)

设函数 $F : D  \mathbb { R }$ , 其中 $D$ 是 $\mathbb { R } ^ { n + 1 }$ 中的一个开集. 若 $F$ 满足

$1 ^ { \circ } ~ F \in C ^ { 1 } ( D )$   
$2 ^ { \circ }$ 存在 $( x _ { 0 } , y _ { 0 } ) \in D$ 使得 $F ( x _ { 0 } , y _ { 0 } ) = 0$ , 其中 $\pmb { x } _ { 0 } \in \mathbb { R } ^ { n }$ , $y _ { 0 } \in \mathbb { R }$   
$3 ^ { \circ } \mathcal { D } _ { y } F ( \pmb { x } _ { 0 } , y _ { 0 } ) \neq 0 .$

则存在一个包含 $( x _ { 0 } , y _ { 0 } )$ 的邻域 $I _ { x } \times I _ { y } \subseteq D$ , 其中 $I _ { x }$ 是 $\scriptstyle { \boldsymbol { x } } _ { 0 }$ 在 $\mathbb { R } ^ { n }$ 上的一个邻域, $I _ { y }$ 是 $y _ { 0 }$ 在 $\mathbb { R }$ 上的一个开区间, 使得

$1 ^ { \circ }$ 对于任一 $\boldsymbol { x } \in I _ { x }$ 方程 $F ( x , y ) = 0 $ 在 $I _ { y }$ 中都有唯一的解 $f ( { \pmb x } )$ .  
2 ◦ $y _ { 0 } = f ( \pmb { x } _ { 0 } )$   
$3 ^ { \circ }$ $f \in C ^ { 1 } ( I _ { x } )$   
$4 ^ { \circ }$ 当 $\boldsymbol { x } \in I _ { x }$ 时, 有

$$
\mathcal {D} _ {x _ {i}} f (\boldsymbol {x}) = - \frac {\mathcal {D} _ {x _ {i}} (\boldsymbol {x} , y)}{\mathcal {D} _ {y} (\boldsymbol {x} , y)}, \quad i = 1, 2, \dots , n.
$$

其中 $y = f ( { \pmb x } )$ .

在确定隐函数存在的情况下, 若要求各个偏导, 我们可以对方程直接求导, 而不必套用定理中的公式. 下面看两个例子.

例 4.56 设方程 $\sin u - x y u = 0$ 确定了隐函数 $u = u ( x , y )$ . 求 $\textstyle { \frac { \partial u } { \partial x } } , { \frac { \partial u } { \partial y } }$ .

解 解法一 把方程中的 $u$ 看作是关于 $x , y$ 的函数, 对方程求 $x$ 的偏导数得

$$
\frac {\partial u}{\partial x} \cos u - y u - x y \frac {\partial u}{\partial x} = 0 \Longleftrightarrow \frac {\partial u}{\partial x} = \frac {y u}{\cos u - x y}.
$$

同理可得

$$
\frac {\partial u}{\partial y} = \frac {x u}{\cos u - x y}.
$$

解法二 设 $F ( x , y , u ) = \sin u - x y u .$ . 把 $x , y , u$ 看成独立变量, 对方程两边分别求 $x , y , u$ 的偏导数

$$
\frac {\partial F}{\partial x} = - y u, \quad \frac {\partial F}{\partial y} = - x u, \quad \frac {\partial F}{\partial u} = \cos u - x y.
$$

由隐函数定理可知

$$
\frac {\partial u}{\partial x} = - \frac {\frac {\partial F}{\partial x}}{\frac {\partial F}{\partial u}} = \frac {y u}{\cos u - x y}, \quad \frac {\partial u}{\partial y} = - \frac {\frac {\partial F}{\partial y}}{\frac {\partial F}{\partial u}} = \frac {x u}{\cos u - x y}.
$$

例 4.57 设方程 $f ( x + z y ^ { - 1 } , y + z x ^ { - 1 } ) = 0$ 确定了隐函数 $z = z ( x , y )$ . 求 $\begin{array} { r } { \frac { \partial z } { \partial x } , \frac { \partial z } { \partial y } } \end{array}$ .

解 设 $\xi = x + z y ^ { - 1 }$ , $\eta = y + z x ^ { - 1 }$ .

解法一 对方程两边求 $x$ 的偏导数:

$$
\frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial x} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial x} = 0 \iff \frac {\partial f}{\partial \xi} \left(1 + \frac {\partial z}{\partial x} y ^ {- 1}\right) + \frac {\partial f}{\partial \xi} \left(\frac {\partial z}{\partial x} x ^ {- 1} - \frac {z}{x ^ {2}}\right) = 0 \iff \frac {\partial z}{\partial x} = - \frac {\frac {\partial f}{\partial \xi} - \frac {\partial f}{\partial \eta} \frac {z}{x ^ {2}}}{\frac {\partial f}{\partial \xi} \frac {1}{y} + \frac {\partial f}{\partial \eta} \frac {1}{x}}.
$$

同理可知

$$
\frac {\partial z}{\partial y} = - \frac {\frac {\partial f}{\partial \eta} - \frac {\partial f}{\partial \xi} \frac {z}{y ^ {2}}}{\frac {\partial f}{\partial \xi} \frac {1}{y} + \frac {\partial f}{\partial \eta} \frac {1}{x}}.
$$

解法二 设 $F ( x , y , z ) = f ( x + z y ^ { - 1 } , y + z x ^ { - 1 } )$ . 把 $x , y , z$ 看成独立变量, 对方程两边分别求 $x , y$ 和 ?? 的偏导数

$$
\frac {\partial F}{\partial x} = \frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial x} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial x} = \frac {\partial f}{\partial \xi} - \frac {\partial f}{\partial \eta} \frac {z}{x ^ {2}},
$$

$$
\frac {\partial F}{\partial y} = \frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial y} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial y} = - \frac {\partial f}{\partial \xi} \frac {z}{y ^ {2}} + \frac {\partial f}{\partial \eta},
$$

$$
\frac {\partial F}{\partial x} = \frac {\partial f}{\partial \xi} \frac {\partial \xi}{\partial z} + \frac {\partial f}{\partial \eta} \frac {\partial \eta}{\partial z} = \frac {\partial f}{\partial \xi} \frac {1}{y} + \frac {\partial f}{\partial \eta} \frac {1}{x}.
$$

由隐函数定理可知

$$
\frac {\partial z}{\partial x} = - \frac {\frac {\partial F}{\partial x}}{\frac {\partial F}{\partial z}} = - \frac {\frac {\partial f}{\partial \xi} - \frac {\partial f}{\partial \eta} \frac {z}{x ^ {2}}}{\frac {\partial f}{\partial \xi} \frac {1}{y} + \frac {\partial f}{\partial \eta} \frac {1}{x}}. \qquad \frac {\partial z}{\partial y} = - \frac {\frac {\partial F}{\partial y}}{\frac {\partial F}{\partial z}} = - \frac {\frac {\partial f}{\partial \eta} - \frac {\partial f}{\partial \xi} \frac {z}{y ^ {2}}}{\frac {\partial f}{\partial \xi} \frac {1}{y} + \frac {\partial f}{\partial \eta} \frac {1}{x}}.
$$

下面尝试把隐函数定理推广到更一般的情况. 设 $m$ 个方程组成的方程组

$$
\left\{ \begin{array}{l} F _ {1} \left(x _ {1}, \dots , x _ {n}, y _ {1}, \dots , y _ {m}\right) = 0 \\ \dots \\ F _ {m} \left(x _ {1}, \dots , x _ {n}, y _ {1}, \dots , y _ {m}\right) = 0 \end{array} . \right. \tag {4.15}
$$

假设这个方程可以确定一个向量值函数

$$
\left\{ \begin{array}{l} y _ {1} = f _ {1} \left(x _ {1}, \dots , x _ {n}\right) \\ \dots \\ y _ {m} = f _ {1} \left(x _ {1}, \dots , x _ {n}\right) \end{array} . \right. \tag {4.16}
$$

令

$$
\boldsymbol {F} = \left[ F _ {1}, \dots , F _ {m} \right] ^ {T}, \qquad \boldsymbol {x} = \left[ x _ {1}, \dots , x _ {n} \right] ^ {T}, \qquad \boldsymbol {y} = \left[ y _ {1}, \dots , y _ {m} \right] ^ {T}, \qquad \boldsymbol {f} = \left[ f _ {1}, \dots , f _ {m} \right] ^ {T}.
$$

于是方程组4.22可以记作 $F ( x , y ) = \mathbf { 0 } $ , 其中 0 是 $m$ 元零向量. 而向量值函数4.23可以记作 $\mathbf { \boldsymbol { y } } = \mathbf { \boldsymbol { f } } ( \mathbf { \boldsymbol { x } } )$

隐函数定理一共有三个条件, 前两个条件不难推广到向量值函数的情况. 关键是第三个条件:

$$
\frac {\partial F \left(x _ {0} , y _ {0}\right)}{\partial y} \neq 0. \tag {4.17}
$$

隐函数定理的四个结论中前三个结论也不难推广. 关键是第四个结论:

$$
\frac {\partial f (\pmb {x})}{\partial x _ {i}} = - \left[ \frac {\partial F (\pmb {x} , y)}{\partial y} \right] ^ {- 1} \left[ \frac {\partial F (\pmb {x} , y)}{\partial x _ {i}} \right], i = 1, 2, \dots , n.
$$

上式可以写成矩阵形式

$$
\boldsymbol {J} f (\boldsymbol {x}) = - \left[ \frac {\partial F (\boldsymbol {x} , y)}{\partial y} \right] ^ {- 1} \left[ \frac {\partial F (\boldsymbol {x} , y)}{\partial x _ {1}}, \dots , \frac {\partial F (\boldsymbol {x} , y)}{\partial x _ {1}} \right]. \tag {4.18}
$$

令

$$
\boldsymbol {J} _ {y} f := \left[ \frac {\partial F}{\partial y} \right], \quad \boldsymbol {J} _ {\boldsymbol {x}} f := \left[ \frac {\partial F}{\partial x _ {1}}, \dots , \frac {\partial F}{\partial x _ {1}} \right].
$$

则条件4.24可以写成 det $J _ { y } f ( x _ { 0 } , y _ { 0 } ) \neq$ , 结论4.25可以写成

$$
\boldsymbol {J} f (\boldsymbol {x}) = - \left[ \boldsymbol {J} _ {y} f (\boldsymbol {x}, y) \right] ^ {- 1} \boldsymbol {J} _ {x} f (\boldsymbol {x}, y).
$$

要推广条件4.24和结论4.25, 只需把以上的 $J _ { y } f$ 和 $J _ { x } f$ 分别推广为以下两个矩阵:

$$
\boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {F} := \left[ \begin{array}{c c c} \frac {\partial F _ {1}}{\partial y _ {1}} & \dots & \frac {\partial F _ {1}}{\partial y _ {m}} \\ \vdots & & \vdots \\ \frac {\partial F _ {m}}{\partial y _ {1}} & \dots & \frac {\partial F _ {m}}{\partial y _ {m}} \end{array} \right], \qquad \boldsymbol {J} _ {\boldsymbol {x}} \boldsymbol {F} := \left[ \begin{array}{c c c} \frac {\partial F _ {1}}{\partial x _ {1}} & \dots & \frac {\partial F _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial F _ {m}}{\partial x _ {1}} & \dots & \frac {\partial F _ {m}}{\partial x _ {n}} \end{array} \right].
$$

它们合起来就是 $\boldsymbol { F }$ 的 Jocobi 矩阵, 即 $J F = [ J _ { x } F , J _ { y } F ]$ . 注意到 $J _ { y } F$ 是一个方阵. 如此以来条件4.24就可以推广为det $J _ { y } F \neq 0$ , 结论4.25可以推广为

$$
J f (\boldsymbol {x}) = - \left[ J _ {y} F (\boldsymbol {x}, \boldsymbol {y}) \right] ^ {- 1} J _ {x} F (\boldsymbol {x}, \boldsymbol {y}).
$$

下面我们用数学归纳法把隐函数定理推广到向量值函数中.

# 定理 4.38 (隐映射定理)

设向量值函数 $F : D  \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n + m }$ 中的一个开集. 若满足

$1 ^ { \circ } \ F \in C ^ { 1 } ( D )$ .   
$2 ^ { \circ }$ 存在 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ 使得 $\pmb { F } ( \pmb { x } _ { 0 } , \pmb { y } _ { 0 } ) = \pmb { 0 }$ , 其中 $\boldsymbol { x } _ { 0 } \in \mathbb { R } ^ { n }$ , $\boldsymbol { y } _ { 0 } \in \mathbb { R } ^ { m }$ .  
$3 ^ { \circ }$ det $J _ { y } F ( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \not = 0 \qquad $ .

则存在一个包含 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 的邻域 $J _ { x } \times J _ { y } \subseteq D$ 使得

$1 ^ { \circ }$ 对于任一 $\boldsymbol { x } \in J _ { x }$ , 方程 $F ( x , y ) = \mathbf { 0 }$ 在 $J _ { y }$ 中都有唯一的解 $f ( x )$ .  
2 ${ \ v y } ^ { \mathrm { ~ ~ } } ( { \ v y } ) = f ( { \ v x } _ { 0 } )$ .   
3 ${ \ v O } ^ { \circ } \ f \in C ^ { 1 } ( J _ { x } ) ,$   
$4 ^ { \circ }$ 当 $\boldsymbol { x } \in J _ { x }$ 时, 有

$$
J f (x) = - \left[ J _ {y} F (x, y) \right] ^ {- 1} J _ {x} F (x, y),
$$

其中 $\mathbf { \boldsymbol { y } } = \mathbf { \boldsymbol { f } } ( \mathbf { \boldsymbol { x } } )$ .

证明 用数学归纳法对方程个数 $m$ 进行归纳,当 $m = 1$ 时就是 $n$ 维的隐函数定理.假设方程个数为 $m - 1$ 时命题成立, 下面来看 $m$ 个方程的情况.

(i) 由于 det $J _ { y } F ( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \not = 0 ,$ , 且 $F \in C ^ { 1 } ( D )$ , 故存在一个 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 的邻域 $D _ { 1 } \subseteq D$ 使得对于任一 $( { \pmb x } , { \pmb y } ) \in D _ { 1 }$ 都有 det $J _ { y } F ( x , y ) \neq 0 .$ . 不是一般性, 下面就把 $D _ { 1 }$ 看作 $D$ .

设 $F$ 的分量函数分别为 $F _ { 1 } , \cdots , F _ { m }$ . 由于 det $J _ { y } F ( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \not = 0 .$ , 因此以下矩阵中的元素不全等于零:

$$
\left(\frac {\partial F _ {i}}{\partial y _ {j}} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right)\right).
$$

不妨设

$$
\frac {\partial F _ {m}}{\partial y _ {m}} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) \neq 0.
$$

下面我们先把 $y _ { m }$ 解出来. 为了叙述方便, 我们令 $\mathbf { y } = \left( \pmb { u } , t \right)$ , 其中

$$
\boldsymbol {u} = (y _ {1}, \dots , y _ {m - 1}), \qquad t = y _ {m}.
$$

令 ${ \bf y } _ { 0 } = ( u _ { 0 } , t _ { 0 } )$ , 其中 $\pmb { u } _ { 0 } \in \mathbb { R } ^ { m - 1 }$ , $t _ { 0 } \in \mathbb { R }$ . 于是

$$
\frac {\partial F _ {m}}{\partial t} \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}, t _ {0}\right) \neq 0.
$$

且 $F _ { m } ( \pmb { x } _ { 0 } , \pmb { u } _ { 0 } , t _ { 0 } ) = 0$ . 由多元函数的隐函数定理可知, 存在一个包含 $( { \pmb x } _ { 0 } , { \pmb u } _ { 0 } , t _ { 0 } )$ 的邻域 $I _ { x } \times I _ { u } \times I _ { t } \subseteq D$ , 其中 $I _ { x }$ 是$\scriptstyle { \boldsymbol { x } } _ { 0 }$ 在 $\mathbb { R } ^ { n }$ 上的一个邻域, $I _ { u }$ 是 $\pmb { u } _ { 0 }$ 在 $\mathbb { R } ^ { m - 1 }$ 上的一个邻域, $I _ { t }$ 是 $t _ { 0 }$ 在 $\mathbb { R }$ 上的一个开区间, 使得

$1 ^ { \circ }$ 对于任一 $( x , u ) \in I _ { x } \times I _ { u }$ , 方程 $F _ { m } ( x , \pmb { u } , t ) = 0$ 在 $I _ { t }$ 中都有唯一的解 $\varphi ( { \pmb x } , { \pmb u } )$ .

$$
2 ^ {\circ} t _ {0} = \varphi (\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}).
$$

$$
3 ^ {\circ} \varphi \in C ^ {1} \left(I _ {x} \times I _ {u}\right).
$$

(ii) 下面我们把解出来的 $t$ 代入前面的 $m - 1$ 个方程, 消去 $t$ :

$$
\left\{ \begin{array}{l} F _ {1} (\boldsymbol {x}, \boldsymbol {u}, \varphi (\boldsymbol {x}, \boldsymbol {u})) = 0 \\ \dots \\ F _ {m - 1} (\boldsymbol {x}, \boldsymbol {u}, \varphi (\boldsymbol {x}, \boldsymbol {u})) = 0 \end{array} \right..
$$

令

$$
\Phi_ {i} (\boldsymbol {x}, \boldsymbol {u}) = F _ {i} (\boldsymbol {x}, \boldsymbol {u}, \varphi (\boldsymbol {x}, \boldsymbol {u})), \quad i = 1, 2, \dots , m - 1. \tag {4.19}
$$

再令 $\Phi = ( \Phi _ { 1 } , \cdot \cdot \cdot , \Phi _ { m - 1 } ) ^ { T } ,$ 这是 $I _ { x } \times I _ { u }$ 到 $\mathbb { R } ^ { m - 1 }$ 的映射. 下面只需证明 $\Phi$ 满足定理的三个条件, 就可以用归纳假设了. 显然 $\Phi \in C ^ { 1 }$ . 由于

$$
\Phi_ {i} \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}\right) = F _ {i} \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}, \varphi \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}\right)\right) = F _ {i} \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}, t _ {0}\right) = F _ {i} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) = 0.
$$

因此定理的前两个条件都满足.

下面验证满足定理的第三个条件, 即要证明 det $J _ { u } \Phi ( { \boldsymbol { x } } _ { 0 } , { \boldsymbol { y } } _ { 0 } ) \neq 0 .$ . 在等式4.22两边对 $y _ { j }$ 求导:

$$
\frac {\partial \Phi_ {i}}{\partial y _ {j}} = \frac {\partial F _ {i}}{\partial y _ {j}} + \frac {\partial F _ {i}}{y _ {m}} \frac {\partial \varphi}{\partial y _ {j}}, \quad i, j = 1, 2, \dots m - 1. \tag {4.20}
$$

在 $F _ { m } ( { \pmb x } , { \pmb u } , \varphi ( { \pmb x } , { \pmb u } ) ) = 0$ 两边对 $y _ { j }$ 求导:

$$
\frac {\partial F _ {m}}{\partial y _ {j}} + \frac {\partial F _ {m}}{\partial y _ {m}} \frac {\partial \varphi}{\partial u _ {j}} = 0, \quad j = 1, 2, \dots m - 1. \tag {4.21}
$$

结合等式4.23和4.24可知

$$
\det  J _ {y} F (x _ {0}, y _ {0}) = \left| \begin{array}{c c c} \frac {\partial F _ {1}}{\partial y _ {1}} & \dots & \frac {\partial F _ {1}}{\partial y _ {m}} \\ \vdots & & \vdots \\ \frac {\partial F _ {m}}{\partial y _ {1}} & \dots & \frac {\partial F _ {m}}{\partial y _ {m}} \end{array} \right| _ {(x _ {0}, y _ {0})}
$$

$$
\begin{array}{l} \begin{array}{c} \frac {\partial F _ {1}}{\partial y _ {1}} + \frac {\partial F _ {1}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {1}} \\ \vdots \\ \frac {\partial F _ {m - 1}}{\partial y _ {1}} + \frac {\partial F _ {m - 1}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {1}} \\ \frac {\partial F _ {m}}{\partial y _ {1}} + \frac {\partial F _ {m}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {1}} \end{array} \dots \begin{array}{c} \frac {\partial F _ {1}}{\partial y _ {m - 1}} + \frac {\partial F _ {1}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {m - 1}} \\ \vdots \\ \frac {\partial F _ {m - 1}}{\partial y _ {1}} + \frac {\partial F _ {m - 1}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {1}} \\ \dots \end{array} \begin{array}{c} \frac {\partial F _ {1}}{\partial y _ {m - 1}} + \frac {\partial F _ {1}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {m - 1}} \\ \vdots \\ \frac {\partial F _ {m - 1}}{\partial y _ {1}} + \frac {\partial F _ {m - 1}}{\beta_ {m - 1}} \frac {\partial \varphi}{\partial y _ {m - 1}} \\ \dots \end{array} \begin{array}{c} \frac {\partial F _ {1}}{\partial y _ {m - 1}} + \frac {\partial F _ {1}}{\partial y _ {m}} \frac {\partial \varphi}{\partial y _ {m - 1}} \\ \vdots \\ \frac {\partial F _ {m - 1}}{\beta_ {m - 1}} + \frac {\partial F _ {m - 1}}{\beta_ {m - 1}} \frac {\partial \varphi}{\partial y _ {m - 1}} \\ \dots \end{array} \\ = \left| \begin{array}{c c c c} \frac {\partial \Phi_ {1}}{\partial y _ {1}} & \dots & \frac {\partial \Phi_ {1}}{\partial y _ {m - 1}} & \frac {\partial F _ {1}}{\partial y _ {m}} \\ \vdots & & \vdots & \vdots \\ \frac {\partial \Phi_ {m - 1}}{\partial y _ {1}} & \dots & \frac {\partial \Phi_ {m - 1}}{\partial y _ {m - 1}} & \frac {\partial F _ {m - 1}}{\partial y _ {m}} \\ 0 & \dots & 0 & \frac {\partial F _ {m}}{\partial y _ {m}} \end{array} \right| _ {\left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right)} \xrightarrow {\text {按 第} m \text {行 展 开}} \frac {\partial F _ {m}}{\partial y _ {m}} \left(\boldsymbol {x} _ {0}, \boldsymbol {u}, t _ {0}\right) \det  J _ {\boldsymbol {u}} \boldsymbol {\Phi} \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}\right). \\ \end{array}
$$

由于

$$
\det  J _ {y} F (x _ {0}, y _ {0}) \neq 0, \quad \frac {\partial F _ {m}}{\partial y _ {m}} (x _ {0}, u, t _ {0}) \neq 0.
$$

故 det $J _ { u } \Phi ( { \pmb x } _ { 0 } , { \pmb u } _ { 0 } ) \neq 0 .$ . 综上可知 $\Phi$ 满足归纳假设的三个条件. 因此由归纳假设可知存在 $( x _ { 0 } , \pmb { u } _ { 0 } )$ 的一个邻域$J _ { x } \times J _ { u } \subseteq I _ { x } \times I _ { u }$ 使得

$1 ^ { \circ }$ 对于任一 $\boldsymbol { x } \in J _ { x }$ , 方程 $\Phi ( { \pmb x } , { \pmb u } ) = { \bf 0 }$ 在 $J _ { u }$ 中都有唯一的解 ${ \pmb g } ( { \pmb x } )$ .

$$
\begin{array}{l} 2 ^ {\circ} \boldsymbol {u} _ {0} = \boldsymbol {g} (\boldsymbol {x} _ {0}). \\ 3 ^ {\circ} \mathbf {g} \in C ^ {1} (J _ {x}). \\ \end{array}
$$

(iii) 令 $f ( x ) = ( g ( x ) , \varphi ( x , g ( x ) ) ( x \in J _ { x } ) .$ $( x \in J _ { x } )$ . 下面只需证明 $f$ 满足定理的四条结论.

当 $x \ \in \ J _ { x }$ 时, $( x , g ( x ) ) \in J _ { x } \times J _ { u } \subseteq I _ { x } \times I _ { u }$ . 由于对任一 $x \ \in \ J _ { x }$ , 方程 $\Phi ( x , u ) = 0$ 在 $J _ { u }$ 中都有唯一的解$\pmb { u } = \pmb { g } ( \pmb { x } )$ , 故

$$
F _ {i} (\boldsymbol {x}, \boldsymbol {f} (x)) = F _ {i} (\boldsymbol {x}, \boldsymbol {g} (\boldsymbol {x}), \varphi (\boldsymbol {x}, \boldsymbol {g} (\boldsymbol {x}))) = \Phi_ {i} (\boldsymbol {x}, \boldsymbol {g} (\boldsymbol {x})) = 0, \quad i = 1, 2, \dots , m - 1.
$$

又由于对任一 $( x , u ) \in I _ { x } \times I _ { u }$ , 方程 $F _ { m } ( { \pmb x } , { \pmb u } , t ) = 0$ 在 $I _ { t }$ 中都有唯一的解 $t = \varphi ( \pmb { x } , \pmb { u } )$ , 故

$$
F _ {m} (\boldsymbol {x}, \boldsymbol {f} (\boldsymbol {x})) = F _ {m} (\boldsymbol {x}, \boldsymbol {g} (\boldsymbol {x}), \varphi (\boldsymbol {x}, \boldsymbol {g} (\boldsymbol {x}))) = 0.
$$

这表明当 $\boldsymbol { x } \in J _ { x }$ 时 $F ( x , f ( x ) ) = 0 .$ 于是可知 $f ( x )$ 是方程 $F ( x , y ) = \mathbf { 0 }$ 的唯一解. 因此 $f$ 满足定理的第一个结论.

由于 $t _ { 0 } = \varphi ( { \pmb x } _ { 0 } , { \pmb u } _ { 0 } )$ , ${ \pmb u } _ { 0 } = { \pmb g } ( { \pmb x } _ { 0 } )$ , 因此

$$
\boldsymbol {f} (\boldsymbol {x} _ {0}) = \left(\boldsymbol {g} \left(\boldsymbol {x} _ {0}\right), \varphi \left(\boldsymbol {x} _ {0}, \boldsymbol {g} \left(\boldsymbol {x} _ {0}\right)\right)\right) = \left(\boldsymbol {u} _ {0}, \varphi \left(\boldsymbol {x} _ {0}, \boldsymbol {u} _ {0}\right)\right) = \left(\boldsymbol {u} _ {0}, t _ {0}\right) = \boldsymbol {y} _ {0}.
$$

因此 $f$ 满足定理的第二个结论.

由于 $\varphi \in C ^ { 1 } ( I _ { x } \times I _ { u } )$ , ${ \pmb g } \in C ^ { 1 } ( J _ { x } )$ , 因此 $f \in C ^ { 1 } ( J _ { x } )$ . 因此 $f$ 满足定理的第三个结论.

当 $\boldsymbol { x } \in J _ { x }$ 时 $F ( x , f ( x ) ) = 0 .$ . 在等式两边复合求导:

$$
[ J _ {x} F, J _ {y} F ] \left[ \begin{array}{c} I _ {n} \\ f (x) \end{array} \right] = \mathbf {0} \Longleftrightarrow J _ {x} F (x, f (x)) + J _ {y} F (x, f (x)) J f (x) = \mathbf {0}.
$$

由于 det $J _ { y } F$ 在 $D$ 上处处不为零, 故 $J _ { y } F$ 可逆. 于是由上式可知

$$
J f (x) = - \left[ J _ {y} F (x, y) \right] ^ {- 1} J _ {x} F (x, y).
$$

于是可知 $f$ 满足定理的第四条结论.

注 以上证明实际上给出了一个求非线性方程组的近似解的方法.

注 隐映射定理在非线性泛函中将被进一步推广, 推广后的隐映射定理是非线性泛函的一个基石性定理.

下面来看两个例子.

例 4.58 设方程组

$$
\left\{ \begin{array}{l} x _ {1} y _ {2} - 4 x _ {2} + 2 e ^ {y _ {1}} + 3 = 0 \\ 2 x _ {1} - x _ {3} - 6 y _ {1} + y _ {2} \cos y _ {1} = 0 \end{array} \right..
$$

令 $\pmb { x } = ( x _ { 1 } , x _ { 2 } , x _ { 3 } )$ , $\boldsymbol { \textbf { y } } = \left( y _ { 1 } , y _ { 2 } \right)$ . 以上方程确定了向量值函数 $\begin{array} { r } { \mathbf { y } \ = \ f ( \pmb { x } ) } \end{array}$ . 当 ${ \pmb x } _ { 0 } = ( - 1 , 1 , - 1 )$ , $\mathbf { y } _ { 0 } ~ = ~ ( 0 , 1 )$ 时, 求$J f ( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } )$ .

解 设方程组中两个方程左边的函数为 $F _ { 1 } , F _ { 2 }$ , 令 $\boldsymbol { F } = [ F _ { 1 } , F _ { 2 } ] ^ { T }$ . 于是

$$
\boldsymbol {J} _ {\boldsymbol {x}} \boldsymbol {F} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \begin{array}{c c c} y _ {2} & - 4 & 0 \\ 2 & 0 & - 1 \end{array} \right] _ {(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0})} = \left[ \begin{array}{c c c} 1 & - 4 & 0 \\ 2 & 0 & - 1 \end{array} \right],
$$

$$
\boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {F} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left[ \begin{array}{c c} 2   \mathrm {e} ^ {y _ {1}} & x _ {1} \\ - 6 - y _ {2}   \sin y _ {1} & \cos y _ {1} \end{array} \right] _ {(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0})} = \left[ \begin{array}{c c} 2 & - 1 \\ - 6 & 1 \end{array} \right].
$$

由隐映射定理可知

$$
J f (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = - \left[ \begin{array}{c c} 2 & - 1 \\ - 6 & 1 \end{array} \right] ^ {- 1} \left[ \begin{array}{c c c} 1 & - 4 & 0 \\ 2 & 0 & - 1 \end{array} \right] = \frac {1}{4} \left[ \begin{array}{c c} 1 & 1 \\ 6 & 2 \end{array} \right] \left[ \begin{array}{c c c} 1 & - 4 & 0 \\ 2 & 0 & - 1 \end{array} \right] = \frac {1}{4} \left[ \begin{array}{c c c} 3 & - 4 & - 1 \\ 1 0 & - 2 4 & - 2 \end{array} \right].
$$

例 4.59 设方程组

$$
\left\{ \begin{array}{l} z = f (x, y) \\ g (x, y) = 0 \end{array} \right..
$$

其中 $f$ 和 $g$ 都是可微的. 以上方程组确定了一个 $z$ 关于 $x$ 的函数. 求 $\frac { \mathrm { d } z } { \mathrm { d } x }$ .

解 解法一 方程 $g ( x , y ) = 0$ 确定了一个函数 $y = \varphi ( x )$ . 代入方程 [1] 得 $z = f ( x , \varphi ( x ) )$ . 此时 ?? 是关于 $x$ 的函数. 对$x$ 求导得

$$
\frac {\mathrm {d} z}{\mathrm {d} x} = \frac {\partial f}{\partial x} (x, y) + \frac {\partial f}{\partial y} (x, y) \varphi^ {\prime} (x).
$$

另一方面, 由隐函数定理可知

$$
\varphi^ {\prime} (x) = - \frac {\frac {\partial g}{\partial x}}{\frac {\partial g}{\partial y}}.
$$

于是可知

$$
\frac {\mathrm {d} z}{\mathrm {d} x} = \frac {\frac {\partial f}{\partial x} \frac {\partial g}{\partial y} - \frac {\partial f}{\partial y} \frac {\partial g}{\partial x}}{\frac {\partial g}{\partial y}} = \left(\frac {\partial g}{\partial y}\right) ^ {- 1} \left| \begin{array}{c c} \frac {\partial f}{\partial x} & \frac {\partial f}{\partial y} \\ \frac {\partial g}{\partial x} & \frac {\partial g}{\partial y} \end{array} \right|.
$$

解法二 设

$$
F _ {1} (x, y, z) = f (x, y) - z, \quad F _ {2} (x, y, z) = g (x, y), \quad \boldsymbol {F} = \left[ F _ {1}, F _ {2} \right] ^ {T}.
$$

于是

$$
\boldsymbol {J} \boldsymbol {F} = \left[ \begin{array}{c c c} \frac {\partial f}{\partial x} & \frac {\partial f}{\partial x} & - 1 \\ \frac {\partial f}{\partial x} & \frac {\partial f}{\partial x} & 0 \end{array} \right].
$$

当

$$
\left| \begin{array}{c c} \frac {\partial f}{\partial x} & - 1 \\ \hline \frac {\partial f}{\partial x} & 0 \end{array} \right| = \frac {\partial g}{\partial y} \neq 0.
$$

由隐映射定理可知方程 ${ \pmb F } = { \pmb 0 }$ 确定函数 ${ f } = ( y ( x ) , z ( x ) )$ . 由隐映射定理可知

$$
\boldsymbol {J} \boldsymbol {f} = \left[ \begin{array}{c} \frac {\mathrm {d} y}{\mathrm {d} x} \\ \frac {\mathrm {d} z}{\mathrm {d} x} \end{array} \right] = - \left[ \begin{array}{c c} \frac {\mathrm {d} f}{\mathrm {d} y} & - 1 \\ \frac {\mathrm {d} g}{\mathrm {d} y} & 0 \end{array} \right] ^ {- 1} \left[ \begin{array}{c} \frac {\mathrm {d} f}{\mathrm {d} x} \\ \frac {\mathrm {d} g}{\mathrm {d} x} \end{array} \right] = \left(\frac {\mathrm {d} g}{\mathrm {d} y}\right) ^ {- 1} \left[ \begin{array}{c c} 0 & - 1 \\ \frac {\mathrm {d} g}{\mathrm {d} y} & - \frac {\mathrm {d} f}{\mathrm {d} y} \end{array} \right] \left[ \begin{array}{c} \frac {\mathrm {d} f}{\mathrm {d} x} \\ \frac {\mathrm {d} g}{\mathrm {d} x} \end{array} \right].
$$

比较上式两边的第二行元素可知

$$
\frac {\mathrm {d} z}{\mathrm {d} x} = \left(\frac {\partial g}{\partial y}\right) ^ {- 1} \left(\frac {\partial f}{\partial x} \frac {\partial g}{\partial y} - \frac {\partial f}{\partial y} \frac {\partial g}{\partial x}\right) = \left(\frac {\partial g}{\partial y}\right) ^ {- 1} \left| \begin{array}{c c} \frac {\partial f}{\partial x} & \frac {\partial f}{\partial y} \\ \frac {\partial g}{\partial x} & \frac {\partial g}{\partial y} \end{array} \right|.
$$

注 解法一 只用到了隐函数定理.

例 4.60 设方程组

$$
\left\{ \begin{array}{l} u = f (x, y, z, t) \\ g (y, z, t) = 0 \\ h (z, t) = 0 \end{array} \right..
$$

若以上方程组确定了函数 $u = u ( x , y )$ . 计算 $u _ { x } ^ { \prime } , u _ { y } ^ { \prime }$ .

解 解法一 在三个方程两边分别微分

$$
\left\{ \begin{array}{l} \mathrm {d} u = f _ {x} ^ {\prime} \mathrm {d} x + f _ {y} ^ {\prime} \mathrm {d} y + f _ {z} ^ {\prime} \mathrm {d} z + f _ {t} ^ {\prime} \mathrm {d} t \\ g _ {y} ^ {\prime} \mathrm {d} y + g _ {z} ^ {\prime} \mathrm {d} z + g _ {t} ^ {\prime} \mathrm {d} t = 0 \\ h _ {z} ^ {\prime} \mathrm {d} z + h _ {t} ^ {\prime} \mathrm {d} t = 0 \end{array} \right..
$$

由以上方程组中的方程 [2] 和 [3] 解出 $\mathrm { d } y$ 和 $\mathrm { d } z$ :

$$
\mathrm {d} z = \frac {- g _ {y} ^ {\prime} h _ {t} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}} \mathrm {d} y, \quad \mathrm {d} t = \frac {g _ {y} ^ {\prime} h _ {z} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}} \mathrm {d} y.
$$

代入方程 [1] 得

$$
\mathrm {d} u = f _ {x} ^ {\prime} \mathrm {d} x + \left(f _ {y} ^ {\prime} + f _ {z} ^ {\prime} \frac {- g _ {y} ^ {\prime} h _ {t} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}} + f _ {t} ^ {\prime} \frac {g _ {y} ^ {\prime} h _ {z} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}}\right) \mathrm {d} y.
$$

于是可知

$$
u _ {x} ^ {\prime} = f _ {x} ^ {\prime}, \qquad u _ {y} ^ {\prime} = f _ {y} ^ {\prime} + g _ {y} ^ {\prime} \frac {f _ {t} ^ {\prime} h _ {z} ^ {\prime} - f _ {z} ^ {\prime} h _ {t} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}}.
$$

解法二 在三个方程两边对 $x$ 求导

$$
\left\{ \begin{array}{l} u _ {x} ^ {\prime} = f _ {x} ^ {\prime} + f _ {z} ^ {\prime} z _ {x} ^ {\prime} + f _ {t} ^ {\prime} t _ {x} ^ {\prime} \\ g _ {z} ^ {\prime} z _ {x} ^ {\prime} + g _ {t} ^ {\prime} t _ {x} ^ {\prime} = 0 \\ h _ {z} ^ {\prime} z _ {x} ^ {\prime} + h _ {t} ^ {\prime} t _ {x} ^ {\prime} = 0 \end{array} \right..
$$

由以上方程组中的方程 [2] 和 [3] 可以解得 $z _ { x } ^ { \prime } = t _ { x } ^ { \prime } = 0$ , 代入方程 [1] 可知 $u _ { x } ^ { \prime } = f _ { x } ^ { \prime }$ . 在三个方程两边对 $x$ 求导

$$
\left\{ \begin{array}{l} u _ {y} ^ {\prime} = f _ {y} ^ {\prime} + f _ {z} ^ {\prime} z _ {y} ^ {\prime} + f _ {t} ^ {\prime} t _ {y} ^ {\prime} \\ g _ {y} ^ {\prime} + g _ {z} ^ {\prime} z _ {y} ^ {\prime} + g _ {t} ^ {\prime} t _ {y} ^ {\prime} = 0 \\ h _ {z} ^ {\prime} z _ {y} ^ {\prime} + h _ {t} ^ {\prime} t _ {y} ^ {\prime} = 0 \end{array} \right..
$$

由以上方程组中的方程 [2] 和 [3] 可以解得

$$
z _ {y} ^ {\prime} = \frac {- g _ {y} ^ {\prime} h _ {t} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}}, \qquad t _ {y} ^ {\prime} = \frac {g _ {y} ^ {\prime} h _ {z} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}}
$$

代入方程 [1] 得

$$
u _ {y} ^ {\prime} = f _ {y} ^ {\prime} + f _ {z} ^ {\prime} \frac {- g _ {y} ^ {\prime} h _ {t} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}} + f _ {t} ^ {\prime} \frac {g _ {y} ^ {\prime} h _ {z} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}} = f _ {y} ^ {\prime} + g _ {y} ^ {\prime} \frac {f _ {t} ^ {\prime} h _ {z} ^ {\prime} - f _ {z} ^ {\prime} h _ {t} ^ {\prime}}{g _ {z} ^ {\prime} h _ {t} ^ {\prime} - g _ {t} ^ {\prime} h _ {z} ^ {\prime}}.
$$

从上例看到, 微分可以把一个一般的方程组变成一个 “线性方程组”. 非线性的问题经过微分可以变成线性的问题.

下面来看一种特殊情况. 设 $m$ 个方程组成的 $m + n$ 元线性方程组

$$
\left\{ \begin{array}{l} a _ {1 1} x _ {1} + \dots + a _ {1 n} x _ {n} + b _ {1 1} y _ {1} + \dots + b _ {1 m} y _ {m} = c _ {1} \\ \dots \\ a _ {m 1} x _ {1} + \dots + a _ {m n} x _ {n} + b _ {m 1} y _ {1} + \dots + b _ {m m} y _ {m} = c _ {m} \end{array} \right..
$$

设每个方程依次为 $F _ { 1 } , \cdots , F _ { m }$ , 令 $\pmb { F } = ( F _ { 1 } , \cdots , F _ { m } ) , \pmb { x } = ( x _ { 1 } , \cdots , x _ { n } ) , \pmb { y } = ( y _ { 1 } , \cdots , y _ { m } )$ . 容易看到

$$
\boldsymbol {J} _ {\boldsymbol {x}} \boldsymbol {F} = \left[ \begin{array}{c c c} a _ {1 1} & \dots & a _ {1 n} \\ \vdots & & \vdots \\ a _ {m 1} & \dots & a _ {m n} \end{array} \right]. \qquad \boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {F} = \left[ \begin{array}{c c c} b _ {1 1} & \dots & b _ {1 m} \\ \vdots & & \vdots \\ b _ {m 1} & \dots & b _ {m m} \end{array} \right].
$$

也就是说线性方程组的系数矩阵就是 $[ J _ { x } F , J _ { y } F ]$ . 如果给定一组 $x _ { 1 } , \cdots , x _ { n }$ , 由隐映射定理可知, 当 det $J _ { y } F \ne 0$ 时, 方程组可以解出唯一的 $\textbf {  { y } }$ . 这恰好就是线性代数中的 Cramer 法则! 但 Cramer 法则给出的是一个充要条件, 而隐映射定理只给出了一个充分条件, 从中可以看出线性结构的优美!

# 4.4.4 用压缩映射研究隐映射定理

前面已经看到研究方程是否可以确定一个函数,本质上就是研究方程的解.如果是非线性方程,一般是无法得到解析解的. 历史上著名的 Newton 法是一种很有价值的研究方程解的方法. 设方程

$$
f (x) = 0.
$$

若 $f$ 连续可导且 $f ^ { \prime } \neq 0$ , 则可以构造迭代序列:

$$
x _ {n + 1} = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})}, \quad n = 1, 2, \dots .
$$

若 $x _ { n } \to x _ { 0 }$ ,则在递推公式两边取极限即得 $f ( x _ { 0 } ) = 0$ .这表明我们构造的数列如果收敛,则收敛到方程 $f ( x ) = 0$ 的一个根.

接下来的问题就是, 满足什么条件时, 数列 $\left\{ x _ { n } \right\}$ 收敛? 涉及迭代序列收敛性的问题很容易联想到我们之前讲过的压缩映射原理. 现在把刚刚构造数列的迭代公式看作一个映射, 令

$$
\varphi (x) = x - \frac {f (x)}{f ^ {\prime} (x)}.
$$

若存在 $K \in [ 0 , 1 )$ 使得

$$
\left| \varphi (x) - \varphi (y) \right| \leq K | x - y |, \quad \forall x, y \in \mathbb {R}.
$$

则 $\varphi$ 是一个压缩映射, 此时 $x _ { n } \to x _ { 0 }$ , 且 $x _ { 0 }$ 就是 $\varphi$ 的唯一不动点. 这个结论就是压缩映射原理.

![](images/00bb11a3539f7d0163ea4be5d85db78fee19e17b24b5e08e5a483bb865f413c8.jpg)  
图 4.13: 用压缩映射的视角思考牛顿迭代法.

现在重新考虑隐函数定理的问题. 设连续可微二元函数 $F ( x , y )$ 满足

$$
F (x _ {0}, y _ {0}) = 0, \quad \frac {\partial F}{\partial y} (x _ {0}, y _ {0}) \neq 0.
$$

现在要确定在 $( x _ { 0 } , y _ { 0 } )$ 的一个邻域 $I \times J$ 上确定了一个隐含函数 $y = f ( x )$ , 即对于任一 $x \in I .$ , 在是否存在唯一的$y \in J$ 使得方程 $F ( x , y ) = 0 $ 成立. 现在用牛顿法来考虑这个问题. 令

$$
y _ {n + 1} = y _ {n} - \frac {F (x , y _ {n})}{F _ {y} ^ {\prime} (x , y _ {n})}, \quad n = 1, 2, \dots .
$$

下面只需研究数列 $\left\{ y _ { n } \right\}$ 的收敛性. 令

$$
\varphi (y) = y - \frac {F (x , y)}{F _ {y} ^ {\prime} (x , y)}.
$$

下面只需研究函数 $\varphi$ 是不是一个压缩映射.为了让计算简便,我们可以考虑简化牛顿法.由于 $( x , y _ { n } )$ 很接近 $( x _ { 0 } , y _ { 0 } )$ ,因此考虑用 $F _ { \mathrm { y } } ^ { \prime } ( x _ { 0 } , y _ { 0 } )$ 代替 $F _ { y } ^ { \prime } ( x , y _ { n } )$ :

$$
y _ {n + 1} = y _ {n} - \frac {F (x , y _ {n})}{F _ {y} ^ {\prime} (x _ {0} , y _ {0})}, \quad n = 1, 2, \dots .
$$

如果 $y _ { n } \to y$ , 则 $y$ 显然满足 $F ( x , y ) = 0 $ . 因此这要的简化是可以的. 于是相应的函数就变成了

$$
\Phi (y) = y - \frac {F (x , y)}{F _ {y} ^ {\prime} \left(x _ {0} , y _ {0}\right)}.
$$

![](images/e1f92fee408ee2c183283e8c512f51f1151b2d37ed8cf7a71f0d9a7e4fd37072.jpg)  
图 $4 . 1 4 :$ 用牛顿迭代研究隐函数.

下来进一步考虑向量值函数的隐映射定理. 设连续可微向量值函数 $F : D  \mathbb { R } ^ { m }$ , 其中 $D \subseteq \mathbb { R } ^ { n } \times \mathbb { R } ^ { m }$ 满足

$$
\boldsymbol {F} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) = \boldsymbol {0}, \quad \det  \left[ \boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {F} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) \right] \neq 0.
$$

令

$$
\boldsymbol {\Phi} (\boldsymbol {y}) = \boldsymbol {y} - \left[ J _ {\boldsymbol {y}} \boldsymbol {F} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) \right] ^ {- 1} \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}).
$$

则只需要证明 $\Phi$ 是一个压缩映射, 就可以断言隐映射在局部的存在性.

# 定理 4.39 (隐映射定理)

设向量值函数 $F : D  \mathbb { R } ^ { m }$ , 其中 $D$ 是 $\mathbb { R } ^ { n + m }$ 中的一个开集. 若满足

$1 ^ { \circ } \ F \in C ^ { 1 } ( D )$ .   
$2 ^ { \circ }$ 存在 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ 使得 $\pmb { F } ( \pmb { x } _ { 0 } , \pmb { y } _ { 0 } ) = \pmb { 0 }$ , 其中 $\boldsymbol { x } _ { 0 } \in \mathbb { R } ^ { n }$ , $\boldsymbol { y } _ { 0 } \in \mathbb { R } ^ { m }$ .  
$3 ^ { \circ }$ det $J _ { y } F ( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \not = 0 .$ .

则存在一个包含 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 的邻域 $I \times J \subseteq D$ 使得

$1 ^ { \circ }$ 对于任一 $x \in I$ , 方程 $F ( x , y ) = \mathbf { 0 }$ 在 $J$ 中都有唯一的解 $f ( x )$ .  
$\ 、 \mathbf { \psi } ^ { \circ } \mathbf { y } _ { 0 } = f ( \pmb { x } _ { 0 } )$   
$3 ^ { \circ } \ f \in C ^ { 1 } ( I )$   
$4 ^ { \circ }$ 当 $x \in I$ 时, 有

$$
J f (x) = - \left[ J _ {y} F (x, y) \right] ^ {- 1} J _ {x} F (x, y),
$$

其中 $\mathbf { \boldsymbol { y } } = \mathbf { \boldsymbol { f } } ( \mathbf { \boldsymbol { x } } )$ .

证明 (i) 证明 $1 ^ { \circ }$ 和 $2 ^ { \circ }$ . 令

$$
\varphi (\boldsymbol {x}, \boldsymbol {y}) = \boldsymbol {y} - \left[ J _ {\boldsymbol {y}} \boldsymbol {F} \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) \right] ^ {- 1} \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}). \tag {4.22}
$$

计算可知

$$
J _ {y} \varphi (x, y) = I _ {m} - \left[ J _ {y} F \left(x _ {0}, y _ {0}\right) \right] ^ {- 1} J _ {y} F (x, y).
$$

因此

$$
\boldsymbol {J} _ {\mathcal {Y}} \boldsymbol {\varphi} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \boldsymbol {I} _ {m} - \left[ \boldsymbol {J} _ {\mathcal {Y}} \boldsymbol {F} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) \right] ^ {- 1} \boldsymbol {J} _ {\mathcal {Y}} \boldsymbol {F} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \boldsymbol {I} _ {m} - \boldsymbol {I} _ {m} = \mathbf {0}.
$$

由于 $F \in C ^ { 1 } ( D )$ , 因此任一 $K \in ( 0 , 1 )$ , 都存在 $\delta > 0$ , 当 $\| { \pmb x } - { \pmb x } _ { 0 } \| \le \delta$ 且 $\| \mathbf { y } - \mathbf { y } _ { 0 } \| \leq \delta$ 时, 都有

$$
\| J _ {y} \varphi (x, y) \| <   K.
$$

另一方面, 由于 $F ( \pmb { x } _ { 0 } , \pmb { y } _ { 0 } ) = 0$ , 故

$$
\varphi (x _ {0}, y _ {0}) = y - \left[ J _ {y} F (x _ {0}, y _ {0}) \right] ^ {- 1} F (x _ {0}, y _ {0}) = y _ {0}.
$$

因此存在正数 $\eta < \delta$ , 使当 $\| { \pmb x } - { \pmb x } _ { 0 } \| \le \eta$ 时, 都有

$$
\left\| \varphi (\boldsymbol {x}, \boldsymbol {y} _ {0}) - \boldsymbol {y} _ {0} \right\| <   (1 - K) \delta .
$$

令

$$
I = \left\{\boldsymbol {x} \in \mathbb {R} ^ {n}: \| \boldsymbol {x} - \boldsymbol {x} _ {0} \| \leq \eta \right\}, \quad J = \left\{\boldsymbol {y} \in \mathbb {R} ^ {m}: \| \boldsymbol {y} - \boldsymbol {y} _ {0} \| \leq \delta \right\}.
$$

任意取定 $x \in I ,$ , 令

$$
\boldsymbol {\Phi} (\boldsymbol {y}) = \varphi (\boldsymbol {x}, \boldsymbol {y}).
$$

下面证明 $\Phi ( J ) \subseteq J .$ 任取 $y \in J ,$ , 由拟微分中值定理可知, 存在 $\pmb { \xi }$ 使得

$$
\| \boldsymbol {\Phi} (\mathbf {y}) - \mathbf {y} _ {0} \| \leq \| \boldsymbol {\Phi} (\mathbf {y}) - \boldsymbol {\Phi} (\mathbf {y} _ {0}) \| + \| \boldsymbol {\Phi} (\mathbf {y} _ {0}) - \mathbf {y} _ {0} \| \leq \| \boldsymbol {J} \boldsymbol {\Phi} (\boldsymbol {\xi}) \| \| \mathbf {y} - \mathbf {y} _ {0} \| + \| \boldsymbol {\Phi} (\mathbf {y} _ {0}) - \mathbf {y} _ {0} \| <   K \delta + (1 - K) \delta = \delta .
$$

这表明 $\Phi ( \mathbf { y } ) \in J .$ . 显然 $E$ 是一个完备空间. 下面来证明 $\Phi$ 是以个完备空间 $J$ 上的一个压缩映射. 由拟微分中值定理可知, 存在 $\pmb { \xi } ^ { \prime }$ 使得

$$
\| \Phi (\mathbf {y} ^ {\prime}) - \Phi (\mathbf {y} ^ {\prime \prime}) \| \leq \| J \Phi (\boldsymbol {\xi} ^ {\prime}) \| \| \mathbf {y} ^ {\prime} - \mathbf {y} ^ {\prime \prime} \| \leq K \| \mathbf {y} ^ {\prime} - \mathbf {y} ^ {\prime \prime} \|, \quad \forall \mathbf {y} ^ {\prime}, \mathbf {y} ^ {\prime \prime} \in E.
$$

这就证明了 $\Phi$ 是以个完备空间 $J$ 上的一个压缩映射. 由压缩映射原理可知存在唯一的 $\boldsymbol { y } \in E$ 使得

$$
\boldsymbol {y} = \boldsymbol {\Phi} (\boldsymbol {y}) = \varphi (\boldsymbol {x}, \boldsymbol {y}).
$$

由于 det $J _ { y } F ( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \not = 0$ , 故由等式4.22可知

$$
\boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}) = \boldsymbol {0}.
$$

这表明 $F ( { \boldsymbol { \mathbf { \mathit { x } } } } , { \boldsymbol { \mathbf { \mathit { y } } } } )$ 确定了一个 $I$ 到 $J$ 的映射, 记作 $f _ { : }$ , 则显然有 $\mathbf { y } _ { 0 } = f ( \pmb { x } _ { 0 } )$ .

(ii) 证明 $f \in C ( I )$ . 我们有

$$
f (x) = \varphi (x, f (x)), \quad \forall x \in I.
$$

由拟微分中值定理可知, 存在 $\pmb { \xi } ^ { \prime \prime }$ 使得

$$
\begin{array}{l} \left\| f (x + h) - f (x) \right\| = \left\| \varphi (x + h, f (x + h)) - \varphi (x, f (x)) \right\| \\ \leq \left\| \varphi (x + h, f (x + h)) - \varphi (x + h, f (x)) \right\| + \left\| \varphi (x + h, f (x)) - \varphi (x, f (x)) \right\| \\ \leq K \| f (x + h) - f (x) \| + \| J _ {x} \varphi (\xi^ {\prime \prime}, f (x)) \| \| h \|. \\ \end{array}
$$

令

$$
A = \sup_{(x,y)\in \bar{I}\times \bar{J}}\| J_{x}\varphi (x,y)\| .
$$

则

$$
\left\| f (\boldsymbol {x} + \boldsymbol {h}) - f (\boldsymbol {x}) \right\| \leq B \| \boldsymbol {h} \|. \tag {4.23}
$$

其中 $B = A / ( 1 - K )$ . 这表明 $f$ 连续.

(iii) 证明 $4 ^ { \circ }$ . 取 $\begin{array} { r } { { \boldsymbol { x } } \in I , { \boldsymbol { y } } = f ( { \boldsymbol { x } } ) \in J , } \end{array}$ , 取一个充分小的 $\pmb { h }$ 使得 $x + h \in I .$ 令

$$
\boldsymbol {k} = \boldsymbol {f} (\boldsymbol {x} + \boldsymbol {h}) - \boldsymbol {f} (\boldsymbol {x}). \tag {4.24}
$$

则

$$
\boldsymbol {F} (\boldsymbol {x} + \boldsymbol {h}, \boldsymbol {y} + \boldsymbol {k}) - \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}) = \boldsymbol {F} [ \boldsymbol {x} + \boldsymbol {h}, \boldsymbol {f} (\boldsymbol {x} + \boldsymbol {h}) ] - \boldsymbol {F} [ \boldsymbol {x}, \boldsymbol {f} (\boldsymbol {x}) ] = \mathbf {0}. \tag {4.25}
$$

由于 $F$ 可微, 故

$$
\left\| \boldsymbol {F} (\boldsymbol {x} + \boldsymbol {h}, \boldsymbol {y} + \boldsymbol {k}) - \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}) - \boldsymbol {J} _ {\boldsymbol {x}} \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}) \boldsymbol {h} - \boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}) \boldsymbol {k} \right\| = \alpha \| \boldsymbol {h} \| + \beta \| \boldsymbol {k} \|, \tag {4.26}
$$

其中 $\alpha  0 , \beta  0 ( h , k )  \mathbf { 0 } .$ $\alpha \to 0$ . 由于 $f$ 连续, 故由等式4.24可知, 当 $\mathbf { \Sigma } _ { h }  \mathbf { \emptyset }$ 时, $k  0$ . 因此当 $\mathbf { \Sigma } _ { h }  \mathbf { \emptyset }$ 时 $\alpha \to 0$ ,

$\beta \to 0$ . 结合等式4.25,4.26和4.23可知

$$
\left\| J _ {x} \boldsymbol {F} (x, y) \boldsymbol {h} + J _ {y} \boldsymbol {F} (x, y) \boldsymbol {k} \right\| = \alpha \| \boldsymbol {h} \| + \beta \| \boldsymbol {k} \| \leq (\alpha + \beta B) \| \boldsymbol {h} \|.
$$

令 $C = [ J _ { y } F ( x , y ) ] ^ { - 1 } ,$ , 则

$$
\begin{array}{l} \left\| f (x + h) - f (x) + \left[ J _ {y} F (x, y) \right] ^ {- 1} J _ {x} F (x, y) h \right\| \\ = \left\| k + \left[ J _ {y} F (x, y) \right] ^ {- 1} J _ {x} F (x, y) h \right\| = \left\| \left[ J _ {y} F (x, y) \right] ^ {- 1} \left[ J _ {x} F (x, y) h + J _ {y} F (x, y) k \right] \right\| \\ \leq | C | | \alpha + \beta B | | \mathbf {h} |. \\ \end{array}
$$

显然, 当 $\mathbf { \nabla } _ { h }  \mathbf { 0 }$ 时 $| C | | \alpha + \beta B |  0 .$ 这表明 $f$ 可微, 且

$$
\boldsymbol {J} \boldsymbol {f} (\boldsymbol {x}) = - [ \boldsymbol {J} _ {\boldsymbol {y}} \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}) ] ^ {- 1} \boldsymbol {J} _ {\boldsymbol {x}} \boldsymbol {F} (\boldsymbol {x}, \boldsymbol {y}).
$$

# 推论 4.1

证明

# 4.4.5 逆映射定理

# 定义 4.19 (微分同胚)

设函数 $f : ( a , b )  \mathbb { R }$ , 我们经常需要知道它有没有反函数. 这个问题我们在《数学分析 I》中我们已经研究过这个问题.如果 $f$ 在 $\boldsymbol { I } = \left( a , b \right)$ 上严格单调,则一定存在反函数 $f ^ { - 1 }$ ,它的定义域为 $f ( I )$ ,且它在定义域上也严格单调.这个结论很难推广到多元函数和向量值函数中,因为在多元函数和向量值函数没有单调性.因此需要换个角度看这个问题.

如果把函数 $y = f ( x )$ 看作隐函数, 那么反函数存在其实就是可以从方程中解出 $x = f ^ { - 1 } ( y )$ . 因此我们看作先用隐函数定理的视角重新叙述反函数定理. 但是隐函数定理只讨论了局部存在性, 因此我们暂时也先讨论反函数的局部存在性.

# 定理 4.40 (1 维的局部反函数定理)

设函数 $f : I \to \mathbb { R }$ . 若满足

$1 ^ { \circ } \ f \in C ^ { 1 } ( I )$   
$2 ^ { \circ }$ 存在 $x _ { 0 } \in I$ 使得 $f ^ { \prime } ( x _ { 0 } ) \neq 0$ .

设 $y _ { 0 } = f ( x _ { 0 } )$ , 则存在包含 $x _ { 0 }$ 的一个开区间 $U \subseteq ( a , b )$ 和包含 $y _ { 0 }$ 的一个开区间?? 使得

1◦ $f ( U ) = V$ 且 $f$ 是 $U$ 上的单射, 即 $f$ 在 $U$ 上可逆.  
$2 ^ { \circ } \ f ^ { - 1 } \in C ^ { 1 } ( V )$   
$3 ^ { \circ }$ 当 $y \in V$ 时

$$
\left(f ^ {- 1}\right) ^ {\prime} (y) = \frac {1}{f ^ {\prime} (x)},
$$

其中 $x = f ^ { - 1 } ( y )$

证明 证法一 已知 $f ^ { \prime } ( x _ { 0 } ) \neq 0 .$ , 不妨设 $f ^ { \prime } ( x _ { 0 } ) > 0 .$ . 由于 $f \in C ^ { 1 } ( I )$ , 故存在 $x _ { 0 }$ 的一个开区间 $U \subseteq I$ 使得 $f ^ { \prime } ( U ) > 0$ .这表明 $f$ 在 $U$ 上严格递增. 令 $V = f ( U )$ . 由于 $y _ { 0 } = f ( x _ { 0 } )$ , 故 $V$ 包含 $y _ { 0 }$ . 由于 $f$ 在 $U$ 上连续, 因此 $V$ 也是开区间.这就证明了 $1 ^ { \circ }$ . 由于 $f \in C ^ { 1 } ( a , b )$ , 根据《数学分析 I》中反函数的导数相关结论就知道 $2 ^ { \circ }$ 和 $3 ^ { \circ }$ .

证法二 令二元函数

$$
F (x, y) = f (x) - y.
$$

它的定义域是 $D = I \times \mathbb { R } \subseteq \mathbb { R } ^ { 2 } .$ 先来检验 $F$ 满足隐函数定理的条件. 容易知道 $F \in C ^ { 1 } ( D )$ . 由于 $y _ { 0 } = f ( x _ { 0 } )$ , 因此点$( x _ { 0 } , y _ { 0 } ) \in D$ 满足

$$
F (x _ {0}, y _ {0}) = f (x _ {0}) - y _ {0} = 0.
$$

由于 $f ^ { \prime } ( x _ { 0 } ) \neq 0 .$ , 故

$$
\frac {\partial F}{\partial x} \left(x _ {0}, y _ {0}\right) = f ^ {\prime} \left(x _ {0}\right) \neq 0.
$$

于是 $F$ 满足隐函数定理的条件, 因此存在一个包含 $( x _ { 0 } , y _ { 0 } )$ 的开矩形 $H \times V \subseteq D$ 使得

$1 ^ { \circ }$ 对于任一 $y \in V$ 方程 $F ( x , y ) = 0 $ 在 $H$ 中都有唯一的解 $x = f ^ { - 1 } ( y )$

$$
2 ^ {\circ} f ^ {- 1} \in C ^ {1} (V).
$$

$3 ^ { \circ }$ 当 $y \in V$ 时, 有

$$
\left(f ^ {- 1}\right) ^ {\prime} (y) = - \frac {\frac {\partial F}{\partial y} (x , y)}{\frac {\partial F}{\partial x} (x , y)} = \frac {1}{f ^ {\prime} (x)},
$$

其中 $x = f ^ { - 1 } ( y )$ .

令 $U = f ^ { - 1 } ( V )$ , 则 $f ( U ) = V$ . 由于 $f ^ { - 1 }$ 是以个连续函数, 且?? 是一个开区间, 因此 $V$ 在 $f ^ { - 1 }$ 下的象 $U$ 也是一个开区间. 综上可知定理成立. ■

以上定理的证法二可以推广到局部的逆映射定理.

# 定理 4.41 (局部逆映射定理)

设映射 $f : D \to \mathbb { R } ^ { n }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 若满足

1 ${ } ^ { \circ } \ f \in C ^ { 1 } ( D )$   
$2 ^ { \circ }$ 存在 $\pmb { x } _ { 0 } \in D$ 使得 d $\operatorname { e t } J f ( \pmb { x } _ { 0 } ) \neq 0$ .

设 $\mathbf { y } _ { 0 } = f ( \pmb { x } _ { 0 } )$ , 则存在 $x _ { 0 }$ 的一个邻域 $U$ 和 $\scriptstyle { \mathfrak { y } } _ { 0 }$ 的一个邻域 $V$ 使得

$1 ^ { \circ } \ f ( U ) = V$ 且 $f$ 是 $U$ 上的单射, 即 $f$ 可逆.

$$
2 ^ {\circ} f ^ {- 1} \in C ^ {1} (V).
$$

$3 ^ { \circ }$ 当 ${ \pmb y } \in V$ 时

$$
J f ^ {- 1} (y) = \frac {1}{J f (x)},
$$

其中 $\pmb { x } = \pmb { f } ^ { - 1 } ( \mathbf { y } )$ .

证明 令

$$
\boldsymbol {F} (x, y) = \boldsymbol {f} (x) - y.
$$

它的定义域是 $E = D \times \mathbb { R } ^ { n } \subseteq \mathbb { R } ^ { 2 n } .$ . 先来检验 $F$ 满足隐映射定理的条件. 容易知道 $F \in C ^ { 1 } ( E )$ . 由于 $\mathbf { y } _ { 0 } = f ( \pmb { x } _ { 0 } )$ , 因此点 $( { \pmb x } _ { 0 } , { \pmb y } _ { 0 } ) \in D$ 满足

$$
F \left(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}\right) = f \left(\boldsymbol {x} _ {0}\right) - \boldsymbol {y} _ {0} = \mathbf {0}.
$$

设 $F = \left( F _ { 1 } , \cdots , F _ { n } \right)$ , $\ b _ { f } = ( f _ { 1 } , \cdots , f _ { n } )$ . 由于 det $J f ( { \boldsymbol { x } } _ { 0 } ) \neq 0$ , 故

$$
\det  J _ {x} \boldsymbol {F} (\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0}) = \left| \begin{array}{c c c} \frac {\partial F _ {1}}{\partial x _ {1}} & \dots & \frac {\partial F _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial F _ {n}}{\partial x _ {1}} & \dots & \frac {\partial F _ {n}}{\partial x _ {n}} \end{array} \right| _ {(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0})} = \left| \begin{array}{c c c} \frac {\partial f _ {1}}{\partial x _ {1}} & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial f _ {n}}{\partial x _ {1}} & \dots & \frac {\partial f _ {n}}{\partial x _ {n}} \end{array} \right| _ {(\boldsymbol {x} _ {0}, \boldsymbol {y} _ {0})} = \det  J \boldsymbol {f} (\boldsymbol {x} _ {0}) \neq 0.
$$

于是 $F$ 满足隐映射定理的条件, 因此存在一个包含 $( \boldsymbol { x } _ { 0 } , \boldsymbol { y } _ { 0 } )$ 的邻域 $H \times V \subseteq E$ 使得

$1 ^ { \circ }$ 对于任一 $y \in V$ 方程 $F ( x , y ) = 0 $ 在 $H$ 中都有唯一的解 $\pmb { x } = \pmb { f } ^ { - 1 } ( \mathbf { y } )$ .

$$
2 ^ {\circ} f ^ {- 1} \in C ^ {1} (V).
$$

$3 ^ { \circ }$ 当 $\pmb { y } \in V$ 时, 有

$$
\begin{array}{l} \boldsymbol {J} \boldsymbol {f} ^ {- 1} (\boldsymbol {y}) = - \left[ \begin{array}{c c c} \frac {\partial F _ {1}}{\partial x _ {1}} & \dots & \frac {\partial F _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial F _ {n}}{\partial x _ {1}} & \dots & \frac {\partial F _ {n}}{\partial x _ {n}} \end{array} \right] _ {(\boldsymbol {x}, \boldsymbol {y})} ^ {- 1} \left[ \begin{array}{c c c} \frac {\partial F _ {1}}{\partial y _ {1}} & \dots & \frac {\partial F _ {1}}{\partial y _ {n}} \\ \vdots & & \vdots \\ \frac {\partial F _ {n}}{\partial y _ {1}} & \dots & \frac {\partial F _ {n}}{\partial y _ {n}} \end{array} \right] _ {(\boldsymbol {x}, \boldsymbol {y})} \\ = - \left[ \begin{array}{c c c} \frac {\partial f _ {1}}{\partial x _ {1}} & \dots & \frac {\partial f _ {1}}{\partial x _ {n}} \\ \vdots & & \vdots \\ \frac {\partial f _ {n}}{\partial x _ {1}} & \dots & \frac {\partial f _ {n}}{\partial x _ {n}} \end{array} \right] _ {(x, y)} ^ {- 1} \left[ \begin{array}{c c c} - 1 & \dots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \dots & - 1 \end{array} \right] _ {(x, y)} = - [ J f (x) ] ^ {- 1} (- I) = \frac {1}{J f (x)}, \\ \end{array}
$$

其中 $\pmb { x } = \pmb { f } ^ { - 1 } ( \mathbf { y } )$ .

令 $U = f ^ { - 1 } ( V )$ , 则 $f ( U ) = V .$ 由于 $f$ 是一个连续映射, 且 $V$ 是一个开集, 因此 $V$ 在 $f$ 下的原象 $U$ 也是一个开集.综上可知定理成立. ■

前面的逆映射定理只是局部的, 局部的逆映射定理是无法简单推出整体的逆映射定理的. 下面看一个例子.

例 4.61 研究向量值函数

$$
\boldsymbol {f} (x, y) = \left(\mathrm {e} ^ {x} \cos y, \mathrm {e} ^ {x} \sin y\right).
$$

的逆映射.

解 由于对于任一 $( x , y ) \in \mathbb { R } ^ { 2 }$ 都有

$$
\det  J f (x, y) = \left| \begin{array}{c c} \mathrm {e} ^ {x} \cos y & - \mathrm {e} ^ {x} \sin y \\ \mathrm {e} ^ {x} \sin y & \mathrm {e} ^ {x} \cos y \end{array} \right| = \mathrm {e} ^ {2 x} \neq 0.
$$

因此由局部的逆映射定理可知, 每一点 $( x , y ) \in \mathbb { R } ^ { 2 }$ 的局部都存在 $f$ 的逆映射. 但是由于

$$
\boldsymbol {f} (x, y + 2 \pi) = \boldsymbol {f} (x, y).
$$

故 $f$ 在 $\mathbb { R } ^ { 2 }$ 上不是单射.

上例表明即使把局部逆映射的条件 $2 ^ { \circ }$ 加强为 det $J F$ 在每一点都不为零仍然无法推出整体的逆映射定理. 但这组条件可以推出 $f$ 的象是开集.

# 定理 4.42 (开映射定理)

设映射 $f : D \to \mathbb { R } ^ { n }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 若满足

$$
1 ^ {\circ} f \in C ^ {1} (D).
$$

$2 ^ { \circ }$ 对于任一 $\boldsymbol { x } \in D$ 都有 det $J f ( { \pmb x } ) \neq 0$ .

令 $G = f ( D )$ , 则 $G$ 是一个开集.

证明 任取 $y \in G$ , 则存在 $\boldsymbol { x }$ 使得 $f ( x ) = y$ . 由局部逆映射定理可知, 存在 $\boldsymbol { x }$ 的一个邻域 $U$ 和 $\textbf { y }$ 的一个邻域 $V$ 满足$V = f ( U )$ . 因此

$$
V = \boldsymbol {f} (U) \subseteq \boldsymbol {f} (D) = G.
$$

这表明 $\textbf {  { y } }$ 是 $G$ 的一个内点. 于是可知 $G$ 是一个开集.

因此满足局部逆映射条件的映射称为 “开映射”.

# 定义 4.20 (开映射)

设映射 $f : D \to \mathbb { R } ^ { n }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 若 $f$ 把开集映成开集, 则称 $f$ 是一个开映射 (open map).

如果加上 $f$ 是单射这个条件, 就可以立刻推出全局的逆映射定理.

# 定理 4.43 (逆映射定理)

设映射 $f : D \to \mathbb { R } ^ { n }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 若满足

${ \ v O } ^ { \circ } ~ f \in C ^ { 1 } ( D )$ .   
$2 ^ { \circ }$ 对于任一 $\boldsymbol { x } \in D$ 都有 det $J f ( { \pmb x } ) \neq 0$ .  
$3 ^ { \circ } ~ f$ 是 $D$ 上的一个单射.

令 $G = f ( D )$ , 则

$1 ^ { \circ } ~ f$ 是 $D$ 到 $G$ 的可逆映射.   
$2 ^ { \circ } \ f ^ { - 1 } \in C ^ { 1 } ( G )$   
$3 ^ { \circ }$ 当 $y \in G$ 时

$$
J f ^ {- 1} (\mathbf {y}) = [ J f (\mathbf {x}) ] ^ {- 1}, \tag {4.27}
$$

其中 $\pmb { x } = \pmb { f } ^ { - 1 } ( \mathbf { y } )$ .

注 事实上条件 $3 ^ { \circ } \colon f$ 是 $D$ 上的一个单射就是一元函数反函数定理中的条件: $f$ 是严格单调的.

注 以上定理中的等式4.27两边取行列式即可得到

$$
\det  J f ^ {- 1} (y) = \frac {1}{\det  [ J f (x) ]}.
$$

如果用 Jacobi 行列式的记号可以记作

$$
\frac {\partial (x _ {1} , \cdots , x _ {n})}{\partial (y _ {1} , \cdots , y _ {n})} = \frac {1}{\frac {\partial (y _ {1} , \cdots , y _ {n})}{\partial (x _ {1} , \cdots , x _ {n})}}.
$$

为了叙述方面, 我们把满足逆映射定理条件的映射称为 “正则映射”.

# 定义 4.21 (正则映射)

设映射 $f : D \to \mathbb { R } ^ { n }$ , 其中 $D$ 是 $\mathbb { R } ^ { n }$ 中的一个开集. 若满足

1 ${ } ^ { \circ } \ f \in C ^ { 1 } ( D )$ .   
$2 ^ { \circ } ~ f$ 是 $D$ 上的一个单射.  
$3 ^ { \circ }$ 对于任一 $\boldsymbol { x } \in D$ 都有 det $J F ( x ) \neq 0$ .

则称 $f$ 是 $D$ 上的一个正则映射 .

注 容易知道正则映射的逆映射也是一个正则映射.

从另一个角度看,逆映射定理实际上是在讨论一个方程组在怎样的点上,在多大范围内存在唯一解,并给出了求近似解的方法. 因此线性方程组的 Cramer 法则也可以看作是逆映射定理的特例.

不仅如此逆映射定理还告诉我们, 对于正则映射 $f$ , 如果方程组 $f ( x ) = y _ { 0 }$ 有唯一解 $x _ { 0 }$ , 则这个解对 $\scriptstyle { \mathfrak { y } } _ { 0 }$ 的取值有着 “连续的依赖性”——对于任一 $\varepsilon > 0$ , 存在一个范数充分小的 $\delta$ 使得方程组 $\pmb { f } ( \pmb { x } ) = \pmb { y } _ { 0 } + \delta$ 的解 $\pmb { x } _ { 0 } ^ { \prime }$ 满足

$$
\left\| \boldsymbol {x} _ {0} ^ {\prime} - \boldsymbol {x} _ {0} \right\| <   \varepsilon .
$$

下面看两个例子.

例 4.62 极坐标变换公式为:

$$
\left\{ \begin{array}{l} x = r \cos \theta \\ y = r \sin \theta \end{array} \right..
$$

求 $r$ 和 $\theta$ 关于 $x$ 和 $y$ 的偏导数.

解 由逆映射定理可知

$$
\left[ \begin{array}{c c} \frac {\partial r}{\partial x} & \frac {\partial r}{\partial y} \\ \frac {\partial \theta}{\partial x} & \frac {\partial \theta}{\partial y} \end{array} \right] = \left[ \begin{array}{c c} \frac {\partial x}{\partial r} & \frac {\partial x}{\partial \theta} \\ \frac {\partial y}{\partial r} & \frac {\partial y}{\partial \theta} \end{array} \right] ^ {- 1} = \left[ \begin{array}{c c} \cos \theta & - r \sin \theta \\ \sin \theta & r \cos \theta \end{array} \right] ^ {- 1} = \frac {1}{r} \left[ \begin{array}{c c} r \cos \theta & r \sin \theta \\ - \sin \theta & \cos \theta \end{array} \right].
$$

例 4.63 设方程组

$$
\left\{ \begin{array}{l} x ^ {2} = v y \\ y ^ {2} = u x \end{array} \right..
$$

求:

$$
\begin{array}{c} \frac {\partial (x , y)}{\partial (u , v)}. \end{array}
$$

解 解出 $u$ 和 $\nu$ :

$$
u = \frac {y ^ {2}}{x}, \qquad v = \frac {x ^ {2}}{y}.
$$

因此

$$
\frac {\partial (u , v)}{\partial (x , y)} = \left| \begin{array}{c c} \frac {\partial u}{\partial x} & \frac {\partial u}{\partial y} \\ \frac {\partial v}{\partial x} & \frac {\partial v}{\partial y} \end{array} \right| = \left| \begin{array}{c c} - \frac {y ^ {2}}{x ^ {2}} & \frac {2 y}{x} \\ \frac {2 x}{y} & - \frac {x ^ {2}}{y ^ {2}} \end{array} \right| = - 3.
$$

于是可知

$$
\frac {\partial (x , y)}{\partial (u , v)} = \frac {1}{\frac {\partial (u , v)}{\partial (x , y)}} = - \frac {1}{3}.
$$

# 4.4.6 函数的独立性

现在来讨论函数的独立性.这个问题在线性代数中已经出现过,不过那时候研究的是最简单的情况.设线性方程组

$$
\left\{ \begin{array}{c} y _ {1} = a _ {1 1} x _ {1} + a _ {1 2} x _ {2} + \dots + a _ {1 n} x _ {n} \\ y _ {2} = a _ {2 1} x _ {1} + a _ {2 2} x _ {2} + \dots + a _ {2 n} x _ {n} \\ \dots \\ y _ {m} = a _ {m 1} x _ {1} + a _ {m 2} x _ {2} + \dots + a _ {m n} x _ {n} \end{array} \right..
$$

# 4.5 多元函数微分学的几何应用

# 4.5.1 曲线的曲率

下面来研究光滑曲线的 “弯曲程度”. 我们称曲线的 “弯曲程度” 为 “曲率”. 首先来看最简单的光滑曲线—圆. 圆的形状只由半径 $r$ 一个参数决定. 显然当 $r$ 越大, 圆的 “曲率” 越小. 当 $r  + \infty$ , 可以认为圆变成了直线, 而直线显然是不弯曲的, 因此 “曲率” 应定义为零. 不难想到用 $1 / r$ 来定义圆的 “曲率”. 显然, 圆的每一点有一样的“曲率”, 因此 $1 / r$ 表示的是圆上任意一点的 “曲率”. 当 $r  + \infty$ 时 $1 / r \to 0$ , 因此在这个定义之下, 直线上任意一点的 “曲率” 都是零.

对于一般的光滑曲线 Γ, 如果要定义其上一点 $P$ 处的曲率, 可以先考虑这一点附近的 “平均曲率”. 在 $P$ 的附近两侧分别取 $P _ { 1 }$ , ??2. 若这三点共线, 则认为 $P _ { 1 }$ 到 $^ 2$ 这段曲线的 “平均曲率” 为零. 若它们不共线, 则把它们确定的圆的 “曲率” 定义为这段曲线的 “平均曲率”. 当 $\operatorname* { m a x } \{ | P P _ { 1 } | , | P P _ { 2 } | \}  0$ 时,“平均曲率” 的极限值可以定义为这段曲线的 “曲率”.

以上定义 “曲率” 的方法虽然直观, 但不易用公式表达. 因此我们可以考虑用另一种办法刻画 “曲率”. 还是回到圆, 不难发现圆的圆心角 $\theta$ 和它所对的弧长 $r \theta$ 的比值是

$$
\frac {\theta}{r \theta} = \frac {1}{r}.
$$

恰好是我们定义的圆的 “曲率”. 而圆心角 $\theta$ 等于它所对的弧的起点和终点的切线的夹角. 对于一条直线, 它的任意两点的切线夹角都是零,因此用这个方法定义的直线“曲率”也是零.这个定义方法可以容易推广到一般光滑曲线中. 为此需要先研究曲线上一点的切向量.

设曲线

$$
\Gamma : \boldsymbol {r} = \boldsymbol {r} (t), \quad \alpha \leq t \leq \beta ,
$$

其中 $\pmb { r } = ( x , y , z ) , \pmb { r } ( t ) = ( x ( t ) , y ( t ) , z ( t ) )$ . 函数 $x ( t ) , y ( t ) , z ( t )$ 都在 $[ \alpha , \beta ]$ 上连续可导. 在 Γ 上任取定一点 $P _ { 0 } ( x ( t _ { 0 } ) , y ( t _ { 0 } ) , z ( t _ { 0 } ) )$ .在 $P _ { 0 }$ 附近取一点 $P ( x ( t ) , y ( t ) , z ( t ) )$ . 则 $P _ { 0 } P$ 的方向向量为

$$
\frac {\boldsymbol {r} (t) - \boldsymbol {r} (t _ {0})}{t - t _ {0}}.
$$

当 $t \longrightarrow t _ { 0 }$ 时, 若以上向量值函数的极限存在, 则可以定义为 “切向量”.

# 定义 4.22 (切向量)

设曲线

$$
\Gamma : \boldsymbol {r} = \boldsymbol {r} (t), \quad \alpha \leq t \leq \beta ,
$$

其中 $\boldsymbol { r } = ( x , y , z )$ , $\pmb { r } ( t ) = ( x ( t ) , y ( t ) , z ( t ) )$ . 令

$$
\boldsymbol {r} ^ {\prime} (t _ {0}) = \lim  _ {t \rightarrow t _ {0}} \frac {\boldsymbol {r} (t) - \boldsymbol {r} (t _ {0})}{t - t _ {0}} = \left(x ^ {\prime} (t _ {0}), y ^ {\prime} (t _ {0}), z ^ {\prime} (t _ {0})\right).
$$

则称 $\boldsymbol { r } ^ { \prime } ( t _ { 0 } )$ 为 $\Gamma$ 在点 $r ( x _ { 0 } )$ 处的切向量 (tangent vector).

注 若 $t _ { 0 } = \alpha$ , 则 $r ^ { \prime } ( t _ { 0 } )$ 表示

$$
\lim  _ {t \rightarrow t _ {0} +)} \frac {\boldsymbol {r} (t) - \boldsymbol {r} (t _ {0})}{t - t _ {0}} = \left(x _ {+} ^ {\prime} (t _ {0}), y _ {+} ^ {\prime} (t _ {0}), z _ {+} ^ {\prime} (t _ {0})\right).
$$

若 $t _ { 0 } = \beta$ , 则 $r ^ { \prime } ( t _ { 0 } )$ 表示

$$
\lim  _ {t \rightarrow t _ {0} -}) \frac {\boldsymbol {r} (t) - \boldsymbol {r} (t _ {0})}{t - t _ {0}} = \left(x _ {-} ^ {\prime} (t _ {0}), y _ {-} ^ {\prime} (t _ {0}), z _ {-} ^ {\prime} (t _ {0})\right).
$$

如果 $\Gamma$ 在 $\boldsymbol { r } ( t _ { 0 } )$ 处的切向量为 $\pmb { r } ^ { \prime } ( t _ { 0 } ) = ( x ^ { \prime } ( t _ { 0 } ) , y ^ { \prime } ( t _ { 0 } ) , z ^ { \prime } ( t _ { 0 } ) )$ , 则可以立刻写出 $\Gamma$ 在 $\boldsymbol { r } ( t _ { 0 } )$ 处的切线:

$$
\frac {x - x (t _ {0})}{x ^ {\prime} (t _ {0})} = \frac {y - y (t _ {0})}{y ^ {\prime} (t _ {0})} = \frac {z - z (t _ {0})}{z ^ {\prime} (t _ {0})}.
$$

由此可见,如果 $x ^ { \prime } ( t _ { 0 } ) , y ^ { \prime } ( t _ { 0 } ) , z ^ { \prime } ( t _ { 0 } )$ $x ^ { \prime } ( t _ { 0 } )$ $z ^ { \prime } ( t _ { 0 } )$ 同时为零,则切线不存在.为了保证曲线每一点都有切线,我们希望它在每一点

的切向量都不为零.

# 定义 4.23 (正则曲线)

设曲线 $\Gamma : \boldsymbol { r } ( t )$ $( \alpha \leq t \leq \beta )$ . 若 $\Gamma$ 在 $t _ { 0 }$ 处的切向量 $\mathbf { } r ^ { \prime } ( t _ { 0 } ) \neq \mathbf { 0 }$ , 则称 $t _ { 0 }$ 是 $\Gamma$ 的一个正则点. 若 $\boldsymbol { r } ( t )$ 的分量函数都连续可导, 且曲线上的每一个点都是正则点, 即对于任一 $t \in [ \alpha , \beta ]$ 都有 $\mathbf { } r ^ { \prime } ( t ) \neq \mathbf { 0 }$ , 则称 $\Gamma$ 是一条正则曲线 (regular curve).

注 若一个点不是正则点, 则称为奇异点 (singular point).

下面看一个例子, 虽然曲线的各分量方程都连续可导, 但曲线不是正则曲线.

例 4.64 设曲线

$$
\Gamma : \left\{ \begin{array}{l} x = t ^ {3} \\ y = t ^ {2} \end{array} \right..
$$

虽然 $x = t ^ { 3 }$ , $y = t ^ { 2 }$ 都连续可导, 但 $t = 0$ 不是 Γ 的正则点.

注 如图, 曲线 $\Gamma$ 在 $x = 0$ 没有切线, 因此它在 $x = 0$ 处切向量为零.

![](images/2139fbc20e50232b6cfc2573988dfdb70d95765c31621e613e2c1e837955862f.jpg)  
图 4.15: Γ 曲线示意图.

现在可以用切向量和弧长来刻画曲线的 “曲率”.

# 定义 4.24 (曲率)

设正则曲线 $\Gamma : r = r ( t )$ $( \alpha \leq t \leq \beta )$ . 令 $\boldsymbol { r } ( t _ { 0 } )$ 与 $r ( t _ { 0 } + \Delta t )$ 之间的弧长为 $\Delta s$ , 令 $\boldsymbol { r } ^ { \prime } ( t _ { 0 } )$ 与 $r ^ { \prime } ( t _ { 0 } + \Delta t )$ 之间的夹角为 $\Delta \theta$ . 若以下极限存在

$$
\lim  _ {\Delta s \rightarrow 0} \left| \frac {\Delta \theta}{\Delta s} \right|.
$$

则极限值称为 $\Gamma$ 在 $\boldsymbol { r } ( t _ { 0 } )$ 处的曲率 (curvature), 记作 $\kappa ( t _ { 0 } )$ .

注 $r ^ { \prime } ( t _ { 0 } )$ 与 $r ^ { \prime } ( t _ { 0 } + \Delta t )$ 之间的夹角可能是负值, 但刻画曲率的时候并不关心角度的正负.

定义了切向量以后, 曲线的弧长公式就可以表示为

$$
S (\Gamma) = \int_ {\alpha} ^ {\beta} \sqrt {\left[ x ^ {\prime} (t) \right] ^ {2} + \left[ ^ {\prime} (t) \right] ^ {2} + \left[ z ^ {\prime} (t) \right] ^ {2}} d t = \int_ {\alpha} ^ {\beta} \| r ^ {\prime} (t) \| d t.
$$

令

$$
s (t) = \int_ {\alpha} ^ {t} \| r ^ {\prime} (\tau) \| d \tau . \tag {4.28}
$$

则 $s ( t )$ 表示从 $r ( \alpha )$ 出发沿着曲线到达 $\boldsymbol { r } ( t )$ 时所路过的弧长.由于 $\| r ^ { \prime } ( \tau ) \|$ 连续,由微积分基本定理可知 $s ( t )$ 可导,

且

$$
\frac {\mathrm {d} s (t)}{\mathrm {d} t} = \left\| r ^ {\prime} (t) \right\|, \quad \alpha \leq t \leq \beta . \tag {4.29}
$$

此时若 Γ 是一条正则曲线, 则 $\| r ^ { \prime } ( t ) \| > 0 .$ . 这表明当 $\Gamma$ 正则时, $s ( t )$ 严格递增. 此时 $s ( t )$ 存在反函数 $t = t ( s )$ . 这表明如果 $\Gamma$ 是正则的, 则弧长可以作为曲线方程的参数. 令

$$
\boldsymbol {R} (s) = \boldsymbol {r} [ t (s) ].
$$

则等式4.28变为

$$
s = \int_ {\alpha} ^ {s} \| \boldsymbol {R} ^ {\prime} (\rho) \| d \rho .
$$

两边对 $s$ 求导可得 $1 = \| R ^ { \prime } ( s ) \|$ . 这表明如果用弧长 $s$ 作参数, $\pmb { R } ^ { \prime } ( s )$ 就可以成为 $\Gamma$ 上各点处的单位切向量. 反之,若 $\| r ^ { \prime } ( t ) \| = 1$ , 则由弧长公式可知

$$
s = \int_ {\alpha} ^ {t} \| \boldsymbol {r} ^ {\prime} (\tau) \| \mathrm {d} \tau = t - \alpha .
$$

因此 $t = s + \alpha$ . 和表明 $t$ 是从 $\alpha$ 起算的弧长.

以上讨论表明用弧长作为参数可以使计算大大简化. 这是因为弧长是 “正交不变量”, 用物理学的视角看就是“运动不变量”. 因此弧长称为曲线的自然参数 (natural parameter). 向量值函数对自然参数的导数可以简记作:

$$
\dot {\boldsymbol {r}} := \frac {\mathrm {d} \boldsymbol {r}}{\mathrm {d} s}, \quad \ddot {\boldsymbol {r}} := \frac {\mathrm {d} ^ {2} \boldsymbol {r}}{\mathrm {d} s ^ {2}}.
$$

在实际计算时应尽量选用弧长作曲线方程的参数. 在引入弧度制时充分考虑了这一点. 我们把单位元中弧长为 1的圆弧所对的圆心角定义为 1 弧度. 这样一来很容易写出自然参数下的圆的参数方程.

例 4.65 写出半径为 $r$ 的自然参数方程.

解 以圆心角 $\theta$ 为参数的方程为

$$
\left\{ \begin{array}{l} x = r \cos \theta \\ y = r \sin \theta \end{array} \right..
$$

在弧度制下, 弧长 $s = r \theta$ , 因此圆在自然参数下的方程就是

$$
\boldsymbol {r} (s) = \left(r \cos \frac {s}{r}, r \sin \frac {s}{r}\right).
$$

注 此时

$$
\boldsymbol {r} ^ {\prime} (s) = \left(- \sin \frac {s}{r}, \cos \frac {s}{r}\right).
$$

因此 $\| r ^ { \prime } ( s ) \| = 1$ .

下面很自然地要研究曲线在自然参数下的曲率公式.

# 定理 4.44 (自然参数方程的曲率公式)

设正则曲线的自然参数方程为 $\Gamma : r = r ( s )$ . 若 $r ^ { \prime \prime } ( s )$ 存在, 则

$$
\kappa (s) = \left\| r ^ {\prime \prime} (s) \right\|.
$$

证明 由于 ??¥ 存在, 故 $\dot { \boldsymbol { r } }$ 可导. 设 $r ^ { \prime } ( s + \Delta s )$ 和 $\boldsymbol { r } ^ { \prime } ( s )$ 之间的夹角为 $\Delta \theta$ . 由于 $\| r ^ { \prime } ( s ) \| = 1$ , 如图4.16可知:

$$
\begin{array}{l} \| \boldsymbol {r}^{\prime \prime}(s)\| = \left\| \lim_{\Delta s\to 0}\frac{\boldsymbol{r}^{\prime}(s + \Delta s) - \boldsymbol{r}^{\prime}(s)}{\Delta s}\right\| = \lim_{\Delta s\to 0}\frac{\| \boldsymbol{r}^{\prime}(s + \Delta s) - \boldsymbol{r}^{\prime}(s)\|}{|\Delta s|} = \lim_{\Delta s\to 0}\left|\frac{2\sin(\Delta\theta / 2)}{\Delta s}\right| \\ = \lim  _ {\Delta s \rightarrow 0} \left| \frac {\sin (\Delta \theta / 2)}{\Delta \theta / 2} \right|\left| \frac {\Delta \theta}{\Delta s} \right| = \lim  _ {\Delta s \rightarrow 0} \left| \frac {\Delta \theta}{\Delta s} \right|. \\ \end{array}
$$

![](images/810f86b57a0e7b0dbad94a6e09ff3739c97a19d1212a99787c4a7ce7e79a8e4e.jpg)  
图 4.16: 曲率示意图.

用以上公式可以再次计算圆和直线的曲率.

例 4.66 设自然参数下的直线方程为

$$
L: \boldsymbol {r} (s) = \boldsymbol {u} s + v,
$$

其中 $\left\| \boldsymbol { u } \right\| = 1$ . 由于 $\pmb { r } ^ { \prime } ( s ) = \pmb { u }$ , 故 $r ^ { \prime \prime } ( s ) = \mathbf { 0 } .$ 因此直线上任何一点的曲率都是 0.

例 4.67 设圆的自然参数方程为

$$
\boldsymbol {r} (s) = \left(r \cos \frac {s}{r}, r \sin \frac {s}{r}\right).
$$

由于

$$
\boldsymbol {r} ^ {\prime} (s) = \left(- \sin \frac {s}{r}, \cos \frac {s}{r}\right), \qquad \boldsymbol {r} ^ {\prime \prime} (s) = \left(- \frac {1}{r} \cos \frac {s}{r}, - \frac {1}{r} \sin \frac {s}{r}\right).
$$

因此

$$
\kappa (s) = \left\| r ^ {\prime \prime} (s) \right\| = \frac {1}{r}.
$$

于是可知圆上任何一点的曲率都是 $1 / r$ .

一般情况下, 给出的曲线方程中的参数不一定是自然参数. 下面来讨论非自然参数下曲线的曲率计算方法.

# 定理 4.45 (一般参数方程的曲率公式)

设正则曲线的参数方程为 $\Gamma : t = r ( t )$ . 若 $\boldsymbol { r } ^ { \prime \prime } ( t )$ 存在, 则

$$
\kappa (t) = \frac {\| \boldsymbol {r} ^ {\prime} (t) \times \boldsymbol {r} ^ {\prime \prime} (t) \|}{\| \boldsymbol {r} ^ {\prime} (t) \| ^ {3}}.
$$

证明 设 $t = t ( s )$ . 由于 $\| r ^ { \prime } ( s ) \| = 1$ , 因此

$$
\boldsymbol {r} ^ {\prime} (s) \cdot \boldsymbol {r} ^ {\prime} (s) = 1.
$$

对两边求导得

$$
\boldsymbol {r} ^ {\prime \prime} (s) \cdot \boldsymbol {r} ^ {\prime} (s) + \boldsymbol {r} ^ {\prime} (s) \cdot \boldsymbol {r} ^ {\prime \prime} (s) = 0 \Longleftrightarrow \boldsymbol {r} ^ {\prime \prime} (s) \cdot \boldsymbol {r} ^ {\prime} (s) = 0
$$

因此 $\boldsymbol { r } ^ { \prime } ( s )$ 和 $r ^ { \prime \prime } ( s )$ 正交. 于是

$$
\| \boldsymbol {r} ^ {\prime} (s) \times \boldsymbol {r} ^ {\prime \prime} (s) \| = \| \boldsymbol {r} ^ {\prime} (s) \| \| \boldsymbol {r} ^ {\prime \prime} (s) \| = \| \boldsymbol {r} ^ {\prime \prime} (s) \| = \kappa (s) = \kappa (t).
$$

根据链式法则相继求出 $r ^ { \prime } ( s )$ 和 $r ^ { \prime \prime } ( s )$ :

$$
\begin{array}{l} \boldsymbol {r} ^ {\prime} (s) = \frac {\mathrm {d} \boldsymbol {r}}{\mathrm {d} s} = \frac {\mathrm {d} \boldsymbol {r}}{\mathrm {d} t} \frac {\mathrm {d} t}{\mathrm {d} s} = \boldsymbol {r} ^ {\prime} (t) t ^ {\prime} (s). \\ \boldsymbol {r} ^ {\prime \prime} (s) = \frac {\mathrm {d} ^ {2} \boldsymbol {r}}{\mathrm {d} s ^ {2}} = \frac {\mathrm {d} ^ {2} \boldsymbol {r}}{\mathrm {d} t ^ {2}} \left(\frac {\mathrm {d} t}{\mathrm {d} s}\right) ^ {2} + \frac {\mathrm {d} \boldsymbol {r}}{\mathrm {d} t} \frac {\mathrm {d} ^ {2} t}{\mathrm {d} s ^ {2}} = \boldsymbol {r} ^ {\prime \prime} (t) [ t ^ {\prime} (s) ] ^ {2} + \boldsymbol {r} ^ {\prime} (t) t ^ {\prime \prime} (s). \\ \end{array}
$$

于是

$$
\left\| \boldsymbol {r} ^ {\prime} (s) \times \boldsymbol {r} ^ {\prime \prime} (s) \right\| = \left\| \boldsymbol {r} ^ {\prime} (t) \times \boldsymbol {r} ^ {\prime \prime} (t) \right\| \left\| t ^ {\prime} (s) \right\| ^ {3}
$$

由于 $s ^ { \prime } ( t ) = \| r ^ { \prime } ( t ) \|$ , 因此

$$
\left| t ^ {\prime} (s) \right| ^ {3} = \frac {1}{\left| s ^ {\prime} (t) \right| ^ {3}} = \frac {1}{\left\| \boldsymbol {r} ^ {\prime} (t) \right\| ^ {3}}.
$$

于是可知

$$
\kappa (t) = \frac {\| \boldsymbol {r} ^ {\prime} (t) \times \boldsymbol {r} ^ {\prime \prime} (t) \|}{\| \boldsymbol {r} ^ {\prime} (t) \| ^ {3}}.
$$

下面来看一个例子.

例 4.68 设圆柱螺旋线:

$$
\Gamma : \boldsymbol {r} (t) = (a \cos t, a \sin t, b t), \quad a > 0.
$$

求它的曲率.

解 先计算 $\boldsymbol { r } ^ { \prime } ( t )$ 和 $\boldsymbol { r } ^ { \prime \prime } ( t )$ :

$$
\boldsymbol {r} ^ {\prime} (t) = (- a \sin t, a \cos t, b), \quad \boldsymbol {r} ^ {\prime \prime} (t) = (- a \cos t, - a \sin t, 0)
$$

因此

$$
\boldsymbol{r}^{\prime}(t)\times \boldsymbol{r}^{\prime \prime}(t) = \left(\left| \begin{array}{cc}a\cos t & -a\sin t\\ b & 0 \end{array} \right|, - \left| \begin{array}{cc}a\sin t & -a\cos t\\ b & 0 \end{array} \right|,\left| \begin{array}{cc} - a\sin t & -a\cos t\\ a\cos t & -a\sin t \end{array} \right|\right) = (ab\sin t, - ab\cos t,a^{2}).
$$

于是可知

$$
\kappa (t) = \frac {\| \boldsymbol {r} ^ {\prime} (t) \times \boldsymbol {r} ^ {\prime \prime} (t) \|}{\| \boldsymbol {r} ^ {\prime} (t) \| ^ {3}} = \frac {\left(a ^ {2} b ^ {2} + a ^ {4}\right) ^ {1 / 2}}{\left(a ^ {2} + b ^ {2}\right) ^ {3 / 2}} = \frac {a}{a ^ {2} + b ^ {2}}.
$$

注 以上计算结果表明圆柱螺旋线每一点的曲率都相等.

如果曲线是用两个曲面方程表示的, 例如

$$
\Gamma : \left\{ \begin{array}{l} F (x, y, z) = 0 \\ G (x, y, z) = 0 \end{array} \right..
$$

我们可以设它的参数方程为 $\boldsymbol { r } = ( x , y , z )$ , 其中 $x$ 和 $y$ 都看成是 $t$ 的函数. 则

$$
\kappa = \frac {\| \boldsymbol {r} ^ {\prime} \times \boldsymbol {r} ^ {\prime \prime} \|}{\| \boldsymbol {r} ^ {\prime} \| ^ {3}} = \frac {\left[ (y ^ {\prime} z ^ {\prime \prime} - y ^ {\prime \prime} z ^ {\prime}) ^ {2} + (x ^ {\prime} z ^ {\prime \prime} - x ^ {\prime \prime} z ^ {\prime}) ^ {2} + (x ^ {\prime} y ^ {\prime \prime} - x ^ {\prime \prime} y ^ {\prime}) ^ {2} \right] ^ {1 / 2}}{\left(x ^ {\prime 2} + y ^ {\prime 2} + z ^ {\prime 2}\right) ^ {3 / 2}}.
$$

如果把 $x$ 看作参数, 以上公式可以简化为

$$
\kappa = \frac {\left[ (y ^ {\prime} z ^ {\prime \prime} - y ^ {\prime \prime} z ^ {\prime}) ^ {2} + z ^ {\prime \prime 2} + y ^ {\prime \prime 2} \right] ^ {1 / 2}}{\left(1 + y ^ {\prime 2} + z ^ {\prime 2}\right) ^ {3 / 2}}.
$$

下面看一个例子.

例 4.69 设两个曲面确定的一条曲线:

$$
\Gamma : \left\{ \begin{array}{l} x ^ {2} + y ^ {2} + z ^ {2} = 9 \\ x ^ {2} - y ^ {2} = 3 \end{array} \right..
$$

求 $\Gamma$ 在点 $\pmb { p } _ { 0 } = ( 2 , 1 , 2 )$ 处的曲率.

解 把 $x , y$ 和 $z$ 都看作关于 $x$ 的方程. 对两个方程分别求导

$$
\left\{ \begin{array}{l} x + y y ^ {\prime} + z z ^ {\prime} = 0 \\ x - y y ^ {\prime} = 0 \end{array} \right., \quad \left\{ \begin{array}{l} 1 + y ^ {\prime 2} + y y ^ {\prime \prime} + z ^ {\prime 2} + z z ^ {\prime \prime} = 0 \\ 1 - y ^ {\prime 2} - y y ^ {\prime \prime} = 0 \end{array} \right..
$$

把 $x = 2$ , $y = 1$ , $z = 2$ 代入得

$$
y ^ {\prime} = 2, \qquad y ^ {\prime \prime} = - 3, \qquad z ^ {\prime} = - 2, \qquad z ^ {\prime \prime} = - 3.
$$

于是可知

$$
\kappa = \frac {\left[ \left(y ^ {\prime} z ^ {\prime \prime} - y ^ {\prime \prime} z ^ {\prime}\right) ^ {2} + z ^ {\prime \prime 2} + y ^ {\prime \prime 2} \right] ^ {1 / 2}}{\left(1 + y ^ {\prime 2} + z ^ {\prime 2}\right) ^ {3 / 2}} = \frac {\left[ (- 6 - 6) ^ {2} + 9 + 9 \right] ^ {1 / 2}}{(1 + 4 + 4) ^ {3 / 2}} = \frac {\sqrt {2}}{3}.
$$

如果平面曲线, 可以得到更简洁的公式. 设平面曲线 $\boldsymbol { r } = ( x , y )$ . 其中 $x$ 和 $y$ 都看成是 $t$ 的函数. 则

$$
\kappa = \frac {\| \boldsymbol {r} ^ {\prime} \times \boldsymbol {r} ^ {\prime \prime} \|}{\| \boldsymbol {r} ^ {\prime} \| ^ {3}} = \frac {\left| x ^ {\prime} y ^ {\prime \prime} - x ^ {\prime \prime} y ^ {\prime} \right|}{\left(x ^ {\prime 2} + y ^ {\prime 2}\right) ^ {3 / 2}}.
$$

如果给出了显式方程 $y = f ( x )$ . 以上公式就进一步简化为

$$
\kappa = \frac {| y ^ {\prime \prime} |}{\left(1 + y ^ {\prime 2}\right) ^ {3 / 2}}.
$$

下面来看几个例子.

例 4.70 抛物线的曲率 设抛物线

$$
y ^ {2} = 2 p x, \quad p > 0.
$$

求它的曲率.

解 对方程两边连续两次求导得

$$
y y ^ {\prime} = p, \qquad y ^ {\prime 2} + y y ^ {\prime \prime} = 0.
$$

因此

$$
y ^ {\prime} = \frac {p}{y}, \quad y ^ {\prime \prime} = - \frac {y ^ {\prime 2}}{y} = - \frac {p ^ {2}}{y ^ {3}}.
$$

于是可知

$$
\kappa = \frac {\left| y ^ {\prime \prime} \right|}{\left(1 + y ^ {\prime 2}\right) ^ {3 / 2}} = \frac {\left| \frac {p ^ {2}}{y ^ {3}} \right|}{\left(1 + \frac {p ^ {2}}{y ^ {2}}\right) ^ {3 / 2}} = \frac {p ^ {2}}{\left(y ^ {2} + p ^ {2}\right) ^ {3}}.
$$

例 4.71 椭圆的曲率 设椭圆:

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1, \quad a, b > 0.
$$

求它的曲率.

解 解法一 对方程两边连续两次求导得

$$
\frac {x}{a ^ {2}} + \frac {y y ^ {\prime}}{b ^ {2}} = 0, \quad \frac {1}{a ^ {2}} + \frac {y ^ {\prime 2} + y y ^ {\prime \prime}}{b ^ {2}} = 0.
$$

因此

$$
y ^ {\prime 2} = \frac {b ^ {4} x ^ {2}}{a ^ {4} y ^ {2}}, \quad y ^ {\prime \prime} = - \frac {b ^ {2}}{a ^ {2} y} - \frac {y ^ {\prime 2}}{y} = - \frac {b ^ {2}}{a ^ {2} y} - \frac {b ^ {4} x ^ {2}}{a ^ {4} y ^ {3}}.
$$

于是可知

$$
\kappa = \frac {| y ^ {\prime \prime} |}{(1 + y ^ {\prime 2}) ^ {3 / 2}} = \frac {\frac {b ^ {2}}{a ^ {2} y} + \frac {b ^ {4} x ^ {2}}{a ^ {4} y ^ {3}}}{\left(1 + \frac {b ^ {4} x ^ {2}}{a ^ {4} y ^ {2}}\right) ^ {3 / 2}} = \frac {a ^ {4} b ^ {2} y ^ {2} + a ^ {2} b ^ {4} x ^ {2}}{\left(a ^ {4} y ^ {2} + b ^ {4} x ^ {2}\right) ^ {3 / 2}} = \frac {a ^ {4} b ^ {4}}{\left(a ^ {4} y ^ {2} + b ^ {4} x ^ {2}\right) ^ {3 / 2}}.
$$

解法二 把椭圆写成空间参数方程 $\pmb { r } ( t ) = ( a \cos t , b \sin t , 0 )$ . 计算 $\boldsymbol { r } ^ { \prime } ( t )$ 和 $\boldsymbol { r } ^ { \prime \prime } ( t )$ :

$$
\boldsymbol {r} ^ {\prime} (t) = (- a \sin t, b \cos t, 0), \quad \boldsymbol {r} ^ {\prime \prime} (t) = (- a \cos t, - b \sin t, 0).
$$

于是

$$
\| \boldsymbol {r} ^ {\prime} \times \boldsymbol {r} ^ {\prime \prime} \| = \sqrt {(a b \sin^ {2} t + a b \cos^ {2} t)} = a b.
$$

于是可知

$$
\kappa (t) = \frac {a b}{\left(a ^ {2} \sin^ {2} t + b ^ {2} \cos^ {2} t\right) ^ {3 / 2}} = \frac {a b}{\left(a ^ {2} \frac {y ^ {2}}{b ^ {2}} + b ^ {2} \frac {x ^ {2}}{a ^ {2}}\right) ^ {3 / 2}} = \frac {a ^ {4} b ^ {4}}{\left(a ^ {4} y ^ {2} + b ^ {4} x ^ {2}\right) ^ {3 / 2}}.
$$

如果曲线是用极坐标方程 $r = r ( \theta )$ 给出的, 则可以把它写成一般的参数方程

$$
\left\{ \begin{array}{l} x = r (\theta) \cos \theta \\ y = r (\theta) \sin \theta \end{array} \right.,
$$

其中 $r$ 看成是 $\theta$ 的函数. 计算导数

$$
x ^ {\prime} = r ^ {\prime} \cos \theta - r \sin \theta , \quad x ^ {\prime \prime} = r ^ {\prime \prime} \cos \theta - 2 r ^ {\prime} \sin \theta - r \cos \theta .
$$

$$
y ^ {\prime} = r ^ {\prime} \sin \theta + r \cos \theta , \quad y ^ {\prime \prime} = r ^ {\prime \prime} \sin \theta + 2 r ^ {\prime} \cos \theta - r \sin \theta .
$$

于是

$$
x ^ {\prime} y ^ {\prime \prime} - x ^ {\prime \prime} y ^ {\prime} = r ^ {2} + 2 r ^ {\prime 2} - r r ^ {\prime \prime}, \quad x ^ {\prime 2} + y ^ {\prime 2} = r ^ {2} + r ^ {\prime 2}
$$

于是就得到了极坐标的曲率公式

$$
\kappa = \frac {\left| x ^ {\prime} y ^ {\prime \prime} - x ^ {\prime \prime} y ^ {\prime} \right|}{\left(x ^ {\prime 2} + y ^ {\prime 2}\right) ^ {3 / 2}} = \frac {\left| r ^ {2} + 2 r ^ {\prime 2} - r r ^ {\prime \prime} \right|}{\left(r ^ {2} + r ^ {\prime 2}\right) ^ {3 / 2}}.
$$

下面看一个例子.

例 4.72 心脏线的曲率 设心脏线

$$
r = a (1 + \cos \theta), \quad a > 0.
$$

求它的曲率.

解 计算导数

$$
r ^ {\prime} (\theta) = - a \sin \theta , \quad r ^ {\prime \prime} (\theta) = - a \cos \theta .
$$

于是

$$
r ^ {2} (\theta) + 2 r ^ {\prime 2} (\theta) - r (\theta) r ^ {\prime \prime} (\theta) = a ^ {2} (1 + \cos \theta) ^ {2} + 2 a ^ {2} \sin^ {2} \theta + a ^ {2} \cos \theta (1 + \cos \theta) = 3 a ^ {2} + 3 a ^ {2} \cos \theta .
$$

$$
r ^ {2} (\theta) + r ^ {\prime 2} (\theta) = a ^ {2} (1 + \cos \theta) ^ {2} + a ^ {2} \sin^ {2} \theta = 2 a ^ {2} + 2 a ^ {2} \cos \theta .
$$

于是可知

$$
\kappa = \frac {\left| r ^ {2} + 2 r ^ {\prime 2} - r r ^ {\prime \prime} \right|}{\left(r ^ {2} + r ^ {\prime 2}\right) ^ {3 / 2}} = \frac {\left| 3 a ^ {2} + 3 a ^ {2} \cos \theta \right|}{\left(2 a ^ {2} + 2 a ^ {2} \cos \theta\right) ^ {3 / 2}} = \frac {3}{2 ^ {3 / 2} a (1 + \cos \theta) ^ {1 / 2}} = \frac {3}{4 a | \cos (\theta / 2) |}.
$$

化曲为直和化曲为圆. 在曲率大的地方化曲为圆的近似效果更好.

# 定义 4.25 (密切圆)

密切圆 ()

# 4.5.2 曲面的切平面

下面来研究曲面的切平面.为此先来简单介绍一下曲面的表示方法.和平面曲线类似.空间曲面也有三种表示方法: 显式方程、隐式方程和参数方程. 一个定义在 $D \subseteq \mathbb { R } ^ { 2 }$ 的二元函数 $z = f ( x , y )$ 就是曲面的显式方程. 例如以下二元函数表示原点为中心半径为 $r$ 的上半球面:

$$
z = \sqrt {r ^ {2} - x ^ {2} - y ^ {2}}, \quad x ^ {2} + y ^ {2} \leq r ^ {2}.
$$

和平面曲线的显式方程一样, 曲面显式方程的缺点也是无法表达完整的封闭曲面, 因为它表达的曲面与平行于 ??轴的直线至多只能有一个交点.

用隐式方程可以克服这个缺点.定义在 $\boldsymbol { \omega } \in \mathbb { R } ^ { 3 }$ 上的方程 $F ( x , y , z ) = 0$ 就确定了一个曲面.这就是曲面的隐式方程. 例如球面的隐式方程就是

$$
x ^ {2} + y ^ {2} + z ^ {2} = r ^ {2}.
$$

隐式方程的优点就是可以表达完整的封闭曲面,而不受“函数定义”的约束.同样的隐式方程的第二个好处是可以把空间分成三个部分: 用 $F ( x , y , z ) < 0$ 表示曲面内部, $F ( x , y , z ) > 0$ 表示曲面外部. 隐式方程的缺点是不容易缺点曲面上的点.

同样地, 用参数方程也可以表示曲面:

$$
\left\{ \begin{array}{l} x = x (u, v) \\ y = y (u, v) \quad , \quad (u, v) \in D \subseteq \mathbb {R} ^ {2}. \\ z = z (u, v) \end{array} \right.
$$

. 参数方程同时克服显式方程和隐式方程的缺点而同时保留它们各自的有点. 所以在讨论问题时总是以参数方程为主来讨论. 曲面的参数方程也可以简记作

$$
\boldsymbol {r} = \boldsymbol {r} (u, v).
$$

和空间曲线的参数方程比较发现, 曲线的参数方程是 4 个变量 $x , y , z , t$ 组成的 3 个方程, 因此它表示的图像只有1个“自由度”.而曲面的参数方程是5个变量 $x , y , z , u , \nu$ 组成的3个方程,因此他表示的图像有2个“自由度”.从另一个角度看,空间曲线的参数方程是一个 $I \to { \mathbb { R } } ^ { 3 }$ 的映射,其中 $I$ 是 $\mathbb { R }$ 中的一个区间.如果 $I$ 上的不同点映成 $\mathbb { R } ^ { 3 }$ 中的同一点,则这条曲线出现了自交现象.而曲面的参数方程实质上是一个 $D \to \mathbb { R } ^ { 3 }$ 的映射,其中 $D$ 是 $\mathbb { R } ^ { 2 }$ 中的一个区域. 如果 $D$ 上的不同点映成 $\mathbb { R } ^ { 3 }$ 中的同一点, 则这个曲面出现了自交现象.

下面来看两个曲面参数方程的例子.

例 4.73 平面的参数方程 设一点 $\pmb { p } _ { 0 }$ 以及两个不共线的向量 $\nu _ { 1 } , \nu _ { 2 }$ . 求过点 $\pmb { p } _ { 0 }$ 且平行于量 $\nu _ { 1 } , \nu _ { 2 }$ 的平面方程.

解 设所求的平面上一点为 $r$ . 则 $r$ 在平面上当且仅当

$$
\boldsymbol {r} - \boldsymbol {p} _ {0} = u \boldsymbol {v} _ {1} + v \boldsymbol {v} _ {2}.
$$

这就是过点 $\pmb { p } _ { 0 }$ 且平行于向量 $\nu _ { 1 } , \nu _ { 2 }$ 的平面参数方程.

![](images/715a1d47ff95b9a940082cf242eb28cfa9a41d12d43102e84c6b46efbb06a0dc.jpg)  
图 4.17: 用向量和参数方程构建的平面.

例 4.74 球面的参数方程 求球心为坐标原点, 半径为 $r$ 的球面参数方程.

解 设一点 $\boldsymbol { r } = ( x , y , z )$ . 它的径向量与 ?? 轴的夹角为 ??. 它在 $x O y$ 平面的投影 $\pmb { p } ^ { \prime }$ 与 $x$ 轴的夹角为 $\varphi$ . 则 $r$ 在球面上当且仅当

$$
\left\{ \begin{array}{l} x = r \sin \theta \cos \varphi \\ y = r \sin \theta \sin \varphi \\ z = r \cos \theta \end{array} , \quad \theta \in [ 0, \pi ],   \varphi \in [ 0, 2 \pi ]. \right.
$$

以上就是球面的参数方程.

![](images/8f8d22a4509eb12b4501ef770ab018396155abbcc188acecd12773f33f42fc73.jpg)  
图 4.18: 参数方程构建的球面.

下面来讨论空间曲面的切平面. 设曲面 $\Sigma : F ( x , y , z ) = 0 .$ . 在曲面上取一点 $\pmb { p } _ { 0 } = ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ . 在曲面上任取一

条过 $\pmb { p } _ { 0 }$ 的曲线 Γ:

$$
\left\{ \begin{array}{l} x = x (t) \\ y = y (t) \\ z = z (t) \end{array} \right..
$$

设 $x _ { 0 } = x \big ( t _ { 0 } \big )$ , $y _ { 0 } = y \big ( t _ { 0 } \big )$ , $z _ { 0 } = z ( t _ { 0 } )$ . 把 $\Gamma$ 的参数方程代入曲面 $\Sigma$ 的方程得

$$
F (x (t), y (t), z (t)) = 0.
$$

在方程两边求 $t _ { 0 }$ 处的导数:

$$
\begin{array}{l} \frac {\partial F}{\partial x} \left(\boldsymbol {p} _ {0}\right) x ^ {\prime} (t _ {0}) + \frac {\partial F}{\partial y} \left(\boldsymbol {p} _ {0}\right) y ^ {\prime} (t _ {0}) + \frac {\partial F}{\partial z} \left(\boldsymbol {p} _ {0}\right) z ^ {\prime} (t _ {0}) = 0 \\ \Longleftrightarrow \left(\frac {\partial F}{\partial x} (\boldsymbol {p} _ {0}), \frac {\partial F}{\partial y} (\boldsymbol {p} _ {0}), \frac {\partial F}{\partial z} (\boldsymbol {p} _ {0})\right) \cdot \left(x ^ {\prime} (t _ {0}), y ^ {\prime} (t _ {0}), z ^ {\prime} (t _ {0})\right) = 0 \\ \Longleftrightarrow J F \left(\boldsymbol {p} _ {0}\right) \cdot \left(x ^ {\prime} \left(t _ {0}\right), y ^ {\prime} \left(t _ {0}\right), z ^ {\prime} \left(t _ {0}\right)\right) = 0. \\ \end{array}
$$

因此曲线 $\Gamma$ 在 $\pmb { p } _ { 0 }$ 处的切向量 $( x ^ { \prime } ( t _ { 0 } ) , y ^ { \prime } ( t _ { 0 } ) , z ^ { \prime } ( t _ { 0 } ) )$ 与向量 $J F ( p _ { 0 } )$ 垂直. 由于以上讨论中的曲线 Γ 是任取的, 因此曲面 $\Sigma$ 上任意一条过 $\pmb { p } _ { 0 }$ 的曲线在 $\pmb { p } _ { 0 }$ 的切向量都与向量 $J F ( p _ { 0 } )$ 垂直, 这表明曲面 $\Sigma$ 上任意一条过 $\pmb { p } _ { 0 }$ 的曲线在 $\pmb { p } _ { 0 }$ 的切向量都共面. 这些切向量决定的平面就称为曲面 $\Sigma$ 在 $\pmb { p } _ { 0 }$ 处的切平面 (tangent plane). 向量 $J F ( p _ { 0 } )$ 称为$\pmb { p } _ { 0 }$ 处的一个法向量 (normal vector). 于是我们可以立刻写出切平面的点法式方程:

$$
(x - x _ {0}) \frac {\partial F}{\partial x} + (y - y _ {0}) \frac {\partial F}{\partial y} + (z - z _ {0}) \frac {\partial F}{\partial z} = 0.
$$

下面看一个简单的例子.

例 4.75 设球面:

$$
x ^ {2} + y ^ {2} + z ^ {2} = a ^ {2}.
$$

求球面上一点 $\pmb { p } _ { 0 } = ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 处的切平面.

解 设 $F = x ^ { 2 } + y ^ { 2 } + z ^ { 2 } - a ^ { 2 } .$ 先求点 $\pmb { p } _ { 0 }$ 处的法向量:

$$
J F (\boldsymbol {p} _ {0}) = \left(\frac {\partial F}{\partial x} (\boldsymbol {p} _ {0}), \frac {\partial F}{\partial y} (\boldsymbol {p} _ {0}), \frac {\partial F}{\partial z} (\boldsymbol {p} _ {0})\right) = (2 x _ {0}, 2 y _ {0}, 2 z _ {0}).
$$

因此 $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 就是 $\pmb { p } _ { 0 }$ 的一个法向量. 于是切面方程为

$$
(x - x _ {0}) x _ {0} + (y - y _ {0}) y _ {0} + (z - z _ {0}) z _ {0} = 0 \Longleftrightarrow x _ {0} x + y _ {0} y + z _ {0} z = a ^ {2}.
$$

注 注意到球面上任意一点的法向量恰好就是它的径向量. 这个结论是符合几何直观的. 另外. 上例中求得的法向量是指向球外的, 因此也称为外法向量 (outer normal vector).

如果给曲面方程是显式的: $z = f ( x , y )$ $( ( x , y ) \in D )$ , 那么只需令

$$
F (x, y, z) = z - f (x, y) = 0.
$$

任取 $( x _ { 0 } , y _ { 0 } ) \in D$ , 设 $z _ { 0 } = f ( x _ { 0 } , y _ { 0 } )$ , 则过 $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 的法向量为

$$
\left(\frac {\partial F}{\partial x} \left(\boldsymbol {p} _ {0}\right), \frac {\partial F}{\partial y} \left(\boldsymbol {p} _ {0}\right), \frac {\partial F}{\partial z} \left(\boldsymbol {p} _ {0}\right)\right) = \left(- \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right), - \frac {\partial f}{\partial y} \left(x _ {0}, y _ {0}\right), 1\right).
$$

因此过 $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 的切平面方程为:

$$
\begin{array}{l} - (x - x _ {0}) \frac {\partial f}{\partial x} (x _ {0}, y _ {0}) - (y - y _ {0}) \frac {\partial f}{\partial y} (x _ {0}, y _ {0}) + (z - z _ {0}) = 0 \\ \Longleftrightarrow z - f (x _ {0}, y _ {0}) = (x - x _ {0}) \frac {\partial f}{\partial x} (x _ {0}, y _ {0}) + (y - y _ {0}) \frac {\partial f}{\partial y} (x _ {0}, y _ {0}). \\ \end{array}
$$

注意到, 以上求得的法向量的第三个分量是正数, 因此它与 ?? 轴的正方向夹角不会超过 $\pi / 2$ . 我们称这样的法向量为上法向量. 相应地令上法向量反向就可以得到下法向量.

# 定理 4.46

证明

# 定义 4.26 (正则曲面)

例 4.76

解 XXX

例 4.77

解 XXX

# 定义 4.27 (曲面的夹角)

设曲面 $\Sigma _ { 1 }$ 和 $\Sigma _ { 2 }$ 有一个交点 $\pmb { p } _ { 0 }$ . 我们称 $\Sigma _ { 1 }$ 和 $\Sigma _ { 2 }$ 在 $\pmb { p } _ { 0 }$ 的法向量夹角为这两个曲面在这一点的夹角.

例 4.78 设两个曲面:

$$
x ^ {2} + y ^ {2} = a ^ {2}, a > 0, \quad b z = x y, b > 0.
$$

求这两个曲面的夹角.

解 容易知道两个曲面交线的参数方程:

$$
\left\{ \begin{array}{l} x = a \cos t \\ y = a \sin t \\ z = \frac {a ^ {2}}{b} \cos t \sin t \end{array} . \right.
$$

设交线上任意一点 $\begin{array} { r } { \pmb { p } _ { 0 } = \left( a \cos t , a \sin t , \frac { a ^ { 2 } } { b } \cos t \sin t \right) } \end{array}$ . 求出两个曲面在这一点的法向量:

$$
\boldsymbol {n} _ {1} = (\cos t, \sin t, 0), \quad \boldsymbol {n} _ {2} = (a \sin t, a \cos t, - b).
$$

它们的夹角为

$$
\cos \langle \boldsymbol {n} _ {1}, \boldsymbol {n} _ {2} \rangle = \frac {\boldsymbol {n} _ {1} \cdot \boldsymbol {n} _ {2}}{\| \boldsymbol {n} _ {1} \| \| \boldsymbol {n} _ {2} \|} = \frac {a \sin 2 t}{\sqrt {a ^ {2} + b ^ {2}}}.
$$

# 4.5.3 切向量和切空间的公理化

# 内容提要

h 介绍一阶常微分方程的几种初等解法.

h 介绍线性微分方程的初步理论.

# 5.1 一阶微分方程的初等解法

在《数学分析 I》中我们已经详细讨论了一元函数的微分和积分, 现在如果给出了某个未知函数以及它的微分 (或导数) 的关系式, 那么就得到了一个微分方程. 如果未知函数是一元函数, 那么这个微分方程就是 “常微分方程”. 求解常微分方程的问题, 是一元微积分的自然延伸, 对于常见的微分方程的 “初等解法” 需要在《数学分析》中学习, 所谓的 “初等解法” 是指把解微分方程的问题转化为积分问题. 更深入的理论和主题将在《常微分方程》中详细讨论.

# 5.1.1 常微分方程的概念

# 定义 5.1 (常微分方程)

含有未知函数和未知函数导数的 (或微分) 的方程, 称为微分方程 (differential equation). 若未知函数是一元函数, 则称为常微分方程 (ordinary differential equation, ODE). 常微分方程的一般形式为

$$
F \left(x, y, y ^ {\prime}, y ^ {\prime \prime}, \dots , y ^ {(n)}\right) = 0. \tag {5.1}
$$

微分方程中出现的未知函数最高阶导数的阶数称为微分方程的阶(order). 若函数 $y = f ( x )$ 满足

$$
F \left(x, f (x), f ^ {\prime} (x), f ^ {\prime \prime} (x), \dots , f ^ {(n)} (x)\right) = 0.
$$

则称该函数是常微分方程5.1一个解.

注 一般只需要研究到二阶微分方程就够了.

注 若微分方程的一个解 $y = \varphi ( x )$ 是由方程 $\Phi ( x , y ) = 0 $ 决定的, 则称 $\Phi ( x , y ) = 0 $ 是微分方程5.1的一个隐式解(implicit solution). 大多数情况, 我们不会区分显式解和隐式解, 而把它们统称为微分方程的解.

注 若未知函数是多元函数的微分方程称作偏微分方程 (partial differential equation, PDE). 在《数学分析》中, 若干不加说明, 微分方程均指常微分方程.

下面看一个物理系中的例子.

例 5.1 已知自由落体运动的速度与时间成正比, 求自由落体的运动方程.

解 设运动方程 $s = s ( t )$ . 设自由落体运动的速度与时间的比例系数为 $\pmb { g }$ . 由题意得

$$
\frac {\mathrm {d} s}{\mathrm {d} t} = g t.
$$

对以上方程两边求不定积分得

$$
\boldsymbol {s} = \frac {1}{2} \boldsymbol {g} t ^ {2} + \boldsymbol {C}. \tag {5.2}
$$

其中 $C$ 是任一常数.

由以上例题可知,微分方程的解总是不唯一的.一般来说一阶微分方程的解集有一个常数.二阶微分方程的解集有两个 “独立常数”. 设二阶微分方程

$$
\frac {\mathrm {d} ^ {2} y}{\mathrm {d} x ^ {2}} = f (x).
$$

连续对两边取不定积分得

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = \int f (x) \mathrm {d} x + C _ {1} \Longleftrightarrow y = \int \left(\int f (x) \mathrm {d} x\right) \mathrm {d} x + C _ {1} x + C _ {2}.
$$

因此二阶微分方程的解通常形如 $y = \varphi ( x , C _ { 1 } , C _ { 2 } )$ 或 $\Phi ( x , y , C _ { 1 } , C _ { 2 } ) = 0$ .

# 定义 5.2 (通解)

$n$ 阶微分方程5.1的含有 $n$ 个独立的任意常数 $C _ { 1 } , C _ { 2 } , \cdots , C _ { n }$ 的解

$$
y = \varphi (x, C _ {1}, C _ {2}, \dots , C _ {n}) \quad {\text {或}} \quad \Phi (x, y, C _ {1}, C _ {2}, \dots , C _ {n}) = 0
$$

称为微分方程5.1的通解 (general solution).

注 常数 “独立” 的严格定义需要用到 Jacobi 矩阵和 Jacobi 行列式的知识, 将在后面的章节中讨论. 如果有两个独立常数, 统称可以称为有两个 “自由度”.

为了让微分方程有一个特定的解, 我们可以给出一些恰当条件. 这些条件称为定解条件 (definite condition). 常见的定解条件是初值条件 (initial value condition) 和边值条件 (boundary value condition). 我们主要讨论的是前一种情况, 这样的微分方程求解问题称为初值问题 (initial value problem). 我们把满足初值条件的解称为微分方程的特解 (particular solution).

在前面的例子中, 如果给出初值条件: 当 $t = 0$ 时 $\mathbf { \boldsymbol { s } } = \mathbf { \boldsymbol { s } } _ { 0 }$ , 则

$$
\left\{ \begin{array}{l} \frac {\mathrm {d} s}{\mathrm {d} t} = \boldsymbol {g} t \\ \left. \boldsymbol {s} \right| _ {t = 0} = \boldsymbol {s} _ {0} \end{array} . \right.
$$

于是可以解出5.2中的 $C = s _ { 0 }$ . 于是自由落体的运动方程就是

$$
s = \frac {1}{2} g t ^ {2} + s _ {0}.
$$

这就是我们熟悉的自由落体运动方程.

对于二阶微分方程需要给出两个初值条件才能把 $C _ { 1 }$ 和 $C _ { 1 }$ 确定下来. 因此二阶微分方程的初值问题通常会给出以下形式的条件:

$$
\left\{ \begin{array}{l} F (x, y, y ^ {\prime}, y ^ {\prime \prime}) = 0 \\ y \mid_ {x = x _ {0}} = y _ {0} \\ y ^ {\prime} \mid_ {x = x _ {0}} = y _ {1} \end{array} \right..
$$

# 5.1.2 一阶线性方程

# 定义 5.3 (变量分离方程)

以下形式的微分方程称为变量分离方程 (equation of separated variables):

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = f (x) \varphi (y). \tag {5.3}
$$

若 $\varphi \neq 0$ , 则

$$
\frac {\mathrm {d} y}{\varphi (y)} = f (x) \mathrm {d} x.
$$

对两边积分得

$$
\int \frac {\mathrm {d} y}{\varphi (y)} = \int f (x) \mathrm {d} x + C. \tag {5.4}
$$

其中 $C$ 的取值需要使得上式有意义.

注 这里之所以把 $C$ 写出来, 是因为我们把 $\int \frac { \mathrm { ~ d } y } { \varphi ( y ) }$ , $\textstyle { \int f ( x ) \ d x }$ 分别看作 $\displaystyle \frac { 1 } { \varphi ( { \bf { y } } ) }$ 和 $f ( x )$ 的某个具体的原函数. 今后如无特殊说明, $C$ 的取值都需要保证等式5.4有意义.

注 解方程时, 需要检验 $\varphi ( y ) = 0$ 的情况.

注 等式5.4可以直接看作一个隐函数.

下面看几个例子.

例 5.2 解微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = - \frac {x}{y}.
$$

解 原方程可变量分离:

$$
y d y = - x d x.
$$

两边积分可解得原方程的通解:

$$
\int y \mathrm {d} y = - \int x \mathrm {d} x \Longleftrightarrow \frac {y ^ {2}}{2} = - \frac {x ^ {2}}{2} + \frac {c}{2} \Longleftrightarrow y ^ {2} + x ^ {2} = C.
$$

例 5.3 解微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = P (x) y.
$$

解 当 $y \neq 0$ 时, 原方程可变量分离:

$$
\frac {\mathrm {d} y}{y} = P (x) \mathrm {d} x.
$$

两边积分可解得原方程的解:

$$
\int \frac {\mathrm {d} y}{y} = \int P (x) \mathrm {d} x \Longleftrightarrow \ln | y | = \int P (x) \mathrm {d} x + C _ {1} \Longleftrightarrow | y | = \mathrm {e} ^ {\int P (x) \mathrm {d} x + C _ {1}} \Longleftrightarrow y = \pm \mathrm {e} ^ {C _ {1}} \mathrm {e} ^ {\int P (x) \mathrm {d} x} = C \mathrm {e} ^ {\int P (x) \mathrm {d} x}.
$$

显然 $y = 0$ 也是原方程的解. 当 $C = 0$ 时, $y = 0$ , 因此 $y = C { \mathrm e } ^ { \int P ( x ) \mathrm { d } x }$ 就是原方程的通解, 其中 $C$ 可以取任一常数. ■

例 5.4 解微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = P (x) y.
$$

解 当 $y \neq 0$ 时, 原方程可变量分离:

$$
\frac {\mathrm {d} y}{y} = P (x) \mathrm {d} x.
$$

两边积分可解得原方程的解:

$$
\begin{array}{l} \int \frac {\mathrm {d} y}{y} = \int P (x) \mathrm {d} x \Longleftrightarrow \ln | y | = \int P (x) \mathrm {d} x + C _ {1} \Longleftrightarrow | y | = \exp \left(\int P (x) \mathrm {d} x + C _ {1}\right) \\ \Longleftrightarrow y = \pm \mathrm {e} ^ {C _ {1}} \mathrm {e} ^ {\int P (x) \mathrm {d} x} = C \mathrm {e} ^ {\int P (x) \mathrm {d} x}. \tag {5.5} \\ \end{array}
$$

显然 $y = 0$ 也是原方程的解. 当 $C = 0$ 时, $y = 0$ , 因此5.5就是原方程的通解, 其中 $C$ 可以取任一常数.

注 上例中的微分方程称为一阶齐次线性微分方程 (homogeneous linear differential equation of first order).

例 5.5 Malthus 人口增长模型 1798 年英国人口学家 Thomas Robert Malthus 在《人口原理》中提出了著名的 Malthus人口模型. 他认为人口自然增长过程中, 净相对增长率 (单位时间内人口的净增长率与人口总数之比) 是一个定值$r .$ . 于是 $t$ 到 $t + \Delta t$ 这段时间内的人口增长为

$$
N (t + \Delta t) - N (t) = r N (t) \Delta t.
$$

其中 $N ( t )$ 是 $t$ 时刻的人口数. 于是可以得到微分方程:

$$
\frac {\mathrm {d} N}{\mathrm {d} t} = r N.
$$

解以上微分方程.

解 当 $N > 0$ 时, 变量分离后可以解出方程:

$$
\frac {\mathrm {d} N}{N} = r \mathrm {d} t \Longleftrightarrow \int \frac {\mathrm {d} N}{N} = \int r \mathrm {d} t \Longleftrightarrow \ln N = r t + C _ {1} \Longleftrightarrow N = \mathrm {e} ^ {C _ {1}} \mathrm {e} ^ {r t} = C \mathrm {e} ^ {r t}.
$$

显然 $N = 0$ 也是方程的解, 因此 $N = C \mathrm { e } ^ { r t }$ 就是原方程的通解, 其中 $C$ 可以取任一正数.

从这里可以看出按照 Malthus 的人口模型, 人口增长是按指数增长的. 这个规律在时间不太长的情况下, 是比较符合事实的, 但长期看, 这个规律是不符合客观事实的, 这是因为人口的增长最终会受到资源的制约. 请看下一个例子.

例 5.6 Logistic 人口增长模型 为了修正 Malthus 人口模型, 比利时数学家 Pierre François Verhulst 引入了一个常数——环境最大容纳量, 记作 $K$ , 并假设相对增长率为 $r ( 1 - N ( t ) / K )$ , 之所以这样假设, 是因为人口的相对增长率随 $N ( t )$ 的增加而减少, 且当 $N ( t ) \to K$ 时 $r ( 1 - N ( t ) / K ) \to 0 .$ 于是 Malthus 人口模型就可以修正为:

$$
\frac {\mathrm {d} N}{\mathrm {d} t} = r \left(1 - \frac {N}{K}\right) N.
$$

这个模型被称为 logistic 模型 . 设初值条件

$$
N (t _ {0}) = N _ {0}, \qquad N (t) \geq 0.
$$

解以上微分方程.

解 当 $N > 0$ 时, 分离变量得

$$
r d t = \frac {K d N}{(K - N) N} = \frac {d N}{N} + \frac {d N}{K - N}.
$$

两边积分:

$$
\begin{array}{l} \int r \mathrm {d} t = \int \frac {\mathrm {d} N}{N} + \int \frac {\mathrm {d} N}{K - N} \Longleftrightarrow r t + C _ {1} = \ln \frac {N}{K - N} \Longleftrightarrow \mathrm {e} ^ {r t + C _ {1}} = \frac {N}{K - N} \\ \Longleftrightarrow N = \frac {K}{1 + e ^ {- C _ {1}} e ^ {- r t}} = \frac {K}{1 + C e ^ {- r t}}. \\ \end{array}
$$

其中 $C > 0 .$ 将初值条件代入得

$$
C \mathrm {e} ^ {- r t _ {0}} = \frac {K}{N _ {0}} - 1.
$$

于是解得唯一解

$$
N = \frac {K}{1 + \left(\frac {K}{N _ {0}} - 1\right) \mathrm {e} ^ {- r (t - t _ {0})}}.
$$

有些方程可以转化为变量分离方程.

# 定义 5.4 (齐次微分方程)

以下形式的微分方程称为齐次微分方程 (homogeneous differential equation):

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = g \left(\frac {y}{x}\right). \tag {5.6}
$$

注 在很多不同的场合都会看到齐次性 (homogeneity), 下面来解释一下它的含义. 若 $n$ 元函数 $f$ 满足:

$$
f (t x _ {1}, \dots , t x _ {n}) = t ^ {k} f (x _ {1}, \dots , x _ {n}),
$$

则称 $f$ 是一个 $k$ 次齐次函数 (homogeneous function). 因此线性映射是满足 (一次) 齐次性的.

如果 $f$ 是一个齐次函数,则称 $f ( x _ { 1 } , \cdots , x _ { n } ) = 0$ 是一个齐次方程.这就是线性代数中齐次线性方程组(system ofhomogeneous linear equations) 的由来.

若微分方程满足

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = \frac {\varphi (x , y)}{\psi (x , y)},
$$

其中 $\varphi ( x , y ) , \psi ( x , y )$ 是同次的齐次函数, 因此

$$
\frac {\varphi (x , y)}{\psi (x , y)} = \frac {\varphi \left(1 , \frac {y}{x}\right)}{\psi \left(1 , \frac {y}{x}\right)}.
$$

令

$$
g \left(\frac {y}{x}\right) = \frac {\varphi \left(1 , \frac {y}{x}\right)}{\psi \left(1 , \frac {y}{x}\right)}.
$$

即得定义中的方程5.6.

容易看出齐次微分方程可以化为变量分离方程.

# 命题 5.1

设齐次微分方程

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = g \left(\frac {y}{x}\right).
$$

其中 $g ( u )$ 是 $u$ 的连续函数. 则以上微分方程可以化为变量分离方程.

证明 令 $u = y / x$ , 则

$$
y = u x.
$$

在两边对 $x$ 求导

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = x \frac {\mathrm {d} u}{\mathrm {d} x} + u.
$$

代入方程5.6得

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = \frac {g (u) - u}{x}.
$$

于是可知, 齐次微分方程可以转化为变量分离方程.

下面来看几个例子.

例 5.7 解以下微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = \frac {y}{x} + \tan \frac {y}{x}.
$$

解 令 $u = y / x$ . 则

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = \frac {u + \tan u - u}{x} = \frac {\tan u}{x}.
$$

当 tan $u \ne 0$ 时, 分离变量得

$$
\frac {\mathrm {d} u}{\tan u} = \frac {\mathrm {d} x}{x}.
$$

两边积分得

$$
\int \frac {d u}{\tan u} = \int \frac {d x}{x} \Longleftrightarrow \ln | \sin u | = \ln | x | + C _ {1} \Longleftrightarrow \sin u = \pm e ^ {C _ {1}} x = C x.
$$

当 tan $u = 0$ 时 $\sin u = 0$ . 当 $C = 0$ 时 $\sin u = 0$ , 因此原方程的通解为

$$
\sin \frac {y}{x} = C x,
$$

其中 $C$ 是任一常数.

例 5.8 解以下微分方程:

$$
x \frac {\mathrm {d} y}{\mathrm {d} x} + 2 \sqrt {x y} = y, \quad x <   0.
$$

解 原方程可化为

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = 2 \sqrt {\frac {y}{x}} + \frac {y}{x}.
$$

令 $u = y / x$ , 则

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = \frac {2 \sqrt {u} + u - u}{x} = \frac {2 \sqrt {u}}{x}.
$$

当 $u \ne 0$ 时, 分离变量得

$$
\frac {\mathrm {d} u}{2 \sqrt {u}} = \frac {\mathrm {d} x}{x}.
$$

两边积分得

$$
\int \frac {\mathrm {d} u}{2 \sqrt {u}} = \int \frac {\mathrm {d} x}{x} \Longleftrightarrow \sqrt {u} = \ln (- x) + C \Longleftrightarrow \sqrt {\frac {y}{x}} = \ln (- x) + C.
$$

当 $u = 0$ 时, $y = 0$ . 综上可知原方程的通解为

$$
y = \left\{ \begin{array}{l} x [ \ln (- x) + C ] ^ {2}, \quad \ln (- x) + C > 0 \\ 0. \end{array} \right..
$$

下面看另一种可化为变量分离方程的微分方程.

# 命题 5.2

设微分方程

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = f (a x + b y + c). \tag {5.7}
$$

其中 $f ( u )$ 是 $u$ 的连续函数. 则以上微分方程可以化为变量分离方程.

证明 只需令 $u = a x + b y + c $ , 则在等式两边对 $x$ 求导

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = a + b \frac {\mathrm {d} y}{\mathrm {d} x}.
$$

代入方程5.7得

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = a + b f (u).
$$

于是可知方程5.7可以转化为变量分离方程.

下面看几个例子.

例 5.9 解以下微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = (x + y) ^ {2}.
$$

解 令 $\boldsymbol { u } = \boldsymbol { x } + \boldsymbol { y }$ , 则

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = 1 + u ^ {2}
$$

分离变量得

$$
\frac {\mathrm {d} u}{1 + u ^ {2}} = \mathrm {d} x.
$$

两边积分得

$$
\int \frac {\mathrm {d} u}{1 + u ^ {2}} = \int \mathrm {d} x \Longleftrightarrow \arctan u = x + C.
$$

于是可知原方程的通解为 arctan $( x + y ) = x + C$ , 其中 $C$ 为任一常数.

下面看第三种可化为变量分离方程的微分方程.

# 命题 5.3

设微分方程

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = f \left(\frac {a _ {1} x + b _ {1} y + c _ {1}}{a _ {2} x + b _ {2} y + c _ {2}}\right). \tag {5.8}
$$

其中 $f ( u )$ 是 $u$ 的连续函数. 则以上微分方程可以化为变量分离方程.

证明 (1) 当 $c _ { 1 } = c _ { 2 } = 0$ 时

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = f \left(\frac {a _ {1} x + b _ {1} y}{a _ {2} x + b _ {2} y}\right) = f \left(\frac {a _ {1} + b _ {1} \frac {y}{x}}{a _ {2} + b _ {2} \frac {y}{x}}\right).
$$

此时原方程为齐次微分方程, 因此可以化为变量分离方程.

(2) 当 $c _ { 1 } , c _ { 2 } \neq 0$ 时, 考虑线性方程组

$$
\left\{ \begin{array}{l} a _ {1} x + b _ {1} y + c _ {1} = 0 \\ a _ {2} x + b _ {2} y + c _ {2} = 0 \end{array} . \right. \tag {5.9}
$$

(i) 当系数行列式 $a _ { 1 } b _ { 2 } - a _ { 2 } b _ { 1 } \neq 0$ 时, 方程组5.9有唯一解. 设这个解为

$$
\left\{ \begin{array}{l} x = \alpha \\ y = \beta \end{array} \right..
$$

令

$$
\left\{ \begin{array}{l} X = x - \alpha \\ Y = y - \beta \end{array} \right..
$$

于是方程组5.8化为

$$
\left\{ \begin{array}{l} a _ {1} X + b _ {1} Y = 0 \\ a _ {2} X + b _ {2} Y = 0 \end{array} \right..
$$

于是原方程也可以化为齐次微分方程, 因此可以化为变量分离方程:

$$
\frac {\mathrm {d} Y}{\mathrm {d} X} = f \left(\frac {a _ {1} X + b _ {1} Y}{a _ {2} X + b _ {2} Y}\right) = f \left(\frac {a _ {1} + b _ {1} \frac {Y}{X}}{a _ {2} + b _ {2} \frac {Y}{X}}\right).
$$

(ii) 当系数行列式 $a _ { 1 } b _ { 2 } - a _ { 2 } b _ { 1 } = 0$ 时, 分为三种情况

若 $a _ { 1 } = b _ { 1 } = 0$ 或 $a _ { 2 } = b _ { 2 } = 0$ , 则方程5.8转化为形如5.7的方程.

若 $a _ { 1 } = a _ { 2 } = 0$ 或 $b _ { 1 } = b _ { 2 } = 0$ , 则方程5.3转化为形如5.7的方程.

若

$$
\frac {a _ {1}}{a _ {2}} = \frac {b _ {1}}{b _ {2}} = k.
$$

令 $u = a _ { 2 } x + b _ { 2 } y$ , 则

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = a _ {2} + b _ {2} \frac {\mathrm {d} y}{x}, \quad f \left(\frac {a _ {1} x + b _ {1} y + c _ {1}}{a _ {2} x + b _ {2} y + c _ {2}}\right) = f \left(\frac {k u + c _ {1}}{u + c _ {2}}\right).
$$

令

$$
g (u) = f \left(\frac {k u + c _ {1}}{u + c _ {2}}\right).
$$

于是方程5.3转化为

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = a _ {2} + b _ {2} g (u).
$$

此时方程化为了变量分离方程.

下面看几个例子.

例 5.10 解以下微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = \frac {x - y + 1}{x + y - 3}.
$$

解 解线性方程组:

$$
\left\{ \begin{array}{l} x - y + 1 = 0 \\ x + y - 3 \end{array} \right..
$$

解得

$$
\left\{ \begin{array}{l} x = 1 \\ y = 2 \end{array} \right..
$$

令

$$
\left\{ \begin{array}{l} X = x - 1 \\ Y = y - 2 \end{array} \right..
$$

则原方程化为

$$
\frac {\mathrm {d} Y}{\mathrm {d} X} = \frac {X - Y}{X + Y}.
$$

令 $u = Y / X$ 则原方程化为

$$
\frac {\mathrm {d} u}{\mathrm {d} X} = \frac {\frac {1 - u}{1 + u} - u}{X} = \frac {1 - 2 u - u ^ {2}}{X (1 + u)}.
$$

当 $1 - 2 u - u ^ { 2 } \neq 0$ 时, 分离变量得

$$
\frac {1 + u}{1 - 2 u - u ^ {2}} \mathrm {d} u = \frac {\mathrm {d} X}{X}.
$$

两边积分得

$$
\int \frac {1 + u}{1 - 2 u - u ^ {2}} \mathrm {d} u = \int \frac {\mathrm {d} X}{X} \Longleftrightarrow - \frac {1}{2} \ln | 1 - 2 u - u ^ {2} | + C _ {1} = \ln | X | \Longleftrightarrow X ^ {2} (u ^ {2} + 2 u - 1) = \pm \mathrm {e} ^ {C _ {1}} = C. \tag {5.10}
$$

$$
X ^ {2} \left(\frac {Y ^ {2}}{X ^ {2}} + 2 \frac {Y}{X} - 1\right) = C \Longleftrightarrow Y ^ {2} + 2 X Y - X ^ {2} = C \Longleftrightarrow (y - 2) ^ {2} + 2 (x - 1) (y - 2) - (x - 1) ^ {2} = C. \tag {5.11}
$$

当 $1 - 2 u - u ^ { 2 } = 0$ 时 $Y ^ { 2 } + 2 X Y - X ^ { 2 } = 0 .$ . 于是可知方程5.11是原方程的同解, 其中 $C$ 为任一常数.

例 5.11 解以下微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = \frac {x - y + 1}{2 x - 2 y - 3}.
$$

解 令 $u = x - y$ , 则

$$
\frac {\mathrm {d} u}{\mathrm {d} x} = 1 - \frac {\mathrm {d} y}{\mathrm {d} x} = 1 - \frac {x - y + 1}{2 x - 2 y - 3} = 1 - \frac {u + 1}{2 u - 3} = \frac {u - 4}{2 u - 3}.
$$

当 $u - 4 \neq 0$ 时, 分离变量得

$$
\frac {2 u - 3}{u - 4} \mathrm {d} u = \mathrm {d} x.
$$

两边积分得

$$
\begin{array}{l} \int \frac {2 u - 3}{u - 4} d u = \int d x \Longleftrightarrow 2 u + 3 \ln | u - 4 | = x + C _ {1} \Longleftrightarrow (u - 4) ^ {5} = e ^ {C _ {1}} e ^ {x - 2 u} = C e ^ {x - 2 u} \\ \Longleftrightarrow (x - y - 4) ^ {5} = C \mathrm {e} ^ {x - 2 (x - y)}. \tag {5.12} \\ \end{array}
$$

当 $u - 4 =$ 时, $x - y - 4 .$ 于是可知方程5.12是原方程的通解, 其中 $C$ 为任一常数.

# 5.1.3 常数变易法

# 定义 5.5 (线性微分方程)

形如以下形式的微分方程称为 $n$ 阶线性微分方程 (linear differential equation):

$$
y ^ {(n)} + p _ {n - 1} (x) y ^ {(n - 1)} + \dots + p _ {1} (x) y = q (x),
$$

其中 $p _ { n - 1 } ( x ) , \cdot \cdot \cdot , p _ { 1 } ( x ) , f ( x )$ $f ( x )$ 都是 $x$ 的函数. 当 $q = 0$ 时, 称为齐次线性微分方程 (homogeneous linear differential equation), 否则称为非齐次线性微分方程 (nonhomogeneous linear differential equation). 特别地, 一阶线性 微分方程 (linear differential equation of first order):

$$
y ^ {\prime} + p (x) y = q (x). \tag {5.13}
$$

注 不是线性微分方程的微分方程称为非线性微分方程 (nonlinear differential equation).

显然, 一阶齐次线性微分方程 $y ^ { \prime } + p ( x ) y = 0$ 是一个变量分离方程, 我们已经在例5.4中得到了它的通解

$$
y = C \mathrm {e} ^ {- \int p (x) \mathrm {d} x}.
$$

下面来讨论非齐次的情况.先来回忆一下《线性代数》中线性方程组解集结构.设一个线性方程组有解,若对应的齐次线性方程组的解空间为??, 且线性方程组有一个特解 $\gamma _ { 0 }$ , 则该线性方程组的解集为

$$
U = \left\{\gamma_ {0} + \eta \mid \eta \in W \right\}.
$$

以上集合经常记作 $U = \gamma _ { 0 } + W$ , 称 $U$ 为子空间?? 的一个陪集. 因此我们有理由猜测, 一个非齐次微分方程的解集可能形如

$$
y = y _ {0} (x) + C \mathrm {e} ^ {- \int p (x) \mathrm {d} x}.
$$

其中 $y _ { 0 }$ 是非齐次线性微分方程的一个特解. 下面来验证这个想法.

# 命题 5.4 (一阶线性微分方程通解的结构)

设一阶线性微分方程

$$
y ^ {\prime} + p (x) y = q (x).
$$

若它有一个特解 $y _ { 0 }$ , 则它的通解为

$$
y = y _ {0} + C \mathrm {e} ^ {- \int p (x) \mathrm {d} x}. \tag {5.14}
$$

证明 (i) 证明充分性. 由于 $y _ { 0 }$ 是原方程的一个特解, 故

$$
y _ {0} ^ {\prime} + p (x) y _ {0} = q (x). \tag {5.15}
$$

直接将5.14代入方程原方程左边得

$$
\begin{array}{l} \left[ y _ {0} + C \mathrm {e} ^ {- \int p (x) \mathrm {d} x} \right] ^ {\prime} + p (x) \left[ y _ {0} + C \mathrm {e} ^ {- \int p (x) \mathrm {d} x} \right] \\ = y _ {0} ^ {\prime} - C \mathrm {e} ^ {\int p (x) \mathrm {d} x} p (x) + p (x) y _ {0} + C \mathrm {e} ^ {- \int p (x) \mathrm {d} x} p (x) = y _ {0} ^ {\prime} + p (x) y _ {0} = q (x). \\ \end{array}
$$

这表明形如5.15的函数都是原方程的解.

(ii) 证明必要性. 任取原方程的一个解 $y _ { 1 }$ , 则

$$
y _ {1} ^ {\prime} + p (x) y _ {1} = q (x). \tag {5.16}
$$

等式5.15和5.16相减得

$$
y _ {0} ^ {\prime} + p (x) y _ {0} - y _ {1} ^ {\prime} - p (x) y _ {1} = 0 \Longleftrightarrow \left(y _ {1} - y _ {0}\right) ^ {\prime} + p (x) \left(y _ {1} - y _ {0}\right) = 0.
$$

因此 $y _ { 0 } - y _ { 1 }$ 是齐次线性微分方程 $y ^ { \prime } + p ( x ) y = 0$ 的一个解, 因此它可以表示为

$$
y _ {1} - y _ {0} = C \mathrm {e} ^ {- \int p (x) \mathrm {d} x}.
$$

于是 $y _ { 1 }$ 可以表示为

$$
y _ {1} = y _ {0} + C \mathrm {e} ^ {- \int p (x) \mathrm {d} x}.
$$

于是问题就归结找到非齐次线性微分的一个特解. 下面对方程5.13进行形式化求解:

$$
\begin{array}{l} y ^ {\prime} + p (x) y = q (x) \iff y ^ {\prime} \mathrm {e} ^ {\int p (x) \mathrm {d} x} + p (x) y \mathrm {e} ^ {\int p (x) \mathrm {d} x} = q (x) \mathrm {e} ^ {\int p (x) \mathrm {d} x} \iff \left[ \mathrm {e} ^ {\int p (x) \mathrm {d} x} y \right] ^ {\prime} = q (x) \mathrm {e} ^ {\int p (x) \mathrm {d} x} \\ \Longleftrightarrow \mathrm {e} ^ {\int p (x) \mathrm {d} x} y = \int q (x) \mathrm {e} ^ {\int p (x) \mathrm {d} x} \mathrm {d} x + C _ {1} \Longleftrightarrow y = \mathrm {e} ^ {- \int p (x) \mathrm {d} x} \left[ \int q (x) \mathrm {e} ^ {\int p (x) \mathrm {d} x} \mathrm {d} x + C _ {1} \right]. \\ \end{array}
$$

于是我们就找到了一阶线性微分方程 $y ^ { \prime } + p ( x ) y = q ( x )$ 的一个特解. 这样我们就可以写出它的通解:

$$
y = \mathrm {e} ^ {- \int p (x) \mathrm {d} x} \left[ \int q (x) \mathrm {e} ^ {\int p (x) \mathrm {d} x} \mathrm {d} x + C _ {1} \right] + C _ {2} \mathrm {e} ^ {- \int p (x) \mathrm {d} x} = \mathrm {e} ^ {- \int p (x) \mathrm {d} x} \left[ \int q (x) \mathrm {e} ^ {\int p (x) \mathrm {d} x} \mathrm {d} x + C \right].
$$

以上所用的方法是把齐次微分方程通解中的常数 $C$ 变易成待定函数 $c ( x )$ , 因此这个方法被称为常数变易法(method of variation of constant).

下面看几个例子.

例 5.12 解以下微分方程:

$$
(x + 1) \frac {\mathrm {d} y}{\mathrm {d} x} - n y = \mathrm {e} ^ {x} (x + 1) ^ {n + 1}.
$$

解 将方程化为一阶线性微分方程的标准形式:

$$
y ^ {\prime} - \frac {n}{x + 1} y = \mathrm {e} ^ {x} (x + 1) ^ {n}.
$$

先解以上方程对应的齐次线性微分方程:

$$
y ^ {\prime} - \frac {n}{x + 1} y = 0.
$$

解得

$$
y = C _ {1} \mathrm {e} ^ {\int \frac {n}{x + 1} \mathrm {d} x} = C _ {1} | x + 1 | ^ {n} = C (x + 1) ^ {n}.
$$

其中 $C$ 是任一常数. 设

$$
y = c (x) (x + 1) ^ {n}.
$$

两边求导得

$$
y ^ {\prime} = c ^ {\prime} (x) (x + 1) ^ {n} + n c (x) (x + 1) ^ {n - 1}.
$$

将以上两式代入原方程得

$$
c ^ {\prime} (x) (x + 1) ^ {n} + n c (x) (x + 1) ^ {n - 1} - \frac {n}{x + 1} c (x) (x + 1) ^ {n} = \mathrm {e} ^ {x} (x + 1) ^ {n} \iff c ^ {\prime} (x) = \mathrm {e} ^ {x} \iff c (x) = \mathrm {e} ^ {x} + C.
$$

于是可知原方程的通解为

$$
y = \left(\mathrm {e} ^ {x} + C\right) (x + 1) ^ {n}.
$$

其中 $C$ 是任一常数.

例 5.13 解以下微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = \frac {y}{2 x - y ^ {2}}.
$$

并求 $y ( 0 ) = 2$ 时的特解.

解 把 $x$ 看作 $y$ 的函数, 则原方程可以是一个一阶线性微分方程, 把它化为标准形式:

$$
\frac {\mathrm {d} x}{\mathrm {d} y} - \frac {2}{y} x = - y.
$$

先解以上方程对应的齐次线性微分方程:

$$
\frac {\mathrm {d} x}{\mathrm {d} y} - \frac {2}{y} x = 0.
$$

解得

$$
x = C y ^ {2}.
$$

其中 $C$ 是任一常数. 设

$$
x = c (y) y ^ {2}.
$$

两边求导得

$$
\frac {\mathrm {d} x}{\mathrm {d} y} = \frac {\mathrm {d} c (y)}{\mathrm {d} y} y ^ {2} + 2 c (y) y.
$$

将以上两式代入原方程得

$$
\frac {\mathrm {d} c (y)}{\mathrm {d} y} y ^ {2} + 2 c (y) y - \frac {2}{y} c (y) y ^ {2} = - y \iff \frac {\mathrm {d} c (y)}{\mathrm {d} y} = - \frac {1}{y} \iff c (y) = - \ln | y | + C.
$$

于是可知原方程的通解为

$$
x = (C - \ln | y |) y ^ {2}.
$$

其中 $C$ 是任一常数. 把初值条件 $x = 0$ , $y = 2$ 代入通解:

$$
0 = (C - \ln 2) 2 ^ {2} \iff C = \ln 2.
$$

于是可知 $y ( 0 ) = 2$ 时的特解为

$$
x = (\ln 2 - \ln | y |) y ^ {2}.
$$

# 定义 5.6 (Bernoulli 微分方程)

形如以下的微分方程称为 Bernoulli 微分方程 (Bernoulli differential equation):

$$
y ^ {\prime} = p (x) y + q (x) y ^ {n}, \quad n \neq 0, 1, \tag {5.17}
$$

其中 $p , q$ 都是连续函数.

当 $y \neq 0$ 时, 方程5.17可以化为

$$
y ^ {- n} y ^ {\prime} = p (x) y ^ {1 - n} + q (x) \Longleftrightarrow \frac {1}{1 - n} \left(y ^ {1 - n}\right) ^ {\prime} = p (x) y ^ {1 - n} + q (x)
$$

令 $t = y ^ { 1 - n }$ , 则

$$
t ^ {\prime} = (1 - n) p (x) t + (1 - n) q (x).
$$

原方程化为了线性微分方程. 用常数变易法可以解出方程.

下面来看几个例子.

例 5.14 解以下微分方程:

$$
\frac {\mathrm {d} y}{\mathrm {d} x} = 6 \frac {y}{x} - x y ^ {2}.
$$

解 原方程是一个 Bernoulli 方程. 当 $y \neq 0$ 时, 令 $t = y ^ { - 1 }$ , 则

$$
- \left(y ^ {- 1}\right) ^ {\prime} = \frac {6}{x} y ^ {- 1} - x \Longleftrightarrow t ^ {\prime} = - \frac {6}{x} t + x. \tag {5.18}
$$

先解对应的齐次微分方程:

$$
t = C x ^ {- 6},
$$

其中 $C$ 为任一常数. 设

$$
t = c (x) x ^ {- 6}.
$$

求导得

$$
t ^ {\prime} = c ^ {\prime} (x) x ^ {- 6} - 6 c (x) x ^ {- 7}.
$$

将以上两式代入5.18得

$$
c ^ {\prime} (x) x ^ {- 6} - 6 c (x) x ^ {- 7} = - \frac {6}{x} c (x) x ^ {- 6} + x \iff c ^ {\prime} (x) = x ^ {7} \iff c (x) = \frac {x ^ {8}}{8} + C.
$$

于是可知原方程得通解为

$$
y ^ {- 1} = \left(\frac {x ^ {8}}{8} + C\right) x ^ {- 6}.
$$

其中 $C$ 为任一常数. 此外 $y = 0$ 也是原方程的解.

# 5.1.4 恰当微分方程

前面已经看到,有时候把 $x$ 看作 $y$ 的函数比较容易解出方程.因此我们干脆考虑把 $x$ 和 $y$ 平等看待,则一个一阶微分方程可以写成:

$$
F (x, y) d x + G (x, y) d y = 0,
$$

如果若存在一个二元函数 $u ( x , y )$ 使得以上方程左边等于 $u ( x , y )$ 的全微分, 则由隐函数定理容易知道方程的解就是 $u$ .

# 命题 5.5 (恰当微分方程)

设一阶微分方程

$$
F (x, y) \mathrm {d} x + G (x, y) \mathrm {d} y = 0, \tag {5.19}
$$

其中 $F , G$ 都是某矩形上的连续函数, 且有连续的一阶偏导数. 若存在一个二元函数 $u ( x , y )$ 使得以上方程左边等于 $u ( x , y )$ 的全微分, 即

$$
F (x, y) d x + G (x, y) d y = d u (x, y).
$$

则方程的通解为 $u ( x , y ) = C$ , 其中 $C$ 为任一常数.

证明 (i) 任取 $y = f ( x )$ 满足 $u ( x , y ) = C$ , 则 $u ( x , f ( x ) ) = C$ , 两边微分得 $\mathrm { d } u ( x , f ( x ) ) = 0 .$ . 于是

$$
F (x, f (x)) \mathrm {d} x + G (x, f (x)) \mathrm {d} f (x) = \mathrm {d} u (x, f (x)) = 0.
$$

这表明 $y = f ( x )$ 是原方程的一个解, 于是可知 $u ( x , y ) = C$ 都是方程的解.

(ii) 任取 $y = f ( x )$ 满足方程5.19, 则

$$
F (x, f (x)) \mathrm {d} x + G (x, f (x)) \mathrm {d} f (x) = 0.
$$

于是

$$
\mathrm {d} u (x, f (x)) = 0 \iff u (x, f (x)) = C,
$$

其中 $C$ 为任一常数. 这表明 $y = f ( x )$ 是方程 $u ( x , y ) = C$ 确定的一个隐函数.

注 以上微分方程称为恰当微分方程 (exact differential equation).

# 定理 5.1

证明

# 定理 5.2

# 证明

例 5.15 解以下微分方程:

$$
(x + 1) \frac {\mathrm {d} y}{\mathrm {d} x} - n y = \mathrm {e} ^ {x} (x + 1) ^ {n + 1}.
$$

解

例 5.16 解以下微分方程:

$$
(x + 1) \frac {\mathrm {d} y}{\mathrm {d} x} - n y = \mathrm {e} ^ {x} (x + 1) ^ {n + 1}.
$$

解

# 5.1.5 积分因子

# 5.1.6 一阶隐式微分方程

# 5.2 高阶微分方程

# 5.2.1 一般的线性微分方程

# 5.2.2 常系数微分方程

# 5.2.3 高阶微分方程的降阶

# 5.2.4 积分因子

# 5.2.4.1 积分因子的定义

积分因子法是一种对恰当方程的解法的延伸，其基本思想在于当给定的方程不是一个恰当方程的时候，我们能否找到一个函数，使得方程两边乘上这个函数后变为恰当方程。其数学表达如下式所示

# 定义 5.7 (积分因子)

给定如下方程

$$
P (t, x) + Q (t, x) x ^ {\prime} = 0
$$

若是我们能够找到一个连续的 $\mu ( t , x )$ 使得下式

$$
\mu (t, x) P (t, x) + \mu (t, x) Q (t, x) x ^ {\prime} = 0
$$

是一个恰当方程，则称 $\mu ( t , x )$ 是一个上式的积分因子。

在积分因子不为 0 的 $( t , x )$ 的取值内，我们找到的

$$
\mu (t, x) P (t, x) + Q (t, x) x ^ {\prime} = 0
$$

的解也是

$$
P (t, x) + Q (t, x) x ^ {\prime} = 0
$$

的解，而上式是一个恰当方程，恰当方程的解法我们已经介绍过了。

# 5.2.4.2 积分因子的选择

若想使用积分因子法，我们的首要问题是如何找到一个合适的积分因子 $\mu ( t , \boldsymbol { x } )$ ，而其实这是一个非常平凡的问题，我们不妨梳理一下这个问题。首先，一个 $\mu ( t , x )$ 是我们要的积分因子当且仅当它将原有的方程变为一个恰当方程，而在恰当方程一节中我们给出了利用 $P ( t , x )$ 和 $Q ( t , x )$ 判断其是否是一个恰当方程的充要条件，我们需要做的是把这个条件带入到 $\mu ( t , x ) P ( t , x )$ 和 $\mu ( t , x ) Q ( t , x )$ 中，如下：

$$
\mu P + \mu Q x ^ {\prime} = 0 \text {是 恰 当 方 程} \Leftrightarrow \frac {\partial \mu P}{\partial x} = \frac {\partial \mu Q}{\partial t}
$$

这等价于 (仅仅具体的把导数写出来罢了)

$$
\mu (t, x) \left(\frac {\partial P (t , x)}{\partial x} - \frac {\partial Q (t , x)}{\partial t}\right) + \left(\frac {\partial \mu (t , x)}{\partial x} P (t, x) - \frac {\partial \mu (t , x)}{\partial t} Q (t, x)\right) = 0
$$

我们得到的甚至是一个偏微分方程，在这个阶段我们更不会解了，因此我们往往考虑给这个方程中的项施加一些条件，使得这个方程变得简单，并得到一些特殊的解来充当我们的积分因子。其中最常用的是如下的一个条件

# 定理 5.3 (积分因子特解的条件)

若是下式

$$
\frac {1}{Q} \left(\frac {\partial P}{\partial x} - \frac {\partial Q}{\partial t}\right)
$$

是一个只和 $t$ 有关的函数，则我们可以找到一个 $\mu ( t )$ 做我们的积分因子

# 证明

1. 首先我们假设存在一个 $\mu ( t )$ 是积分因子满足的偏微分方程的解，并且有 $\frac { 1 } { Q } \big ( \frac { \partial P } { \partial x } - \frac { \partial Q } { \partial t } \big )$ 只和 $x$ ，那么积分因

子满足的偏微分方程可以被变形为如下形式

$$
\begin{array}{l} \frac {\partial \mu P}{\partial y} = \frac {\partial \mu Q}{\partial x} \\ \Rightarrow \mu \frac {\partial P}{\partial y} = \frac {\partial \mu}{\partial x} Q + \mu \frac {\partial Q}{\partial x} \\ \Rightarrow \frac {\mu^ {\prime}}{\mu} = \frac {1}{Q} \left(\frac {\partial P}{\partial y} - \frac {\partial Q}{\partial x}\right) \\ \end{array}
$$

2. 上式中呈现的方程是一个只关于 $t$ 的方程，并且已经将未知函数 $\mu ( t )$ 分解到了等式的一侧，更巧合的是我们有

$$
\frac {\mathrm {d} \ln \mu (t)}{\mathrm {d} t} = \frac {\mu^ {\prime}}{\mu}
$$

3. 这意味着

$$
\ln \mu (t) = \int \frac {1}{Q} \left(\frac {\partial P}{\partial x} - \frac {\partial Q}{\partial t}\right) d t
$$

也就是说

$$
\mu (t) = e ^ {\int \frac {1}{Q} \left(\frac {\partial P}{\partial x} - \frac {\partial Q}{\partial t}\right) \mathrm {d} t}
$$

4. 在上一步中我们在第一步的假设中找到了一个只关于 ?? 的积分因子，反代入积分因子满足的偏微分方程，验证了假设的真实性，证明结束。

我们还可以用相同的方式来构造 $\mu ( t , \boldsymbol { x } )$ 只和 $x$ 有关的情况，证明完全相似，验证条件也和我们证明的情形对称, 如下

$$
\left(\exists G (x)\right) G (x) = \frac {1}{P} \left(\frac {\partial P}{\partial x} - \frac {\partial Q}{\partial t}\right)
$$

具体证明留给读者进行练习。

# 5.2.4.3 使用积分因子法

既然我们已经对一些特殊的方程找到了其积分因子，我们解这类方程的时候只需要计算出其积分因子后，解乘上积分因子后形成的恰当方程就好了。

# 内容提要

![](images/2d71dc49c8bc6a8245743ca3298af07470f7a970040b091b704ad83ce1362328.jpg)

XXX

# 6.1 微分流形

微分流形对我们来说并不是一个陌生的东西, 微分流形也叫光滑流形, 其中 “流形” 的英文是 manifold, 翻译时取了 “天地有正气, 杂然赋流形” 的典故. 所以从字面意思就可以知道所谓微分流形就是各种光滑的几何体. 典型例子是像 Euclid 空间 $\mathbb { R } ^ { n }$ , 可以在上面做微积分的空间. 低维中比较常见的例子有: 光滑的平面曲线, 光滑的曲面. 高维中的例子包括 $n + 1$ 维空间中的 $n$ 维球面, 以及 Euclid 空间之间的光滑映射等.

最简单的流形是是拓扑流形. 但流形的大部分应用都属于微积分, 例如体积和曲率, 它们分别涉及积分和微分. 在经典力学中的应用是解常微分方程组, 在广义相对论中的应用主要是解偏微分方程组.

为了使得微积分可以在流形上运行,我们需要它“光滑”.在几何空间中可以很直观上地理解光滑的概念:对于曲线而言是有切线, 且切线的斜率连续变化, 对于曲面而言是有切面且连续变化.

# 6.1.1 拓扑流形

基础拓扑的概念, 我们默认大家都知道了. 下面直接给出拓扑流形的概念.

# 定义 6.1 (拓扑流形)

设拓扑空间 ??. 若满足

$1 ^ { \circ } M$ 是一个 Hausdorff 空间: 对于任意两点 $p , q \in M$ , 存在两个分离的开子集 $U , V \in \subseteq M$ 使得 $p \in U$ 且$q \in V .$ .  
$2 ^ { \circ } M$ 是第二可数的: $M$ 有一个可数基.  
$3 ^ { \circ } M$ 是局部 $n$ 维的: $M$ 中的任一点都有一个邻域同胚于 $\mathbb { R } ^ { n }$ 的一个开子集.

则称 $M$ 为一个 $n$ 维拓扑流形 (topological manifold)

注 $n$ 维的拓扑流形 $M$ , 我们经常简写成 $M ^ { n }$ .

注 对于 $3 ^ { \circ }$ , 更具体地说就是, 对于任一 $p \in M$ 都满足

$1 ^ { \circ }$ 存在一个开子集 $U \subseteq M$ 使得 $p \in U$ .  
$2 ^ { \circ }$ 存在一个开子集 $\widetilde { U } \subseteq \mathbb { R } ^ { n }$ .  
$3 ^ { \circ }$ 存在一个同胚映射 $\varphi : U \to { \widetilde { U } }$ .

维数是一个非空拓扑流形的拓扑不变量.

# 定理 6.1 (拓扑的维数不变性)

设非空拓扑流形 $M ^ { n }$ 和 $N ^ { m }$ . 则它们同胚当且仅当 $n = m$

6.1.2 光滑结构  
6.1.3 有界微分流形  
6.2 光滑映射  
6.2.1 光滑函数和光滑映射  
6.2.2 单位分解  
6.3 切向量  
6.4 子流形  
6.5 Sard 定理

# 参考文献

[1] DENG E. ElegantLaTeX Templates[Z]. https://elegantlatex.org.