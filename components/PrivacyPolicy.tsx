"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function PrivacyPolicy() {
    const t = useTranslations("privacy");
    return (
        <section className="py-5 bg-white">
            <div className="container px-5">

                {/* Heading */}
                <div style={{ maxWidth: "900px" }}>
                    <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                        <h2
                            style={{
                                fontWeight: 600,
                                fontSize: "32px",
                                color: "#2B2B2B",
                                marginBottom: 0,
                            }}
                        >
                            {t("title")}
                        </h2>


                    </div>

                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#4B5563",
                            marginBottom: "40px",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Massa purus nulla vestibulum
                        proin bibendum dis ipsum eget ipsum. Quam sapien gravida odio a
                        aliquet. Lacus ornare mi ut id nulla sit vel. Enim nunc in fermentum
                        metus massa quis sed vitae.
                    </p>
                </div>

                {/* Terms Content */}
                <div style={{ maxWidth: "1000px" }}>
                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#2A2A2A",
                            marginBottom: "24px",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Pharetra sapien ornare nec
                        quam magna velit. Mattis sed viverra mauris auctor. Pellentesque
                        elementum molestie vitae quis fermentum elementum in pulvinar
                        malesuada. Urna duis donec pellentesque cursus a velit fusce
                        aliquam. Imperdiet imperdiet dolor amet augue.
                    </p>

                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#4B5563",
                            marginBottom: "24px",
                        }}
                    >
                        Quam lorem in vitae augue nec habitasse at habitasse sodales. Morbi
                        pellentesque felis risus malesuada magna faucibus iaculis feugiat
                        quam. Placerat commodo pulvinar lacus phasellus. Vestibulum facilisi
                        elementum tincidunt etiam placerat ut pellentesque senectus.
                    </p>

                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#4B5563",
                            marginBottom: "24px",
                        }}
                    >
                        Facilisi egestas facilisis ultrices arcu. Amet faucibus purus ut a
                        fermentum pretium rhoncus blandit. Sit enim aliquam auctor lobortis
                        ultrices ac tellus nulla. Blandit ipsum in vulputate malesuada
                        lectus urna.
                    </p>

                    {/* Sub Heading */}
                    <h4
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontSize: "24px",
                            color: "#2A2A2A",
                            marginTop: "40px",
                            marginBottom: "16px",
                        }}
                    >
                        Convallis ipsum dolor vulputate sed semper id facilisis.
                    </h4>

                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#4B5563",
                        }}
                    >
                        Sed feugiat congue fusce adipiscing magna nunc odio arcu. Aliquam eu malesuada volutpat eu facilisis gravida. Velit volutpat urna cras malesuada ultricies tempus imperdiet nisl. Orci scelerisque vel euismod nunc est aliquet. Amet proin mauris parturient felis sit montes et blandit. Euismod tristique tempor risus ipsum purus ipsum. Diam eget volutpat urna egestas tristique purus interdum turpis. Morbi neque urna lorem nunc quisque nullam tortor.
                    </p>
                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#4B5563",
                        }}
                    >
                        Senectus vel velit augue adipiscing neque et etiam id leo. Et turpis ac felis vitae. Proin vel sit massa lacus maecenas lacus pharetra integer pretium. Velit neque elementum tellus consequat id proin enim. Tellus nibh egestas neque in faucibus. Urna amet arcu sollicitudin tellus aliquam imperdiet pulvinar maecenas. Nam auctor ut eu sed non. Sit lacus mi volutpat felis non dignissim posuere. Nisl lacinia fermentum enim volutpat eu viverra. Ut urna elementum gravida aliquam. Quis blandit arcu fusce scelerisque ullamcorper amet. In amet varius aliquam convallis vestibulum dictum.
                    </p>
                </div>

            </div>
        </section>
    );
}