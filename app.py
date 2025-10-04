import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np
import joblib  # Import joblib to load the trained AI model

# Load the trained model once when the app starts
model = joblib.load("model.pkl")  # Make sure 'model.pkl' is your saved AI model file

st.set_page_config(page_title="Exoplanet Explorer", layout="wide")

# Sidebar navigation
st.sidebar.title("🚀 Exoplanet Explorer")
page = st.sidebar.radio(
    "Navigate", 
    ["Dashboard", "Light-Curve Viewer", "Prediction", "Batch Processing", "Admin"]
)

# ---- DASHBOARD ----
if page == "Dashboard":
    st.title("🌌 Dashboard")
    st.write("Select mission and explore dataset summary.")
    
    mission = st.selectbox("Choose Mission/Dataset", ["Kepler", "K2", "TESS", "Exoplanet DB"])
    
    # Mock stats
    stats = {
        "Total Stars Observed": 150000,
        "Confirmed Exoplanets": 2800,
        "Candidates": 1200,
        "False Positives": 340,
    }
    
    cols = st.columns(len(stats))
    for i, (k, v) in enumerate(stats.items()):
        cols[i].metric(label=k, value=v)

# ---- LIGHT CURVE VIEWER ----
elif page == "Light-Curve Viewer":
    st.title("🔭 Light-Curve Viewer")
    st.write("Upload light curve data to visualize raw/detrended curves and transit fits.")
    
    uploaded_file = st.file_uploader("Upload Light Curve CSV", type="csv")
    
    if uploaded_file:
        df = pd.read_csv(uploaded_file)
        # Expecting columns: time, flux, flux_detrended, model_fit
        
        fig = px.line(df, x="time", y="flux", title="Raw Light Curve")
        st.plotly_chart(fig, use_container_width=True)
        
        if "flux_detrended" in df.columns:
            fig2 = px.line(df, x="time", y="flux_detrended", title="Detrended Light Curve")
            st.plotly_chart(fig2, use_container_width=True)
        
        if "model_fit" in df.columns:
            fig3 = px.line(df, x="time", y="model_fit", title="Model Transit Fit")  # Fixed y argument here
            st.plotly_chart(fig3, use_container_width=True)

# ---- PREDICTION ----
elif page == "Prediction":
    st.title("🤖 Exoplanet Prediction")
    st.write("Enter parameters to classify a candidate.")
    
    with st.form("prediction_form"):
        orbital_period = st.number_input("Orbital Period (days)", value=10.0)
        radius = st.number_input("Planet Radius (Earth radii)", value=1.0)
        duration = st.number_input("Transit Duration (hours)", value=5.0)
        depth = st.number_input("Transit Depth (ppm)", value=200.0)
        
        submitted = st.form_submit_button("Predict")
    
    if submitted:
        # Prepare features in the order expected by your model
        input_features = [orbital_period, radius, duration, depth]
        
        # Use the loaded model to predict
        prediction_label = model.predict([input_features])[0]
        prediction_prob = model.predict_proba([input_features]).max()
        
        st.success(f"Prediction: {prediction_label} (Confidence: {prediction_prob:.2f})")
        
        st.subheader("SHAP Explanation (Feature Contributions)")
        st.info("Here would be the SHAP summary plot.")
        # shap_summary_plot(model, input_features)

# ---- BATCH PROCESSING ----
elif page == "Batch Processing":
    st.title("📂 Batch Processing")
    st.write("Upload a CSV of candidates for bulk prediction.")
    
    batch_file = st.file_uploader("Upload CSV", type="csv")
    
    if batch_file:
        batch_df = pd.read_csv(batch_file)
        st.write("Preview of uploaded data:", batch_df.head())
        
        # Placeholder bulk prediction - here you can replace with your actual model batch predict method
        # Assuming your batch_df has columns matching model's expected features
        features = batch_df[['orbital_period', 'radius', 'duration', 'depth']] if all(col in batch_df.columns for col in ['orbital_period', 'radius', 'duration', 'depth']) else batch_df
        
        try:
            batch_preds = model.predict(features)
        except Exception as e:
            st.error(f"Error during batch prediction: {e}")
            # Fall back to random placeholders
            batch_preds = np.random.choice(
                ["Confirmed", "Candidate", "False Positive"], size=len(batch_df)
            )
        
        batch_df["Prediction"] = batch_preds
        
        st.download_button(
            "Download Results CSV",
            batch_df.to_csv(index=False).encode("utf-8"),
            "predictions.csv",
            "text/csv"
        )
        
        st.write("Results with predictions:", batch_df)

# ---- ADMIN ----
elif page == "Admin":
    st.title("⚙️ Admin Panel")
    st.write("Manage retraining and user-contributed labels (optional).")
    
    new_labels = st.file_uploader("Upload labeled dataset for retraining", type="csv")
    if new_labels:
        st.success("Dataset uploaded. Retraining queue updated (mock).")
