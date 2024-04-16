<?php
/**
 * Template Name: Secondary Page Template
 * Template Post Type: page
 */

 get_header();
?>

<main>
    <section class="masthead_secondary">
        <div>
            <h1><?php echo wp_kses_post(get_field('main_heading_title')); ?></h1>
            <h2><?php echo wp_kses_post(get_field('subhead_title')); ?></h2>
        </div>
    </section>
    <section class="featured-row row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <h2><?php echo wp_kses_post(get_field('content_title')); ?></h2>
            <div class="secondary_page_content">
                <p><?php echo wp_kses_post(get_field('content')); ?></p>
                <p><?php echo wp_kses_post(get_field('content_image')); ?></p>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
?>