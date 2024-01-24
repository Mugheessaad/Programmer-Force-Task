const countryStateCityData = {
    pakistan: {
      states: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
      cities: {
        Punjab: ["Lahore", "Rawalpindi", "Faisalabad"],
        Sindh: ["Karachi", "Hyderabad", "Sukkur"],
        Balochistan: ["Quetta", "Gwadar", "Turbat"],
        "Khyber Pakhtunkhwa": ["Peshawar", "Abbottabad", "Swat"]
      }
    },
    india: {
      states: ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"],
      cities: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
        Karnataka: ["Bangalore", "Mysore", "Hubli"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"]
      }
    },
    china: {
      states: ["Beijing", "Shanghai", "Guangdong", "Zhejiang"],
      cities: {
        Beijing: ["Beijing City"],
        Shanghai: ["Shanghai City"],
        Guangdong: ["Guangzhou", "Shenzhen", "Dongguan"],
        Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"]
      }
    }
  };

  function populateStates() {
    const countryDropdown = document.getElementById('country');
    const stateDropdown = document.getElementById('state');
    const cityDropdown = document.getElementById('city');

    // Reset state and city dropdowns
    stateDropdown.innerHTML = '<option value="">Select State</option>';
    cityDropdown.innerHTML = '<option value="">Select City</option>';
    stateDropdown.disabled = true;
    cityDropdown.disabled = true;

    const selectedCountry = countryDropdown.value;
    if (selectedCountry) {
      const states = countryStateCityData[selectedCountry].states;
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.text = state;
        stateDropdown.add(option);
      });

      stateDropdown.disabled = false;
    }
  }

  function populateCities() {
    const countryDropdown = document.getElementById('country');
    const stateDropdown = document.getElementById('state');
    const cityDropdown = document.getElementById('city');

    // Reset city dropdown
    cityDropdown.innerHTML = '<option value="">Select City</option>';
    cityDropdown.disabled = true;

    const selectedCountry = countryDropdown.value;
    const selectedState = stateDropdown.value;

    if (selectedCountry && selectedState) {
      const cities = countryStateCityData[selectedCountry].cities[selectedState];
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.text = city;
        cityDropdown.add(option);
      });

      cityDropdown.disabled = false;
    }
  }