<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <nav>
    <div class="nav-content">
      <div class="logo"><a href="#">Nold</a></div>
      <label for="check" class="checkbox">
        <i class="ri-menu-4-line"></i>
      </label>
      <input type="checkbox" name="check" id="check" />
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="galery.html">Gallery</a></li>
        <li><a href="blog.php">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>
  <section class="blog">
    <div class="blog-heading">
      <h2>My Blog</h2>
    </div>
    <div class="blog-container">
      <?php
      include 'config.php';
      $sql = "SELECT * FROM articles ORDER BY publish_date DESC";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          echo '<div class="blog-box">';
          echo '<div class="blog-image">';
          echo '<img src="' . $row["image_url"] . '" alt="Blog">';
          echo '</div>';
          echo '<div class="blog-text">';
          echo '<span>' . date("d F Y", strtotime($row["publish_date"])) . ' | ' . $row["category"] . '</span>';
          echo '<a href="' . $row["url_blog"] . '" class="blog-title">' . $row["title"] . '</a>';
          echo '<p class="read-more-content">' . substr($row["content"], 0, 100) . '...</p>';
          echo '<a href="' . $row["url_blog"] . '" class="read-more">Read More</a>';
          echo '</div>';
          echo '</div>';
        }
      } else {
        echo "<p>No articles found</p>";
      }

      $conn->close();
      ?>
    </div>
  </section>
</body>
</html>
