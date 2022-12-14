export default {
  name: 'ExcelProperties',
  components: {},

  setup() {
    const { ref } = Vue
    const title = 'Excel Properties'
    const log = ref('Hãy bấm nút để đọc thuộc tính')

    const readExcelProperties = () => {
      console.log('reading excel properties')

      window.Excel.run(async context => {
        context.application.load("decimalSeparator,thousandsSeparator,calculationMode,calculationState");
        context.application.cultureInfo.numberFormat.load("numberDecimalSeparator,numberGroupSeparator");
        await context.sync();

        // Local settings are set under the "Options > Advanced" menu.
        const localDecimalSeparator = context.application.decimalSeparator;
        const localThousandsSeparator = context.application.thousandsSeparator;

        const systemDecimalSeparator = context.application.cultureInfo.numberFormat.numberDecimalSeparator;
        const systemThousandsSeparator = context.application.cultureInfo.numberFormat.numberGroupSeparator;

        const excelCalculationMode = context.application.calculationMode
        const excelCalculationState = context.application.calculationState

        log.value = `
        Local character settings: 
          Local decimal separator: ${localDecimalSeparator}
          Local thousands separator: ${localThousandsSeparator}

        System culture settings: 
          System decimal separator: ${systemDecimalSeparator}
          System thousands separator: ${systemThousandsSeparator}

        Excel calculation mode:
          Excel calculation mode: ${excelCalculationMode}
          Excel calculation state: ${excelCalculationState}
        `

        await context.sync();
      });
    }

    return { title, log, readExcelProperties }
  },

  template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <h6>Truy cập một số thuộc tính của Excel thông qua OfficeJS Excel API</h6>            
            <q-btn
              push
              label="Đọc thuộc tính"
              text-color="primary"
              @click="readExcelProperties"
            ></q-btn>
            <pre>{{ log }}</pre>
        </q-page>
    `,
}