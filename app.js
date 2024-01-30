function solve() {

   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');

   const createBtn = document.querySelector('button');
   createBtn.addEventListener("click", postCreate);

   const [fild, post, create, archive] = document.querySelectorAll('section');

   function postCreate(event) {
      event.preventDefault();

      const article = document.createElement('article');

      const h1 = document.createElement('h1');
      h1.textContent = title.value;

      const pCategory = document.createElement('p');
      pCategory.textContent = "Category: ";
      const strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;
      pCategory.appendChild(strongCategory);

      const pCreator = document.createElement('p');
      pCreator.textContent = "Creator: ";
      const strongCreator = document.createElement("strong");
      strongCreator.textContent = creator.value;
      pCreator.appendChild(strongCreator);

      const pContent = document.createElement('p');
      pContent.textContent = content.value;

      const divButtons = document.createElement('div');
      divButtons.className = "buttons";

      const deleteBtn = document.createElement('button');
      deleteBtn.className = "btn delete";
      deleteBtn.textContent = "Delete";

      const archiveBtn = document.createElement('button');
      archiveBtn.className = "btn archive";
      archiveBtn.textContent = "Archive";

      divButtons.appendChild(deleteBtn);
      divButtons.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(divButtons);

      const titleInput = title.value;

      if (title.value == "" || category.value == "" || content.value == "" || creator.value == "") {
         return;
      }

      post.appendChild(article);


      deleteBtn.addEventListener('click', onDelete);
      archiveBtn.addEventListener('click', onArchive);

      function onDelete() {
         post.removeChild(article);
         document.getElementsByClassName('site-content')[0].lastElementChild.remove();
      }

      function onArchive() {
         post.removeChild(article);
         const li = document.createElement('li');
         li.textContent = h1.textContent;

         archive.lastElementChild.appendChild(li);
         let elements = archive.lastElementChild;
         Array.from(elements.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(e => elements.appendChild(e));
      }
   }
}
