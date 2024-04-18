import { useEffect, useState } from "react";
import "../css.css";

export default function Step2() {
  const [formStore, setFormStore] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cep: "",
    numero: "",
    endereco: "",
    cidade: "",
    estado: "",
    termo: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Alteração aqui

    setFormStore({
      ...formStore,
      nome: formData.get("first_name"),
      sobrenome: formData.get("last_name"),
      email: formData.get("email"),
      // Adicione os demais campos do formulário aqui
      cep: formData.get("shipping_postcode"),
      endereco: formData.get("shipping_address_line1"),
      cidade: formData.get("shipping_address_line4"),
      estado: formData.get("shipping_state"),
      // Supondo que você tenha um checkbox com nome "termo"
      termo: formData.get("termo") === "on",
    });
  };

  useEffect(() => {
    console.log("Dados do formulário:", formStore);
  }, [formStore]);

  return (
    <div id="block--payment_opt1" className="col-12 col-lg-5">
      <form onChange={handleSubmit} className="form">
        <input type="hidden" id="card_token" name="card_token" />
        <input type="hidden" name="payment_method" id="payment_method" />
        <input
          type="hidden"
          name="selected_package_id"
          id="selected_package_id"
        />
        <input type="hidden" name="shipping_method" id="shipping_method" />
        <input
          type="hidden"
          name="billing_same_as_shipping_address"
          id="billing_same_as_shipping_address"
          value="true"
        />
        <div className="step-title">STEP 2: CUSTOMER INFORMATION</div>
        <hr className="mt-2" />
        <div
          id="form-info"
          className="bg-white rounded-3 border p-2 p-lg-3 mb-5"
        >
          <div className="form-customer-ino">
            <div className="row mb-3 g-2">
              <div className="col-sm col-lg-12 col-xl-6">
                <div className="form-floating  ">
                  <input
                    type="text"
                    name="first_name"
                    maxLength="255"
                    autoComplete="given-name"
                    className="form-control "
                    required
                    id="id_first_name"
                    placeholder="First Name"
                  />
                  <label htmlFor="id_first_name">First Name</label>
                </div>
                <div className="invalid-message invalid-fname"></div>
              </div>
              <div className="col-sm col-lg-12 col-xl-6">
                <div className="form-floating  ">
                  <input
                    type="text"
                    name="last_name"
                    maxLength="255"
                    autoComplete="family-name"
                    className="form-control "
                    id="id_last_name"
                    placeholder="Last Name"
                  />
                  <label htmlFor="id_last_name">Last Name</label>
                </div>
                <div className="invalid-message invalid-lname"></div>
              </div>
              <div className="col-12">
                <div className="form-floating  ">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    maxLength="254"
                    className="form-control "
                    id="id_email"
                    autoComplete="email"
                  />
                  <label htmlFor="id_email">Email</label>
                </div>
                <div className="invalid-message invalid-email"></div>
              </div>
              <div className="col-12">
                <div className="form-floating  ">
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone number"
                    autoComplete="tel"
                    className="form-control "
                    id="id_phone_number"
                    maxLength="20"
                  />
                  <label htmlFor="id_phone_number">Phone Number</label>
                </div>
                <div className="invalid-message invalid-ph"></div>
              </div>
              <div className="col-12">
                <div className="form-floating  ">
                  <input
                    type="text"
                    placeholder="Address"
                    name="shipping_address_line1"
                    maxLength="255"
                    autoComplete="address-line1"
                    className="form-control"
                    id="id_shipping_address_line1"
                  />
                  <label htmlFor="id_shipping_address_line1">Address</label>
                </div>
                <div className="invalid-message invalid-shipping_address_line1"></div>
              </div>
              <div className="col-12">
                <div className="form-floating  ">
                  <input
                    type="text"
                    name="shipping_address_line4"
                    maxLength="255"
                    autoComplete="address-level2"
                    className="form-control "
                    id="id_shipping_address_line4"
                    placeholder="City"
                  />
                  <label htmlFor="id_shipping_address_line4">City</label>
                </div>
                <div className="invalid-message invalid-shipping_address_line4"></div>
              </div>
              <div className="col-sm col-lg-12 col-xl-6">
                <div className="form-floating  ">
                  <select
                    className="form-select"
                    name="shipping_state"
                    id="id_shipping_state"
                    autoComplete="address-level1"
                  >
                    <option value="">Select state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="UM-81">Baker Island</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="UM-84">Howland Island</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="UM-86">Jarvis Island</option>
                    <option value="UM-67">Johnston Atoll</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="UM-89">Kingman Reef</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="UM-71">Midway Atoll</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="UM-76">Navassa Island</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="UM-95">Palmyra Atoll</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="VI">United States Virgin Islands</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="UM-79">Wake Island</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <label htmlFor="id_shipping_state">State</label>
                </div>
                <div className="invalid-message invalid-shipping_state"></div>
              </div>
              <div className="col-sm col-lg-12 col-xl-6">
                <div className="form-floating  ">
                  <input
                    type="text"
                    placeholder="ZIP"
                    name="shipping_postcode"
                    maxLength="64"
                    autoComplete="postal-code"
                    className="form-control "
                    id="id_shipping_postcode"
                  />
                  <label htmlFor="id_shipping_postcode">ZIP</label>
                </div>
                <div className="invalid-message invalid-shipping_postcode"></div>
              </div>
              <div className="col-12">
                <div className="form-floating  ">
                  <select
                    className="form-select"
                    name="shipping_country"
                    id="id_shipping_country"
                  >
                    <option value="US">United States</option>
                  </select>
                  <label htmlFor="id_shipping_country">Country</label>
                </div>
                <div className="invalid-message invalid-shipping_country"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="step-title">STEP 3: PAYMENT OPTION</div>
        <hr className="mt-2" />
        <div className="checkout_express-buttons">
          <div className="d-grid mb-3">
            <button
              type="button"
              className="btn btn-lg btn-express is-paypal pay-with-paypal"
            >
              <span className="fs-8 text-dark me-1">Pay with</span>{" "}
              <img src="img/paypal.svg" height="30px" alt="" />
            </button>
          </div>
        </div>
        <div className="div-line fw-bold">
          OR PAY SECURELY WITH CREDIT CARD{" "}
        </div>
        <div className="bg-white rounded-3 border mb-3">
          <div id="form-cc" className="form form-cc p-2 p-lg-3">
            <div className="row g-2 mb-3">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h5>Credit/Debit:</h5>
                <img src="img/creditCard.svg" alt="" className="ms-1" />
              </div>
              <div id="payment-error-block"></div>
              <div className="col-12 ">
                <div className="form-cc-card">
                  <div id="bankcard-number" className="form-control p-0"></div>
                </div>
                <div
                  className="invalid-message invalid-cc"
                  id="invalid-cc"
                ></div>
              </div>
              <div className="col-sm col-lg-12 col-xl-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    name="expiry_month"
                    id="id_expiry_month"
                    autoComplete="cc-exp-month"
                  >
                    <option value="">Please Select</option>
                    <option value="01">(01) January</option>
                    <option value="02">(02) February</option>
                    <option value="03">(03) March</option>
                    <option value="04">(04) April</option>
                    <option value="05">(05) May</option>
                    <option value="06">(06) June</option>
                    <option value="07">(07) July</option>
                    <option value="08">(08) August</option>
                    <option value="09">(09) September</option>
                    <option value="10">(10) October</option>
                    <option value="11">(11) November</option>
                    <option value="12">(12) December</option>
                  </select>
                  <label htmlFor="id_expiry_month">Month</label>
                </div>
              </div>
              <div className="col-sm col-lg-12 col-xl-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    name="expiry_year"
                    id="id_expiry_year"
                    autoComplete="cc-exp-year"
                  >
                    <option value="">Please Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>
                    <option value="2041">2041</option>
                    <option value="2042">2042</option>
                  </select>
                  <label htmlFor="id_expiry_year">Year</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-cc-cvv">
                  <div id="bankcard-cvv" className="form-control p-0"></div>
                </div>
                <div
                  className="invalid-message invalid-cvv"
                  id="invalid-cvv"
                ></div>
              </div>
            </div>
            <div className="row" id="step-3">
              <div className="col">
                <div className="d-grid mb-4">
                  <button
                    id="cc-submit-button"
                    type="button"
                    className="btn btn-lg btn-success btn-checkout pay-with-cc"
                    data-loading-text="Processing"
                    data-text="Pay with Credit Card"
                    disabled
                  >
                    Pay with Credit Card
                  </button>
                </div>
              </div>
              <div id="validation-error-block"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
