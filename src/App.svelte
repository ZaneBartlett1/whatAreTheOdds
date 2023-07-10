<script>
  import Form from "./lib/Form.svelte";
</script>

<main>
  <h1>Are you one in a million?</h1>
  <div class="form-container">
    <Form />
  </div>
  <div id="notes">
    <h2>Things I felt where worth noting</h2>
    <ul>
      <li>
        All of this data come from averages from different studies, not raw
        data. This means in some cases I'm able to break the data down by state,
        ethnicity, sex, etc, but usually I can only do some of those given the
        datasets
      </li>
      <li>
        sex ratios are derived from the United States ratio of male and female
        by age, and assumed to be consistent throughout each state. As in, the
        age bracket 20-24 there are "M": 11384263, "F": 10964564, and it's
        assumed that ratio within that age bracket between male and female is
        the same in every state
      </li>
      <li>
        The percentage derived between ages are assumed to be consistent
        throughout states as well
      </li>
      <li>
        Height was calculated by taking the average height for males and females
        and calculating other height bins with the SD and assumption that
        there's a normal distribution. This does seem to be a fairly typical way
        to do it though
      </li>
      <li>
        Income and isn't broken into state, ethnicity, or sex. It's a general
        average, I do plan/hope to address this in the future
      </li>
      <li>
        I sourced cities with the highest population, but did no research or try
        to account for how large cities and metros affect the attributes we're
        looking at. While I didn't include a political leaning as an attribute,
        that is an obvious one that is usually heavily affected by being in a
        large city, for example
      </li>
      <li>Religion isn't broken down by ethnicity</li>
      <li>
        <a
          href="https://github.com/ZaneBartlett1/whatAreTheOdds"
          target="_blank"
          rel="noopener"
        >
          Source Code
        </a>, in src/data you can find the datasets I've built for the app to
        see more in-depth
      </li>
    </ul>
  </div>
</main>
