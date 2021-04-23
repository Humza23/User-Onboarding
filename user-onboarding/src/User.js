import React from 'react'

const User = (props) => {
    const {values, submit, change, errors} = props

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };

      const onChange = (evt) => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      };

    return (
        <form onSubmit={onSubmit}>
            <div>
          <div>
    
            <button>submit</button>
            <div>
              {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
              <div>{errors.name}</div>
              <div>{errors.email}</div>
              <div>{errors.role}</div>
              <div>{errors.civil}</div>
            </div>
          </div>
    
          <div className="form-group inputs">
            <h4>General information</h4>
            <label>
              Name
              <input
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
              />
            </label>
    
            <label>
              Email
              <input
                value={values.email}
                onChange={onChange}
                name="email"
                type="text"
              />
            </label>
            <label>
              Password
              <input
                value={values.password}
                onChange={onChange}
                name="password"
                type="text"
              />
            </label>
          </div>
            <label>
              Agree to Terms?
              <input
                type="checkbox"
                name="terms"
                checked={values.terms}
                onChange={onChange}
                required="required"
              />
            </label>
          </div>
        </form>
      );
    }

export default User