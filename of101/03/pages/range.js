import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Range',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'Range'
    const log = ref('Log sẽ hiện ra ở đây')
    const text = ref('[\n    ["Potato Chips", 10, 1.80]\n]')
    const sheetName = ref('Sheet1')
    const targetRangeAddress = ref('A1')

    const ndt_SetValues = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let data = JSON.parse(text.value)

        let range = sheet.getRange(targetRangeAddress.value).getResizedRange(data.length - 1, data[0].length - 1)
        range.values = data
        range.format.autofitColumns()

        await context.sync()
      });
    }

    const ndt_ReadRangeAddress = () => {

      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Sheet1")

        let range = sheet.getRange("B2:C5")
        range.load("address")
        await context.sync()

        log.value = `The address of the range B2:C5 is "${range.address}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      })

    }

    const ndt_ReadNamedRangeAddress = () => {

      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Sheet1")

        let range = sheet.getRange("MyRange")
        range.load("address")
        await context.sync()

        log.value = `The address of the range "MyRange" is "${range.address}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      })

    }


    return {
      title, counterStore, log, text, sheetName, targetRangeAddress,
      ndt_SetValues, ndt_ReadRangeAddress, ndt_ReadNamedRangeAddress
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el :label="title" />
        </q-breadcrumbs>

        <h6 class="text-bold">Ranges</h6>
        <p caption>Một số phương thức ví dụ để làm việc với Ranges</p>
        
        <q-separator />
        <pre>{{ log }}</pre>
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">

          <p class="text-subtitle1">Ghi dữ liệu ra sheets</p>
          <q-input
            v-model="text"
            filled
            type="textarea"
          />

          <q-input
            v-model="sheetName"
            label="Sheetname"
            outlined
          />

          <q-input
            v-model="targetRangeAddress"
            label="Target Range Address"
            outlined
          />

          <q-btn
            push
            label="Set values"
            @click="ndt_SetValues"
          />

          <br />
          <q-separator />
          <p class="text-subtitle1">Đọc địa chỉ của Range B2:C5 của "Sheet1"</p>
          
          <q-btn
            push
            label="Đọc địa chỉ của vùng B2:C5"
            @click="ndt_ReadRangeAddress"
          />

          <br />
          <q-separator />
          <p class="text-subtitle1">Đọc địa chỉ của Range được đặt tên (Named Range)</p>
          <p caption>Để chạy ví dụ này, hãy tạo 1 Named Range là "MyRange" ở trong "Sheet1"</p>
          
          <q-btn
            push
            label="Đọc địa chỉ"
            @click="ndt_ReadNamedRangeAddress"
          />

        </div>
      </q-page>
  `,
}