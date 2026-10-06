# kjseok-kor.github.io

Personal academic homepage of Jongseok Kim, served at https://kjseok-kor.github.io.

GitHub Pages builds it with Jekyll automatically. Push to the default branch and it is live in a minute or two
(Settings → Pages → "Deploy from a branch", branch `main`, folder `/ (root)`).

## Where to edit

| What | File |
|---|---|
| Name, photo, tagline, links, About text, research interests, sidebar color | `_data/profile.yml` |
| Publications (published and under review) | `_data/publications.yml` |
| News | `_data/news.yml` |
| CV page (experience, education, projects, awards, patents, teaching) | `_data/cv.yml` |
| CV PDF for the "Download PDF" button | `assets/files/cv.pdf` |
| Paper PDFs | `assets/files/` |
| Styles | `assets/css/main.css` |

### Adding a paper

Add an entry to `_data/publications.yml`:

```yaml
- title: "Paper title"
  authors: "Jongseok Kim, Co Author, Ohyun Jo*"   # your name is bolded automatically
  abbr: IoT-J                                      # badge text
  venue: "IEEE Internet of Things Journal, 2026"
  year: 2026
  status: published          # or under_review
  review: Under Review       # only for under_review (e.g. Major Revision)
  metric: "IF 8.9 · JCR top 4.1%"   # optional
  paper: https://doi.org/...        # optional; PAPER button hidden when empty
  selected: true                    # optional; shows on the About page
```

When a paper under review is accepted, change `status` to `published` and fill in `venue`, `year`, `paper`.

## Pages

The site is one page with four views reached by URL hash:
`/` (cover), `/#about`, `/#publications`, `/#news`, `/#cv`.

## Local preview (optional)

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```
