# Image Search Abstraction Layer

## User Story

 - You can search an image by passing in the image name as a parameter in the url

 - The search result is a json response which include the image URLs, alt text and the page urls

 - You can paginate through the response by add a ?offset=2 parameter to the URL

 - You can get a list of the most recently submitted search strings

    
## Example Usage:

### Search Image

- Search image by passing the image name to the end of this url like this:

https://sleepy-fjord-42191.herokuapp.com/api/imagesearch/imagenamehere

### Get Most Recent Search

https://sleepy-fjord-42191.herokuapp.com/api/latest/imagesearch/

### Paginate Through The Search Response

- You can paginate through the search response by adding ?offset=any number to the end of the image name like this:

https://sleepy-fjord-42191.herokuapp.com/api/imagesearch/imagenamehere?offset=2