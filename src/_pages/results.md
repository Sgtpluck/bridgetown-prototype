---
permalinks: ./results
layout: page
title: Survey Results
---
<h2 id="books-read">You read these books!</h2>
<h2 id="no-books"> You read no books. </h2>
<ul class="usa-card-group" id="all-books">
  {% for book in site.data.form_questions.books %}
    <li id="{{ book.value }}" class="tablet:grid-col-6 usa-card usa-card--flag">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">{{ book.name }}</h2>
        </header>
        <div class="usa-card__media">
          <div class="usa-card__img">
            <img
              src="/images/book_covers/{{book.value}}.png"
              alt="A placeholder image"
            />
          </div>
        </div>
        <div class="usa-card__body">
          <p>{{ book.desc }}</p>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>