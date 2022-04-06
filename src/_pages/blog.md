---
permalinks: ./blog
layout: page
paginate:
  collection: posts
---

<ul class="usa-card-group">
  {% for article in paginator.resources %}
    <li class="usa-card usa-card--flag">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">{{ article.title }}</h2>
        </header>
        <div class="usa-card__media">
          <div class="usa-card__img">
            {% if article.img == null %}
              <img
                src="/images/18f-logo.png"
                alt="No image for this article"
              />
            {% else %}
              <img
                src="{{article.img}}"
                alt="{{article.alt}}"
              />
            {% endif %}
          </div>
        </div>
        <div class="usa-card__body">
          <p>{{ article.snippet }}</p>
        </div>
        <div class="usa-card__footer">
          <a href="{{article.relative_url}}" class="usa-button">Check it out</a>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>

