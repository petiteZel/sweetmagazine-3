<?php

/*
Theme Name: Sweet Magazine
Version: 1.0
*/

/**
 * 컴포넌트 - 헤더
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="keywords" content="portfolio, front-end">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">

    <?php
    // 현재 포스트의 이전 포스트에 대한 링크
    $prev_post = get_previous_post();
    if ($prev_post) {
        echo '<link rel="prev" href="' . get_permalink($prev_post->ID) . '" />';
    }

    // 현재 포스트의 다음 포스트에 대한 링크
    $next_post = get_next_post();
    if ($next_post) {
        echo '<link rel="next" href="' . get_permalink($next_post->ID) . '" />';
    }
    ?>

    <?php wp_head(); ?>

</head>

<body>

</body>

</html>