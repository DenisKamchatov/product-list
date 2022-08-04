<template>
  <form class="form" name="form-create-item">
    <div class="form__label">
      <label for="name">Наименование товара</label>
      <div class="form__label-dot" />
    </div>
    <input type="text" name="name" placeholder="Введите наименование товара" required>

    <label class="form__label" for="description">Описание товара</label>
    <textarea
      id="form-description"
      name="description"
      placeholder="Введите описание товара"
      cols="30"
      rows="5"
    />

    <div class="form__label">
      <label for="image-link">Ссылка на изображение товара</label>
      <div class="form__label-dot" />
    </div>
    <input type="text" name="image-link" placeholder="Введите ссылку" required>

    <div class="form__label">
      <label for="image-link">Цена товара</label>
      <div class="form__label-dot" />
    </div>
    <input type="number" name="image-link" placeholder="Введите цену" required>

    <ButtonForm form="form-create-item" text="Добавить товар" />
  </form>
</template>

<script>
import ButtonForm from './UI/ButtonForm.vue'
export default {
  name: 'FormCreateItem',
  components: { ButtonForm }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/base";
  .form {
    display: flex;
    flex-direction: column;
    background-color: $white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    padding: 25px 20px;
    height: fit-content;

    label {
      font-size: 10px;
      font-weight: 400;
      color: $text-label;
    }
    &__label {
      display: flex;
    }
    &__label:not(:first-child) {
      margin: 20px 0 0 0;
    }
    &__label-dot {
      background-color: $required-dot;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin: 0 0 0 3px;
    }

    input, textarea {
      background-color: $white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin: 7px 0 0 0;
      resize: none;

      &:focus {
        // box-shadow: inset 0 0 2px red;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02), inset 0 0 2px $delete-button;
      }
    }

    input::placeholder, textarea::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: $placeholder;
    }
  }

</style>
