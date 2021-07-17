/** @format */

console.log('this is the foreground pjh');
console.log(document.URL);
var brand_temp = document.getElementsByClassName('product-brand-name')[0];
var brand = brand_temp.textContent.trim();
var item_name_temp = document.getElementsByClassName('product-name')[0];
var item_name = item_name_temp.textContent.trim();
var price_temp = document
  .getElementsByClassName('product-secondary-section')[0]
  .getElementsByClassName('bfx-price')[0];
var price = price_temp.textContent.trim();
var detail_temp = document.getElementById('collapsible-details-1');
var detail = detail_temp.textContent.replace('\n', ' ');
var gender_temp = document.getElementsByClassName('breadcrumb-item')[0];
var gender = gender_temp.textContent.trim();
var website = 'Saks Fifth Avenue';
var url = document.URL;
var image = [];
var image_temp = document.getElementsByClassName('primary-thumbnail');
for (let i = 0; i < image_temp.length; i++) {
  var img = document
    .getElementsByClassName('primary-thumbnail')
    [i].getElementsByTagName('img')[0]
    .getAttribute('src')
    .trim();
  image.push(img);
}
console.log('image ' + image);
console.log('price ' + price);
console.log('brand ' + brand);
console.log('item_name ' + item_name);
console.log('detail ' + detail);
console.log('gender ' + gender);
