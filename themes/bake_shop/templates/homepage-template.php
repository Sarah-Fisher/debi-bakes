<?php
/**
 * Template Name: Homepage
 * Template Post Type: page
 */

 get_header();
?>

<main>
    <section class="masthead">
        <div>
            <h1><?php echo wp_kses_post(get_field('main_heading')); ?></h1>
            <h2><?php echo wp_kses_post(get_field('subhead')); ?></h2>
        </div>
    </section>
    <section class="store-row row">
        <h2><?php echo wp_kses_post(get_field('shop_content_title')); ?></h2>
        <?php echo wp_kses_post(get_field('shop_content')); ?>
    </section>
    <section class="featured-row row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <h2><?php echo wp_kses_post(get_field('featured_content_title')); ?></h2>
            <div class="widgets">
                <?php echo wp_kses_post(get_field('featured_content')); ?>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
?>