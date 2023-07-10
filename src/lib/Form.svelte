<script lang="ts">
    import heightDataObject from "../data/height";
    import incomeDataObject from "../data/income";
    import populationDataObject from "../data/population";
    import ageDataObject from "../data/age";
    import ethnicityDataObject from "../data/ethnicity";
    import weightDataObject from "../data/notObese";

    let { ageData, ageDataSource, totalM, totalF } = ageDataObject;
    let { incomeData, incomeDataSource } = incomeDataObject;
    let { heightData, heightDataSource } = heightDataObject;
    let { populationData, populationDataSource } = populationDataObject;
    let { ethnicityData, ethnicityDataSource } = ethnicityDataObject;
    let { weightData, weightDataSource } = weightDataObject;

    let ageFrom = "";
    let ageTo = "";
    let incomeFrom = "";
    let incomeTo = "";
    let heightFrom = "";
    let heightTo = "";
    let isObese = false;

    let populations = populationData;
    let selectedCity = [];
    let selectedCitiesDescription = "";
    let selectedSex = "";
    let selectedEthnicities = [];

    let likelihoods = {
        height: heightData,
        income: incomeData,
        age: ageData,
    };

    let likelyNumber = null;

    let totalPopulation = totalM + totalF;
    let sexRatios = {
        M: totalM / totalPopulation,
        F: totalF / totalPopulation,
    };

    function calculate() {
        let ageLikelihood = 0;
        if (ageFrom !== "" && ageTo !== "") {
            let inRange = false;
            for (let ageGroup of Object.keys(ageData)) {
                if (ageGroup === ageFrom) inRange = true;
                if (inRange) ageLikelihood += ageData[ageGroup][selectedSex];
                if (ageGroup === ageTo) inRange = false;
            }
        }

        let incomeLikelihood = 0;
        if (incomeFrom !== "" && incomeTo !== "") {
            let inRange = false;
            for (let incomeGroup of Object.keys(incomeData)) {
                if (incomeGroup === incomeFrom) inRange = true;
                if (inRange) incomeLikelihood += incomeData[incomeGroup];
                if (incomeGroup === incomeTo) inRange = false;
            }
        }

        let heightLikelihood = 0;
        if (heightFrom !== "" && heightTo !== "") {
            let inRange = false;
            for (let heightGroup of Object.keys(heightData)) {
                if (heightGroup === heightFrom) inRange = true;
                if (inRange)
                    heightLikelihood += heightData[heightGroup][selectedSex];
                if (heightGroup === heightTo) inRange = false;
            }
        }

        let ethnicityLikelihood = 0;
        if (selectedEthnicities.length > 0) {
            // Only the first state is considered, assumed that cities will always be within the same state
            let state = selectedCity[0].split(",")[0].trim();
            for (let ethnicity of selectedEthnicities) {
                ethnicityLikelihood += ethnicityData[state][ethnicity];
            }
        }

        selectedCitiesDescription = getSelectedCitiesDescription(selectedCity);

        let selectedCityPopulation = selectedCity.reduce(
            (sum, city) => sum + populations[city],
            0
        );

        let weightLikelihood = 1;
        if (isObese) {
            // Only the first state is considered, assumed that cities will always be within the same state
            let state = selectedCity[0].split(",")[0].trim();
            weightLikelihood = weightData[state] / 100; // Divide by 100 to get the ratio
        }

        likelyNumber =
            selectedCityPopulation *
            heightLikelihood *
            incomeLikelihood *
            ageLikelihood *
            sexRatios[selectedSex] *
            ethnicityLikelihood *
            weightLikelihood;
    }

    function getSelectedCitiesDescription(selectedCity) {
        if (selectedCity.length === 1) {
            return `in ${selectedCity[0]}`;
        } else if (selectedCity.length === 2) {
            return `in ${selectedCity[0]} and ${selectedCity[1]}`;
        } else if (selectedCity.length >= 3) {
            return `in the selected cities`;
        } else {
            return "";
        }
    }

    $: ageToOptions =
        ageFrom === ""
            ? []
            : Object.keys(likelihoods.age).slice(
                  Object.keys(likelihoods.age).indexOf(ageFrom)
              );

    $: incomeToOptions =
        incomeFrom === ""
            ? []
            : Object.keys(incomeData).slice(
                  Object.keys(incomeData).indexOf(incomeFrom)
              );

    $: heightToOptions =
        heightFrom === ""
            ? []
            : Object.keys(heightData).slice(
                  Object.keys(heightData).indexOf(heightFrom)
              );
</script>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={ageDataSource} target="_blank" rel="noopener">[1]</a>
            </sup>
            Sex:
        </span>
    </label>
    <div class="form-option-content">
        <select bind:value={selectedSex}>
            <option disabled selected value="">-- select sex --</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
    </div>
</div>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={ageDataSource} target="_blank" rel="noopener">[1]</a>
            </sup>
            Age:
        </span>
    </label>
    <div class="form-option-content">
        Between &#20;
        <select bind:value={ageFrom}>
            <option disabled selected value="">-- select age --</option>
            {#each Object.keys(likelihoods.age) as ageOption}
                <option value={ageOption}>{ageOption}</option>
            {/each}
        </select>
        &#20; and &#20;
        <select bind:value={ageTo}>
            <option disabled selected value="">-- select age --</option>
            {#each ageToOptions as ageOption (ageOption)}
                <option value={ageOption}>{ageOption}</option>
            {/each}
        </select>
        &#20;
    </div>
</div>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={heightDataSource} target="_blank" rel="noopener">
                    [2]
                </a>
            </sup>
            Height:
        </span>
    </label>
    <div class="form-option-content">
        Between &#20;
        <select bind:value={heightFrom}>
            <option disabled selected value="">-- select height --</option>
            {#each Object.keys(heightData) as heightOption}
                <option value={heightOption}>{heightOption}</option>
            {/each}
        </select>
        &#20; and &#20;
        <select bind:value={heightTo}>
            <option disabled selected value="">-- select height --</option>
            {#each heightToOptions as heightOption (heightOption)}
                <option value={heightOption}>{heightOption}</option>
            {/each}
        </select>
        &#20;
    </div>
</div>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={incomeDataSource} target="_blank" rel="noopener">
                    [3]
                </a>
            </sup>
            Income:
        </span>
    </label>
    <div class="form-option-content">
        Between &#20;
        <select class="select-width" bind:value={incomeFrom}>
            <option disabled selected value="">-- select income --</option>
            {#each Object.keys(incomeData) as incomeOption}
                <option value={incomeOption}>{incomeOption}</option>
            {/each}
        </select>
        &#20; and &#20;
        <select class="select-width" bind:value={incomeTo}>
            <option disabled selected value="">-- select income --</option>
            {#each incomeToOptions as incomeOption (incomeOption)}
                <option value={incomeOption}>{incomeOption}</option>
            {/each}
        </select>
        &#20;
    </div>
</div>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={populationDataSource} target="_blank" rel="noopener">
                    [4]
                </a>
            </sup>
            City:
        </span>
    </label>
    <div class="form-option-content">
        <select multiple class="multi-select-box" bind:value={selectedCity}>
            <option disabled value="">-- select city --</option>
            {#each Object.keys(populationData).sort() as city}
                <option value={city}>{city}</option>
            {/each}
        </select>
    </div>
</div>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={ethnicityDataSource} target="_blank" rel="noopener"
                    >[5]</a
                >
            </sup>
            Ethnicity:
        </span>
    </label>
    <div class="form-option-content">
        <select
            multiple
            class="multi-select-box"
            bind:value={selectedEthnicities}
        >
            <option disabled value="">-- select ethnicity --</option>
            {#each Object.keys(ethnicityData["Alabama"]).sort() as ethnicity}
                <option value={ethnicity}>{ethnicity}</option>
            {/each}
        </select>
    </div>
</div>

<div class="form-option">
    <label>
        <span class="label-text">
            <sup>
                <a href={weightDataSource} target="_blank" rel="noopener">
                    [6]
                </a>
            </sup>
            Obesity:
        </span>
    </label>
    <div class="form-option-content">
        <input type="checkbox" bind:checked={isObese} />
        <label for="obese">Not Obese</label>
    </div>
</div>

<button on:click={calculate}>Calculate</button>

{#if likelyNumber !== null}
    <p>
        There are likely about {Math.round(likelyNumber).toLocaleString()} people
        {selectedCitiesDescription} who meet these criteria.
    </p>
{/if}
