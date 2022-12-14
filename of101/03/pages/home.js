import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Home',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'Home page'
    const log = ref('Dữ liệu sẽ hiện ra ở đây')
    const files = ref(null)

    /**
     * Phương thức dùng để đọc ra địa chỉ ô đang được chọn trên sheet
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#get-the-active-cell-or-selected-range
     */
    const ndt_getActiveCell = () => {

      window.Excel.run(async (context) => {
        let activeCell = context.workbook.getActiveCell()
        activeCell.load("address")
        await context.sync()

        console.log("The active cell is " + activeCell.address)
        log.value = "Địa chỉ ô đang được chọn là: " + activeCell.address
      });

    }

    /**
     * Phương thức dùng để đọc ra địa chỉ vùng đang được chọn trên sheet
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#get-the-active-cell-or-selected-range
     */
    const ndt_getSelectedRange = () => {

      window.Excel.run(async (context) => {
        let selectedRange = context.workbook.getSelectedRange()
        selectedRange.load("address")
        await context.sync()

        console.log("The selected range is " + selectedRange.address)
        log.value = "Địa chỉ vùng chọn là: " + selectedRange.address
      });

    }

    /**
     * Phương thức dùng để lưu Workbook
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#save-the-workbook
     */
    const ndt_SaveWorkbook = () => {

      window.Excel.run(async (context) => {
        context.workbook.save(Excel.SaveBehavior.prompt);
        log.value = "Workbook đã được lưu!"
      });

    }

    /**
     * Phương thức dùng để chèn sheets của một workbook khác vào workbook này
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#insert-a-copy-of-an-existing-workbook-into-the-current-one
     */
    const ndt_InsertSheetsFromOtherWorkbook = () => {
      let reader = new FileReader()

      reader.onload = (event) => {

        window.Excel.run((context) => {
          // Remove the metadata before the base64-encoded string.
          let startIndex = reader.result.toString().indexOf("base64,")
          let externalWorkbook = reader.result.toString().substr(startIndex + 7)

          // Retrieve the current workbook.
          let workbook = context.workbook

          // Set up the insert options. 
          let options = {
            sheetNamesToInsert: [], // Insert all the worksheets from the source workbook.
            positionType: Excel.WorksheetPositionType.after, // Insert after the `relativeTo` sheet.
            relativeTo: "Sheet1" // The sheet relative to which the other worksheets will be inserted. Used with `positionType`.
          }

          // Insert the new worksheets into the current workbook.
          workbook.insertWorksheetsFromBase64(externalWorkbook, options)
          return context.sync()
        })
      }

      // Read the file as a data URL so we can parse the base64-encoded string.
      reader.readAsDataURL(files.value[0]);

    }

    return {
      title, counterStore, log, files,
      ndt_getActiveCell, ndt_getSelectedRange,
      ndt_SaveWorkbook,
      counterLabelFn({ totalSize, filesNumber, maxFiles }) {
        return `${filesNumber} files of ${maxFiles} | ${totalSize}`
      },
      ndt_InsertSheetsFromOtherWorkbook
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" :label="title" />
        </q-breadcrumbs>
        <h6>Trang chủ, Homepage</h6>
        <q-separator />
      </q-page>
  `,
}