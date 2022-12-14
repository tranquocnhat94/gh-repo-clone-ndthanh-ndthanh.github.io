import router from './router.js'

const app = Vue.createApp({
  components: {},

  setup() {
    const { ref } = Vue
    const leftDrawerOpen = ref(false)

    return { leftDrawerOpen }
  },
  /**
   * Biến template chứa phần khung của trang Web
   * Một phần logic nhỏ chứa trạng thái đóng / mở được thiết lập
   * ở file này thông qua biến leftDrawerOpen.
   * Các "thành phần động" của trang Web sẽ được render 
   * vào trong thẻ <router-view />
   */
  template: `
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <!-- Phần nút hamburger menu dùng để đóng mở menu trái -->

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <!-- Phần tiêu đề cạnh nút đóng mở menu bên tay trái -->

        <q-toolbar-title>
          Học Excel Online
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>

        <q-item-label header>Cây menu của Add-in</q-item-label>

        <!-- menu item "Home" -->

        <q-item
          clickable
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Trang chủ</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "UI Elements" -->

        <q-item
          clickable
          to="/ui-elements"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>UI Elements</q-item-label>
            <q-item-label caption>Thành phần giao diện</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Thuộc tính Excel" -->

        <q-item
          clickable
          to="/excel-properties"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Excel Properties</q-item-label>
            <q-item-label caption>Các thuộc tính của Excel</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Workbook" -->

        <q-item
          clickable
          to="/workbook"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Workbook</q-item-label>
            <q-item-label caption>Tương tác với Workbook</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Worksheet" -->

        <q-item
          clickable
          to="/worksheet"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Worksheet</q-item-label>
            <q-item-label caption>Tương tác với Worksheet</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Range" -->

        <q-item
          clickable
          to="/range"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Range</q-item-label>
            <q-item-label caption>Tương tác với Range</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "API Interactions" -->

        <q-item
          clickable
          to="/api-interactions"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>API Interactions</q-item-label>
            <q-item-label caption>Tương tác với API, Server</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Line Charts" -->

        <q-item
          clickable
          to="/line-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Line Charts</q-item-label>
            <q-item-label caption>Các loại line charts</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Area Charts" -->

        <q-item
          clickable
          to="/area-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Area Charts</q-item-label>
            <q-item-label caption>Các loại area charts</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Column Charts" -->

        <q-item
          clickable
          to="/column-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Column Charts</q-item-label>
            <q-item-label caption>Các loại Column charts</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Mixed Charts" -->

        <q-item
          clickable
          to="/mixed-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Mixed Charts</q-item-label>
            <q-item-label caption>Các loại mixed charts</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Timeline Charts" -->

        <q-item
          clickable
          to="/timeline-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Timeline Charts</q-item-label>
            <q-item-label caption>Các loại Timeline charts</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Candlestick Charts" -->

        <q-item
          clickable
          to="/candlestick-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Candlestick Charts</q-item-label>
            <q-item-label caption>Các loại Candlestick charts</q-item-label>
          </q-item-section>
        </q-item>

        <!-- menu item "Boxplot Charts" -->

        <q-item
          clickable
          to="/boxplot-charts"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Boxplot Charts</q-item-label>
            <q-item-label caption>Các loại Boxplot charts</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>

      <!-- <router-view /> tag để render các component khác -->

      <router-view />
    </q-page-container>
  </q-layout>
  `
})

window.Office.onReady(() => {
  app.use(router)
  app.use(Quasar)
  Quasar.iconSet.set(Quasar.iconSet.fontawesomeV6)
  app.mount('#q-app')
})