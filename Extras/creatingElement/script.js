let question = document.querySelector("#question");

let content = `
<form action="#">
<h1>What does HTML stands for?</h1>

<div class="form-group">
  <input type="radio" id="one" name="one" value="1" />

  <label for="one">Hypertext Machine language.</label>
</div>
<div class="form-group">
  <input type="radio" id="two" name="one" value="2" />
  <label for="two">Hypertext and links markup language</label>
</div>
<div class="form-group">
  <input type="radio" id="three" name="one" value="3" />
  <label for="three">Hypertext Markup Language</label>
</div>
<div class="form-group">
  <input type="radio" id="four" name="one" value="4" />
  <label for="four">None of the above</label>
</div>
</form>
`;

let content1 = `
<form action="#">
<h1>What does HTML stands for?</h1>

<div class="form-group">
  <input type="radio" id="one" name="one" value="1" />

  <label for="one">Hypertext Machine language.</label>
</div>
<div class="form-group">
  <input type="radio" id="two" name="one" value="2" />
  <label for="two">Hypertext and links markup language</label>
</div>
<div class="form-group">
  <input type="radio" id="three" name="one" value="3" />
  <label for="three">Hypertext Markup Language</label>
</div>
<div class="form-group">
  <input type="radio" id="four" name="one" value="4" />
  <label for="four">None of the above</label>
</div>
</form>
`;

let button = `<button
type="submit"
class="btn ans btn-primary m-3"
onclick="ans()">Submit</button>
<button class="btn btn-primary m-3" onclick="next()">
Next
</button>`;

let newQuestion = document.createElement("article");
newQuestion.innerHTML = content;

question.append(newQuestion);

