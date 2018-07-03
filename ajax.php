<?php

$url='https://api.xinwen.cn/news/all?size=10
&category=Sport
&timestamp=1505901808071
&access_key=ff8tQLpecCTwNNc9
&signature=6BwgF0dH2%2FU2elchL2tG0oA%2FJaA%3D';

$content=file_get_contents($url);
echo $content;