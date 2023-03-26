export function Book (book) {
    return `
    <div class="card mb-2" style="width: 18rem;">
        <img src="${book.formats['image/jpeg']}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text"> Download:${book.download_count} times</p>
        <a href="#" class="btn btn-primary">View Book</a>
  </div>
</div>
    `
}