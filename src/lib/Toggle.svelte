<script>
  export let height = "34px";
  export let width = "60px";
  export let color = "#fff";
  export let inactiveColor = "#ccc";
  export let activeColor = "#000";
</script>

<label style="--height:{height};--width:{width}" class="switch">
  <input type="checkbox">
  <span style="
    --height:{height};
    --width:{width};
    --active-color:{activeColor};
    --inactive-color:{inactiveColor};
    --color:{color};
  " class="slider">
  </span>
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: var(--width);
    height: var(--height);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--inactive-color);
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: calc(var(--height) - 2px);
    width: calc(var(--width) / 2);
    left: 1px;
    bottom: 1px;
    background-color: var(--color);
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--active-color);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--active-color);
  }

  input:checked + .slider:before {
    -webkit-transformation: translateX(calc((var(--width) / 2) - 2px));
    -ms-transform: translateX(calc((var(--width) / 2) - 2px ));
    transform: translateX(calc((var(--width) / 2) - 2px));
  }
</style>
