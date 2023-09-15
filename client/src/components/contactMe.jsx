import React from "react";

export function ContactMe(params) {
    return (
        <>
            <div className="my-5 row">
                <h3 >Contact Me</h3>
                <div class="card text-start mt-4">
                    <div class="card-body">
                        <span class="form-label p-2">Title</span>
                        <div class="input-group m-2">
                            <input class="form-control" rows="5" placeholder="" aria-label="Message"></input>
                        </div>
                        <span class="form-label p-2 mt-3">Contact email</span>
                        <div class="input-group m-2">
                            <input class="form-control" rows="5" placeholder="your-email@org.com" aria-label="Message"></input>
                        </div>
                        <span class="form-label p-2">Message</span>
                        <div class="input-group m-2">
                            <textarea class="form-control" rows="5" placeholder="" aria-label="Message"></textarea>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end me-2">
                <       a href="#" class="btn btn-secondary mb-4">Send Message</a>
                    </div>
                </div>
            </div>
        </>
    );
}