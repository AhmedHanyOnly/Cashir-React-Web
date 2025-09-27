import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";
import "../Style/ProgramAdditions.css";

export default function ProgramAdditions() {
  return (
    <section className="ProgramAdditions_Sec">
      <div className="container-fluid">
        <section id="app" className="section-guide">
          <Container>
            <div className="d-flex align-items-center gap-4 flex-wrap justify-content-between mb-3">
              <div className="d-flex justify-content-between w-100">
                <h4 className="main-heading mb-0">دليل الاستخدام</h4>
                <a
                  href="https://www.youtube.com/watch?v=qKg3XU5t70Y"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                >
                  شاهد فيديو تعليمي
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="AcordOutline shadow p-4 rounded-3">
              <Accordion
                className="AccordionContent"
                defaultActiveKey="0"
                flush
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    تعرف على برنامج المبيعات (الكاشير )
                  </Accordion.Header>
                  <Accordion.Body>
                    هو برنامج محاسبي سريع يعمل على جميع الانشطة التجارية المقاهي
                    / المطاعم - محلات الملابس ....كل الانشطة التجارية .
                    والبرنامج قابل للتطوير والتعديل ويعمل على الشكبات الداخليه
                    او مباشرة عبر الانترنت
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>المخزون او المنتجات ؟</Accordion.Header>
                  <Accordion.Body>
                    يتم اضافة المنتجات عن طريق كتابة اسم المنتج واخيار القسم
                    الخاص بالمنتج وأيضا كتابة سعر الشراء وسعر البيع للمنتج حتى
                    يمكن للبرنامج حساب الأرباح ويمكنك اضافة كمية معينة للمنتج
                    وباركود وتحديد مدة صلاحية المنتج فى حال كان منتج استهلاكى
                    مثلا وسيظهر ذلك فى البرنامج بسهولة للمستخدم لمعرفة حالة
                    المنتجات الموجودة وسيقوم البرنامج أيضا بعمل تقرير مالى لكل
                    منتج من حيث عدد مرات البيع والرصيد الحالى من المنتج وكذلك
                    كميته الافتتاحية .
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>العروض</Accordion.Header>
                  <Accordion.Body>
                    يمكنك اضافة عرض على منتج معين أو سلعة معينة وذلك بتحديد اسم
                    المنتج وتاريخ بداية ونهاية العرض ونسبة الخصم على المنتج
                    وستظهر نسبة الخصم المحددة للمنتج فى شاشة البيع عند وفى حال
                    انتهاء تاريخ العرض المحدد أثناء اضافة العرض لن يظهر الخصم
                    مجددا فى شاشة البيع .
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>الباقات</Accordion.Header>
                  <Accordion.Body>
                    يمكنك تفعيلها من الاعدادات من خلال خيار " تفعيل الباقة "
                    وستظهر الباقات فى الناف بار أسفل عنوان الاعدادات ويمكنك
                    حينها اضافة باقة من خلال كتابة اسم الباقة وسعرها والنسبة ومن
                    ثم الذهاب الى " العملاء " واختيار العميل لمراد اضافته للباقة
                    والضغط على تعديل العميل واختيار الباقة ثم حفظ .. تسمح الباقة
                    للعملاء المشتركين فيها باستخدام الرصيد الخاص بها فى عمليات
                    شراء المنتجات فى شاشة البيع من خلال خيار اسمه " استخدام رصيد
                    الباقة " .
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>شاشة البيع</Accordion.Header>
                  <Accordion.Body>
                    يتم بداخلها عمليات البيع عن طريق تحديد المنتجات المراد بيعها
                    وكتابة المبلغ المدفوع ومن ثم حفظ الفاتورة .. وأيضا يتوفر
                    خيار تعليق الفاتورة من خلال اختيار عميل محدد ثم تحديد
                    المنتجات والضغط على تعليق الفاتورة حينها ستصبح حالة الفاتورة
                    معلقة لحين الرجوع اليها مرة أخرى وسدادها
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>المحاسبة</Accordion.Header>
                  <Accordion.Body>
                    تتضمن المشتريات والمصروفات حيث يمكن اضافة فواتير لكل منهما
                    وتحديد أقسام للمصروفات وايضا تقارير تشمل العميل والموظف
                    وتعطى انطباع وتقرير شامل عن الحسابات داخل الموقع ويمكن طباعة
                    هذه التقارير أو تصديرها أكسل
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}
