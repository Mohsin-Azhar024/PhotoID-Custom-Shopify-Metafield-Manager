 
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login Page</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<style>
 
    .container{
         margin-left:225px;
         /* background-color: grey; */
    }
  
</style>

</head>

<body >
<div class="container">
<form method="get" action="{{ route('home') }}">
<img data-seq src="https://seeklogo.net/wp-content/uploads/2017/02/shopify-logo.png" style="margin-left:200px;" width="250px" height="250px" alt="Men slide img" />
<div class="mb-3 mt-3 col-md-8">
    <label for="shop" class="form-label" style="text-align:center;font-weight:bold;"> Shop URL:</label>
    <input type="text" class="form-control"  placeholder="store.myshopify.com" name="shop">
  </div>
   <button type="submit" class="btn btn-success col-md-8">Submit</button>
</form>
</div>

</body>
</html>