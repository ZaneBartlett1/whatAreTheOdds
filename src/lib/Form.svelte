<script lang="ts">
    import heightDataObject from "../data/height";
    import incomeDataObject from "../data/income";
    import populationDataObject from "../data/population";
    import ageDataObject from "../data/age";
    import ethnicityDataObject from "../data/ethnicity";
    import weightDataObject from "../data/notObese";
    import religionObject from "../data/religion";
    import sizeDataObject from "../data/size";

    let { ageData, ageDataSource, totalM, totalF } = ageDataObject;
    let { incomeData, incomeDataSource } = incomeDataObject;
    let { heightData, heightDataSource } = heightDataObject;
    let { populationData, populationDataSource } = populationDataObject;
    let { ethnicityData, ethnicityDataSource } = ethnicityDataObject;
    let { weightData, weightDataSource } = weightDataObject;
    let { affiliationData, affiliationDataSource } = religionObject;
    let { sizeData, sizeDataSource } = sizeDataObject;

    let ageFrom = "";
    let ageTo = "";
    let incomeFrom = "";
    let incomeTo = "";
    let heightFrom = "";
    let heightTo = "";
    let sizeFrom = "";
    let sizeTo = "";

    let isObese = false;

    let populations = populationData;
    let selectedCity = [];
    let selectedCitiesDescription = "";
    let selectedSex = "";
    let selectedEthnicities = [];
    let selectedAffiliations = [];

    let likelihoods = {
        height: heightData,
        income: incomeData,
        age: ageData,
        size: sizeData,
    };

    let likelyNumber = null;

    let totalPopulation = totalM + totalF;
    let sexRatios = {
        M: totalM / totalPopulation,
        F: totalF / totalPopulation,
    };

    let selectedCityPopulation = null;

    let likelyRatio = null;

    let sexError = false;
    let cityError = false;

    function setDefaultRangeValues(dataObject, fromVar, toVar) {
        if (fromVar === "" && toVar === "") {
            const keys = Object.keys(dataObject);
            fromVar = keys[0];
            toVar = keys[keys.length - 1];
        }
        return [fromVar, toVar];
    }

    function setAllSelected(dataObject, selectedVar) {
        if (selectedVar.length === 0) {
            selectedVar = Object.keys(dataObject);
        }
        return selectedVar;
    }

    function calculate() {
        sexError = !selectedSex;
        cityError = selectedCity.length === 0;

        if (sexError || cityError) {
            likelyNumber = null; // reset the likelyNumber to null
            return; // exit the function early
        }

        [ageFrom, ageTo] = setDefaultRangeValues(ageData, ageFrom, ageTo);
        [incomeFrom, incomeTo] = setDefaultRangeValues(
            incomeData,
            incomeFrom,
            incomeTo
        );
        [heightFrom, heightTo] = setDefaultRangeValues(
            heightData,
            heightFrom,
            heightTo
        );

        if (selectedSex === "M") {
            [sizeFrom, sizeTo] = setDefaultRangeValues(
                sizeData,
                sizeFrom,
                sizeTo
            );
        }

        selectedEthnicities = setAllSelected(
            ethnicityData["Alabama"],
            selectedEthnicities
        );
        selectedAffiliations = setAllSelected(
            affiliationData,
            selectedAffiliations
        );

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

        selectedCityPopulation = selectedCity.reduce(
            (sum, city) => sum + populations[city],
            0
        );

        let weightLikelihood = 1;
        if (isObese) {
            // Only the first state is considered, assumed that cities will always be within the same state
            let state = selectedCity[0].split(",")[0].trim();
            weightLikelihood = weightData[state] / 100;
        }

        let affiliationLikelihood = 1;
        if (selectedAffiliations.length > 0) {
            affiliationLikelihood = selectedAffiliations.reduce(
                (sum, affiliation) => sum + affiliationData[affiliation],
                0
            );
        }

        let sizeLikelihood = 1;
        if (selectedSex === "M" && sizeFrom !== "" && sizeTo !== "") {
            sizeLikelihood = 0;
            let inRange = false;
            for (let sizeGroup of Object.keys(sizeData)) {
                if (sizeGroup === sizeFrom) inRange = true;
                if (inRange) sizeLikelihood += sizeData[sizeGroup][selectedSex];
                if (sizeGroup === sizeTo) inRange = false;
            }
        }

        likelyNumber =
            selectedCityPopulation *
            heightLikelihood *
            incomeLikelihood *
            ageLikelihood *
            sizeLikelihood *
            sexRatios[selectedSex] *
            ethnicityLikelihood *
            weightLikelihood *
            affiliationLikelihood;

        likelyRatio = likelyNumber / selectedCityPopulation;
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

    function getToOptions(dataObject, fromVar) {
        return fromVar === ""
            ? []
            : Object.keys(dataObject).slice(
                  Object.keys(dataObject).indexOf(fromVar)
              );
    }

    $: ageToOptions = getToOptions(likelihoods.age, ageFrom);
    $: incomeToOptions = getToOptions(incomeData, incomeFrom);
    $: heightToOptions = getToOptions(heightData, heightFrom);
    $: sizeToOptions = getToOptions(sizeData, sizeFrom);
</script>

<div class="form-option">
    <label for="sex-select">
        <span class="label-text">
            <sup>
                <a href={ageDataSource} target="_blank" rel="noopener">[1]</a>
            </sup>
            Sex: <span class="required">*</span>
        </span>
    </label>
    <div class="form-option-content">
        <select id="sex-select" bind:value={selectedSex}>
            <option disabled selected value="">-- select sex --</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
    </div>
</div>

<div class="form-option">
    <label for="multi-select-box-city">
        <span class="label-text">
            <sup>
                <a href={populationDataSource} target="_blank" rel="noopener">
                    [4]
                </a>
            </sup>
            City: <span class="required">*</span>
        </span>
    </label>
    <div class="form-option-content">
        <select multiple id="multi-select-box-city" bind:value={selectedCity}>
            <option disabled value="">-- select city --</option>
            {#each Object.keys(populationData).sort() as city}
                <option value={city}>{city}</option>
            {/each}
        </select>
    </div>
</div>

<div class="form-option">
    <label for="age-start-select">
        <span class="label-text">
            <sup>
                <a href={ageDataSource} target="_blank" rel="noopener">[1]</a>
            </sup>
            Age From:
        </span>
    </label>
    <div class="form-option-content">
        <select id="age-start-select" bind:value={ageFrom}>
            <option disabled selected value="">-- select start age --</option>
            {#each Object.keys(likelihoods.age) as ageOption}
                <option value={ageOption}>{ageOption.split("-")[0]}</option>
            {/each}
        </select>

        <label for="age-end-select">
            <span class="follow-up-dropdown">&#20 to &#20</span>
        </label>

        <select id="age-end-select" bind:value={ageTo}>
            <option disabled selected value="">-- select end age --</option>
            {#each ageToOptions as ageOption (ageOption)}
                <option value={ageOption}
                    >{ageOption.includes("-")
                        ? ageOption.split("-")[1]
                        : ageOption}</option
                >
            {/each}
        </select>
    </div>
</div>

<div class="form-option">
    <label for="height-start-select">
        <span class="label-text">
            <sup>
                <a href={heightDataSource} target="_blank" rel="noopener">
                    [2]
                </a>
            </sup>
            Height From:
        </span>
    </label>
    <div class="form-option-content">
        <select id="height-start-select" bind:value={heightFrom}>
            <option disabled selected value="">-- select start height --</option
            >
            {#each Object.keys(heightData) as heightOption}
                <option value={heightOption}
                    >{heightOption.split("-")[0]}</option
                >
            {/each}
        </select>

        <label for="height-end-select">
            <span class="follow-up-dropdown">&#20 to &#20</span>
        </label>

        <select id="height-end-select" bind:value={heightTo}>
            <option disabled selected value="">-- select end height --</option>
            {#each heightToOptions as heightOption (heightOption)}
                <option value={heightOption}
                    >{heightOption.includes("-")
                        ? heightOption.split("-")[1]
                        : heightOption}</option
                >
            {/each}
        </select>
    </div>
</div>

<div class="form-option">
    <label for="income-start-select">
        <span class="label-text">
            <sup>
                <a href={incomeDataSource} target="_blank" rel="noopener">
                    [3]
                </a>
            </sup>
            Income From:
        </span>
    </label>
    <div class="form-option-content">
        <select id="income-start-select" bind:value={incomeFrom}>
            <option disabled selected value="">-- select start income --</option
            >
            {#each Object.keys(incomeData) as incomeOption}
                <option value={incomeOption}
                    >{incomeOption.split("-")[0]}</option
                >
            {/each}
        </select>

        <label for="income-end-select">
            <span class="follow-up-dropdown">&#20 to &#20</span>
        </label>

        <select id="income-end-select" bind:value={incomeTo}>
            <option disabled selected value="">-- select end income --</option>
            {#each incomeToOptions as incomeOption (incomeOption)}
                <option value={incomeOption}
                    >{incomeOption.includes("-")
                        ? incomeOption.split("-")[1]
                        : incomeOption}</option
                >
            {/each}
        </select>
    </div>
</div>

{#if selectedSex === "M"}
    <div class="form-option">
        <label for="penis-start-legnth-select">
            <span class="label-text">
                <sup>
                    <a href={sizeDataSource} target="_blank" rel="noopener"
                        >[8]</a
                    >
                </sup>
                Penis Length From:
            </span>
        </label>
        <div class="form-option-content">
            <select id="penis-start-legnth-select" bind:value={sizeFrom}>
                <option disabled selected value=""
                    >-- select start size --</option
                >
                {#each Object.keys(sizeData) as sizeOption}
                    <option value={sizeOption}
                        >{sizeOption.split("-")[0]}</option
                    >
                {/each}
            </select>

            <label for="penis-end-length-select">
                <span class="follow-up-dropdown">&#20 to &#20</span>
            </label>

            <select id="penis-end-length-select" bind:value={sizeTo}>
                <option disabled selected value="">-- select end size --</option
                >
                {#each sizeToOptions as sizeOption (sizeOption)}
                    <option value={sizeOption}
                        >{sizeOption.includes("-")
                            ? sizeOption.split("-")[1]
                            : sizeOption}</option
                    >
                {/each}
            </select>
        </div>
    </div>
{/if}

<div class="form-option">
    <label for="not-obese-checkbox">
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
        <label for="not-obese-checkbox">Not Obese</label>
    </div>
</div>

<div class="form-option">
    <label for="multi-select-box-ethnicity">
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
            id="multi-select-box-ethnicity"
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
    <label for="multi-select-box-affiliations">
        <span class="label-text">
            <sup>
                <a href={affiliationDataSource} target="_blank" rel="noopener">
                    [7]
                </a>
            </sup>
            Religious Affiliations:
        </span>
    </label>
    <div class="form-option-content">
        <select
            multiple
            id="multi-select-box-affiliations"
            bind:value={selectedAffiliations}
        >
            <option disabled value="">-- select affiliations --</option>
            {#each Object.keys(affiliationData) as affiliation}
                <option value={affiliation}>{affiliation}</option>
            {/each}
        </select>
    </div>
</div>

<div>
    <button on:click={calculate}>Calculate</button>
</div>

<div id="ending-paragraph">
    {#if sexError}
        <p class="error">Please select a sex.</p>
    {/if}
    {#if cityError}
        <p class="error">Please select at least one city.</p>
    {/if}
    {#if likelyNumber !== null}
        <p>
            There are likely about {Math.round(likelyNumber).toLocaleString()} people
            {selectedCitiesDescription} who meet these criteria, with a total population
            of {selectedCityPopulation.toLocaleString()}. This represents
            approximately 1 in {Math.round(1 / likelyRatio).toLocaleString()}
            {selectedCitiesDescription}.
        </p>
    {/if}
</div>
