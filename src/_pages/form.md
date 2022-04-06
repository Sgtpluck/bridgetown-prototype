---
# Feel free to add content and custom Front Matter to this file.
permalinks: ./form
layout: page 
title: Book Survey
---
<section>
  <form id="books"
    class="usa-form usa-form--large"
    action="/results"
    method="GET"
    >
    <fieldset class="usa-fieldset">
      <legend class="usa-legend">Select any books you've read lately</legend>
      {% for book in site.data.form_questions.books %}
        <div class="usa-checkbox">
          <input
            class="usa-checkbox__input"
            id="{{ book.value }}"
            type="checkbox"
            name="books"
            value="{{ book.value }}"
            checked
          />
          <label class="usa-checkbox__label" for="{{ book.value }}"
            >
            <span class="text-italic">{{ book.name }}</span>, by {{ book.author }}</label
          >
        </div>
      {% endfor %}
    </fieldset>
    <div class="grid-row">
      <input class="usa-button grid-col-auto" type="submit" value="Submit">
    </div>
  </form>
</section>
